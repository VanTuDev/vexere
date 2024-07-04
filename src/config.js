require('dotenv').config({ path: './src/.env'})

const config = {
    port: process.env.PORT,
    database: {
        name:   process.env.MONGODB,
        username:   '',
        password:   ''
    },
    storage:{
        driver:process.env.DRIVER
    },
    gmail: {
        username: process.env.MAIL_USERNAME
    }
}

module.exports = { config };