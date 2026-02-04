// what is routing?
// Request URL -> Route -> Controller -> Response
//Reading html files in server based on requested url

const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.end(`<h1>Hello from Node.js Server</h1>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


