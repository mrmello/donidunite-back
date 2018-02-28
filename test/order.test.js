const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Orders', function() {

  it('retrieves array of orders', function(done) {
    chai.request('http://localhost:3100')
      .get('/management/orders')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  it('should create a order', function(done) {
    chai.request('http://localhost:3100')
      .post('/management/order/create')
      .send({
        customer:       '5a90b71465c38f239cf58ffb',
        shoppingCart:
              [
                {
                  product: '5a8846114dcd55255cdb1211',
                  quantity: 5
                },
                {
                  product: '5a883aedc4362621c46f6fb6',
                  quantity: 5
                }
              ]
      })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should delete a order', function(done) {
    chai.request('http://localhost:3100')
      .delete('/management/order/5a94ae5f4cf13f14987a4ec5')
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  // it('should retrive the specified category', function(done) {
  //   chai.request('http://localhost:3100')
  //     .get('/catalog/category/5a877e4e779f12214031bf5f')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.be.an('array').with.length(1);
  //        done();
  //     })
  // });
  //
  // it('should update the specified category', function(done) {
  //   chai.request('http://localhost:3100')
  //     .put('/catalog/category/5a877fd1f3e7981b2056cdd0')
  //     .send({ type: 'produtos', name: 'Especiais' })
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.deep.include({name: 'Especiais'});
  //        done();
  //     })
  // });

});
