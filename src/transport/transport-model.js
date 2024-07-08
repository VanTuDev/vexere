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
    brandId:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'Brand'
    },
    transportTypeId:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'TransportType'
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
