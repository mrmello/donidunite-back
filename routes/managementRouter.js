var router = require('express').Router();

var expense_controller = require('../controllers/expenseController');
var income_controller = require('../controllers/incomeController');
var order_controller = require('../controllers/orderController');

// Expense Routes //
router.get('/expenses/', expense_controller.expense_list);
router.get('/expense/:id', expense_controller.expense_detail);
router.post('/expense/create', expense_controller.expense_create);
router.delete('/expense/:id', expense_controller.expense_delete);
router.put('/expense/:id', expense_controller.expense_update);

// Income Routes //
router.get('/incomes/', income_controller.income_list);
router.get('/income/:id', income_controller.income_detail);
router.post('/income/create', income_controller.income_create);
router.delete('/income/:id', income_controller.income_delete);
router.put('/income/:id', income_controller.income_update);

// Order Routes //
router.get('/orders/', order_controller.order_list);
router.get('/order/:id', order_controller.order_detail);
router.post('/order/create', order_controller.order_create);
router.delete('/order/:id', order_controller.order_delete);
router.put('/order/:id', order_controller.order_update);

module.exports = router;
