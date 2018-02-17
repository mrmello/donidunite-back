require('../models/category');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.category_list = function(req, res) {
  Category.find()
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.category_detail = function(req, res) {
  Category.find({_id: req.params.id})
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.category_create = function(req, res) {
  var category = new Category({ type: req.body.type, name: req.body.name });
  category.save()
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.category_delete = function(req, res) {
  Category.remove({ _id: req.params.id })
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.category_update = function(req, res) {
  Category.findById({ _id: req.params.id })
  .then(category => {
    category.set({ type: req.body.type, name: req.body.name })
    category.save()
      .then(resp => { res.send(resp) })
      .catch(err => { res.send(err) });
  })
  .catch(err => {
    res.send(err)
  });
};
