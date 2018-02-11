var Client = require('../models/client');

exports.client_list = function(req, res) {
    res.send('NOT IMPLEMENTED: client list');
};

exports.client_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: client detail: ' + req.params.id);
};

exports.client_create = function(req, res) {
    res.send('NOT IMPLEMENTED: client create POST');
};

exports.client_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: client delete GET');
};

exports.client_update = function(req, res) {
    res.send('NOT IMPLEMENTED: client update POST');
};
