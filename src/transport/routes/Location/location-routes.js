const express = require('express');
const handler = require('./location-handler');
const router = express.Router();

module.exports = () => {
        router
        .get('/', 
                handler.getAll)  
        .post('/', 
        handler.createLocation)        
        return router;
};

