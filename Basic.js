const { log } = require('console');
const http = require('http')

// Create a server

const server = http.createServer((req, res) => {
    // log request details
    console.log(`Received ${req.method} request for: ${req.url}`);
    // Set status code and headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send a response
    res.end('Hello, World!');

})

// Default port to listen on

const PORT = 5000;

// Start the server and listen on the specified port

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
        console.log('Press Ctrl+C to stop the server');
});

