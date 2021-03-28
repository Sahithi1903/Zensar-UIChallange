const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());

// Middleware to avoid cors block issue
app.use(cors());

// Import Routes from router module
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

// to connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  //console.log('this is db');
});
app.listen(3000);
