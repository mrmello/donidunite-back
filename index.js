const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Product');
const app = express()

mongoose.connect(keys.mongoURI)
  .catch(err => {console.log('cannot connect ' + err)});

const Product = mongoose.model('products');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/products', function (req, res) {

  Product.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);
