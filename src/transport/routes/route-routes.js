const express = require('express');
const handler = require('./route-handler');
const router = express.Router();

module.exports = () => {
        router
        .post('/createRoutes', 
                handler.createRoute)  
        .get('/', 
                handler.getAll)         
        return router;
};