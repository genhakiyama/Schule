const { DataTypes} = require('sequelize');
const sequelize = require('../../UTIL/Database');

const Conversation = sequelize.define('Conversation' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        allowNull : false , 
        primaryKey : true
    } , 
    type : {
        type : DataTypes.ENUM('direct' , 'group'),
        defaultValue : 'direct' , 
        allowNull : false 
    } , 
    name : {
       type : DataTypes.STRING , 
       defaultValue : ''
    } 
});

module.exports = Conversation;