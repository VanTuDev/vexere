const BookingMethodService = require('./booking-method-service');

// Tạo một booking method mới
exports.createBookingMethod = async (req, res, next) => {
    try {
        const bookingMethods = [
            { method: 'Gọi để xác nhận' },
            { method: 'Không hỗ trợ chọn trước ghế' },
            { method: 'Hỗ trợ chọn trước ghế' }
        ];
        const createBookingMethod = await Promise.all(bookingMethods.map(async (bookingMethods) => {
            return await BookingMethodService.create(bookingMethods);
        }))
        res.status(201).json({
            success: true,
            bookingMethods: createBookingMethod,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}

// Tạo nhiều booking methods
exports.createMany = async (req, res) => {
    try {
        const methods = req.body;
        const newMethods = await BookingMethodService.createMany(methods);
        res.status(201).json(newMethods);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Lấy tất cả các booking methods
exports.findAll = async (req, res) => {
    try {
        const methods = await BookingMethodService.findAll();
        res.status(200).json(methods);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Lấy một booking method theo ID
exports.findById = async (req, res) => {
    try {
        const id = req.params.id;
        const method = await BookingMethodService.findById(id);
        if (method) {
            res.status(200).json(method);
        } else {
            res.status(404).json({ message: 'Ghế không tìm thấy' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Lấy một booking method theo tên
exports.findByName = async (req, res) => {
    try {
        const name = req.params.name;
        const method = await BookingMethodService.findByName(name);
        if (method) {
            res.status(200).json(method);
        } else {
            res.status(404).json({ message: 'Ghế không tìm thấy' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Cập nhật một booking method theo ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const method = req.body;
        const updatedMethod = await BookingMethodService.update(id, method);
        if (updatedMethod) {
            res.status(200).json(updatedMethod);
        } else {
            res.status(404).json({ message: 'Ghế không tìm thấy' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Cập nhật nhiều booking methods
exports.updateMany = async (req, res) => {
    try {
        const { filter, update } = req.body;
        const result = await BookingMethodService.updateMany(filter, update);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Xóa một booking method theo ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedMethod = await BookingMethodService.delete(id);
        if (deletedMethod) {
            res.status(200).json({ message: 'Booking method deleted' });
        } else {
            res.status(404).json({ message: 'Booking method not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
