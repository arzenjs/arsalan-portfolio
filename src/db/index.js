import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Lazily create one shared pool/db pair. Lazy creation matters because
// Next.js imports route modules during `next build`, when DATABASE_URL may
// not be present — a missing URL must not break the build, only the request.
let pool = null;
let db = null;

export function getDb() {
  if (db) return db;
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  pool = new Pool({ connectionString: url });
  db = drizzle(pool);
  return db;
}
