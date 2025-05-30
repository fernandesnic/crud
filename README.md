# Client Management System

Um sistema **CRUD completo** para gerenciamento de clientes com backend em **Node.js** e frontend em **React**.

## 📋 Pré-requisitos

- Node.js (v16 ou superior)
- PostgreSQL (v12 ou superior)
- npm ou yarn

## Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/fernandesnic/crud
cd crud
```

### 2. Instale as dependências:

```bash
# Backend
cd crud-backend
npm install

# Frontend
cd ../crud-frontend
npm install
```

### 3. Configure o banco de dados:

- Crie um banco PostgreSQL chamado `client_db`.
- Execute o script SQL localizado em `backend/database/schema.sql`.

### 4. Configure as variáveis de ambiente:

```bash
# No diretório backend
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais reais:

````ini

## 🏃 Executando o Projeto

Em dois terminais separados:

```bash
# Backend
cd crud-backend
npm start
````

```bash
# Frontend
cd crud-frontend
npm start
```

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express, PostgreSQL
- **Outras:** Axios, pg

> 💡 **Como usar:**  
> Crie um arquivo `.env` na pasta do `backend` baseado no `.env.example` e preencha com suas credenciais reais.  
> O `.gitignore` já está configurado para ignorar o `.env`.

## 📝 Licença

Este projeto foi criado por https://github.com/fernandesnic
