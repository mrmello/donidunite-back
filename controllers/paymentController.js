var Payment = require('../models/payment');

// Display list of all payments.
exports.payment_list = function(req, res) {
    res.send('NOT IMPLEMENTED: payment list');
};

// Display detail page for a specific payment.
exports.payment_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: payment detail: ' + req.params.id);
};

// Display payment create form on GET.
exports.payment_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: payment create GET');
};

// Handle payment create on POST.
exports.payment_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: payment create POST');
};

// Display payment delete form on GET.
exports.payment_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: payment delete GET');
};

// Handle payment delete on POST.
exports.payment_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: payment delete POST');
};

// Display payment update form on GET.
exports.payment_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: payment update GET');
};

// Handle payment update on POST.
exports.payment_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: payment update POST');
};
