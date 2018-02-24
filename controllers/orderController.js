require('../models/order');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.order_list = function(req, res) {
  Order.find()
  .populate('customer')
  .populate('product')
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.order_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: order detail: ' + req.params.id);
};

exports.order_create = function(req, res) {
  var order = new Order({
    totalValue:   req.body.totalValue,
    customer:     req.body.customer,
    product:      req.body.product
  });
  order.save()
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.order_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: order delete GET');
};

exports.order_update = function(req, res) {
    res.send('NOT IMPLEMENTED: order update POST');
};
