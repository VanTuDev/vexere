const licenseQuery= require('./license-queries')
const licenseService= require('./license-service')

exports.getAll = async (req, res, next) => {
    try {
        const licenses = await licenseQuery.getByOne();
        return res.status(200).json({
            licenses
        })
    } catch(error){
        console.log(error)
    }
}

exports.init = async (req, res, next) => {
    try {
        let licenses_data = [
            {
                name: "Giấy phép chứng nhận phòng cháy chữa cháy",
                purpose: "1",
            },
            {
                name: "Giấy phép vận tải bằng ô tô",
                purpose: "2",
            },
            {
                name: "Giấy phép lữ hành quốc tế",
                purpose: "3",
            },
            {
                name: "Giấy phép kinh doanh",
                purpose: "4",
            }
        ];
        const licenses = await licenseService.init(licenses_data);
        return res.status(200).json({
            licenses: licenses
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            error
        })
    }
}