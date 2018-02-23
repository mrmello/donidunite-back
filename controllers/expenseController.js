const mongoose = require('mongoose');
require('../models/expense');
const Expense = mongoose.model('Expense');

exports.expense_list = function(req, res) {
  Expense.find()
    .populate('category')
    .populate('payee')
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.expense_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: expense detail: ' + req.params.id);
};

exports.expense_create = function(req, res) {
  var expense = new Expense({
    description:  req.body.description,
    value:        req.body.value,
    category:     req.body.category,
    payment:      req.body.payment,
    payee:        req.body.payee,
    date:         req.body.date
  });
  expense.save()
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.expense_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: expense delete GET');
};

exports.expense_update = function(req, res) {
    res.send('NOT IMPLEMENTED: expense update POST');
};
