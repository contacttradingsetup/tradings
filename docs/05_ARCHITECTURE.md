# Architecture

Version: 1.0

---

# Purpose

This document defines the software architecture of Tradings.

The architecture must remain scalable, maintainable, testable, and suitable for long-term development.

Architecture decisions should prioritize simplicity, separation of concerns, and reusability.

---

# Core Principles

1. Separation of Concerns
2. Reusable Components
3. Feature Isolation
4. Strong Type Safety
5. Performance First
6. Cloudflare Native
7. Desktop First

---

# Technology Stack

Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

Backend

- Cloudflare Workers
- Hono

Database

- Cloudflare D1
- Drizzle ORM

Storage

- Cloudflare R2

Authentication

- Better Auth

Deployment

- GitHub
- Cloudflare

---

# Folder Structure

app/

components/

features/

hooks/

lib/

services/

store/

types/

utils/

styles/

docs/

public/

workers/

Never place business logic inside UI components.

---

# Responsibilities

app/

Routing only.

components/

Reusable UI only.

features/

Feature-specific UI and business logic.

hooks/

Reusable React hooks.

services/

API communication.

lib/

Shared utilities.

types/

Shared TypeScript types.

store/

Global state.

utils/

Pure helper functions.

workers/

Cloudflare backend.

---

# Dependency Rules

Allowed

pages/app

↓

features

↓

services

↓

workers/API

↓

database

Components may depend on:

hooks

types

utils

lib

Components must not depend on database logic.

---

# State Management

Prefer:

React Server Components

Local State

Context

Global Store only when truly necessary.

Avoid unnecessary global state.

---

# API Design

Every endpoint must:

Validate input.

Return typed response.

Return predictable errors.

Never expose internal implementation.

---

# Error Handling

Every service must:

Handle loading.

Handle empty state.

Handle error state.

Handle retry.

---

# Security

Validate every request.

Never trust client input.

Never expose secrets.

Use environment variables.

---

# Performance

Lazy load large components.

Use dynamic imports when appropriate.

Optimize images.

Avoid unnecessary client components.

---

# Scalability

Architecture must support:

100+ pages

500+ components

Multiple developers

Long-term maintenance

---

# Final Rule

Architecture must always be easier after a refactor, never more complicated.