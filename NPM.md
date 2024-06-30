## Cài đặt express
    npm install express --save
## Cài đặt mongodb
    npm install mongodb --save
    Thư viện 
    npm install mongoose --save
## Một số extension sử dụng trong dự án : 
    1. Hot Reload :
    npm install --save-dev nodemon
    - nodemon 
    2. Validation Request Structure:
    npm install joi --save
    Joi
    3. Hide key :
    npm i dotenv --save
    DotEnv
    4. Logger 
    npm install pino-http --save

    General NPM install in one line : 
    npm install express mongodb mongoose joi dotenv pino-http && npm install nodemon --save-dev

## Folder Structure use Monolith or modules representing a part of the domain.
── src
|   ├── user
|   |   ├── user-handlers.js 		//  Transport HTTP  aka controller
|   |   ├── user-service.js 		//  Bussiness Logic  aka userService.js
|   |   ├── user-queries.js			//  Fetching Data from DB userRepository.js
|   |   ├── user-handlers.test.js 	//  Write a test case 
|   |   ├── index.js 				//  Sevelral Import


## Enforce consistency
// 1. Use all caps for constants
const CACHE_CONTROL_HEADER = 'public, max-age=300'

// 2. Use camel case for functions and variables
const createUserHandler = (req, res) => {}

// 3. Use pascal case for classes and models
class AppError extends Error {}

// 4. use kebab case for files and folders -> user-handler.js




Tải và config 
    config gitInoge x
    config database

User 
    username
    password
    telephone
    email
    address
        -   provide
        -   district
        -   ward
        address-detail
    token
        access-token
        refresh-token
    role
        admin
            -   employee
            -  
        user

Transport 


    Xe 
    
    Line Time 
        Hiện ra map 
           1. Chọn điểm đi 
                Chọn điểm đón 
                Chọn thời gian đón
           2. Chọn điểm trả 
                Chọn điểm Trả 
                Chọn thời gian trả
    

Phân chia task 
    User 
        sign-in
            (Lưu phiên trên browser, xoá phiên nếu đóng tab)
        sign-up 
            (Tồn tại không cho tạo)
        Use third-party
            google
            github
            zalo
    Transport-Station    
        Transport
            Brand
    Order
        Payment

task nào nên ưu tiên 

















----------------------


const mongoose = require('mongoose');
const fs = require('fs');
const Province = require('./address/vietname-db.js/province-model'); // Adjust paths as needed
const District = require('./address/vietname-db.js/district-model');
const Ward = require('./address/vietname-db.js/ward-model');

// Load data from JSON file
const dataFilePath = './src/mongo_data_vn_unit.json'; // Điều chỉnh đường dẫn đến file JSON của bạn
const rawData = fs.readFileSync(dataFilePath);
const data = JSON.parse(rawData);

// Kiểm tra xem data có phải là một mảng các đối tượng Province hay không
if (!Array.isArray(data)) {
    console.error('Invalid data format: data is not an array.');
    process.exit(1); // Thoát với mã lỗi 1 nếu có lỗi định dạng
}

// Tiếp tục xử lý và lưu dữ liệu vào MongoDB
mongoose.connect('mongodb://localhost:27017/vexere', {
}).then(() => {
    console.log('Connected to MongoDB');

    // Xử lý và lưu dữ liệu vào MongoDB
    processData(data).then(() => {
        console.log('Data import completed.');
        mongoose.disconnect(); // Ngắt kết nối sau khi nhập khẩu
    }).catch((err) => {
        console.error('Error importing data:', err);
        mongoose.disconnect();
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Hàm xử lý và lưu dữ liệu vào MongoDB
async function processData(data) {
    try {
        // Xử lý các tỉnh
        for (let provinceData of data) {
            let province = await Province.create({
                Type: provinceData.Type,
                Code: provinceData.Code,
                Name: provinceData.Name,
                NameEn: provinceData.NameEn,
                FullName: provinceData.FullName,
                FullNameEn: provinceData.FullNameEn,
                CodeName: provinceData.CodeName,
                AdministrativeUnitId: provinceData.AdministrativeUnitId,
                AdministrativeRegionId: provinceData.AdministrativeRegionId
            });
            console.log(`Created province: ${province.Name}`);
            for (let districtData of provinceData.District) {
                districtData.ProvinceCode = province.Code; // Thêm mã tỉnh vào quận/huyện
                let district = await District.create({
                    Type: districtData.Type,
                    Code: districtData.Code,
                    Name: districtData.Name,
                    NameEn: districtData.NameEn,
                    FullName: districtData.FullName,
                    FullNameEn: districtData.FullNameEn,
                    CodeName: districtData.CodeName,
                    ProvinceCode: districtData.ProvinceCode,
                    AdministrativeUnitId: districtData.AdministrativeUnitId
                });
                console.log(`Created district: ${district.Name} (${district.ProvinceCode})`);

                for (let wardData of districtData.Ward) {
                    wardData.DistrictCode = district.Code; // Thêm mã quận/huyện vào phường/xã
                    let ward = await Ward.create({
                        Type: wardData.Type,
                        Code: wardData.Code,
                        Name: wardData.Name,
                        NameEn: wardData.NameEn,
                        FullName: wardData.FullName,
                        FullNameEn: wardData.FullNameEn,
                        CodeName: wardData.CodeName,
                        DistrictCode: wardData.DistrictCode,
                        AdministrativeUnitId: wardData.AdministrativeUnitId
                    });
                    console.log(`Created ward: ${ward.Name} (${ward.DistrictCode})`);
                }
            }
        }
    } catch (err) {
        throw err;
    }
}