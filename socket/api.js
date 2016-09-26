var express = require('express');  
var app = express();  

var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(function(req, res, next) {
  res.io = io;
  next();
});

app.use('/api', require('./api/router'));

app.get('/', function(req, res, next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(4321);
console.log('Started api server at port 4321...');

io.on('connection', function(socket) {  
  console.log('Client connected...');

  socket.on('join', function(data) {
    console.log(data);
    socket.emit('messages', 'Hello from server');
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

});