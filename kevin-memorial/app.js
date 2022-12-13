const express = require('express');
const path = require('path');
const app = express();

console.log("Starting node server...");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 80;
app.listen(port);

console.log(`Listening on port ${port}`)