const { DataTypes } = require('sequelize');
const sequelize = require('../UTIL/Database');

const User = sequelize.define('User' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        allowNull : false , 
        primaryKey : true
    } , 
    email : DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING, 
    role : DataTypes.STRING,
    isVerified : DataTypes.BOOLEAN , 
    verificationToken : DataTypes.STRING , 
    verificationExpire : DataTypes.DATE
});

module.exports = User;