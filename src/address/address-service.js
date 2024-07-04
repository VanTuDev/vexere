const addressQueries = require('./address-queries')


exports.createAddress = (provinceId, districtId, wardId) => {
    try {
        const address = addressQueries.createAddress(provinceId, districtId, wardId)
        return address != null ? address : null
    }catch (error){
        console.log(error)
        throw "Cannot create address !"
    }
}