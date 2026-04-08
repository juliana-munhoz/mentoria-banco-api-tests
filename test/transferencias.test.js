request = require('supertest');
const {expect} = require('chai');
require('dotenv').config();
const {obterToken} = require('../helpers/autenticacao');

describe('Transferências', ()=>{    

    let token;
    beforeEach(async ()=>{
        token = await obterToken('julio.lima','123456');        
    })

    describe('POST /transferencias', ()=>{
       
        
        it('Deve retornar 201 quando valor da transferência for maior ou igual a 10,00',async ()=>{
           
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer ' + token)
                .send({
                    contaOrigem: 1,  
                    contaDestino: 2,
                    valor: 10.99,
                    token: ""
                })
                          
            expect(resposta.status).to.equal(201);
        })

        it('Deve retornar 422 quando o valor da transferência for menor que 10,00',async ()=>{   
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer ' + token)
                .send({
                    contaOrigem: 1,  
                    contaDestino: 2,
                    valor: 9.99,
                    token: ""
                })
                    
            expect(resposta.status).to.equal(422);

        })

       })   
    })     