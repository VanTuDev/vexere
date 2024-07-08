const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: new mongoose.Types.ObjectId('569ed8269353e9f4c51617aa')
    },  
    name: {
        type: String,
        required: false
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

const Transport = mongoose.model('Transport', transportSchema);
module.exports = Transport;
