const io = require('../SocketIo');

async function SendMessage(event ,content) {
    return await io.getIO().emit(event , {content});
}

async function SendMessageTo(receiver , event , content) {
    return await io.getIO().to(receiver).emit(event , {content})
}

module.exports = {
    SendMessage ,
    SendMessageTo
}