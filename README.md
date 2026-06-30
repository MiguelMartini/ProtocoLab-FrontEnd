# ProtocoLab - Front End
Repositório destinado ao front end da aplicação.

Repositório Back End: https://github.com/MiguelMartini/ProtocoLab-BackEnd.git

---

## Sobre
O ProtocoLab é uma plataforma desenvolvida para centralizar e otimizar a comunicação entre diferentes setores. Atendendo à necessidade de uma comunicação mais efetiva entre os departamentos de uma organização. A aplicação tem como ideia principal o gerenciamento de chamados internos, atendendo solicitações de compras, manutenções e outras demandas administrativas. Seu principal propósito é tornar o fluxo de comunicação mais assertivo, organizado e ágil, registrando todas as etapas dos processos, podendo ser utilizado por todos os setores da organização.
# 🏢 ProtocoLab

---

## 🎯 Objetivo

Projeto desenvolvido com foco em:

- Gerenciar usuários dentro de empresas
- Organizar departamentos internos
- Criar e administrar tickets (chamados)
- Permitir comentários em tickets
- Controlar permissões de acesso (RBAC)
- Garantir isolamento de dados por empresa (multi-tenant)

---

## 🚀 Tecnologias 
- Javascript
- React.JS
- TailwindCss
- i18next

---

## ⚙ Funcionalidades

### 👤 Autenticação
- Registro de empresa e usuário inicial
- Login com geração de Access Token e Refresh Token
- Refresh token via cookie seguro
- Logout
- Recuperação de dados do usuário logado (me)

### 🏣 Empresas
- Criação automática no registro
- Associação de usuários e departamentos

### 🏬 Departamentos
- Criar departamento
- Listar departamentos da empresa
- Buscar departamento por ID
- Atualizar departamento
- Remover departamento
- Listar usuários por departamento
  
### 👥 Usuários
- Criar usuário
- Listar usuários da empresa
- Buscar usuário por ID
- Atualizar usuário
- Remover usuário
- Listar usuários por departamento
  
### 🎫 Tickets (Chamados)
- Criar ticket
- Listar tickets da empresa
- Buscar ticket por ID
- Atualizar ticket
- Deletar ticket
- Atribuir usuários ao ticket
- Remover usuários do ticket
- Listar usuários atribuídos
  
### 💬 Comentários
- Criar comentário em ticket
- Listar comentários do ticket
- Editar comentário (somente autor)
- Deletar comentário (somente autor)

---

## 🌍 Internacionalização 

- Suporte a múltiplos idiomas:
  - Português (pt-BR)
  - Inglês (en-US)
  - Espanhol (es)
- Tradução automática
- Mensagens de erro e sucesso internacionalizadas

---

## 🔧 Instalação (Dev)

### 1. Clonar o projeto:
```bash
git clone https://github.com/https:/github.com/MiguelMartini/ProtocoLab-FrontEnd.git
```

### 2. Acessar diretório:
```bash
cd ProtocoLab-Frontend
```

### 3. Instalar dependências:
```bash
npm install
```

### 4. Rodar projeto:
```bash
npm run dev
```


## 📐 Arquitetura do projeto

### O projeto segue arquitetura em camadas:
- api → responsável por exportar as chamadas de API.
- components → components reutilizáveis do projeto (Ex: deleteBtn).
- contexts → responsável pelo context da aplicação (salvar usuário logado).
- features → responsável pelos componentes das features da aplicação (Ex: Dashboard).
- hooks → hook para implementar context.
- locales → responsável pela internacionalização em: pt-br, en, es.
- mocks → utilizado para testes estáticos.
- pages → responsável pelas chamadas das features.
- utils → utilitários do sistema (gerar senha, rotas, rotas privadas)

---

## 📌 ToDo
- Notificações em tempo real (WebSocket)
- Sistema de anexos em tickets
- Histórico de alterações em tickets
- Permissões mais granulares por roles
- Sistema de auditoria (logs de ações)
- Notificações por email
- Relatórios em PDF e CSV
