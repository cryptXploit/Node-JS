const http = require('http');

http.createServer((req, res) => {
    res.end("Hello I am your first server!");
}).listen(3000);

console.log("Server is listening on port 3000");