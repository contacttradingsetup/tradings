# Dashboard Data Flow

Version 1.0

---

Dashboard

↓

Load User

↓

Load Portfolio

↓

Load Watchlist

↓

Load Market Data

↓

Load News

↓

Load Calendar

↓

Render Dashboard

---

Realtime Updates

Market Prices

↓

WebSocket

↓

Store

↓

Watchlist

↓

Chart

↓

Portfolio

---

Refresh Intervals

Market Prices

Realtime

Portfolio

Realtime

News

60 seconds

Fear & Greed

1 hour

Calendar

24 hours

---

Error Strategy

Retry 3x

↓

Cached Data

↓

Show Error

↓

Retry Button