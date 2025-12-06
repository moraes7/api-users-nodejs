
# API Users – Node.js, Express, Prisma 6 e MongoDB

Este projeto é uma API simples para gerenciamento de usuários, construída com:

- **Node.js**
- **Express**
- **Prisma 6** (ORM)
- **MongoDB**
- **ES Modules (import/export)**

A API permite criar e listar usuários por meio de um CRUD básico.
É um projeto ideal para servir como base de APIs maiores.

---

## 🚀 Tecnologias utilizadas

- **Node.js v22+**
- **Express**
- **Prisma 6**
- **MongoDB Atlas ou Local**
- **dotenv**

---

## 📁 Estrutura do Projeto

```
api-users/
├── prisma/
│   └── schema.prisma
├── server.js
├── package.json
├── .env
└── README.md
```

---

## 🔧 Instalação e Configuração

### 1. Clonar o repositório

```sh
git clone https://github.com/seu-usuario/api-users.git
cd api-users
```

### 2. Instalar dependências

```sh
npm install
```

---

## ⚙️ Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto:

```
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/"
```

---

## 🧩 Prisma — Configuração

Modelo básico:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id    String @id @default(auto()) @map("_id") @db.ObjectId
  email String @unique
  name  String
  age   Int
}
```

Gerar o client:

```sh
npx prisma generate
```

---

## ▶️ Como rodar o projeto

### Modo desenvolvimento:

```sh
npm run dev
```

Ou diretamente:

```sh
node --watch server.js
```

---

## 📡 Rotas da API

### ➤ Criar usuário  
**POST** `/usuarios`

Body JSON:

```json
{
  "name": "Nicolas",
  "email": "email@example.com",
  "age": 21
}
```

---

### ➤ Listar usuários  
**GET** `/usuarios`

Retorno:

```json
[
  {
    "id": "65f8a91f8c0fbb52c2b750f2",
    "name": "Nicolas",
    "email": "email@example.com",
    "age": 21
  }
]
```

---

## 📌 Scripts úteis

```json
{
  "scripts": {
    "dev": "node --watch server.js",
    "prisma:generate": "prisma generate"
  }
}
```

---

## 📘 Licença

Este projeto está sob a licença MIT.  
Fique à vontade para usar, estudar e modificar.

---

## ✨ Autor

**Nicolas Moraes**  
Estudante de ADS e desenvolvedor web.
