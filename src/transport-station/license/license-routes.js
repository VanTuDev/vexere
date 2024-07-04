const express = require('express');
const handler = require('./license-handler');
const router = express.Router();

module.exports = () => {
    router
    .get('/init', handler.init) 
    return router;
};