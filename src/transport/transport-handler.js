const transportService = require('./transport-service')

exports.createTransport= async (req, res, next) => {
    const {name, seats} = req.body
    try {
        
    }catch(error){
        console.log(error)
    }
}

exports.findAll= async (req, res, next) => {
    try {
        return transportQuery.findAll()
    }catch(error){
        console.log(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
    }catch(error){
        console.log(error)
    }
}