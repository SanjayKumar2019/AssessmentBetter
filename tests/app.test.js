const request = require('supertest');
const app = require('../src/index');  // Assuming your express app is exported from index.js

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
  });
});
