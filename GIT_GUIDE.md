# Smart Student Wallet AI

# Git Guide

Version: 1.0

---

# Branch Structure

main

- Production Ready Code

develop

- Integration Branch

feature/auth

- Authentication Module

feature/wallet

- Wallet Module

feature/ai

- AI Module

---

# Branch Rules

- Never push directly to main.
- Always work on your assigned feature branch.
- Merge feature branch into develop.
- After testing, merge develop into main.

---

# Daily Workflow

## Step 1

```bash
git pull origin main
```

## Step 2

Work on your assigned task.

## Step 3

```bash
git add .
```

## Step 4

```bash
git commit -m "Meaningful commit message"
```

Example:

- feat: add login API
- feat: add transaction model
- fix: resolve dashboard bug
- docs: update API documentation

## Step 5

```bash
git push origin feature/auth
```

(Change the branch name according to your module.)

---

# Pull Request Rules

- Create a Pull Request after completing your task.
- Another team member should review the code.
- Merge only after approval.

---

# Conflict Resolution

1. Pull latest changes.
2. Resolve merge conflicts.
3. Test the application.
4. Commit resolved changes.
5. Push again.

---

# Best Practices

- Commit small changes frequently.
- Write clear commit messages.
- Pull before starting work.
- Push after completing a feature.
- Never delete another member's code.

---

END OF DOCUMENT