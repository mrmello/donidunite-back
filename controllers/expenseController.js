const mongoose = require('mongoose');
require('../models/expense');
const { sendErrors } = require('./handleErrors')
const Expense = mongoose.model('Expense');

exports.expense_list = function(req, res) {
  Expense.find()
  .populate('category')
  .populate('payment')
  .then(resp => {res.send(resp)})
  .catch(err => ( sendErrors(res, err) ));
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
    date:         req.body.date,
    toWho:        req.body.toWho,
  });
  expense.save()
  .then(resp => { res.send(resp) })
  .catch(err => ( sendErrors(res, err) ));
};

exports.expense_delete = function(req, res) {
  Expense.remove({ _id: req.params.id })
  .then(resp => { res.send(resp) })
  .catch(err => ( sendErrors(res, err) ));
};

exports.expense_update = function(req, res) {
  Expense.findById({ _id: req.params.id })
  .then(expense => {
    expense.set({
      description:  req.body.description,
      value:        req.body.value,
      category:     req.body.category,
      payment:      req.body.payment,
      payee:        req.body.payee,
      date:         req.body.date,
      toWho:        req.body.toWho
    })
    expense.save()
    .then(resp => { res.send(resp) })
    .catch(err => ( sendErrors(res, err) ));
  })
  .catch(err => ( sendErrors(res, err) ));
};
