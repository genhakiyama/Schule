const { DataTypes } = require('sequelize');
const sequelize = require('../UTIL/Database');

const User = sequelize.define('User' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        allowNull : false , 
        primaryKey : true
    } , 
    name : {
        type : DataTypes.STRING , 
        defaultValue : '' , 
        allowNull : false 
    } , 
    username : {
        type : DataTypes.STRING(255) , 
        defaultValue : ''
    } , 
    password : {
        type : DataTypes.STRING(255)
    },
    role : {
        type : DataTypes.STRING , 
        defaultValue : '' , 
        allowNull : false 
    }
});

module.exports = User;