//var socket = require('socket.io');

var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('public'));

server.listen(PORT, function() {
  console.log('Chat server running');
});

//Socket setup
//var io = socket(server);

/*io.on('connection', function(socket){
    console.log('creada la coneccion de socket', socket.id)
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
    socket.on('escribiendo', function(data){
        socket.broadcast.emit('escribiendo', data)
    });
});*/
var io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('chat', function(data) {
    io.emit('chat', data);
  });
  socket.on('escribiendo', function(data) {
    io.emit('escribiendo', data);
  });
});