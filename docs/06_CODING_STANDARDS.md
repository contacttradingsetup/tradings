# Coding Standards

Version: 1.0

---

# General Principles

Code must be:

Readable

Predictable

Maintainable

Reusable

Type Safe

---

# TypeScript

Always use TypeScript.

Never disable strict mode.

Avoid any.

Prefer explicit types.

Export shared types.

---

# React

Prefer functional components.

Prefer Server Components.

Use Client Components only when necessary.

Keep components focused.

Avoid deeply nested JSX.

---

# Next.js

Use App Router.

Prefer Server Actions when appropriate.

Avoid unnecessary API routes.

Use Metadata API.

Use Suspense where beneficial.

---

# Tailwind CSS

Never hardcode random spacing.

Never hardcode colors.

Use design tokens.

Keep class order consistent.

Extract repeated styles into reusable components.

---

# Components

Maximum responsibility:

One purpose.

Prefer composition.

Avoid massive components.

Split files when complexity grows.

---

# Naming

Components

PascalCase

Hooks

useSomething

Types

PascalCase

Interfaces

PascalCase

Files

PascalCase for components

camelCase for utilities

---

# Imports

Group imports.

External packages.

Internal modules.

Relative imports.

Remove unused imports.

---

# Comments

Comment WHY.

Do not comment WHAT.

Good code should explain itself.

---

# Error Handling

Never swallow errors.

Always provide meaningful messages.

Log only useful information.

---

# Formatting

Use Prettier.

Use ESLint.

Never disable lint rules without justification.

---

# Git

Small commits.

Clear commit messages.

No unrelated changes in one commit.

---

# Final Rule

Every commit should improve the codebase.