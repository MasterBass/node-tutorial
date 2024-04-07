const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello from nodejs');
    res.end();
});

server.listen('3000');
console.log('server started');