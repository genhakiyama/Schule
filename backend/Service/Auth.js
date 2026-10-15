const User = require('../Models/User');
const brcrypt = require('bcrypt');

async function SignUp(name , username , password , role) {
        const existingUser = await User.findOne({
            where : {
                username : username
            }
        });

        

        if (existingUser) {   
            return {error : 'Username exits'};
        }
        const hashedpassword = await brcrypt.hash(password , 12);
        const user = await User.create({
            name , username , password : hashedpassword , role
        });

        return {
            id : user.id , 
            name : user.name , 
            username : user.username , 
            role : user.role
        };
}

module.exports = {
    SignUp  
}