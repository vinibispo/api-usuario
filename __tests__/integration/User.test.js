const supertest = require('supertest')
const app = require('../../src/app')

const request = supertest(app)

describe('Controller de Usuário', ()=>{
    it('Deve retornar 302 quando vai para a rota /', async()=>{
        const response = await request.get('/')
        expect(response.status).toBe(302)
    })
})