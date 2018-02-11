var Expense = require('../models/expense');

exports.expense_list = function(req, res) {
    res.send('NOT IMPLEMENTED: expense list');
};

exports.expense_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: expense detail: ' + req.params.id);
};

exports.expense_create = function(req, res) {
    res.send('NOT IMPLEMENTED: expense create POST');
};

exports.expense_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: expense delete GET');
};

exports.expense_update = function(req, res) {
    res.send('NOT IMPLEMENTED: expense update POST');
};
