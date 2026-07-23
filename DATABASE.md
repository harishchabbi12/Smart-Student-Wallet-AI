# Smart Student Wallet AI

# Database Design

Version: 1.0

---

## Collections

1. Users
2. Wallets
3. Transactions
4. Categories
5. Budgets
6. AIReports

---

# Users

- _id
- name
- email
- password
- profileImage
- walletBalance
- monthlyBudget
- createdAt
- updatedAt

---

# Wallets

- _id
- userId
- balance
- createdAt
- updatedAt

---

# Transactions

- _id
- userId
- amount
- categoryId
- receiver
- paymentMethod
- note
- type (income/expense)
- date
- createdAt
- updatedAt

---

# Categories

- _id
- name
- icon
- color
- createdAt
- updatedAt

---

# Budgets

- _id
- userId
- month
- budget
- spent
- remaining
- createdAt
- updatedAt

---

# AIReports

- _id
- userId
- month
- prediction
- financialScore
- suggestions
- createdAt
- updatedAt

---

## Relationships

User → Wallet

User → Transactions

User → Budget

User → AIReports

Category → Transactions

---

END OF DOCUMENT