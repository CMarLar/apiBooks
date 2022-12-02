function errorHandling (err,req,res,next)
{
    res.status(500).json({mensage: err.message})
}

module.exports = errorHandling;