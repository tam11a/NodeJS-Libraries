const express = require('express')();
const server = require('http').createServer(express);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('new client connected');
})


server.listen(8080, ()=>{
    console.log('Listening on', 8080);
})