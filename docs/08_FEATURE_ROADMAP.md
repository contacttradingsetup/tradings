# Feature Roadmap

Version: 1.0

---

# Vision

Tradings should evolve from a dashboard into a complete professional trading platform.

---

# Phase 1

Foundation

- Authentication
- Dashboard
- Responsive Layout
- Design System
- Watchlist
- Portfolio
- TradingView Chart

---

# Phase 2

Market

- Market Overview
- Market Search
- Top Movers
- Trending Coins
- Market Categories
- Market Heatmap

---

# Phase 3

Trading

- Spot Trading
- Futures Trading
- Order Book
- Order History
- Open Orders
- Positions
- Trade History

---

# Phase 4

Portfolio

- Holdings
- Allocation
- Performance
- Profit & Loss
- Asset Analytics

---

# Phase 5

News & Research

- Financial News
- Economic Calendar
- Fear & Greed Index
- Market Sentiment
- Research Articles

---

# Phase 6

Alerts

- Price Alerts
- Volume Alerts
- Technical Alerts
- Push Notifications

---

# Phase 7

AI

- AI Market Summary
- AI Portfolio Analysis
- AI Risk Analysis
- AI Trading Assistant

---

# Phase 8

Professional Tools

- Multi Chart
- Screeners
- Strategy Builder
- Indicators
- Backtesting

---

# Phase 9

Enterprise

- Teams
- Shared Watchlists
- Audit Logs
- Permissions

---

# Long-Term Goal

Tradings should become a complete financial operating system.

Every new feature must move the project closer to this vision.

---

# Deployment & Infrastructure

**Keep it simple. Do not over-engineer.**

| Layer | Technology | Notes |
|---|---|---|
| Frontend | Next.js 16 | `npm run dev` for local development |
| Data | Mock services (`services/mock/data.ts`) | Built-in, no external API needed |
| Hosting | Cloudflare Pages | Connected to GitHub, auto-deploys on `git push` |
| Domain | `tradings.ltd` | Pointed to Cloudflare Pages |

**Rules:**
- No separate backend API unless absolutely necessary
- No OpenNext, no Wrangler, no Workers unless Cloudflare Pages is unavailable
- `git push` is the only deploy step
- Mock data is sufficient until real API is needed
- All data fetching goes through `services/api/*.ts` → mock fallback pattern