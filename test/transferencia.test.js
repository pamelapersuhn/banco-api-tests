const request = require('supertest');
const{ expect } = require('chai');
require('dotenv').config()
const { obtertoken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferencias', () => {
    describe('POST/Transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obtertoken('julio.lima','123456')
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10,00 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer '+ token)
                .send(bodyTransferencias)

                expect(resposta.status).to.equal(201);
                console.log(resposta.body)
        })

        it('Deve retornar 422 quando o valor da transferencia for abaixo de 10,00 reais', async () => {
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer '+ token)
                .send(bodyTransferencias)

                expect(resposta.status).to.equal(422);
                console.log(resposta.body)
        })
    }
    )
}
)