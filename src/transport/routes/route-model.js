const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    transportId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        unique: false,
        ref: 'Transport'
    },
    departureLocation:{ // Current Place
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Province'
    },
    destination:{ // Place to go
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Province'
    },
    departureDate:{ // Time for the trip start
        type: Date,
        require: true,
    },
    returnDate:{ // Time for the car return back
        type: Date,
        require: true,
    },
    locations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    deletedAt: {
        type: Date
    }
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
