const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('Debe responder Hola Mundo desde CI/CD', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hola Mundo desde CI/CD');
    expect(res.statusCode).toBe(200);
  });
});
