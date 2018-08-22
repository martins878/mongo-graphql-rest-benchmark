import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/app';

describe('API Posts endpoints', () => {
  it('should be a success', (done) => {
    request(app)
      .post('/v1/posts/find')
      .set('Accept', 'application/json')
      .expect('Content-Type', '/json/')
      .send({})
      .end((err, res) => {
        // const errorStack = JSON.parse(res.error.text);
        expect(res.statusCode).to.equal(200);
        expect(res.clientError).to.be.false;
        done();
      });
  });
});
