# 🧩 Kanban Board App

## 📌 Descrição

Aplicação web para gerenciamento de tarefas utilizando o modelo Kanban, permitindo visualizar o fluxo de trabalho através de colunas de status.

---

## 🎯 Objetivo

Desenvolver uma aplicação fullstack para praticar:

- Gerenciamento de estado no frontend
- Tipagem com TypeScript
- Integração entre frontend e backend
- Modelagem de banco de dados relacional

---

## 🚀 Escopo do Projeto

### 🟢 Etapa 1 [MVP]

- Criar tarefa
- Listar tarefas
- Atualizar status da tarefa
- Mover tarefas entre colunas
- Persistência local (localStorage)

---

### 🟡 Etapa 2

- Drag and drop
- Ordenação de tarefas

---

### 🔵 Etapa 3

- Backend com API REST
- Persistência em banco de dados

---

### 🟣 Etapa 4

- Sistema de projetos
- Associação de tarefas por projeto

---

### 🔴 Etapa 5

- Tempo real (WebSocket)
- Multiusuário
- Autenticação

---

## 🧠 Regras de Negócio

- Cada tarefa deve possuir:
  - título obrigatório
  - status válido: `todo`, `doing`, `done`

- No MVP, todas as tarefas pertencem a um projeto padrão implícito.
- Em versões futuras, tarefas estarão associadas a projetos criados pelos usuários.
- Status define a coluna onde a tarefa será exibida.

---

## 📋 Requisitos Funcionais

- RF01: Criar tarefa [MVP]
- RF02: Listar tarefas por status [MVP]
- RF03: Atualizar status da tarefa [MVP]
- RF04: Persistir dados [MVP]
- RF05: Mover tarefas entre colunas [MVP]
- RF06: Criar projeto [FUTURO]
- RF07: Listar projetos [FUTURO]
- RF08: Deletar projetos [FUTURO]
- RF09: Criar usuário [FUTURO]

---

## ⚙️ Requisitos Não Funcionais

- RNF01: Interface responsiva
- RNF02: Ações no frontend devem responder instantaneamente (<100ms)
- RNF03: Operações com backend devem responder em até 1s
- RNF04: Código modular e organizado
- RNF05: Tipagem forte com TypeScript

---

## 🧱 Arquitetura

### Frontend

- React
- TypeScript
- Vite

### Backend

- Node.js
- API REST

### Banco de Dados

- PostgreSQL

---

## 🗄️ Modelagem do Banco de Dados

### Users

- id
- email
- name
- password
- created_at
- updated_at

---

### Projects

- id
- name
- created_by (FK → users.id)
- created_at
- updated_at

---

### ProjectUsers

- id
- user_id (FK)
- project_id (FK)

---

### Tasks

- id
- project_id (FK)
- title
- description
- status
- priority
- position
- created_at
- updated_at

---

## 🔌 API REST

### 📌 Tasks

- GET `/tasks` → Listar tarefas
- GET `/tasks/:id` → Buscar tarefa específica
- POST `/tasks` → Criar tarefa
- PUT `/tasks/:id` → Atualizar tarefa
- DELETE `/tasks/:id` → Deletar tarefa

---

### 📁 Projects

- GET `/projects` → Listar projetos
- GET `/projects/:id` → Buscar projeto específico
- POST `/projects` → Criar projeto
- PUT `/projects/:id` → Atualizar projeto
- DELETE `/projects/:id` → Deletar projeto
