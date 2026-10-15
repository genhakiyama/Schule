const MessageSerive = require('../Service/Message');
const Errors = require('../UTIL/Errors');

async function SendMessageController(req ,res) {
    try {
        const senderId = req.user.id;
        const { conversationId , content} = req.body;
        if (!conversationId || !content) {
            return res.status(Errors.NOT_ACCEPTABLE).json({
                sucess : false , 
                payload : {
                    message : Errors.NOT_ACCEPTABLE
                }
            });
        }

        const result = await MessageSerive.SendMessage(senderId , conversationId , content);

        if (result.error) {
            return res.status(Errors.NOT_ACCEPTABLE).json({
                sucess : false , 
                payload : {
                    message : result.error
                }
            });
        }

        return res.status(Errors.ACCEPTED).json({
            sucess : true , 
            payload : {
                message : Errors.ACCEPTED , 
                data : result.data
            }
        })
    }
    catch(err) {
        res.status(Errors.INTERNAL_SERVER_ERROR).json({
            sucess : false , 
            payload : {
                message : err.message
            }
        });
    }
}

module.exports = {
    SendMessageController
}