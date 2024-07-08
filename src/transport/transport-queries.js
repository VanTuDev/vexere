const Transport = require('./transport-model')

exports.findAll = async () => {
    try {
        return await Transport.find()
    }catch(error){
        console.log(error)
    }
}
exports.findOne = async (Transport) => {
    try {
        return await Transport
                    .findOne({})
                    
    }catch(error){
        console.log(error)
    }
}
exports.findById = async (id) => {
    try {
        return await Transport
                    .findById({_id: id})
                    
    }catch(error){
        console.log(error)
    }
}
exports.findByName = async (name) => {

}
exports.create = async (transportFromService) => {
    try {
        return await Transport
                    .save(transportFromService)
                    
    }catch(error){
        console.log(error)
    }
}

exports.update = async (Brand) => {

}

exports.delete = async (Brand) => {
    
}
