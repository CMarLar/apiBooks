const mysql = require("mysql2");//IMPORTANCIÓN MYSQL2
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MarinaCarlos1986Codenotch",
        database: "appbooks",
    }
);
connection.connect((error) => {
    if (error){console.log(error);}
    else{console.log("Database listening...");}
});

module.exports = connection;