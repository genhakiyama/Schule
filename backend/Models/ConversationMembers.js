const { DataTypes} = require('sequelize');
const sequelize = require('../UTIL/Database');

const ConversationMembers = sequelize.define('ConversationMembers' , {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true , 
        allowNull : false , 
        primaryKey : true
    } 
});



module.exports = ConversationMembers;