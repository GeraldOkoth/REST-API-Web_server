// Import the built-in http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  // Handle different routes
  if (req.url === '/') {
    res.end(JSON.stringify({ 
      message: 'Welcome to my first Node.js server!',
      timestamp: new Date().toISOString()
    }));
  } else if (req.url === '/about') {
    res.end(JSON.stringify({ 
      message: 'This is a simple Node.js REST API',
      author: 'Your Name',
      version: '1.0.0'
    }));
  } else if (req.url === '/users') {
    res.end(JSON.stringify({ 
      users: [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'Designer' },
        { id: 3, name: 'Charlie', role: 'Manager' }
      ]
    }));
  } else {
    // Handle 404 - Not Found
    res.statusCode = 404;
    res.end(JSON.stringify({ 
      error: 'Route not found',
      availableRoutes: ['/', '/about', '/users']
    }));
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});