var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
require('../models/admin');
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');
const SECRET_KEY = process.env.SECRET_KEY;

exports.authenticate = function(req, res) {
  Admin.findOne({
    user: req.body.user
  }).then(admin => {
    bcrypt.compare( req.body.password, admin.password, function(err, success) {
      if(success) {
        var token = jwt.sign({ id: admin._id }, SECRET_KEY, {expiresIn: 86400});
        res.status(200).send({ auth: true, token: token });
      } else {
        res.status(401).send({ auth: false, message: 'Authentication failed!' });
      }
    });
  }).catch(err => {
      res.status(403).send({ auth: false, message: err });
  })
};
