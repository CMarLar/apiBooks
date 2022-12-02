const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos
// const {Student} = require("../classes/studentClass")//ESTO NO ES NECESARIO 


//GET -> recoge alumno por id o todos los alumnos
function getStudents(request,response){//devuelve array de profesionales
    let sql;//cambia respuesta a sql
    if(request.query.id == null) {//petición que se recibe del cliente, tiene un objeto llamado query, con una propiedad llamada id, que hace referencia a lo que se mete por la barra de navegación
        sql = "SELECT * FROM codenotch2.students";
    }
    else{
        sql = "SELECT * FROM codenotch2.students WHERE studentID =" + request.query.id
    }
        
        //AHORA VIENE LA PARTE DIFERENTE, la de trabajar con bases de datos.
    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else{response.send(result)}
    })
}

//POST -> añade alumnos a la base de datos (base de datos en sql es un array)
function postStudents(request,response){
    console.log(request.body);
    let sql = "INSERT INTO students (first_name,last_name,date,group_id) " +
                "VALUES ('"+request.body.first_name+"', '"+
                            request.body.last_name+ "', '"+
                            request.body.date+ "', '"+
                            request.body.group_id+ "')";
    console.log(sql);

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}//si hay error, imprímelo
        else//de lo contrario
        {
            console.log(result);//imprime el resultado

            if(result)//resultID hace referencia a un objeto de POST. Aquí dice Si hay ID, manda la respuesta?
            response.send(result);
            // {response.send(String(result.insertId))}
            else{response.send("-1")}
        }
    })
}


//PUT -> Modifica estudiante a partir de ID.
function putStudents(request, response){
    console.log(request.body);
    //Parámetros de las sentencias preparadas:
    let params = [request.body.first_name, request.body.last_name, request.body.date,request.body.group_id,request.body.studentID]

    //COALESCE: palabra reservada de sql que indica que si no se indica un parámetro nuevo en SET, deje el que estaba antes.
    let sql = "UPDATE codenotch2.students SET first_name = COALESCE(?, first_name) , " + 
                "last_name = COALESCE(?, last_name) , " + 
                "date = COALESCE(?, date) , " + 
                "group_id = COALESCE(?, group_id)  WHERE studentID = ?";
    console.log(sql); 
    connection.query(sql, params,(err, result)=> 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


//DELETE -> Borra estudiante a partir de ID.
function deleteStudents(request,response)
{
    console.log(request.body);//
    let sql = "DELETE FROM codenotch2.students WHERE studentID = '" + request.body.id + "'";
    console.log(sql); 
    connection.query(sql, (err, result) =>
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}







// {
//     let id = req.query.id;
//     let respuesta;

//     proArray.splice(id,1);

//     respuesta = {error: false, codigo: 200,mensaje: "Estudiante eliminado", resultado: proArray}
//     res.send(respuesta);
// }



module.exports = {getStudents,postStudents,putStudents,deleteStudents}