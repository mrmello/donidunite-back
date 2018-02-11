var Admin = require('../models/admin');

exports.admin_list = function(req, res) {
    res.send('NOT IMPLEMENTED: admin list');
};

exports.admin_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: admin detail: ' + req.params.id);
};

exports.admin_create = function(req, res) {
    res.send('NOT IMPLEMENTED: admin create GET');
};

exports.admin_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: admin delete POST');
};

exports.admin_update = function(req, res) {
    res.send('NOT IMPLEMENTED: admin update GET');
};
