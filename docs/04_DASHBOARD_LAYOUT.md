# Dashboard Layout Specification

Version: 1.0

---

# Purpose

This document defines the physical layout of every dashboard screen.

Tradings is a workspace.

NOT an admin dashboard.

NOT a marketing website.

The dashboard should feel like software used by professional traders.

---

# Design Goals

The interface must:

- Maximize useful information
- Minimize visual noise
- Prioritize the trading chart
- Support long working sessions
- Keep navigation predictable
- Keep interaction fast

---

# Layout Structure

The desktop layout consists of three permanent regions.

+---------------------------------------------------------------+
| Sidebar |                     Main                     | Aside |
+---------------------------------------------------------------+

Sidebar

220px fixed

Main

Flexible (1fr)

Aside

320px fixed

---

# Header

Height

72px

Sticky

Contains

Search

Market Ticker

Notifications

Theme Toggle

Profile

No large logo.

No unnecessary buttons.

---

# Sidebar

Fixed width.

Always visible on desktop.

Contains

Logo

Navigation

Workspace

Settings

Profile

Logout

Navigation must remain compact.

---

# Main Workspace

This is the primary working area.

The chart always receives the highest visual priority.

Typical order:

Dashboard Header

↓

Overview Cards

↓

Trading Chart

↓

Portfolio

↓

Recent Trades

↓

News

---

# Right Panel

Fixed width.

Scrollable independently.

Contains

Watchlist

Top Movers

Fear & Greed

Market Summary

Economic Events

The right panel should always remain visible.

---

# Overview Section

Position

Top of workspace.

Contains

Portfolio Value

Daily PnL

Win Rate

Open Positions

Cards should have equal height.

---

# Trading Chart

Largest component.

Minimum desktop height

600px

Preferred height

680–760px

Must support TradingView embedding.

Never place small cards above the chart that reduce its visibility.

---

# Watchlist

Position

Top of Aside.

Displays

Symbol

Price

24h Change

Mini Sparkline

Scrollable.

Compact.

---

# Portfolio

Position

Below chart.

Contains

Holdings

Allocation

Performance

Recent PnL

---

# News

Position

Bottom section.

Displays

Latest financial news.

Compact list.

Timestamp visible.

---

# Recent Trades

Displays

Time

Pair

Side

Price

Quantity

Status

Newest first.

---

# Market Summary

Displays

BTC Dominance

Market Cap

Volume

Funding Rate

Open Interest

Updates automatically.

---

# Fear & Greed

Compact gauge.

Never oversized.

Should fit inside a single card.

---

# Visual Hierarchy

Priority 1

Trading Chart

Priority 2

Portfolio

Watchlist

Priority 3

Overview

Top Movers

Priority 4

News

Recent Activity

Nothing should visually compete with the Trading Chart.

---

# Whitespace Rules

Spacing between sections

24px

Spacing between cards

20px

Internal card padding

20px

Never create cramped layouts.

Never waste large empty spaces.

---

# Responsive Rules

Desktop

Full layout.

Tablet

Sidebar collapses.

Aside becomes drawer.

Mobile

Single-column layout.

Chart remains the highest priority.

---

# Future Modules

Reserve layout space for:

Order Book

Depth Chart

Positions

Orders

Alerts

AI Assistant

Economic Calendar

Do not design layouts that prevent future expansion.

---

# Final Principle

Every dashboard page should feel like a professional trading terminal.

Users should immediately understand where to look.

The chart is always the visual center.

Navigation is always predictable.

Information is always prioritized over decoration.