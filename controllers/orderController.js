require('../models/order');
require('../models/product');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Product = mongoose.model('Product');

exports.order_list = function(req, res) {
  Order.find()
  .populate('customer')
  .populate('shoppingCart.product')
    .then(resp => {res.send(resp)})
    .catch(err => {res.send(err)});
};

exports.order_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: order detail: ' + req.params.id);
};

exports.order_create = function(req, res) {
  calculateTotalValue(req.body.shoppingCart)
    .then((totalValue) => {
      var order = new Order({
        totalValue:     totalValue,
        customer:       req.body.customer,
        shoppingCart:   req.body.shoppingCart
      });
      order.save()
        .then(resp => { res.send(resp) })
        .catch(err => { res.send(err) });
    })
    .catch((err) => {
       res.send(err);
    })
};

exports.order_delete = function(req, res) {
  Order.remove({ _id: req.params.id })
    .then(resp => { res.send(resp) })
    .catch(err => { res.send(err) });
};

exports.order_update = function(req, res) {
    res.send('NOT IMPLEMENTED: order update POST');
};

function calculateTotalValue(shoppingCart) {
  return new Promise((resolve, reject) => {
    var totalValue = count = 0;
    shoppingCart.map((item) => {
      Product.findOne({_id: item.product})
        .then((donut) => {
          totalValue += donut.price * item.quantity;
          count += 1;
          if(count === shoppingCart.length) {
            resolve(totalValue.toFixed(2));
          }
        }).catch((err) => {
          reject(err);
        })
    })
  })
}
