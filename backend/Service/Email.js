require('dotenv').config();
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const notification = require('../Socket/Notification');

const User = require('../Models/User');
const Token = require('../UTIL/Token');

const transporter = nodemailer.createTransport({
    service : 'gmail' , 
    pool : true , 
    auth : {
        user : process.env.EMAIL_USER , 
        pass : process.env.EMAIL_PASSWORD
    }
});

async function SendVerification(email , token) {
    const link = `${process.env.BASE_URL}/auth/verify-Email?token=${token}`;
    return transporter.sendMail({
        from : process.env.EMAIL_USER , 
        to : email , 
        subject : "Verify your email" , 
        html : `
            <h2>Welcome to our shop!</h2>
            <p>Please click the link below to verify your email:</p>
            <a href="${link}">Verify Email</a>
            <p>This link expires in 15 minutes.</p>
        `
    });
}

async function verifyEmail(token) {
    if (!token || typeof token !== 'string') {
        return {
            error : 'Invalid verification link'
        };
    }
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');;
    const user = await User.findOne({
        where : {
            verificationToken : hashedToken
        }
    });
    if (!user || !user.verificationToken || user.verificationExpire <= new Date()) {
        return {error : 'Invalid or expired Link'};
    }

    await user.update({
        isVerified : true , 
        verificationToken : null , 
        verificationExpire : null
    });
    
    notification.SendMessage('email-verified' , {action : 'Signup' , userId : user.id});

    return {sucess : true}
}

module.exports = {
    SendVerification,
    verifyEmail
}