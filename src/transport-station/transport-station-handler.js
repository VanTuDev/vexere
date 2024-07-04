const transportService = require('./transport-station-service')
const transportQuery = require('./transport-station-queries')

const licenseService = require('./license/license-service')
const userService = require('../user/user-service')
const utils = require('../Utils/Random')

exports.registerTransportStation = async (req, res, next) => {
    try {
        const { name, provinceCode, districtCode, wardCode, addressDetail, email, telephone } = req.body;

        if (!name || !provinceCode || !districtCode || !wardCode || !addressDetail || !email || !telephone) {
            return res.status(400).json({
                message: 'Missing required fields',
            });
        }
        const transportStation= await transportService.registerTransportStation(name, provinceCode, districtCode, wardCode, addressDetail, email, telephone);
        const transportPopulateAddress = await transportService.findById(transportStation._id)
        res.status(201).json({
            message: 'Transport station registered successfully',
            transportPopulateAddress,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
};

// create user
// update user_id in address
    // update user in address
// update user_id in transport station
    // update user in tranpost station
// create cerf in companytransport
exports.allDone = async (req, res, next) => {
    try {
        let transportStationId = req.params.transportStationId;
        const transportStationFromServer = await transportService.findById(transportStationId);
        if (!transportStationFromServer){
            return res.status(500).json({
                message: 'Cannot find transport id',
                error: error.message,
            });
        }
            const user = {
                username: utils.generateRandomString(10),
                password: utils.generateRandomString(10)
            }
        const userSaved = await userService.createUser(user)
        
            transportQuery.updateUserIdInTransportStation(transportStationFromServer.id, userSaved._id)
        return res.status(200).json({
            user
        })
    }catch(error){
        res.status(500).json({
            message: 'Internal server error',
            error: error.message,
        });
    }
}

exports.processConfirm = async (req, res, next) => {
    let transportStationId = req.params.transportStationId;
    try {
        let transportStationFromServer = await transportService.findById(transportStationId);
        let licensesFromServer = await licenseService.getAll()
        return res.status(200).json({
            transport: transportStationFromServer,
            licenses: licensesFromServer
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

