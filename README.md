# A Sample Interaction using Node.js and Socket

This tutorial will walk you through the creation of a simple Node.js and Socket.io example. It includes sending a message from an HTML page to a Node.js server and a message from a Node.js server to an HTML page. 

## Steps

1. Create an HTML file with the basic required HTML tags:

    ```html
    <!doctype html>
    <html>
      <head>
        
        <title>Node.js and Socket.io</title>
    
      </head>
      <body> 
           
      </body>
    </html>
    ```

2. Include the Socket.io CDN in the `head` section:

    ```html
    <script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js'></script>
    ```

3. Add a button to the `body` section:

    ```html
    <button id="fromClient">From Client</button>
    ```

4. Before the close `body` tag add JavaScript that will initialize Socket.io, receive a Socket.io message from the Node.js server, and send a message to the Node.js server when the button is clicked:
    
    ```html
    <script>
    
    var socket = io();
    
    socket.on('fromServer', function(data) {
      console.log( 'ON: fromServer');
    });
    
    socket.on('time', function(data) {
      console.log( 'ON: time');
    });
    
    document.getElementById('fromClient').onclick = function(){
      socket.emit('fromClient', { "message":"Sent from client!" });
      console.log( 'EMIT: fromClient');
    }
    
    </script>
    ```

5. Create a `package.json` file and add Socket.io as a dependency:

    ```json
    {
      "name": "nodejs-socket",
      "version": "0.0.1",
      "description": "Sample communication from an HTML document to a Node.js server using Socket.io.",
      "dependencies": {
        "socket.io": "^2.0.4"
      }
    }
    ```

6. Create a Node.js file names `app.js` and set up a basic http server:

    ```javascript
    var http = require('http');
    var fs = require('fs');
    var index = fs.readFileSync( 'index.html');
    
    var app = http.createServer(function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(index);
    });
    
    app.listen(3000);
    ```

7. Before `app.listen(3000);` add JavaScript to intermitantly send a messages to the HTML file and receive any messages sent form the HTML file:

    ```javascript
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
    ```

8. Start the Node.js app:

    ```
    node app.js
    ```

9. Open the HTML file using `http://localhost:3000`, open the browser console, and test.

> Full tutorial URL:  
> https://codeadam.ca/learning/nodejs-socket.html

***

## Repo Resources

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en/)
* [Socket.io](https://socket.io/)

<a href="https://codeadam.ca">
<img src="https://codeadam.ca/images/code-block.png" width="100">
</a>
