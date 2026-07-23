# Smart Student Wallet AI

# API Documentation

Version: 1.0

---

## Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

PUT /api/auth/profile

---

## Wallet

GET /api/wallet

PUT /api/wallet/add-money

---

## Transactions

POST /api/transactions

GET /api/transactions

GET /api/transactions/:id

PUT /api/transactions/:id

DELETE /api/transactions/:id

---

## Categories

GET /api/categories

POST /api/categories

PUT /api/categories/:id

DELETE /api/categories/:id

---

## Budget

POST /api/budget

GET /api/budget

PUT /api/budget

---

## Dashboard

GET /api/dashboard

---

## AI

POST /api/ai/chat

GET /api/ai/report

GET /api/ai/prediction

GET /api/ai/financial-score

---

## Response Format

Success

{
  "success": true,
  "message": "",
  "data": {}
}

Error

{
  "success": false,
  "message": "",
  "error": {}
}

---

END OF DOCUMENT