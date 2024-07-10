const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connectDB } = require('./db');
const { decode2String } = require('./Utils/log/logger-logo');
const { logger } = require('./Utils/log/logger');
const { config } = require('./config');
const userRoutes = require('./user/user-routes');
const addressRoutes = require('./address/address-routes');
const transportStationRoutes = require('./transport-station/transport-station-routes');
const licenseRoutes = require('./transport-station/license/license-routes');
const imageMiddleware = require('./image/middleware/image-middleware');
const bookingMethod = require('./transport/booking-method/booking-method-routes');

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/images/:imagePath(*)', imageMiddleware.modifyImage);
// app.use(express.static('C:\\images\\(*)'));
app.use('/api/v1/user', userRoutes());
app.use('/api/v1/address', addressRoutes());
app.use('/api/v1/transport-station', transportStationRoutes());
app.use('/api/v1/license', licenseRoutes());
app.use('/api/v1/booking-method', bookingMethod());

app.listen(process.env.PORT, async () => {
    logger.info(`\n ${await decode2String()}`);
    logger.info(`Server is running on port ${process.env.PORT}`);
});
