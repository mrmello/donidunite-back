const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express()
require('./models/product');
require('./models/admin');
require('./models/category');
require('./models/client');
require('./models/expense');
require('./models/income');
require('./models/order');
require('./models/payment');

mongoose.connect(keys.mongoURI)
  .catch(err => {console.error('cannot connect ' + err)});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Product = mongoose.model('product');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/products', function (req, res) {

  Product.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
})

const PORT = process.env.PORT || 3100;
app.listen(PORT);
