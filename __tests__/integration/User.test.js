const supertest = require('supertest')
const app = require('../../src/app')
const User = require('../../src/models/User')
const request = supertest(app)

describe('Controller de Usuário', ()=>{
    beforeAll(async()=>{
        await User.deleteMany({})
        await User.create({name: 'Teste', email: 'teste@teste', password: 'pass'})
    })
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
        expect(response.body[0].name).toBe('Teste')
    })
    it('Deve retornar 201, quando o usuário for para a rota POST /users/add', async()=>{
        const response  = await request.post('/users/add').send({name: 'Teste', email: 'teste@teste', password: 'senha'})
        expect(response.status).toBe(201)
    })
    it('Deve retornar 200 quando o usuário utilizar a rota 200 PUT /:id', async()=>{
        const users = await User.find({})
        const user = users[0]
        const response = await request.put(`/users/${user._id}`).send({name: 'Teste 2', email: 'teste@teste.com', password:'senha123'})
        expect(response.status).toBe(200)
    })
    it('Deve retornar 204 quando um usuário for para a rota DELETE /users/:id', async()=>{
        const users =  await User.find({})
        const user = users[0]
        const response = await request.delete(`/users/${user._id}`)
    })
})