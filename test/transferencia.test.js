const request = require('supertest');
const{ expect } = require('chai');
require('dotenv').config()
const { obtertoken } = require('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST/Transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obtertoken('julio.lima','123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10,00 reais', async () => {

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer '+ token)
                .send({
                    contaOrigem: 3,
                    contaDestino: 4,
                    valor: 15,
                    token: ""
                    })

                    expect(resposta.status).to.equal(201);
                    console.log(resposta.body)
        })

        it('Deve retornar 422 quando o valor da transferencia for abaixo de 10,00 reais', async () => {
            
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer '+ token)
                .send({
                    contaOrigem: 3,
                    contaDestino: 4,
                    valor: 9,
                    token: ""
                    })

                    expect(resposta.status).to.equal(422);
                    console.log(resposta.body)
        })
    }
    )
}
)