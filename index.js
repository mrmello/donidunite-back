const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express()
require('./models/Product');
require('./models/Admin');
require('./models/Category');
require('./models/Client');
require('./models/Expense');
require('./models/Income');
require('./models/Order');
require('./models/Payment');

mongoose.connect(keys.mongoURI)
  .catch(err => {console.error('cannot connect ' + err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Product = mongoose.model('Product');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/products', function (req, res) {

  Product.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
})

const PORT = process.env.PORT || 3100;
app.listen(PORT);
