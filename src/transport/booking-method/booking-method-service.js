const BookingMethod = require('./booking-method-queries');

exports.create = async (method) => {
    try {
        return await BookingMethod.create(method);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot create booking method!";
    }
}

exports.createMany = async (methods) => {
    try {
        return await BookingMethod.createMany(methods);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot create many booking methods!";
    }
}

exports.findById = async (id) => {
    try {
        return await BookingMethod.findById(id);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot find booking method by ID!";
    }
}

exports.findAll = async () => {
    try {
        return await BookingMethod.findAll();
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot find all booking methods!";
    }
}

exports.findOne = async (query) => {
    try {
        return await BookingMethod.findOne(query);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot find one booking method!";
    }
}

exports.findByName = async (name) => {
    try {
        return await BookingMethod.findByName(name);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot find booking method by name!";
    }
}

exports.update = async (id, method) => {
    try {
        return await BookingMethod.update(id, method);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot update booking method!";
    }
}

exports.updateMany = async (filter, update) => {
    try {
        return await BookingMethod.updateMany(filter, update);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot update many booking methods!";
    }
}

exports.delete = async (id) => {
    try {
        return await BookingMethod.delete(id);
    } catch (error) {
        console.log(error);
        throw "[BOOKING METHOD]-Service: Cannot delete booking method!";
    }
}
