const TransportBookingMethodService = require('./transport-booking-method-queries')

exports.create = async (method) => {
    try {
        return await TransportBookingMethodService.create(method)
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Service: Cannot Create transport booking method !"
    }
}

exports.findById = async (id) => {
    try {
        return await TransportBookingMethodService.findById(id)
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Service: Cannot find by id transport booking method !"
    }
}

exports.findByAll= async () => {
    try {
        return await TransportBookingMethodService.findAll()
    }catch(error){
        console.log(error)
        throw "[TRANSPORT-BOOKING-METHOD]-Service: Cannot find all transport booking method !"
    }
}