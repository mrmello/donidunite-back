require('../models/income');
const mongoose = require('mongoose');
const Income = mongoose.model('Income');

exports.income_list = function(req, res) {
  Income.find()
    .populate('category')
    .populate('payee')
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.income_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: income detail: ' + req.params.id);
};

exports.income_create = function(req, res) {
  var income = new Income({
    description:  req.body.description,
    value:        req.body.value,
    category:     req.body.category,
    payment:      req.body.payment,
    payee:        req.body.payee,
    date:         req.body.date
  });
  income.save()
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.income_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: income delete GET');
};

exports.income_update = function(req, res) {
    res.send('NOT IMPLEMENTED: income update POST');
};
