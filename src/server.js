const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// mongoose
const {mongoose} = require('mongoose');
// extension
const {decode2String} = require('./Utils/log/logger-logo'); 
const {logger} = require('./Utils/log/logger'); 
const {config} = require('./config')
// routes
const userRoutes  = require('./user/user-routes')
const addressRoutes = require('./address/address-routes')

mongoose.connect(config.database.name)
.then(() => {
    logger.info(`MongoDB connected`);
})
.catch((err) => {
    logger.error('MongoDB connection error:   ', err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/user',userRoutes())
app.use('/api/v1/address',addressRoutes())

app.listen(process.env.PORT, async () => {
    logger.info(`\n ${await decode2String()}`);
    logger.info(`Server is running on port ${process.env.PORT}`) 
});


