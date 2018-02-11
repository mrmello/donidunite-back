var Expense = require('../models/expense');

// Display list of all expenses.
exports.expense_list = function(req, res) {
    res.send('NOT IMPLEMENTED: expense list');
};

// Display detail page for a specific expense.
exports.expense_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: expense detail: ' + req.params.id);
};

// Display expense create form on GET.
exports.expense_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: expense create GET');
};

// Handle expense create on POST.
exports.expense_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: expense create POST');
};

// Display expense delete form on GET.
exports.expense_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: expense delete GET');
};

// Handle expense delete on POST.
exports.expense_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: expense delete POST');
};

// Display expense update form on GET.
exports.expense_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: expense update GET');
};

// Handle expense update on POST.
exports.expense_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: expense update POST');
};
