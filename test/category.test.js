const expect = require('chai').expect;
const App = require('../index');
const request = require('supertest')(App)

describe('Category', function() {

  // it('retrieves array categories', function(done) {
  //   chai.request('http://localhost:3100')
  //     .get('/categories')
  //     .end((err, res) => {
  //       expect(res.body).to.be.an('array');
  //       done();
  //     })
  // });
  //
/* 
   it('should create a category', function(done) {
     request.post('/category/create')
       .send({ type: 'product', name: 'Especiais' })
       .end((err, res) => {
         console.log(res)
          expect(err).to.be.null;
          done();
       })
   });

   it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'product', name: 'Tradicionais' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

   it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'size', name: 'Mini' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });
  
  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'size', name: 'Normal' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'dressing', name: 'Doce de Leite' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'payment', name: 'Dinheiro' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'base', name: 'Frito' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'base', name: 'Assado' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  });

  it('should create a category', function(done) {
    request.post('/category/create')
      .send({ type: 'additional', name: 'Twix' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res).to.have.status(200);
         done();
      })
  }); */

  
   it('should delete a category', function(done) {
     request.delete('/category/5ab853de1f04b012304fa251')
       .end((err, res) => {
          expect(err).to.be.null;
          done();
       })
   });

   it('should delete a category', function(done) {
    request.delete('/category/5ab853de1f04b012304fa253')
      .end((err, res) => {
         expect(err).to.be.null;
         done();
      })
  });

  it('should delete a category', function(done) {
    request.delete('/category/5ab853df1f04b012304fa255')
      .end((err, res) => {
         expect(err).to.be.null;
         done();
      })
  });

  // it('should retrive the specified category', function(done) {
  //   chai.request('http://localhost:3100')
  //     .get('/category/5a877e4e779f12214031bf5f')
  //     .end((err, res) => {
  //        expect(err).to.be.null;
  //        expect(res.body).to.be.an('array').with.length(1);
  //        done();
  //     })
  // });

  /* it('should update the specified category', function(done) {
    request.put('/category/5a877e4e779f12214031bf5f')
      .send({ type: 'expense', name: 'Embalagens' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.deep.include({name: 'Embalagens'});
         done();
      })
  });

  it('should update the specified category', function(done) {
    request.put('/category/5a877f637e657205ec87f3e6')
      .send({ type: 'expense', name: 'Ingredientes' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.deep.include({name: 'Ingredientes'});
         done();
      })
  });

  it('should update the specified category', function(done) {
    request.put('/category/5a8782f21f42a904b4ad7db4')
      .send({ type: 'expense', name: 'Ingredientes' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.deep.include({name: 'Ingredientes'});
         done();
      })
  });

  it('should update the specified category', function(done) {
    request.put('/category/5a8f7712fafcd414d85b9f4c')
      .send({ type: 'income', name: 'Depósito' })
      .end((err, res) => {
         expect(err).to.be.null;
         expect(res.body).to.deep.include({name: 'Depósito'});
         done();
      })
  }); */

});
