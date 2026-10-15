const express = require('express');
const app = express();

//... ROUTES 
    const FileHandlerRoute = require('../Routes/FileHandler.js');
    const chatHandler = require('../Routes/ChatHandler.js');
    const AuthHandler = require('../Routes/AuthHandler.js');

//... Database 
    const User = require('../Models/User.js');
    const Conversation = require('../Models/Message/Conversation.js');
    const ConversationMembers = require('../Models/ConversationMembers.js');

    User.belongsToMany(Conversation , {through : ConversationMembers , foreignKey : 'userID'});
    Conversation.belongsToMany(User , {through : ConversationMembers , foreignKey : 'conversationID'});

    const Message = require('../Models/Message/Message.js');
    const sequelize = require('../UTIL/Database.js');
    
    Message.belongsTo(Conversation);
    Conversation.hasMany(Message);

    Message.belongsTo(User , {foreignKey : 'senderID'});    
    User.hasMany(Message , {foreignKey : 'senderID'});

sequelize.sync({force : false});

app.use(express.json());

app.use('/auth' , AuthHandler);
app.use('/file' , FileHandlerRoute);
app.use('/chat' , chatHandler);

module.exports = app;