require('dotenv').config();
const jwt = require('jsonwebtoken')

module.exports = (req , res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        return res.status(400).json({
            payload : {
                message : 'Not authenticated'
            }
        });
    }

    const token = authHeader.split(' ')[1];
    let decodedToken ;

    try {
        decodedToken = jwt.verify(token , process.env.SECRET_KEY);
    } catch(err) 
    {
        console.log(`${err}  ${process.env.SECRET_KEY}`);
    }

    if (!decodedToken) {
        return res.status(401).json({
            message : 'INVALID OR EXPIRED TOKEN'
        });
    }

    next();
};