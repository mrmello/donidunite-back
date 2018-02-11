var Income = require('../models/income');

exports.income_list = function(req, res) {
    res.send('NOT IMPLEMENTED: income list');
};

exports.income_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: income detail: ' + req.params.id);
};

exports.income_create = function(req, res) {
    res.send('NOT IMPLEMENTED: income create POST');
};

exports.income_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: income delete GET');
};

exports.income_update = function(req, res) {
    res.send('NOT IMPLEMENTED: income update POST');
};
