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
    })     