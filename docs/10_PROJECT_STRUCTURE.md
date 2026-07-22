# Project Structure

Version: 1.0

---

# Root

app/
components/
features/
hooks/
lib/
services/
store/
styles/
types/
utils/
workers/
docs/
public/

---

# app

Next.js routing only.

Never place business logic here.

---

# components

Reusable UI.

No business logic.

Examples

Button

Card

Input

Modal

Badge

---

# features

Feature-specific code.

Example

dashboard

markets

portfolio

trading

news

settings

Each feature owns:

components

hooks

services

types

---

# hooks

Reusable hooks.

Never feature-specific unless inside features.

---

# services

API communication.

No UI.

No JSX.

---

# store

Global state only.

Keep it minimal.

---

# lib

Shared helpers.

Formatting.

Utilities.

Configuration.

---

# utils

Pure functions.

No React.

---

# types

Shared TypeScript definitions.

---

# workers

Cloudflare Workers backend.

No frontend code.

---

# docs

Single source of truth.

Architecture.

Design.

Engineering.

---

# Final Rule

The folder structure must become simpler over time, never more complex.