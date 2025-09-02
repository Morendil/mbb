const { post } = require('axios');

describe('The login route', () => {
    it('returns 401 if given incorrect credentials', async () => {
        const result = await post("http://localhost:3000/api/login", {username:'admin', password:'wrong'});
        expect(result.status).toBe(401);
    });
})
