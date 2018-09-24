import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/app';
import { generateDatas } from '../../src/utils/fakerDatas';

describe('API Products endpoints', () => {
  // it('should be populate products collection', (done) => {
  //   for (let i = 0; i < 500; i++) {
  //     request(app)
  //       .post('/v1/services/products/new')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', '/json/')
  //       .send(generateDatas())
  //       .end((err, res) => {
  //         // const errorStack = JSON.parse(res.error.text);
  //         expect(res.statusCode).to.equal(200);
  //         expect(res.clientError).to.be.false;
  //       });
  //   }
  //   done();
  // });

  // it('REST - should be list all products', (done) => {
  //   request(app)
  //     .post('/v1/services/products/find')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({})
  //     .end((err, res) => {
  //       // const errorStack = JSON.parse(res.error.text);
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  // });

  // it('REST - should be list all products from some provider', (done) => {
  //   request(app)
  //     .post('/v1/services/products/find')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({ provider: '5ba6e1175b739cbd0465ff8e' })
  //     .end((err, res) => {
  //       // const errorStack = JSON.parse(res.error.text);
  //       // console.log('RESPONSE::: ', res.body);
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  // });

  // it('GRAPHQL - should be list all products', (done) => {
  //   request(app)
  //     .post('/graphql')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({ query: '{ products { name category description price photos } }' })
  //     // .send({ query: '{ products { name photos description registerNumber color valid category lot price brand origin plots freight evaluation barCode model weight warranty provider code stores } }' })
  //     .end((err, res) => {
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  //   });
});

describe('API Provider endpoints', () => {
  // it('should be populate provider collection', (done) => {
  //   request(app)
  //     .post('/v1/services/provider/new')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({
  //       name: 'Magazine Luiza',
  //       address: 'Avenida luiza',
  //       cep: '5555555',
  //       phone: '2727-1717'
  //     })
  //     .end((err, res) => {
  //       // const errorStack = JSON.parse(res.error.text);
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //     });
  //   done();
  // });

  // it('REST - should be list all products', (done) => {
  //   request(app)
  //     .post('/v1/services/products/find')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({})
  //     .end((err, res) => {
  //       // const errorStack = JSON.parse(res.error.text);
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  // });

  // it('REST - should be list a provider by _id', (done) => {
  //   request(app)
  //     .post('/v1/services/provider/find')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({ _id: '5ba6e1175b739cbd0465ff8e' })
  //     .end((err, res) => {
  //       // const errorStack = JSON.parse(res.error.text);
  //       console.log('RESPONSE::: ', res.body);
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  // });

  // it('GRAPHQL - should be list all products', (done) => {
  //   request(app)
  //     .post('/graphql')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', '/json/')
  //     .send({ query: '{ products { name category description price photos } }' })
  //     // .send({ query: '{ products { name photos description registerNumber color valid category lot price brand origin plots freight evaluation barCode model weight warranty provider code stores } }' })
  //     .end((err, res) => {
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.clientError).to.be.false;
  //       done();
  //     });
  //   });
});
