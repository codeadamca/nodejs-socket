# nodejs-socket

This tutorial will walk you through the creatin of a simple Node.js and Socket.io example. It includes sending a message from an HTML page to a Node.js server and a message from a Node.js server to an HTML page. 

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

4. After the button add JavaScript that will set up Socket.io, add a click event to the button, and send a message to the Node.js server when clicked:

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
## Tutorial Requirements:

* [Visual Studio Code](https://code.visualstudio.com/) or [Brackets](http://brackets.io/) (or any code editor)
* [Filezilla](https://filezilla-project.org/) (or any FTP program)
* [Node.js](https://nodejs.org/en/)

Full tutorial URL: https://codeadam.ca/learning/nodejs-website.html

<a href="https://codeadam.ca">
<img src="https://codeadam.ca/images/code-block.png" width="100">
</a>
