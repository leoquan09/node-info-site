const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`recieved request from ${req.url}`);

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('error reading file');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('failed to read file')
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('failed to read file')
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('page doesnt exist')
            }
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

server.listen(8080);