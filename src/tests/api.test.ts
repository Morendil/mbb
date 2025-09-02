const { post } = require('axios');

describe('The login route', () => {

    it('returns 401 if given incorrect credentials', async () => {
        const result = await post("http://localhost:3000/api/login", {username:'admin', password:'wrong'}, {validateStatus: () => true});
        expect(result.status).toBe(401);
    });

    it('returns a token if given correct credentials', async () => {
        const result = await post("http://localhost:3000/api/login", {username:'admin', password:'admin123'}, {validateStatus: () => true});
        expect(result.status).toBe(200);
    });

})
