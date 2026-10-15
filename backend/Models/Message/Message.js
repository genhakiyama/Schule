const { DataTypes} = require('sequelize');
const sequelize = require('../../UTIL/Database');

const Conversation = sequelize.define('Message' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        allowNull : false , 
        primaryKey : true
    } , 
    text : {
        type : DataTypes.TEXT , 
        allowNull : true 
    } , 
    isUnsent : {
        type : DataTypes.BOOLEAN , 
        defaultValue : false 
    }
});

module.exports = Conversation;