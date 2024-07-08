const transportQuery= require('./transport-queries')
const imageService = require('../image/image-service')
exports.createTransport= async (name,images,seats,transportTypeId,brandId) => {
    try {

        let imageFromServer = imageService.createImages(images)
        let transport = {
            name: name,
            images: [imageFromServer._id],
            seats: seats,
            // transportTypeId: "",
            // brandId: ""
        }
        return await transportQuery.create(transport)
    }catch(error){
        console.log(error)
    }
}


exports.findAll= async () => {
    try {
        return await transportQuery.findAll()
    }catch(error){
        console.log(error)
    }
}

exports.findById = async (id) => {
    try {
        return await transportQuery.findById(id)
    }catch(error){
        console.log(error)
    }
}