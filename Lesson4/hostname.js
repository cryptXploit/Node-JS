const http = require('http');
const port = 4000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.end("<h1>Hello. I am your first server with hostname!</h1>");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

