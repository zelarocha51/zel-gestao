# 🟢 ZEL-STORE - PLATAFORMA E-COMMERCE COMPLETA

Sistema de e-commerce profissional com **React**, **Node.js**, **PostgreSQL**, integrações de pagamento (**Stripe**, **Mercado Pago**, **Pix**), **WhatsApp**, **Blog**, **Admin Dashboard** e muito mais!

---

## 📋 ÍNDICE

- [Requisitos](#requisitos)
- [Instalação Local](#instalação-local)
- [Configuração](#configuração)
- [Rodando o Projeto](#rodando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## ✅ REQUISITOS

- **Node.js** 18+ ([download](https://nodejs.org))
- **PostgreSQL** 14+ ([download](https://www.postgresql.org))
- **Redis** (opcional, para cache)
- **Docker** (recomendado para ambiente isolado)
- **Git**

---

## 🚀 INSTALAÇÃO LOCAL

### Opção 1: Com Docker (Recomendado)

```bash
# 1. Clone o repositório
git clone <seu-repo-url>
cd zel-store-project

# 2. Crie o arquivo .env
cp config/.env.example .env

# 3. Suba os containers
docker-compose up -d

# 4. Execute as migrações do banco
docker-compose exec backend npx prisma migrate dev

# 5. Acesse a aplicação
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
# PgAdmin: http://localhost:5050
```

### Opção 2: Instalação Manual

```bash
# BACKEND
cd backend
npm install
npx prisma migrate dev
npm run dev

# FRONTEND (em outro terminal)
cd frontend
npm install
npm start
```

---

## ⚙️ CONFIGURAÇÃO

### 1. Criar arquivo `.env` na raiz do projeto

```bash
cp config/.env.example .env
```

### 2. Configurar variáveis obrigatórias

```env
# Database
DATABASE_URL="postgresql://zelstore:zelstore123@localhost:5432/zel_store"

# JWT
JWT_SECRET=sua_chave_super_secreta_aqui

# Stripe (https://stripe.com/dashboard)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...

# Mercado Pago (https://www.mercadopago.com/developers)
MERCADO_PAGO_TOKEN=APP_USR_...

# WhatsApp (https://developers.facebook.com)
WHATSAPP_PHONE_ID=seu_phone_id
WHATSAPP_TOKEN=seu_token
```

---

## 🏃 RODANDO O PROJETO

### Com Docker

```bash
# Tudo junto
docker-compose up -d

# Ver logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Parar
docker-compose down
```

### Sem Docker

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# API rodando em http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# App rodando em http://localhost:3000
```

---

## 📁 ESTRUTURA DO PROJETO

```
zel-store-project/
├── backend/
│   ├── server.js                 # API principal
│   ├── package.json
│   └── [rotas de autenticação, produtos, pagamentos, etc]
│
├── frontend/
│   ├── App.jsx                   # Componente principal
│   ├── package.json
│   └── [componentes React]
│
├── database/
│   └── schema.prisma             # Modelo de dados (ORM)
│
├── config/
│   └── .env.example              # Template de variáveis
│
├── docker-compose.yml            # Orquestração de containers
├── README.md                      # Este arquivo
└── docs/                          # Documentação adicional
```

---

## 🔗 API ENDPOINTS

### Autenticação
```bash
POST   /api/auth/register         # Registrar novo usuário
POST   /api/auth/login            # Fazer login
GET    /api/auth/me               # Dados do usuário logado
```

### Produtos
```bash
GET    /api/products              # Listar produtos
GET    /api/products/:id          # Detalhe do produto
POST   /api/products              # Criar produto (admin)
PUT    /api/products/:id          # Editar produto (admin)
DELETE /api/products/:id          # Deletar produto (admin)
```

### Carrinho & Pedidos
```bash
POST   /api/orders                # Criar pedido
GET    /api/orders                # Listar pedidos do usuário
GET    /api/orders/:id            # Detalhe do pedido
```

### Pagamentos
```bash
POST   /api/payments/stripe       # Processar pagamento Stripe
POST   /api/payments/mercadopago  # Processar pagamento MP
POST   /api/payments/pix          # Gerar QR Code Pix
```

### Blog
```bash
GET    /api/blog                  # Listar posts
POST   /api/blog                  # Criar post (admin)
GET    /api/blog/:slug            # Ler artigo completo
```

### Cupons
```bash
POST   /api/coupons/validate      # Validar cupom
```

---

## 🌍 DEPLOYMENT

### Deploy Backend (Railway ou Render)

#### Railway
```bash
# 1. Crie uma conta em railway.app
# 2. Conecte seu GitHub
# 3. Selecione este repositório
# 4. Configure as variáveis de ambiente
# 5. Deploy automático!
```

#### Render
```bash
# 1. Connect GitHub repo
# 2. Create Web Service
# 3. Set environment variables
# 4. Deploy!

# Build Command:
npm install && npx prisma migrate deploy

# Start Command:
npm start
```

### Deploy Frontend (Vercel)

```bash
# 1. Instale Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Configure variáveis de ambiente no Vercel dashboard
REACT_APP_API_URL=https://seu-backend.com/api
```

### Deploy Full Stack (Docker + Railway)

```bash
# Railway reconhece docker-compose.yml automaticamente
git push
# Deploy automático!
```

---

## 🐛 TROUBLESHOOTING

### Erro: "Connection refused" no banco de dados

```bash
# Verifique se PostgreSQL está rodando
docker-compose ps

# Se não estiver, inicie
docker-compose up -d postgres

# Teste a conexão
docker-compose exec postgres psql -U zelstore -d zel_store
```

### Erro: "Port already in use"

```bash
# Encontre e mate o processo
lsof -i :3000
lsof -i :3001
lsof -i :5432

# Ou use Docker com portas diferentes
docker-compose down
# Edite docker-compose.yml e mude as portas
docker-compose up -d
```

### Erro: "JWT Secret not set"

```bash
# Verifique seu .env
cat .env | grep JWT_SECRET

# Se não existir, adicione:
JWT_SECRET=sua_chave_aleatoria_muito_secreta
```

### Erro ao fazer login

```bash
# Verifique se o backend está rodando
curl http://localhost:3001/api/health

# Verifique os logs
docker-compose logs backend
```

---

## 📚 DOCUMENTAÇÃO ADICIONAL

### Integração com Stripe
Veja [docs/STRIPE_SETUP.md](docs/STRIPE_SETUP.md)

### Integração com WhatsApp
Veja [docs/WHATSAPP_SETUP.md](docs/WHATSAPP_SETUP.md)

### Guia de Admin
Veja [docs/ADMIN_GUIDE.md](docs/ADMIN_GUIDE.md)

---

## 🤝 CONTRIBUINDO

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📞 SUPORTE

- **Email**: suporte@zelstore.com
- **WhatsApp**: +55 (11) 99999-9999
- **Discord**: [Discord Server](https://discord.gg/zelstore)
- **Issues**: GitHub Issues

---

## 📄 LICENÇA

MIT License - veja [LICENSE.md](LICENSE.md)

---

## 🎯 ROADMAP

- [ ] App Mobile (React Native)
- [ ] Sistema de Afiliados
- [ ] Inteligência Artificial (IA Criativa)
- [ ] Multi-idioma
- [ ] Marketplace Integrado
- [ ] Analytics Avançado
- [ ] Integração SAP/ERP
- [ ] Blockchain para NFTs

---

## 🌟 CRÉDITOS

Desenvolvido com ❤️ pelo time Zel-Store

---

**Última atualização:** Junho 2025  
**Versão:** 1.0.0
