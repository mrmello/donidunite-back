const keys = require('../config/keys');
const mongoose = require('mongoose');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Product', function() {

  before(function (done) {
    mongoose.connect(keys.mongoURI)
      .catch(err => {console.error('cannot connect ' + err)});
    done();
  });

  after(function(done){
    mongoose.connection.close();
    done();
  });

  describe('products_list', function() {
    it('retrieves array of products', function(done) {
      chai.request('http://localhost:3100')
      .get('/catalog/products')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
    });
  });
});
