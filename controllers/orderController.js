var Order = require('../models/order');

exports.order_list = function(req, res) {
    res.send('NOT IMPLEMENTED: order list');
};

exports.order_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: order detail: ' + req.params.id);
};

exports.order_create = function(req, res) {
    res.send('NOT IMPLEMENTED: order create POST');
};

exports.order_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: order delete GET');
};

exports.order_update = function(req, res) {
    res.send('NOT IMPLEMENTED: order update POST');
};
