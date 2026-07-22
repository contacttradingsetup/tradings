# UI Component Specification

Version: 1.0

---

# Purpose

This document defines every reusable UI component used by Tradings.

No feature may introduce a new visual style without updating this document.

Consistency is more important than creativity.

---

# General Rules

Every component must:

- Be reusable
- Be responsive
- Support dark mode
- Be accessible
- Be fully typed with TypeScript
- Avoid duplicated Tailwind classes
- Accept className when appropriate
- Prefer composition over inheritance

---

# Card

Purpose

Display a logical group of related information.

Rules

- Radius: 10px
- Padding: 20px
- Minimal border
- No heavy shadow
- No gradient
- Background uses Surface color
- Hover only changes border color slightly

---

# Stat Card

Purpose

Display one important metric.

Contains

- Label
- Value
- Change
- Optional icon

Rules

Large number.

Small label.

Positive values use Success color.

Negative values use Danger color.

---

# Section Header

Contains

Title

Description

Optional action button

Used at the top of every section.

---

# Button

Variants

Primary

Secondary

Ghost

Danger

Rules

Height 40px

Radius 8px

Consistent typography

Never create one-off button styles.

---

# Input

Supports

Text

Search

Password

Number

Rules

Height 40px

Radius 8px

No shadow

Clear focus state

---

# Badge

Variants

Success

Warning

Danger

Info

Neutral

Compact.

Readable.

Never oversized.

---

# Sidebar

Width

220px

Contains

Logo

Navigation

Workspace Switcher

User Section

Rules

Fixed width.

No collapsing by default.

Active item uses left indicator.

Icons 18px.

Typography 14px.

---

# Header

Height

72px

Contains

Search

Market Ticker

Notification

Theme Toggle

Profile

Rules

Sticky.

Compact.

Never oversized.

---

# Market Ticker

Shows

BTC

ETH

SOL

XRP

Displays

Price

24h %

Color

Auto refresh.

Horizontal layout.

---

# Trading Chart

Primary feature.

Always receives the largest area.

Must support TradingView widget.

Must resize automatically.

---

# Watchlist

Displays

Symbol

Price

24h %

Sparkline

Rules

Compact.

Sortable.

Scrollable.

---

# Portfolio Card

Displays

Balance

PnL

Allocation

Performance

Must emphasize important values.

---

# Top Movers

Displays

Top Gainers

Top Losers

Sorted automatically.

---

# News Card

Displays

Source

Time

Title

Category

Optional thumbnail.

---

# Activity Feed

Displays

Latest trades

Deposits

Withdrawals

Orders

Newest first.

---

# Modal

Radius 12px.

Esc closes modal.

Background blur.

Keyboard accessible.

---

# Tooltip

Short.

Readable.

Never contain large paragraphs.

---

# Dropdown

Keyboard accessible.

Arrow key navigation.

Esc closes.

---

# Empty State

Contains

Illustration

Title

Description

Action

Never leave blank screens.

---

# Loading State

Use Skeleton UI.

Avoid spinners when possible.

---

# Error State

Clear explanation.

Recovery action.

Retry button.

---

# Tables

Compact.

Sticky header.

Right-align numeric values.

Support sorting.

---

# Charts

Responsive.

Smooth rendering.

Readable colors.

No decorative effects.

---

# Responsive Rules

Desktop

Primary experience.

Tablet

Simplified.

Mobile

Essential information only.

---

# Accessibility

Keyboard navigation required.

Visible focus states.

Semantic HTML.

Proper ARIA attributes where needed.

---

# Component Lifecycle

Before creating a new component:

1. Search existing components.
2. Reuse if possible.
3. Extend if necessary.
4. Create new only when justified.

Never duplicate components.