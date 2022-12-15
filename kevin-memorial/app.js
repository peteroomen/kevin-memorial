require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

console.log("Starting application...", process.env);

// Connect to the DB
console.log("Connecting to DB...");

const mongoString = process.env.DB_URL
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
});

database.once('connected', () => {
  console.log('Database Connected');
});

// Configure API 
console.log("Configuring API...");

const routes = require('./routes');
app.use(express.json());
app.use('/api', routes);

// Configure express
console.log("Configuring express...");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/photos', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/videos', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/music', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/memories', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log("Start listen...");

const port = 80;
app.listen(port, () => console.log(`Listening on port ${port}`));