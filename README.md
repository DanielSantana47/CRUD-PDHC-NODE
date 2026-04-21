# Task API

API simples de gerenciamento de tarefas desenvolvida com Node.js, Express e TypeScript.
O projeto implementa um CRUD completo com boas práticas de organização em camadas (controllers, services e routes) e validação de dados utilizando Zod.

## Funcionalidades

* Criar tarefa
* Listar todas as tarefas
* Buscar tarefa por ID
* Atualizar tarefa
* Remover tarefa

## Estrutura do projeto

```
src/
 ├── controllers/
 ├── routes/
 ├── services/
 ├── schemas/
 ├── data/
 └── server.ts

api/
 └── index.ts
```

## Tecnologias utilizadas

* Node.js
* Express
* TypeScript
* Zod

## Instalação

Instale as dependências:

```
npm install
```

## Execução

Para rodar o projeto em ambiente de desenvolvimento:

```
npm run dev
```

Ou em produção:

```
npm run build
npm start
```

## Endpoints

Base URL: `/tasks`

* GET `/tasks`
  Retorna todas as tarefas

* GET `/tasks/:id`
  Retorna uma tarefa específica

* POST `/tasks`
  Cria uma nova tarefa

* PUT `/tasks/:id`
  Atualiza uma tarefa existente

* DELETE `/tasks/:id`
  Remove uma tarefa

## Observações

* Os dados são armazenados localmente em memória ou arquivo JSON.
* Este projeto tem fins acadêmicos e não utiliza banco de dados em produção.
