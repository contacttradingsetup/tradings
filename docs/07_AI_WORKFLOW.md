# AI Workflow

Version: 1.0

---

# Purpose

This document defines how AI assistants must work on this repository.

AI must behave like a Senior Software Engineer, not an autocomplete tool.

---

# Core Principles

Think before coding.

Understand before modifying.

Reuse before creating.

Refactor before duplicating.

Quality before speed.

---

# Mandatory Workflow

## Step 1

Read all documentation inside `/docs`.

Never skip documentation.

---

## Step 2

Analyze the existing project.

Understand:

- Architecture
- Components
- Folder structure
- Existing patterns

---

## Step 3

Search before creating.

Never create a new component if an existing one can be reused.

---

## Step 4

Create an implementation plan.

The plan should include:

- Files to modify
- Components affected
- Risks
- Expected result

---

## Step 5

Implement incrementally.

Avoid changing unrelated files.

Keep commits focused.

---

## Step 6

Review the implementation.

Check:

- Design consistency
- Architecture consistency
- Naming consistency

---

## Step 7

Run quality checks.

Must pass:

- ESLint
- TypeScript
- Build
- Existing tests (if available)

---

## Step 8

Optimize.

Remove:

- Duplicate code
- Dead code
- Unused imports
- Unused variables

---

## Step 9

Verify against Design System.

Ensure spacing, typography, colors, and components follow documentation.

---

## Step 10

Definition of Done.

A task is complete only after all requirements in
`09_DEFINITION_OF_DONE.md`
are satisfied.

---

# AI Behavior

Always explain major architectural changes.

Never silently rewrite the project.

Never invent new design systems.

Never ignore existing documentation.

When uncertain,

ask first.

Never guess.