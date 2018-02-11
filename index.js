const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
var catalog = require('./routes/catalog');
var users = require('./routes/users');
var management = require('./routes/management');

mongoose.connect(keys.mongoURI)
  .catch(err => {console.error('cannot connect ' + err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/management', management);
app.use('/users', users);
app.use('/catalog', catalog);

const PORT = process.env.PORT || 3100;
app.listen(PORT);
