const supertest = require('supertest')
const app = require('../../src/app')

const request = supertest(app)

describe('Controller de Usuário', ()=>{
    it('Deve retornar 200 quando vai para a rota /', async()=>{})
})