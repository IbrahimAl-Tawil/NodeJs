// Required modules are imported.
const express = require('express'); // Express.js framework for building web applications
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const path = require('path'); 

// An instance of an Express app is created.
const app = express();
const port = 3000; // The port number our server will listen on

// Middleware setup
app.use(cors()); // Enable all CORS requests
app.use(bodyParser.json()); // Parses incoming request bodies as JSON
app.use(express.static(path.join(__dirname, 'public_html'))); 


// GET request handler for the root path '/'
app.get('/', (req, res) => {
  // Send the index.html file to the client
  res.sendFile(path.join(__dirname, 'index.html')); // Adjust the file name as necessary
});

// Start the server
app.listen(port, () => {
  // Log a message to the console indicating the server is running and listening on the specified port
  console.log(`Server running at http://localhost:${port}`);
});
