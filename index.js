var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

//listen on the connection event for incoming sockets, and log it to the console.
io.on('connection', function(socket){
  // send the message to everyone,
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});

// The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.