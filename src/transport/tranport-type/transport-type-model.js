const mongoose = require('mongoose');

const transportTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: false,
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

const TransportType = mongoose.model('TransportType', transportTypeSchema);
module.exports = TransportType;
