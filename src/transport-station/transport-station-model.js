const mongoose = require('mongoose');

const transportStationSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },  
    name: {
        type: String,
        required: false
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    addressDetail: {
        type: String
    },
    email: {
        type: String,
        unique: false,
        required: true
    },
    telephone: {
        type: String,
        unique: false,
        required: true
    },
    images:[{
        type: mongoose.Schema.Types.ObjectId,
        require: false
    }],
    status:{
        type: String, 
        enum: ['pass','not-pass','in-process','start'],
        default: 'start'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date
    },
    deleteAt: {
        type: Date
    }
});

const TransportStation = mongoose.model('TransportStation', transportStationSchema);
module.exports = TransportStation;
