require('dotenv').config();
const jwt = require('jsonwebtoken');
const notification = require('../Socket/Notification');
const Errors = require('../UTIL/Errors');


const Authen = require('../Service/Auth');
const Email = require('../Service/Email');

let Token ;

async function Signup(req , res) {
    const {email , username , password , role} = req.body;
    const authen = await Authen.SignUp(email , username , password , role);
        if (authen.error){
            return res.status(Errors.NOT_ACCEPTABLE.status).json({
                success : false , 
                payload :{
                    message : 'Username exits'
                }
            });
        }

        notification.SendMessage('Admin' , 'SignUp' , `${username} has registered an account`);
        Token = jwt.sign({
            email , username , role 
        } , process.env.SECRET_KEY , {expiresIn : '1h'});
        return res.json({
            success : true , 
            payload : {
                message : 'Dang ki thanh cong - Vui long xac nhan Email', 
            }
        })
};

async function LogIn(req , res) {
    const {username , email , password} = req.body;
    const isCheck = await Authen.Login;
    
    if (isCheck.error) return res.status(Errors.CONFLICT).json({
        sucess : false , 
        payload : {
            message : isCheck.error
        }
    });

    return res.status(200).json({
        sucess : true , 
        payload : {
            message : 'Welcome'
        }
    });
}

async function VerifyEmail(req , res , next) {
    const {token} = req.query;
    const isCheck = await Email.verifyEmail(token);
    if (isCheck.error){
        return res.status(Errors.NOT_ACCEPTABLE).json({
            sucess : false , 
            payload : {
                message : isCheck.error
            }
        });
    }

    return res.status(200).json({
        sucess : true , 
        payload : {
            message : 'Xac thuc Email thanh cong !' 
        }
    });
}

module.exports = {
    Signup , 
    LogIn ,
    VerifyEmail
};