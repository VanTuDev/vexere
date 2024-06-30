const express = require('express');
const handler = require('./user-handlers');
const router = express.Router();

module.exports = () => {
    router
    .get('/', handler.getAllUser) 
    .get('/:userId', handler.getById) 
    .post('/signin', handler.signin)
    .post('/signup', handler.signup)
    .post('/refresh', handler.refresh)
    return router;
};


