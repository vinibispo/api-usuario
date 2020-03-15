const supertest = require('supertest')
const app = require('../../src/app')

const request = supertest(app)

describe('Controller de Usuário', ()=>{
    it('Deve retornar 302 quando vai para a rota /', async()=>{
        const response = await request.get('/')
        expect(response.status).toBe(302)
    })
    it('Deve retornar 200 quando for para a rota GET /users', async()=>{
        const response = await request.get('/users/')
        expect(response.status).toBe(200)
    })
    it('Deve haver um usuário com o nome Teste quando o usuário for para a rota GET /users', async()=>{
        const response = await request.get('/users/')
        console.log(response.body)
        expect(response.body[0].name).toBe('Teste')
    })
    it('Deve retornar 201, quando o usuário for para a rota POST /users/add', async()=>{
        const response  = await request.post('/users/add').send({name: 'Teste', email: 'teste@teste', senha: 'senha'})
        expect(response.status).toBe(201)
    })
})