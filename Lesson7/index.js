const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {

const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}
    if (req.url === '/' || req.url === '/index.html') {
        handleReadFile(200, './views/index.html');
        
    } else if (req.url === '/about' || req.url === '/about.html') {
        handleReadFile(200, './views/about.html');

    } else if (req.url === '/contact' || req.url === '/contact.html') {
        fs.readFile('./views/contact.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/routings' || req.url === '/routings.html') {
        handleReadFile(200, './views/routings.html');
        fs.readFile('./views/routings.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        handleReadFile(404, './views/error.html');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


