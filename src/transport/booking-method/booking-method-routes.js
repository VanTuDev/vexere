const express = require('express');
const handler = require('./booking-method-handler');

const router = express.Router();

module.exports = () => {
    router
        .post('/init', handler.createBookingMethod) // Tạo một booking method mới
        .post('/init-many', handler.createMany) // Tạo nhiều booking methods
        .get('/', handler.findAll) // Lấy tất cả các booking methods
        .get('/:id', handler.findById) // Lấy một booking method theo ID
        .get('/name/:name', handler.findByName) // Lấy một booking method theo tên
        .put('/update/:id', handler.update) // Cập nhật một booking method theo ID
        .put('/update-many', handler.updateMany) // Cập nhật nhiều booking methods
        .delete('/delete/:id', handler.delete) // Xóa một booking method theo ID
    return router;
};
