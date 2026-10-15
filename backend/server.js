require('dotenv').config();
const http = require('http');
const app = require('./Server/app');
const server = http.createServer(app);
const io = require('./SocketIo').init(server);

io.on('connection' , socket => {
    console.log('Server is connected');
});

server.listen(3000 , () => {
    console.log('SERVER IS RUNNING');
});