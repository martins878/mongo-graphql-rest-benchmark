import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/app';
import { generateDatas } from '../../src/utils/fakerDatas';

describe('API Posts endpoints', () => {
  // it('should be populate posts collection', (done) => {
  //   for (let i = 0; i < 1000; i++) {
  //     request(app)
  //       .post('/v1/services/posts/new')
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

  // it('should be list all posts', (done) => {
  //   request(app)
  //     .post('/v1/services/posts/find')
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

  it('GRAPHQL - should be list all posts', (done) => {
    request(app)
      .post('/graphql')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .send({ query: '{ posts { title } }' })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.clientError).to.be.false;
        done();
      });
    });
});
