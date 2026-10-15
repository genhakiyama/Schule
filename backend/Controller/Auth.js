const Authen = require('../Service/Auth');
const socketManager = require('../Socket/SocketManager');
const Errors = require('../UTIL/Errors');
const io = require('../SocketIo');

async function Signup(req , res) {
    const {name , username , password , role} = req.body;
    const authen = await Authen.SignUp(name , username , password , role);
        if (authen.error){
            return res.status(Errors.NOT_ACCEPTABLE.status).json({
                success : false , 
                payload :{
                    message : 'Username exits'
                }
            });
        }

        io.getIO().emit('Signup' , {
            action : 'Signup' , 
            post : `Welcom ${username} to home`
        });

        return res.json({
            success : true , 
            payload : {
                message : 'Dang ki thanh cong'
            }
        })
};

module.exports = {
    Signup
};