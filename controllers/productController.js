require('../models/product');
const mongoose = require('mongoose');
const { sendErrors } = require('./handleErrors')
const Product = mongoose.model('Product');

exports.product_list = function(req, res) {
  Product.find()
    .populate('category')
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.product_detail = function(req, res) {
  Product.find({_id: req.params.id})
    .populate('category')
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.product_create = function(req, res) {
  var donut = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    active:   true
  });
  donut.save()
    .then(resp => { res.send(resp) })
    .catch(err => ( sendErrors(res, err) ));
};

exports.product_delete = function(req, res) {
  Product.remove({ _id: req.params.id })
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.product_update = function(req, res) {
  Product.findById({ _id: req.params.id })
  .then(donut => {
    donut.set({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category
    })
    donut.save()
      .then(resp => { res.send(resp) })
      .catch(err => { res.send(err) });
  })
  .catch(err => {
    res.send(err)
  });
};
