# 🧪 Mentoria Banco API Tests

## 📌 Objetivo

Este projeto tem como objetivo automatizar testes da API REST do projeto [Banco API](https://github.com/juliodelimas/banco-api), utilizando JavaScript e ferramentas modernas de testes.

Ele foi criado com foco educacional para apoiar mentorias e aprendizado em automação de testes de APIs, cobrindo desde estruturação até execução e geração de relatórios.

---

## 🚀 Stack Utilizada

- JavaScript (Node.js)
- [Mocha](https://mochajs.org/)
- [Supertest](https://github.com/ladjs/supertest)
- [Chai](https://www.chaijs.com/)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- dotenv

---

## 📁 Estrutura do Projeto

```
├── mochawesome-report/             # Relatórios HTML gerados após execução
├── test/                           # Arquivos de testes
│   ├── login.test.js
│   └── transferencias.test.js
├── helpers/                         # Funções auxiliares
│   └── autenticacao.js
├── fixtures/                        # Massa de dados para testes
│   ├── postLogin.json
│   └── postTransferencias.json
├── .env                             # Variáveis de ambiente (não versionado)
├── package.json                     # Dependências e scripts
├── README.md                        # Documentação do projeto
```

---

## ⚙️ Configuração do Ambiente

### 1. Instalar dependências

```bash
npm install
```

### 2. Criar arquivo `.env`

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```

> 🔎 Ajuste a URL conforme o ambiente onde a API estiver rodando.

---

## ▶️ Execução dos Testes

Para rodar os testes:

```bash
npm test
```

---

## 📊 Relatórios

Após a execução dos testes, um relatório em HTML será gerado automaticamente no diretório:

```
/mochawesome
```

Para visualizar:

1. Acesse a pasta `mochawesome-report`
2. Abra o arquivo `.html` no navegador

---

## 🔗 Documentação das Dependências

- Mocha: https://mochajs.org/
- Supertest: https://github.com/ladjs/supertest
- Chai: https://www.chaijs.com/
- Mochawesome: https://github.com/adamgruber/mochawesome
- dotenv: https://github.com/motdotla/dotenv

---

## 💡 Observações

- Certifique-se de que a API do projeto Banco esteja em execução antes de rodar os testes.
- O arquivo `.env` não é versionado por questões de segurança.
- Os relatórios são gerados automaticamente a cada execução.

---

## 👨‍💻 Autor

Projeto utilizado em mentorias para ensino de automação de testes de APIs REST.
