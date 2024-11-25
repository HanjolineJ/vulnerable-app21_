const express = require('express');
const app = express();
const port = 3000;
//const sanitizeHtml = require ('sanitize-html');


// Root route
app.get('/', (req, res) => {
   res.send('Welcome to the Vulnerable Application!');
});


// Vulnerable route
app.get('/search', (req, res) => {
   const query = req.query.q;
   //const sanitizedQuery = sanitizeHtml(query); un comment to sanitize
   res.send(`<div>${query}</div>`); // Directly injects user input
});


// Start the server
app.listen(port, () => {
   console.log(`Vulnerable app running on http://localhost:${port}`);
});
