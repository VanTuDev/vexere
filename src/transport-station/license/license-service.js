const licenseQuery= require('./license-queries')
const imageService = require('../../image/image-service')
const extensionFs = require('../../Utils/ioExtension')
exports.createLicense = async (name, purpose, imageId) => {
    try {
        const license = {
            name: name,
            purpose: purpose,
            imageId: imageId
        }
        return await licenseQuery.createLicense(license)
    }catch(error){
        console.error(error)
        throw "Service: Cannot create License."
    }
}
// Es6 version
exports.createLicenses = async (licenses) => {
    try {
        const createLicensePromises = licenses.map(async (license) => {
            const newLicense = {
                name: license.name,
                purpose: license.purpose,
                image_preview: license.image_preview,
                imageId: license.imageId
            };
            return await licenseQuery.createLicense(newLicense);
        });
        const createdLicenses = await Promise.all(createLicensePromises);
        return createdLicenses;
    } catch (error) {
        console.error(error);
        throw "Service: Cannot create Licenses.";
        return error
    }
};

exports.getAll = async () => {
    try {
        const licenses = await licenseQuery.getAll()
        
        return licenses
    }catch(error){
        console.error(error);
        throw "Service: Cannot create Licenses.";
        return error
    }
}

// Use one time for init licenses
exports.init = async (licenses) => {
    try {
        const directoryPath = 'src\\transport-station\\license\\license_preview';
        
        const files = await extensionFs.io.readFiles(directoryPath);
        const images = files.map(file => ({
            filename: file.filename,
            path: file.path
        }));
        const savedImages = await imageService.createImages(images);

        await Promise.all(savedImages.map(async (image, index) => {
            const license = licenses[index % licenses.length]; // Lấy giấy phép theo chỉ số ảnh
            const newLicense = {
                name: license.name,
                purpose: license.purpose,
                image_preview: image._id,
            };
            const existingLicense = await licenseQuery.getOne({
                name: license.name,
                purpose: license.purpose,
                image_preview: image._id
            });

            if (!existingLicense) {
                await licenseQuery.createLicense(newLicense);
                console.log(`Created new license: ${newLicense.name}`);
            } else {
                console.log(`License already exists: ${newLicense.name}`);
            }
        }));
        const ls = await licenseQuery.getAll();
        return ls
    } catch (error) {
        console.error(error);
        throw "Service: Cannot create Licenses.";
        return error
    }
};
