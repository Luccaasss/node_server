const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/' || req.url === '/index.html' || req.url === '/index'){
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if (req.url === '/about.html' || req.url === '/about'){
        fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if (req.url === '/contact-me.html' || req.url === '/contact-me'){
        fs.readFile(path.join(__dirname, 'contact-me.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    else {
        fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
})

server.listen(8080, () => {
    console.log('The server is running');
})