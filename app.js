var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'index.html');

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
});

var io = require('socket.io').listen(app);

setInterval(function sendTime() {
    
    io.emit('time', { time: new Date().toJSON() });
    console.log( 'EMIT: time');
    
}, 10000);

io.on('connection', function(socket) {
    
    socket.on('fromClient',function(data){
   
        console.log( 'ON: fromClient');
        
        socket.emit('fromServer', { message: 'Received message! Returning message!!' });
        console.log( 'EMIT: fromServers');
    
    });
    
});

app.listen(3000);
