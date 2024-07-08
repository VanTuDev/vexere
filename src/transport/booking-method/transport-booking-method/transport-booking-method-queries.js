const TransportBookingMethod = require('./tranport-booking-method-model')

exports.findAll = async () => {
    try {
        return await TransportBookingMethod.find()
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Query: Cannot find all transport booking method !"
    }
}
exports.findOne = async (Brand) => {
    try {

    }catch(error){

    }
}
exports.findById = async (id) => {
    try {
        return await TransportBookingMethod.findById(id)
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Query: Cannot find by id transport booking method !"

    }
}
exports.findByName = async (name) => {
    try {

    }catch(error){

    }
}
exports.create = async (transportBookingMethod) => {
    try {
        const transportBookingMethod = new TransportBookingMethod(transportBookingMethod)
        return await transportBookingMethod.save()
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Query: Cannot create transport booking method !"
    }
}
exports.update = async (Brand) => {
    try {

    }catch(error){

    }
}
exports.delete = async (Brand) => {
    try {

    }catch(error){

    }
}
