const User = require('../Models/User');
const Conversation = require('../Models/Message/Conversation');
const ConversationMembers = require('../Models/ConversationMembers');
const socketManager = require('../Socket/SocketManager');

async function JoinConversation(userId , conversationId) {
    const user = await User.findOne({
        where : {
            id : userId
        }
    });
    
    if (!user) {
        return {error : 'Ban can dang ky tai khoan'};
    }

    const conversation = await Conversation.findOne({
        where : {
            id : conversationId
        }
    });

    if (!conversation) {
        return {error : 'Doan chat khong ton tan !'};
    }

    const existingMember = await ConversationMembers.findOne({where : {
                                                    userId : userId , 
                                                    conversationId : conversationId
                                                }});
                                     
    if (existingMember) return {error : 'Nguoi dung hien da o trong doan chat'};

    await user.addConversation(conversation);

    return {
        sucess : true , 
        message : 'Them thanh vien thanh cong'
    }
};

async function CreateConversation(userId , conversation_name , conversation_type) {
    const user = await User.findOne({where : {id : userId}});

    if (!user) {
        return {error : 'User hien tai khong ton tai'};
    }

    await user.createConversation({
        type : conversation_type , 
        name : conversation_name
    });
    return {
        success : true , 
        payload : {
            message : 'Khoi tao doan chat thanh cong'
        }
    }
}

module.exports = {
    JoinConversation , 
    CreateConversation
};