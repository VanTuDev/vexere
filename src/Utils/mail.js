const nodemailer = require("nodemailer");
const {config} = require('.././config')
const fs = require('fs');
const mailConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: config.gmail.username,
        pass: "bwwr jrwg znwc ahiz"
    }
};

function createTransporter(host, port, secure, auth) {
    return nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure,
        auth: auth,
    });
}

exports.sendEmail = async (to, subject, transportStationId) => {
    let htmlContent = fs.readFileSync('src/Utils/mailtemplate.html', 'utf8');
    htmlContent = htmlContent.replace('${transportStationId}', transportStationId);
    const transporter = createTransporter(mailConfig.host, mailConfig.port, mailConfig.secure, mailConfig.auth);
    try {
        const info = await transporter.sendMail({
            from: config.gmail.username,
            to: to,
            subject: subject,
            html: htmlContent,
        });
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
