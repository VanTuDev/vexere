const transportService = require('./transport-service')

exports.createTransport= async (req, res, next) => {
    const {transportStationId, name, seats, transportTypeId, brandId} = req.body
    try {
        const imagesFromClient = req.processedFiles
        const transportSaved = await transportService.createTransport(
                                                        transportStationId
                                                    ,   name
                                                    ,   imagesFromClient
                                                    ,   seats
                                                    ,   null
                                                    ,   transportTypeId
                                                    ,   brandId)
        return res.status(201).json({
            success: true,
            transport: transportSaved 
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


exports.findAll= async (req, res, next) => {
    try {
        const transports =  await transportService.findAll()
        return res.status(201).json({
            success: true,
            transport: transports 
        })
    }catch(error){
        console.log(error)
    }
}

exports.findById = async (req, res, next) => {
    try {
    }catch(error){
        console.log(error)
    }
}