const express = require('express');
const handler = require('./transport-handler');

const { upload, 
        injectSVG,  
        } = require('../image/utils/image-upload'); 
const auth = require('../user/middleware/user-auth')
const router = express.Router();

module.exports = () => {
        router
        .get('/', handler.findAll) 
        .post('/createTransport', 
                upload.array('images', 20), 
                injectSVG,
                handler.createTransport) 
        return router;
};