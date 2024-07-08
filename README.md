## About
    Vexere 

### Installation

```
git clone -b beetlejuice https://github.com/VanTuDev/vexere.git
```
```
npm init --y
```	
```
npm install --save
```

### My Favourite API Test  : YAAK      

>[Install UI test by click here ](https://yaak.app/download).

### Usage :trollface:
```    
    npm run express
```   
### Note :eyes:
This project dont have .env file, plz create follow these step:
1. Create .env file follow this structure :
    ```
        -src
        |--- config.js
        |--- server.js
        |--- .env 
    ```
2. Set up file .env: 
    ```
        // This data is a sample. U need to replace a value is your config .
        PORT= "3000"
        MONGODB = "mongodb://localhost:27017/vexere"
        MYSQL_URL = ""
        DRIVER = "c:/"
        JWT_SECRET=0BB791B0AD60DE88B3BEBAC1E0FDD8815AC70904751B1BB3A20FADAE35E024B6
        JWT_REFRESH=a1271215bf516bb2d14c 
        JWT_EXPIRES_IN=2y
        JWT_REFRESH_EXPIRES_IN=3y
        GMAIL_USERNAME=haylamditmemay1996@gmail.com
        GMAIL_PASSWORD=bwwr jrwg znwc ahiz
    ```
3. Change Path in config.js file:
    ```
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
            EMAIL:{
                username:process.env.GMAIL_USERNAME,
                password:process.env.GMAIL_PASSWORD
            }
        }
        module.exports = { config };
   ```
 **End of Document ! I hope something gud happened while u were reading this :) !**
    