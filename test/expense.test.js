const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Expenses', function() {

  it('retrieves array of products', function(done) {
    chai.request('http://localhost:3100')
      .get('/management/expenses')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  // it('should retrive the specified product', function(done) {
  //   chai.request('http://localhost:3100')
  //     .get('/catalog/product/5a883aedc4362621c46f6fb6')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.be.an('array').with.length(1);
  //        done();
  //     })
  // });

  it('should create an expense', function(done) {
    chai.request('http://localhost:3100')
      .post('/management/expense/create')
      .send({
        description:  'Compra de embalagens',
        value:        25,
        category:     '5a877e4e779f12214031bf5f',
        payment:      'Dinheiro',
        payee:        '5a8889d4badd32125c327691',
      })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });
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
