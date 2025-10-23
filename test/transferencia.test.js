const request = require('supertest');
const{ expect } = require('chai');
require('dotenv').config()
const { obtertoken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')


describe('Transferencias', () => {
    let token

        beforeEach(async () => {
            token = await obtertoken('julio.lima','123456')
        })

    describe('POST/Transferencias', () => {
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
            bodyTransferencias.valor = 5

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type','application/json')
                .set('Authorization','Bearer '+ token)
                .send(bodyTransferencias)

                expect(resposta.status).to.equal(422);
                console.log(resposta.body)
        })
    })

    describe('GET /Transferencias/{id}', () => {
        it('Deve retornar sucesso com 200 e dados iguais ao registro de transferencia contido no BD quando o id for válido', async () => {
                const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/18')
                .set('Authorization', `Bearer ${token}`)

                console.log(resposta.status)
                console.log(resposta.body)
                expect(resposta.status).to.equal(200)
                expect(resposta.body.id).to.equal(18)
                expect(resposta.body.id).to.be.a('number')
                expect(resposta.body.conta_origem_id).to.equal(3)
        })
    })

    describe('GET/ Transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar limite de 10 registros', async () => {
            const resposta = await request(process.env.BASE_URL)
            .get('/transferencias?page1&limit=10')
            .set('Authorization',`Bearer ${token}`)

            console.log(resposta.body)
            expect(resposta.status).to.equal(200)
            expect(resposta.body.limit).to.equal(10)
            expect(resposta.body.transferencias).to.have.lengthOf(10)
        })
    })
})