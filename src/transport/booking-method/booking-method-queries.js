const BookingMethod = require('./booking-method-model')

exports.findAll = async () => {
    try {
        return await BookingMethod.find()
    }catch(error){
        console.log(error)
        throw "[BOOKING-METHOD]-Query: Cannot find all booking Method !"
    }
}
exports.findOne = async () => {

}
exports.findById = async (id) => {
    try {
        return await BookingMethod.findById(id)
    }catch(error){
        console.log(error)
        throw "[BOOKING-METHOD]-Query: Cannot find by id booking Method !"
    }
}
exports.findByName = async (name) => {

}
exports.create = async (bookingMethod) => {
    try {
        const bookingMethodFromServer = new BookingMethod(bookingMethod)
        return await bookingMethodFromServer.save()
    }catch(error){
        console.log(error)
        throw "[BOOKING-METHOD]-Query: Cannot Create booking Method !"
    }
}
exports.update = async (bookingMethod) => {

}
exports.delete = async (bookingMethod) => {
    
}
