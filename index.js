const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`recieved request from ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end();
})

server.listen(8080);