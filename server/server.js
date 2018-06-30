
const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

console.log(__dirname + '/../public');

const publicPath = path.join(__dirname, '../public');

console.log(publicPath);

var app = express();
// var server = http.createServer((req, res) => {
// });

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log("New User Connected ...")

    socket.emit('newemail', {
        from: ' chandrus server'
    });
    socket.on('disconnect', () => {
        console.log("Client disconnected...");
    });
    socket.on('createnewemail', function (mail) {
        console.log("new email request from client received", mail);
    });
});


server.listen(3000, () => {
    console.log('Server is up on 3000');
})
// app.listen(3000, () => {
//     console.log('Server is up on 3000');
// })