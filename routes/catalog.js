var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/productController');
var category_controller = require('../controllers/categoryController');

// Product Routes //
router.get('/products/', product_controller.product_list);
router.get('/product/:id', product_controller.product_detail);
router.post('/product/create', product_controller.product_create);
router.delete('/product/:id', product_controller.product_delete);
router.put('/product/:id', product_controller.product_update);

// Category Routes //
router.get('/categories/', category_controller.category_list);
router.get('/category/:id', category_controller.category_detail);
router.post('/category/create', category_controller.category_create);
router.delete('/category/:id', category_controller.category_delete);
router.put('/category/:id', category_controller.category_update);

module.exports = router;
