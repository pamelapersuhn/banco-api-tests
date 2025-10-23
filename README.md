# 🧪 Banco API Tests

Projeto de **automação de testes de API REST** desenvolvido em **JavaScript**, com o objetivo de validar os endpoints do sistema [Banco API](https://github.com/juliodelimas/banco-api).

Os testes cobrem operações como criação de contas, transações, autenticação e demais funcionalidades expostas pela API principal.

---

## 🎯 Objetivo

Contribuir com a qualidade das respostas da API do projeto Banco, por meio de testes automatizados que verificam status codes, payloads, contratos e fluxos de negócio.

---

## ⚙️ Stack Utilizada

- [Node.js](https://nodejs.org/)
- [Mocha](https://mochajs.org/) – Framework de testes
- [Chai](https://www.chaijs.com/) – Biblioteca de asserções
- [Supertest](https://github.com/ladjs/supertest) – Requisições HTTP para testes de API
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – Geração de relatórios HTML
- Outras dependências listadas no [`package.json`](./package.json)

---

## 🗂️ Estrutura de Diretórios

```
banco-api-tests/
├── test/                 # Casos de teste organizados por funcionalidade
│   ├── transacoes.test.js
│   └── login.test.js
├── mochawesome-report/   # Diretório gerado automaticamente com o relatório HTML
├── package.json
├── .env          # Exemplo do arquivo de variáveis de ambiente
└── README.md
```

---

## 🔐 Arquivo `.env`

O projeto depende de um arquivo `.env` na raiz, contendo a variável de ambiente abaixo:

```env
BASE_URL=http://localhost:3000
```

> ⚠️ Essa URL deve apontar para o ambiente onde a API do projeto [Banco API](https://github.com/juliodelimas/banco-api) está sendo executada.

---

## 🚀 Executando os Testes

Antes de rodar os testes, instale as dependências do projeto:

```bash
npm install
```

### ▶️ Executar todos os testes

```bash
npm test
```

### 🧾 Gerar relatório HTML (Mochawesome)

O relatório é gerado automaticamente após a execução dos testes.

O arquivo HTML fica disponível em:

```
/mochawesome-report/mochawesome.html
```

Para abrir o relatório no navegador:

```bash
npx mochawesome-merge mochawesome-report/*.json > mochawesome.json
npx marge mochawesome.json
```

---

## 📚 Documentação das Dependências

| Biblioteca | Documentação |
|-------------|---------------|
| Mocha | https://mochajs.org/ |
| Chai | https://www.chaijs.com/ |
| Supertest | https://github.com/ladjs/supertest |
| Mochawesome | https://www.npmjs.com/package/mochawesome |

---

## 💡 Observações

- Certifique-se de que o projeto [Banco API](https://github.com/juliodelimas/banco-api) esteja rodando antes de executar os testes.  
- Caso queira alterar o ambiente (por exemplo, produção ou staging), basta ajustar o valor da variável `BASE_URL` no arquivo `.env`.

---

## 🧑‍💻 Autora

**[Pâmela Persuhn](https://github.com/pamelapersuhn)**  
Projeto desenvolvido como parte de estudos e prática de automação de testes de API.
