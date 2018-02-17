const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Product', function() {

  it('retrieves array of products', function(done) {
    chai.request('http://localhost:3100')
      .get('/catalog/products')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  it('should retrive the specified product', function(done) {
    chai.request('http://localhost:3100')
      .get('/catalog/product/5a883aedc4362621c46f6fb6')
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.be.an('array').with.length(1);
         done();
      })
  });

  // it('should create a product', function(done) {
  //   chai.request('http://localhost:3100')
  //     .post('/catalog/product/create')
  //     .send({
  //       name: 'Donut Chocolate',
  //       price: 8.80,
  //       category: '5a877fd1f3e7981b2056cdd0' ,
  //     })
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res).to.have.status(200);
  //        done();
  //     })
  // });
  // it('should delete a donut', function(done) {
  //   chai.request('http://localhost:3100')
  //     .delete('/catalog/product/5a88475927630914f4c1ea95')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res).to.have.status(200);
  //        done();
  //     })
  // });

  it('should update the specified product', function(done) {
    chai.request('http://localhost:3100')
      .put('/catalog/product/5a8846114dcd55255cdb1211')
      .send({
        name: 'Donut Chocolate',
        price: 9.80,
        category: '5a877fd1f3e7981b2056cdd0' ,
      })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.deep.include({name: 'Donut Chocolate'});
         done();
      })
  });
});
