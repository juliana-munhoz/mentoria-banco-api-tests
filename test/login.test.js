const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();

describe('Login', ()=>{
    describe('POST /login', ()=>{
        it('Deve retornar 200 com um token em string quando usar credenciais validas',async ()=>{
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type','application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string')

        })

        it('Deve retornar 400 com mensagem de erro quando usar credenciais invalidas',async ()=>{
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type','application/json')
                .send({
                    'username': 'julio.lim',
                    'senha': '123456'
                })             
            expect(resposta.status).to.equal(401);
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.')
        })

        it('Deve retornar 401 com mensagem de erro quando as credenciais forem ausentes',async ()=>{
            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type','application/json')
                .send({
                    'username': ''          
                })
               
            expect(resposta.status).to.equal(400);
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.')
        })
    })

    

})


