var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var keys = require('../config/keys');
require('../models/admin');
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');

exports.admin_list = function(req, res) {
  Admin.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.admin_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: admin detail: ' + req.params.id);
};

exports.admin_create = function(req, res) {
  bcrypt.hash(req.body.password, 8)
  .then(hash => {
    var admin = new Admin({
      user: req.body.user,
      password: hash,
      name: req.body.name
    });
    admin.save()
      .then(resp => { res.send(resp) })
      .catch(err => { res.send(err) });
  }).catch(err => {
    res.status(500).send(err.message)
  });
};

exports.admin_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: admin delete POST');
};

exports.admin_update = function(req, res) {
    res.send('NOT IMPLEMENTED: admin update GET');
};
