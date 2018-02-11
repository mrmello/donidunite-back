var express = require('express');
var router = express.Router();

var admin_controller = require('../controllers/adminController');
var client_controller = require('../controllers/clientController');

// Admin Routes //
router.get('/admins/', admin_controller.admin_list);
router.get('/admin/:id', admin_controller.admin_detail);
router.post('/admin/create', admin_controller.admin_create);
router.delete('/admin/:id', admin_controller.admin_delete);
router.put('/admin/:id', admin_controller.admin_update);

// Client Routes //
router.get('/clients/', client_controller.client_list);
router.get('/client/:id', client_controller.client_detail);
router.post('/client/create', client_controller.client_create);
router.delete('/client/:id', client_controller.client_delete);
router.put('/client/:id', client_controller.client_update);

module.exports = router;
