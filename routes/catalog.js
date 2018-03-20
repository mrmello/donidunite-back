var router = require('express').Router();

var product_controller = require('../controllers/productController');

// Product Routes //
router.get('/products/', product_controller.product_list);
router.get('/product/:id', product_controller.product_detail);
router.post('/product/create', product_controller.product_create);
router.delete('/product/:id', product_controller.product_delete);
router.put('/product/:id', product_controller.product_update);

module.exports = router;
