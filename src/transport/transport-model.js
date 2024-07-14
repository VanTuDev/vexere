const { number } = require('joi');
const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    images:[{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Image'
    }],
    seats:{
        type: Number,
        require: false,
    },
    transportStationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transport-Station'
    },
    brandId:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Brand',
        defaut: new mongoose.Types.ObjectId('569ed8269353e9f4c51617aa')
    },
    transportTypeId:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'TransportType',
        defaut: new mongoose.Types.ObjectId('569ed8269353e9f4c51617aa')
    },
    status:{
        type: String, 
        enum: ['Chưa được thông qua','Được thông qua'],
        default: 'Chưa được thông qua'
    },
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

const Transport = mongoose.model('Transport', transportSchema);
module.exports = Transport;
