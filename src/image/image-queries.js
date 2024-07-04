const Image = require('./image-model')


exports.createImage = async (image) => {
    try {
        const imageSaved = new Image(image);
        return await imageSaved.save();
    }catch(error){
        console.error(error)
        throw "Query: Cannot create Image"
    }
}

exports.getAll = async () => {
    try {
        return await Image.find()
    }catch(error){
        console.error(error)
        throw "Query: Cannot get Image by Id"
    }
}

exports.getById = async (id) => {
    try {
        const imageId = id;
        return await Image.findById({_id: id})
    }catch(error){
        console.error(error)
        throw "Query: Cannot get Image by Id"
    }
}