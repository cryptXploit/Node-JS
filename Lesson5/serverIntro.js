// There are some common methods used in Node.js server development:

// get(), post(), put(), delete() - These methods correspond to HTTP request methods used to perform CRUD operations on resources.

// listen() - This method is used to bind and listen for connections on a specified host and port.
// In response We will get status code and data(including head and body)

// HTTP Status Codes:
// 200 OK - The request has succeeded.
// 201 Created - The request has been fulfilled and resulted in a new resource being created.
// 400 Bad Request - The server could not understand the request due to invalid syntax.
// 401 Unauthorized - The client must authenticate itself to get the requested response.
// 403 Forbidden - The client does not have access rights to the content.
// 404 Not Found - The server can not find the requested resource.
// 500 Internal Server Error - The server has encountered a situation it doesn't know how to handle.
// 502 Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
// 503 Service Unavailable - The server is not ready to handle the request.
// 504 Gateway Timeout - The server is acting as a gateway or proxy and did not receive a timely response from the upstream server.

// Informational 100-199
// Successful 200-299
// Redirection 300-399
// Client Error 400-499
// Server Error 500-599



const http = require('http');
const port = 4000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type': 'text/html'});
    res.write("<h1>Hello. I am your first server with hostname!</h1>");
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



