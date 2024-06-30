require('dotenv').config({ path: './src/private-key.env'})

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
}

module.exports = { config };