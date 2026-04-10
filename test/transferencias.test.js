request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', ()=>{    

    let token;
    beforeEach(async ()=>{
        token = await obterToken('julio.lima','123456');        
    })

    describe('POST /transferencias', ()=>{
       
        
        it('Deve retornar 201 quando valor da transferência for maior ou igual a 10,00',async ()=>{

            const bodyTransferencias = { ...postTransferencias}
                                   
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer ' + token)
                .send(bodyTransferencias)
                          
            expect(resposta.status).to.equal(201);
        })

        it('Deve retornar 422 quando o valor da transferência for menor que 10,00',async ()=>{   
            
            const bodyTransferencias = {...postTransferencias}
            bodyTransferencias.valor = 9

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer ' + token)
                .send(bodyTransferencias)
                    
            expect(resposta.status).to.equal(422);

        })

       })  
       
    describe('GET /transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados corretos quando enviado os dados existentes na base de dados', async () =>{
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/3')
                .set('Authorization', `Bearer ${token}`)

            expect(resposta.status).to.equal(200)
            expect(resposta.body.id).to.equal(postTransferencias.body.id)
            expect(resposta.body.id).to.be.a('number')
            expect(resposta.body.conta_origem_id).to.equal(postTransferencias.body.conta_origem_id)
            expect(resposta.body.conta_origem_id).to.be.a('number')
            expect(resposta.body.conta_destino_id).to.equal(postTransferencias.body.conta_destino_id)
            expect(resposta.body.conta_destino_id).to.be.a('number')
            expect(resposta.body.valor).to.equal(postTransferencias.body.valor)
        })
    })

    describe('GET /transferencias', () =>{
        it.only('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias')
                .set('Authorization', `Bearer ${token}`)
           
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.length(10)
        })
    })
    })     