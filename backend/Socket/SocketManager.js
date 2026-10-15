var io;
const OnlineUsers = new Map();

function intialSocket(socketIo) {
    io = socketIo;
}

function RegisterUser(userId , socket) {
    const id = String(userId);

    if (!OnlineUsers.has(id)){
        OnlineUsers.set(id , new Set());
    }
    OnlineUsers.get(id).add(socket.id);
    
    socket.on('disconnect' , () => {
        const sockets = OnlineUsers.get(id);
        if (!sockets) return ;
        sockets.delete(socket.id);

        if (sockets.size() === 0) OnlineUsers.delete(id);
    });
}

function SendMessage(conversationId , event , data){
    if (!io) {
        throw new Error('SocketIo chua duoc khoi tao');
    }

    io.to(`conversation${conversationId}`).emit(event , data);
}

function isOnline(userId) {
    return OnlineUsers.has(String(userId));
}

module.exports = {
    intialSocket, 
    RegisterUser,
    SendMessage,
    isOnline
};