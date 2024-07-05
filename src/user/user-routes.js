const express = require('express');
const handler = require('./user-handlers');
const router = express.Router();
const { authentication, authorize } = require('./middleware/user-auth');

require('dotenv').config();



module.exports = () => {
    router
    .get('/',authentication,authorize(['admin']), handler.getAllUser) // admin
    .get('/:userId',authentication, authorize(['admin']),handler.getById) // admin
    .post('/signin', handler.signin)
    .post('/signup', handler.signup)
    .post('/refresh', handler.refresh)
    return router;
};


