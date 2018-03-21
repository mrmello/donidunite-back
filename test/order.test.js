const expect = require('chai').expect;
const App = require('../index');
const request = require('supertest')(App)

describe('Orders', function() {

  /* it('retrieves array of orders', function(done) {
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
 */

});
