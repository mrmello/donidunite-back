var bcrypt = require('bcryptjs');
require('../models/client');
const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.client_list = function(req, res) {
  Client.find()
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.client_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: client detail: ' + req.params.id);
};

exports.client_create = function(req, res) {
  bcrypt.hash(req.body.password, 8)
    .then(hash => {
      var client = new Client({
        email:        req.body.email,
        name:         req.body.name,
        surname:      req.body.surname,
        userName:     req.body.userName,
        password:     hash,
      });
      client.save()
        .then(resp => { res.send(resp) })
        .catch(err => { res.send(err) });
    }).catch(err => {
      res.status(500).send(err.message)
    });
};

exports.client_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: client delete GET');
};

exports.client_update = function(req, res) {
    res.send('NOT IMPLEMENTED: client update POST');
};
