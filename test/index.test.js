const keys = require('../config/keys');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Setup', function() {
  
  before(function (done) {
    mongoose.connect(keys.mongoURI)
      .catch(err => {console.error('cannot connect ' + err)});
    done();
  });

  after(function(done){
    mongoose.connection.close();
    done();
  });

});
