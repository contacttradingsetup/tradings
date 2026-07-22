// ── Worker Environment Types ──

import type { DurableObjectNamespace } from "@cloudflare/workers-types";
import type { PriceHub } from "../durable/PriceHub";

export interface Env {
  ENVIRONMENT?: string;
  DB?: D1Database;
  STORAGE?: R2Bucket;
  PRICE_HUB: DurableObjectNamespace<PriceHub>;
}
