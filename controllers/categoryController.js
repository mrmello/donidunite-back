var Category = require('../models/category');

exports.category_list = function(req, res) {
    res.send('NOT IMPLEMENTED: category list');
};

exports.category_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: category detail: ' + req.params.id);
};

exports.category_create = function(req, res) {
    res.send('NOT IMPLEMENTED: category create POST');
};

exports.category_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: category delete GET');
};

exports.category_update = function(req, res) {
    res.send('NOT IMPLEMENTED: category update POST');
};
