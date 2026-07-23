# Smart Student Wallet AI

# System Architecture Document

Version: 1.0

---

# 1. Architecture Overview

Smart Student Wallet AI follows a three-tier architecture.

Presentation Layer

↓

Business Logic Layer

↓

Data Layer

AI services communicate with the Business Logic Layer.

---

# 2. High-Level Architecture

                    User
                      │
                      ▼
             React Frontend (Client)
                      │
                REST API Request
                      │
                      ▼
           Node.js + Express Backend
                      │
      ┌───────────────┼───────────────┐
      ▼               ▼               ▼
 Authentication   Wallet Module   AI Module
      │               │               │
      └───────────────┼───────────────┘
                      │
                 MongoDB Atlas

---

# 3. System Components

## Frontend

Responsibilities

- User Interface
- Forms
- Dashboard
- Charts
- AI Chat Screen
- Profile
- Wallet

Technology

- React
- React Router
- Axios
- Tailwind CSS

---

## Backend

Responsibilities

- Authentication
- APIs
- Validation
- Business Logic
- AI Communication
- Database Operations

Technology

- Node.js
- Express.js

---

## Database

Responsibilities

- Store Users
- Store Transactions
- Store Budgets
- Store Categories
- Store AI Reports

Technology

- MongoDB Atlas

---

## AI Layer

Responsibilities

- Expense Prediction
- Savings Suggestions
- AI Chat
- Monthly Report
- Weekly Report
- Financial Health Score

---

# 4. Request Flow

User clicks "Pay"

↓

React sends API request

↓

Express receives request

↓

Authentication Middleware

↓

Transaction Controller

↓

MongoDB stores transaction

↓

Success Response

↓

Dashboard updates

---

# 5. AI Request Flow

User asks

"Where am I spending the most?"

↓

React

↓

Backend

↓

Fetch User Transactions

↓

Prepare AI Prompt

↓

Send to AI API

↓

Receive AI Response

↓

Return to Frontend

↓

Display Chat

---

# 6. Dashboard Flow

Login

↓

Fetch Dashboard API

↓

Wallet

↓

Transactions

↓

Budget

↓

Charts

↓

Recent Activity

↓

AI Summary

---

# 7. Folder Responsibility

client/

UI only

No database code.

No AI logic.

---

server/

Business Logic

REST APIs

Database Operations

AI Integration

---

docs/

Project Documentation

---

# 8. Module Independence

Member 1

Authentication

↓

Produces

User

JWT

Profile

---

Member 2

Wallet

↓

Produces

Transactions

Budgets

Dashboard

---

Member 3

Reads

Transactions

Budgets

↓

Generates

Predictions

Reports

Suggestions

---

# 9. Security

JWT Authentication

Password Hashing

Protected Routes

Input Validation

Error Handling

---

# 10. Deployment Architecture

React

↓

Vercel

↓

Backend

↓

Render

↓

MongoDB Atlas

---

END OF DOCUMENT