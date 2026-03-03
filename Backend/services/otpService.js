/*const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service :'gmail',
    auth : {
        user : process.env.EMAIL_OWNER,
        pass : process.env.EMAIL_PASS
    }
});

const sendOTP = async (to,otp)=>{
    await transporter.sendMail({
        to,
        subject : 'Your OTP Code',
        text :`Your OTP is ${otp}`
    });
}

module.exports = sendOTP;
*/

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_OWNER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false  // ← fixes "self-signed certificate" crash
    }
});

const sendOTP = async (to, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_OWNER,  // ← good practice to always set this
        to,
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It expires in 5 minutes.`
    });
};

module.exports = sendOTP;