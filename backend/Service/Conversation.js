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

async function RemoveMember(senderId , userId , conversationId) {
    const sender = await User.findOne({ where : {id : senderId}});
    const user = await User.findOne({ where : {id : userId}});
    const conversation = await Conversation.findOne({
        where : {
            id : conversationId
        }
    });

    const isMember = await ConversationMembers.findOne({
        where : {
            userId , conversationId
        }
    });

    if (!isMember) return {error : 'Khong ton tai User trong Conversation'};
    if (!sender || !user) return {error : 'Tai khoan khong hop le'};
    if (!conversation) return {error : 'Doan chat khong ton tai'};
    if (sender.role != 'admin') return {error : 'Ban khong co quyen'};


    await ConversationMembers.destroy({
        where : {
            userId : userId , 
            conversationId : conversationId
        }
    });

    return {
        success : true , 
        payload : {
            message : 'Xoa thanh vien thanh cong' , 
            userId : userId , 
            conversationId : conversationId
        }
    }
}

module.exports = {
    JoinConversation , 
    CreateConversation , 
    RemoveMember
};