const http = require('http');
const { resolve } = require('path/posix');

// const server = http.createServer((req,res)=>{
//   res.end('Welcome to our home page');
// })

// Using Event Emitter API
const server = http.createServer()

// emit request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res)=>{
  res.send('Welcome')
})

server.listen(5000);