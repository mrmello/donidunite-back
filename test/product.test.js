const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Product', function() {

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
