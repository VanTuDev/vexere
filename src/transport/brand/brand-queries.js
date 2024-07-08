const Brand = require('./brand-model')

exports.findAll = async () => {
    try {
        return await Brand.find()
    }catch(error){
        console.log(error)
    }
}
exports.findOne = (Brand) => {

}
exports.findById = async (id) => {
    try {
        return await Brand.findById(id)
    }catch(error){
        console.log(error)
    }
}
exports.findByName = (name) => {

}
exports.create = async (brand) => {
    try {
        const brandServer = new Brand(brand)
        return await brandServer.save()
    }catch(error){
        console.log(error)
    }
}
exports.update = (Brand) => {

}
exports.delete = (Brand) => {
    
}
