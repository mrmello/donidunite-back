var router = require('express').Router();

var category_controller = require('../controllers/categoryController');
var client_controller = require('../controllers/clientController');

// category Routes //
router.get('/list/', category_controller.category_list);
router.get('/bytype/:type', category_controller.category_byType);
router.post('/create', category_controller.category_create);
router.delete('/:id', category_controller.category_delete);
router.put('/:id', category_controller.category_update);

module.exports = router;
