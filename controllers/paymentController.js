var Payment = require('../models/payment');

exports.payment_list = function(req, res) {
    res.send('NOT IMPLEMENTED: payment list');
};

exports.payment_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: payment detail: ' + req.params.id);
};

exports.payment_create = function(req, res) {
    res.send('NOT IMPLEMENTED: payment create POST');
};

exports.payment_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: payment delete GET');
};

exports.payment_update = function(req, res) {
    res.send('NOT IMPLEMENTED: payment update POST');
};
