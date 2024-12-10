const request = require('supertest');
const app = require('../src/app'); // Import the main app file

describe('API Endpoints', () => {
  it('should respond with a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Welcome to Node.js App');
  });

  it('should return 404 for unknown routes', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
