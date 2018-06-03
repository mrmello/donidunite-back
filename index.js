const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
var catalogRouter = require('./routes/catalogRouter');
var usersRouter = require('./routes/usersRouter');
var managementRouter = require('./routes/managementRouter');
var authRouter = require('./routes/authRouter');
var categoryRouter = require('./routes/categoryRouter');

const PORT = process.env.PORT || 3100;
const MONGO_URI = process.env.MONGO_URI || "mongodb://root:donidunite123@ds125048.mlab.com:25048/donidunite";

mongoose.connect(MONGO_URI)
  .catch(err => {console.error('cannot connect ' + err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRouter);
app.use('/management', managementRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);
app.use('/category', categoryRouter);

app.listen(PORT);

module.exports = app;