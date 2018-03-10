const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
var catalog = require('./routes/catalog');
var users = require('./routes/users');
var management = require('./routes/management');
var auth = require('./routes/auth');

const PORT = process.env.PORT || 3100;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .catch(err => {console.error('cannot connect ' + err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', auth);
app.use('/management', management);
app.use('/users', users);
app.use('/catalog', catalog);

app.listen(PORT);
