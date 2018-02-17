const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Admin', function() {

  it('retrieves array admins', function(done) {
    chai.request('http://localhost:3100')
      .get('/users/admins')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  it('should create an admin', function(done) {
    chai.request('http://localhost:3100')
      .post('/users/admin/create')
      .send({
        user: 'mrmello',
        password: 'mrm241192',
        name: 'Marcos Mello',
      })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });
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
