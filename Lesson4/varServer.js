const http = require('http');

const myServer = http.createServer((req, res) => {
    res.end("Hello from varServer.js!");
});

myServer.listen(4000, () => {
    console.log("varServer is running Successfully at localhost:4000");
});


