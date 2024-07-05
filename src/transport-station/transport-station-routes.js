const express = require('express');
const handler = require('./transport-station-handler');

const { upload, 
        injectSVG,  
        } = require('../image/utils/image-upload'); 
const router = express.Router();

module.exports = () => {
    router
    .post('/register',handler.registerTransportStation)
    .get('/confirmInformation/:transportStationId',handler.processConfirm)
    .post('/allDone/:transportStationId',upload.array('images', 4),injectSVG,handler.finshedProcessRegister)
    return router;
};