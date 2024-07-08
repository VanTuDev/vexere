const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    status:{
        type: String,
        required: false
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

const Transport = mongoose.model('Brand', brandSchema);
module.exports = Transport;
