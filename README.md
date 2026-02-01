# NEOALGO AI Platform

A production-ready AI trading bot platform with a futuristic, premium fintech interface and a secure Node.js + MySQL backend.

## Stack

**Frontend**
- React (Vite) + TypeScript
- TailwindCSS + Framer Motion
- React Router + TanStack Query + Zustand
- React Hook Form + Zod
- Recharts

**Backend**
- Node.js + Express
- MySQL + Prisma
- JWT auth (access/refresh)
- Zod validation, bcrypt hashing
- Helmet, CORS, rate limiting

## Setup

### 1) Frontend

```bash
cd frontend
npm install
npm run dev
```

### 2) Backend

```bash
cd backend
cp .env.example .env
npm install
npm run prisma:generate
npm run prisma:migrate
npm run seed
npm run dev
```

## Database Schema

See `backend/prisma/schema.prisma` for the full schema, indexes, and enums.

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/wallets`
- `POST /api/wallets/transfer`
- `POST /api/wallets/transfer-user`
- `POST /api/bot/activate`
- `GET /api/bot/report`
- `POST /api/invest`
- `GET /api/invest/report`
- `POST /api/deposit/create`
- `GET /api/deposit/history`
- `POST /api/withdraw/income`
- `POST /api/withdraw/capital`
- `GET /api/withdraw/report`
- `GET /api/income/affiliate`
- `GET /api/income/trading`
- `GET /api/income/summary`
- `POST /api/wallet-address/send-otp`
- `POST /api/wallet-address/verify-otp`
- `POST /api/wallet-address/add`
- `GET /api/wallet-address/list`

## Notes

- The frontend includes mock data for stats, charts, and tables.
- OTP endpoints are mocked but wired for UI integration.
- Seed script creates an admin and two demo users with wallets and activity logs.
