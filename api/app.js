const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/events-api', {
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const Events = require('./models/Events');

const PORT = process.env.PORT || 5000;

// CORS support
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
      return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get all events Route
// TODO: Get all events

// Create a event
// TODO: Create event

// Get a event by id
// TODO: Get event by id

// Delete a event
// TODO: Delete event

// Update a event
// TODO: Update an event

// Listen on port
app.listen(PORT, function() {
  console.log('[SERVER]: Running on port ' + PORT);
});