const User = require('../Models/User');
const brcrypt = require('bcrypt');
const crypto = require('crypto');

const EmailService = require('./Email');
const Token = require('../UTIL/Token');

async function SignUp(email , username , password , role) {
        const existingUser = await User.findOne({
            where : {
                username : username
            }
        });
        if (existingUser) {   
            return {error : 'Username exits'};
        }
        const hashedpassword = await brcrypt.hash(password , 12);
        const {token , hashedToken} = Token.TokenGeneration();
        await User.create({
            email , username , password , role , 
            isVerified : false , 
            verificationToken : hashedToken,
            verificationExpire : new Date(Date.now() + 15 * 60 * 1000)
        });
        EmailService.SendVerification(email , token);
        return {
            sucess : true
        }
}   

async function Login(email , username , password){
    const user = User.findOne({where : {email : email}});
    if (!user || !user.isVerified) {
        return {error : 'Not Found'};
    }

    if (await brcrypt.compare(password , user.password)) {
        return {sucess : true}
    }

    return {error : 'Wrong password'};

}

module.exports = {
    SignUp  , 
    Login
}