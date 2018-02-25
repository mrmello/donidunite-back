require('../models/order');
require('../models/products');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const Product = mongoose.model('Products');

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
  calculateTotalValue(req.body.shoppingCart)
    .then((totalValue) => {
      var order = new Order({
        totalValue:   totalValue,
        customer:     req.body.customer,
        product:      req.body.product
      });
      order.save()
        .then(resp => { res.send(resp) })
        .catch(err => { res.send(err) });
    })
    .catch((err) => {
      .then(resp => { res.send(resp) })
      .catch(err => { res.send(err) });
    })
};

exports.order_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: order delete GET');
};

exports.order_update = function(req, res) {
    res.send('NOT IMPLEMENTED: order update POST');
};

function calculateTotalValue(shoppingCart) {
  return new Promise((resolve, reject) => {
    // loop through a object containing a product and its quantity
    //pull of the product from the database and multiply its value by the quantity
    // then increment the total value and return it
    var totalValue = 0;
    shoppingCart.map((product) => {
      Product.findOne({_id: product.id})
        .then((donut) => {
          totalValue += donut.price * product.quantity;
        }).catch((err) => {
          reject(err);
        })
    })
    resolve(totalValue);
  })
}
