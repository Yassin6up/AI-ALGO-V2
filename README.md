# NEOALGO AI Platform

A production-ready AI trading bot platform with a futuristic command-deck UI and a secure Express + MySQL backend.

## Tech Stack

**Frontend**
- React + Vite + TypeScript
- TailwindCSS design system
- React Router, React Query, Zustand
- React Hook Form + Zod
- Recharts, Framer Motion

**Backend**
- Node.js + Express + TypeScript
- MySQL + Prisma ORM
- JWT auth (access + refresh)
- bcrypt password hashing
- Zod validation
- Helmet, CORS, rate limiting

## Local Setup

### 1) Database
```bash
cp backend/.env.example backend/.env
```
Update `DATABASE_URL` if needed.

Optional Docker Compose for MySQL:
```bash
docker compose up -d
```

### 2) Backend
```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

### 3) Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:4000`.

## API Overview
Base URL: `/api`

Auth:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/me`

Wallets:
- `GET /api/wallets`
- `POST /api/wallets/transfer`
- `POST /api/wallets/transfer-user`

Bot:
- `POST /api/bot/activate`
- `GET /api/bot/report`

Invest:
- `POST /api/invest`
- `GET /api/invest/report`

Deposit:
- `POST /api/deposit/create`
- `GET /api/deposit/history`

Withdraw:
- `POST /api/withdraw/income`
- `POST /api/withdraw/capital`
- `GET /api/withdraw/report`

Income:
- `GET /api/income/affiliate`
- `GET /api/income/trading`
- `GET /api/income/summary`

Wallet address + OTP:
- `POST /api/wallet-address/send-otp`
- `POST /api/wallet-address/verify-otp`
- `POST /api/wallet-address/add`
- `GET /api/wallet-address/list`

## Demo Users
Seeded accounts (password: `Neoalgo@123`):
- `admin@neoalgo.ai`
- `nova@neoalgo.ai`
- `kai@neoalgo.ai`
