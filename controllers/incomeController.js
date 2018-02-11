var Income = require('../models/income');

// Display list of all incomes.
exports.income_list = function(req, res) {
    res.send('NOT IMPLEMENTED: income list');
};

// Display detail page for a specific income.
exports.income_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: income detail: ' + req.params.id);
};

// Display income create form on GET.
exports.income_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: income create GET');
};

// Handle income create on POST.
exports.income_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: income create POST');
};

// Display income delete form on GET.
exports.income_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: income delete GET');
};

// Handle income delete on POST.
exports.income_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: income delete POST');
};

// Display income update form on GET.
exports.income_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: income update GET');
};

// Handle income update on POST.
exports.income_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: income update POST');
};
