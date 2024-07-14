const bookingMethodService = require('./booking-method-service')

exports.createBookingMethod = async (req, res, next) => {
    try {
        const bookingMethods = [
            { method: 'Gọi để xác nhận' },
            { method: 'Không hỗ trợ chọn trước ghế' },
            { method: 'Hỗ trợ chọn trước ghế' },
        ];

        const createdBookingMethods = await Promise.all(bookingMethods.map(async (bookingMethods) => {
            return await bookingMethodService.create(bookingMethods);
        }));

        res.status(201).json({
            success: true,
            BookingMethods: createdBookingMethods
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};