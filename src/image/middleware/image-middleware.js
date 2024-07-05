const fs = require('fs')
const path = require('path')

exports.modifyImage = (req, res, next) => {
    const filePath = req.params.imagePath;
    const fullImagePath = path.join(filePath);
    console.log(fullImagePath);

    fs.access(fullImagePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.sendFile(fullImagePath);
    });
};

