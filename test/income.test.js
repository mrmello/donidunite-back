const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Income', function() {

  it('retrieves array of products', function(done) {
    chai.request('http://localhost:3100')
      .get('/management/incomes')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });
  //
  // it('should retrive the specified product', function(done) {
  //   chai.request('http://localhost:3100')
  //     .get('/catalog/product/5a883aedc4362621c46f6fb6')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.be.an('array').with.length(1);
  //        done();
  //     })
  // });

  // it('should create an income', function(done) {
  //   chai.request('http://localhost:3100')
  //     .post('/management/income/create')
  //     .send({
  //       description:  'Depósito',
  //       value:        100,
  //       category:     '5a8f7712fafcd414d85b9f4c',
  //       payment:      'Dinheiro',
  //       payee:        '5a8889d4badd32125c327691',
  //     })
  //     .end((err, res) => {
  //       console.log(res);
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

  // it('should update the specified product', function(done) {
  //   chai.request('http://localhost:3100')
  //     .put('/catalog/product/5a8846114dcd55255cdb1211')
  //     .send({
  //       name: 'Donut Chocolate',
  //       price: 9.80,
  //       category: '5a877fd1f3e7981b2056cdd0' ,
  //     })
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.deep.include({name: 'Donut Chocolate'});
  //        done();
  //     })
  // });
});
