var router = require('express').Router();
var auth_controller = require('../controllers/authController');

router.post('/login', auth_controller.authenticate);

module.exports = router;
