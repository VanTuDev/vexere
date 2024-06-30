const jwt = require('jsonwebtoken');
const User = require('../user-model');
require('dotenv').config();

module.exports = {
    authenticate: (req, res, next) => {
        const token = req.header('Authorization').replace('Bearer ', '');
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded)
            User.findOne({ _id: decoded._id, 'tokens.token': token }).then((user) => {
                if (!user) {
                    throw new Error();
                }
                req.user = user;
                next();
            }).catch((error) => {
                res.status(401).send({ error: 'Please authenticate.' });
            });
        } catch (error) {
            res.status(401).send({ error: 'Please authenticate.' });
        }
    },
    // allowReadOnly: (req, res, next) => {
    //     if (req.method === 'GET') {
    //     }
    //     return this.authenticate(req, res, next);
    // }
};
