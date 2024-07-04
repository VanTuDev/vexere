const imageQuery = require('./image-queries')

exports.createImage = async (filename, path) => {
    try {
        const image = {
                filename: filename,
                path: path
        }
        return await imageQuery.createImage(image)
    }catch(error){
        console.error(error)
        throw "Service: Cannot create Image"
    }
}

exports.createImages = async (images) => {
    try {
        const createImagesPromises = images.map(async (image) => {
            const image123 = {
                filename: image.filename,
                path: image.path
            };
            return await imageQuery.createImage(image123);
        })
        const createdImages = await Promise.all(createImagesPromises)
        return createdImages
    }catch(error){
        console.error(error)
        throw "Service: Cannot create Images"
    }
}

exports.getAll = async () => {
    try {    
        const images = await imageQuery.getAll(image)
        return images
    }catch(error){
        console.error(error)
        throw "Service: Cannot getAll Image"
    }
}   

exports.getById = async (id) => {
    try {
        const image = await imageQuery.getById(id);
        return image
    }catch(error){
        console.error(error)
        throw "Service: Cannot getById Image"
    }
}