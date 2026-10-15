const ConversationController = require('../Service/Conversation');
const Errors = require('../UTIL/Errors');
const io = require('../SocketIo');


async function CreateConversation(req , res) {
    const {userId , conver_name , conver_type} = req.body;
    const conversation = await ConversationController.CreateConversation(userId , conver_name , conver_type);

    if (conversation.error) {
        return res.status(400).json({
            sucess : false , 
            payload : {
                message : conversation.error
            }
        });
    }

    io.getIO().emit('Server' , {
        action : 'create Conversation' , 
        post : 'A new Conversation has been created succefully'
    });

    return res.status(200).json({
        success : true , 
        payload : {
            message : 'Thanh cong roi'
        }
    });
}

async function JoinConversation(req , res) {
    const {userId , conversationId} = req.body;

    const JoinConver = await ConversationController.JoinConversation(userId , conversationId);
    if (JoinConver.error) {
        return res.status(400).json({
            success : false , 
            payload : {
                message : JoinConver.error
            }
        });
    }

    io.getIO().emit(`Group ${conversationId}` , {
        action : 'Join group' , 
        post : 'User da gia nhap quan doan thanh cong'
    });

    return res.status(200).json({
        success : true , 
        payload : {
            message : 'Gia nhap quan doan thanh cong'
        }
    });
}

async function RemoveUser(req , res) {
    const {senderId , userId , conversationId} = req.body;
    const ConverRemove = await ConversationController.RemoveMember(senderId , userId , conversationId);

    if (ConverRemove.error) {
        return res.status(400).json({
            success : false , 
            payload : {
                message : ConverRemove.error
            }
        });
    }

    io.getIO().emit(`Group ${conversationId}` , {
        action : 'Remove user' , 
        message : 'User has been removed successfully'
    });

    return res.status(200).json({
        success : true , 
        payload : {
            message : 'Xoa thanh vien thanh cong' , 
            userId : userId , 
            conversationId : conversationId
        }
    });
}

module.exports = {
    CreateConversation , 
    JoinConversation , 
    RemoveUser
};