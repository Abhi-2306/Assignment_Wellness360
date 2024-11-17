const request = require('supertest');
const app = require('../app'); // Ensure this exports the app instance

describe('Task Management API', () => {
    it('should return all tasks', async () => {
        const response = await request(app)
            .get('/api/tasks')
            .set('Authorization', 'Bearer your-secure-token');
        expect(response.statusCode).toBe(200);
    });
});
