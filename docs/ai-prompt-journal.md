## AI Prompt Journal

### Prompt 1: Understanding Node.js
**Prompt Used:**
```

"Explain what Node.js is in simple terms, including its main use cases 
and why it's popular for backend development. Include one real-world 
example of a company using Node.js."
```

**Response Summary:**
- Node.js is a JavaScript runtime for server-side development
- Uses event-driven, non-blocking I/O for scalability
- Popular for REST APIs, real-time apps, and microservices
- Netflix uses it to serve 200M+ subscribers with better performance

**Learning Outcome:** Gained foundational understanding of Node.js architecture and practical applications.

---

### Prompt 2: Installation Guidance
**Prompt Used:**
```
"What are the system requirements for Node.js? Provide step-by-step 
installation instructions for Windows, macOS, and Linux. Include how 
to verify the installation was successful."
```

**Response Summary:**
- Minimal hardware requirements (512MB RAM minimum)
- Multiple installation methods (official installer, package managers)
- Verification commands: `node --version` and `npm --version`
- Recommendation to use LTS version for stability

**Learning Outcome:** Successfully installed Node.js and verified npm installation.

---

### Prompt 3: First Web Server
**Prompt Used:**
```
"Create a simple Node.js HTTP server that:
1. Listens on port 3000
2. Has three routes: /, /about, and /users
3. Returns JSON responses
4. Handles 404 errors for invalid routes
Include detailed comments explaining each part of the code."
```

**Response Summary:**
- Provided complete working code using the `http` module
- Explained request/response cycle
- Demonstrated routing with conditional statements
- Included proper error handling for undefined routes

**Learning Outcome:** Built first working Node.js server with multiple endpoints and understood the request-response flow.

---

### Prompt 4: Running and Testing
**Prompt Used:**
```
"How do I run my Node.js server file? What command should I use? 
How can I test different routes without using Postman? What should 
I see in the terminal when it's running successfully?"
```

**Response Summary:**
- Run with: `node server.js` or `node <filename>.js`
- Test routes using web browser or curl command
- Terminal should show server start message with address
- Press Ctrl+C to stop the server

**Learning Outcome:** Learned how to execute Node.js files and test endpoints using browser.

---

### Prompt 5: Understanding Package.json
**Prompt Used:**
```
"What is package.json and why is it important in Node.js projects? 
What does 'npm init -y' do? Explain the main fields in package.json."
```

**Response Summary:**
- `package.json` is the project manifest file
- Contains metadata, dependencies, and scripts
- `npm init` creates it interactively; `-y` uses defaults
- Key fields: name, version, dependencies, scripts, main

**Learning Outcome:** Understood Node.js project structure and dependency management basics.

---

### Prompt 6: Error Debugging
**Prompt Used:**
```
"I got an error 'Error: listen EADDRINUSE: address already in use'. 
What does this mean and how do I fix it?"
```

**Response Summary:**
- Error means another process is using port 3000
- Solutions: stop the other server, use a different port, or kill the process
- On Windows: use Task Manager or `netstat` command
- On macOS/Linux: use `lsof -i :3000` and `kill -9 <PID>`

**Learning Outcome:** Learned how to handle port conflicts and find/terminate processes.

---