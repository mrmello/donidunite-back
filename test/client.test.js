const expect = require('chai').expect;
const App = require('../index');
const request = require('supertest')(App)

describe('Clients', function() {

  it('retrieves array of clients', function(done) {
    request.get('/users/clients')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      })
  });

  // it('should create a client', function(done) {
  //   chai.request('http://localhost:3100')
  //     .post('/users/client/create')
  //     .send({
  //       email:        'teste@teste.com',
  //       name:         'Teste',
  //       surname:      'da Silva',
  //       userName:     'teste',
  //       password:     'teste123'
  //     })
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
