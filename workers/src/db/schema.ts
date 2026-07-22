// ── Database Schema (Drizzle ORM) ──
// Phase 5: schema definition only — not yet connected to D1

import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  tier: text("tier").notNull().default("free"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const watchlists = sqliteTable("watchlists", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  symbol: text("symbol").notNull(),
  addedAt: integer("added_at", { mode: "timestamp" }).notNull(),
});

export const portfolios = sqliteTable("portfolios", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  asset: text("asset").notNull(),
  ticker: text("ticker").notNull(),
  quantity: real("quantity").notNull(),
  avgPrice: real("avg_price").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const trades = sqliteTable("trades", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  portfolioId: text("portfolio_id").notNull().references(() => portfolios.id),
  type: text("type", { enum: ["buy", "sell"] }).notNull(),
  quantity: real("quantity").notNull(),
  price: real("price").notNull(),
  executedAt: integer("executed_at", { mode: "timestamp" }).notNull(),
});
