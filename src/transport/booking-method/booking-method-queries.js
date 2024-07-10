const BookingMethod = require('./booking-method-model');

exports.findAll = async () => {
    try {
        return await BookingMethod.find();
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot find all booking methods!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot find all booking methods!");
    }
}

exports.findOne = async (query) => {
    try {
        return await BookingMethod.findOne(query);
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot find one booking method!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot find one booking method!");
    }
}

exports.findById = async (id) => {
    try {
        return await BookingMethod.findById(id);
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot find booking method by ID!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot find booking method by ID!");
    }
}

exports.findByName = async (name) => {
    try {
        return await BookingMethod.findOne({ method: name });
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot find booking method by name!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot find booking method by name!");
    }
}

exports.create = async (bookingMethod) => {
    try {
        const bookingMethodFromServer = new BookingMethod(bookingMethod);
        return await bookingMethodFromServer.save();
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot create booking method!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot create booking method!");
    }
}

exports.createMany = async (bookingMethods) => {
    try {
        return await BookingMethod.insertMany(bookingMethods);
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot create many booking methods!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot create many booking methods!");
    }
}

exports.update = async (id, bookingMethod) => {
    try {
        return await BookingMethod.findByIdAndUpdate(id, bookingMethod, { new: true });
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot update booking method!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot update booking method!");
    }
}

exports.updateMany = async (filter, update) => {
    try {
        return await BookingMethod.updateMany(filter, update);
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot update many booking methods!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot update many booking methods!");
    }
}

exports.delete = async (id) => {
    try {
        return await BookingMethod.findByIdAndDelete(id);
    } catch (error) {
        console.error("[BOOKING-METHOD]-Query: Cannot delete booking method!", error);
        throw new Error("[BOOKING-METHOD]-Query: Cannot delete booking method!");
    }
}
