# 📊 Testes de Performance – Banco API com K6

## 📌 Introdução
Este projeto contém testes de performance desenvolvidos em **JavaScript** utilizando o **[K6](https://k6.io/)** para avaliar e monitorar a performance da [Banco API](https://github.com/CodeIsa/banco-api).  

Os testes simulam diferentes cenários de carga e estresse para identificar gargalos, avaliar o comportamento da API sob alta demanda e garantir sua estabilidade.

---

## 🛠 Tecnologias Utilizadas
- **JavaScript (ES6+)** – Linguagem para implementação dos scripts de teste
- **[K6](https://k6.io/)** – Ferramenta de testes de carga e performance
- **Node.js** – Para gerenciamento de dependências e scripts utilitários

---

## 📂 Estrutura do Repositório
```bash
├── .gitignore
├── html-report.html
├── README.md
├── config/
│   └── config.local.json
├── fixtures/
│   └── postLogin.json
├── helpers/
│   └── autenticacao.js
├── tests/
│   ├── login.test.js
│   └── transferencias.test.js
└── utils/
    └── variaveis.js
```

---

## 🎯 Objetivo de Cada Grupo de Arquivos
- **config/** – Contém arquivos de configuração para os testes, como o config.local.json, que pode ser usado para armazenar configurações específicas do ambiente local.
- **fixtures/** – Armazena dados de teste estáticos, como o postLogin.json, que provavelmente contém o corpo da requisição para o login.
- **helpers/** – Contém funções auxiliares reutilizáveis, como o autenticacao.js, que pode ser responsável por lidar com o processo de autenticação na API.
- **tests/** – Armazena os scripts dos testes de performance, como login.test.js e transferencias.test.js.
- **utils/** – Contém utilitários diversos, como o variaveis.js, que pode ser usado para gerenciar variáveis globais ou de ambiente.

---

## ⚙️ Instalação
1. **Clone o repositório**
   ```bash
   git clone https://github.com/CodeIsa/banco-api-performance.git
   cd banco-api-performance
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Certifique-se de ter o K6 instalado**  
   - [Instruções oficiais de instalação do K6](https://k6.io/docs/getting-started/installation/)

---

## 🚀 Execução dos Testes
Antes de executar, defina a variável de ambiente `BASE_URL` com a URL da API a ser testada.

### 1️⃣ Execução simples
```bash
BASE_URL=https://sua-api.com k6 run tests/login.test.js
```

### 2️⃣ Execução com dashboard em tempo real
```bash
BASE_URL=https://sua-api.com K6_WEB_DASHBOARD=true k6 run tests/transferencias.test.js
```
O **dashboard** estará disponível no navegador enquanto o teste estiver em execução.

### 3️⃣ Execução com exportação de relatório HTML
```bash
BASE_URL=https://sua-api.com K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```
Após o teste, o arquivo `html-report.html` conterá o relatório detalhado.
