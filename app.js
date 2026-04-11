const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));

app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Hello world! Server running on localhost:${PORT}`);
});