import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not set");

// Single pooled connection, reused across hot reloads in dev — mirrors
// the pattern in backend/src/infrastructure/drizzle/drizzle.module.ts,
// pointed at the same database.
const globalForDb = globalThis as unknown as { pgPool?: Pool };

const pool =
  globalForDb.pgPool ??
  new Pool({
    connectionString,
    ssl:
      process.env.PGSSL_ENABLE === "1" ? { rejectUnauthorized: false } : false,
  });

if (process.env.NODE_ENV !== "production") globalForDb.pgPool = pool;

export const db = drizzle(pool, { schema });
