const Route   = require('./route-model')
const Location  = require('../routes/Location/location-model'); 
const mongoose = require('mongoose');

exports.createRoute = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
        const {
            transportId,
            departureLocation,
            destination,
            departureDate,
            returnDate,
            locationIds
        } = req.body;

        const route = new Route({
            transportId,
            departureLocation,
            destination,
            departureDate,
            returnDate,
            locations: locationIds
        });

        const routeSaved = await route.save({ session });
        
        // Cập nhật các location với routeId mới
        await Location.updateMany(
            { _id: { $in: locationIds } },
            { $set: { routeId: routeSaved._id } },
            { session }
        );

        await session.commitTransaction();
        session.endSession();

        return res.status(201).json({
            success: true,
            message: 'Route and locations updated successfully!',
            route: routeSaved
        });
    } catch (error) {
        // Hủy transaction, xóa các location đã tạo nếu không thể tạo route
        await session.abortTransaction();
        
        if (locationIds && locationIds.length > 0) {
            await Location.deleteMany({
                _id: { $in: locationIds }
            });
        }

        session.endSession();
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Failed to create Route, all associated locations have been deleted',
            error: error.message
        });
    }
};


exports.getAll = async (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            Routes: await RouteQuery.findAll() 
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


