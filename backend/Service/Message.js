const Message = require('../Models/Message/Message');
const Conversation = require('../Models/Message/Conversation');
const ConversationMembers = require('../Models/ConversationMembers');
const socketManager = require('../Socket/SocketManager');

async function SendMessage(senderId , conversationId , content) {
    const conversation = await Conversation.findOne({
        where : {
            id : conversationId
        }
    });

    if (!conversation) {
        return {error : 'Phong chat khong ton tai'};
    }

    const members = await ConversationMembers.findAll();
    
    if (!members.some(member => member.id === senderId)) {
        return {error : 'Ban khong co quyen truy cap'};
    }

    const newMessage = await Message.create({
        senderId : senderId , 
        conversationId : conversationId , 
        text : content 
    });

    const receiver = members.filter(member => member.userId !== senderId);

    socketManager.SendMessage(conversationId , 'Tin nhan moi' , newMessage);

    for(let i = 0; i < receiver.length; ++i){
        const receiverId = receiver[i].userId;
        const isOnline = socketManager.isOnline(receiverId);

        if (!isOnline) {

        }
    }

    return {sucess : true , data : newMessage};
}

module.exports = {
    SendMessage 
}