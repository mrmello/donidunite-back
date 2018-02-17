const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Category', function() {

  it('retrieves array categories', function(done) {
    chai.request('http://localhost:3100')
      .get('/catalog/categories')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  // it('should create a category', function(done) {
  //   chai.request('http://localhost:3100')
  //     .post('/catalog/category/create')
  //     .send({ type: 'despesa', name: 'Ingredientes' })
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res).to.have.status(200);
  //        done();
  //     })
  // });
  //
  // it('should delete a category', function(done) {
  //   chai.request('http://localhost:3100')
  //     .delete('/catalog/category/5a877d469a053f1298a0cde1')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res).to.have.status(200);
  //        done();
  //     })
  // });

  it('should retrive de specified category', function(done) {
    chai.request('http://localhost:3100')
      .get('/catalog/category/5a877e4e779f12214031bf5f')
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.be.an('array').with.length(1);
         done();
      })
  });
});
