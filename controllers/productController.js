const mongoose = require('mongoose');
require('../models/product');

const Product = mongoose.model('Product');

exports.product_list = function(req, res) {
  Product.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: product detail: ' + req.params.id);
};

exports.product_create = function(req, res) {
    res.send('NOT IMPLEMENTED: product create POST');
};

exports.product_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: product delete GET');
};

exports.product_update = function(req, res) {
    res.send('NOT IMPLEMENTED: product update POST');
};
