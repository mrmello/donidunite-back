require('../models/income');
const mongoose = require('mongoose');
const Income = mongoose.model('Income');
const { sendErrors } = require('./handleErrors')

exports.income_list = function(req, res) {
  Income.find()
  .populate('category')
  .populate('payment')
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
  .catch(err => ( sendErrors(res, err) ));
};

exports.income_delete = function(req, res) {
  Income.remove({ _id: req.params.id })
  .then(resp => { res.send(resp) })
  .catch(err => ( sendErrors(res, err) ));
};

exports.income_update = function(req, res) {
  Income.findById({ _id: req.params.id })
  .then(income => {
    income.set({
      description:  req.body.description,
      value:        req.body.value,
      category:     req.body.category,
      payment:      req.body.payment,
      payee:        req.body.payee,
      date:         req.body.date
    })
    income.save()
    .then(resp => { res.send(resp) })
    .catch(err => ( sendErrors(res, err) ));
  })
  .catch(err => ( sendErrors(res, err) ));
};
