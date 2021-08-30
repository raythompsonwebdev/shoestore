const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

app.use('/', serveStatic(path.join(__dirname, 'build')));

// Catch all routes and redirect to the index file
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`server started ${port}`);
