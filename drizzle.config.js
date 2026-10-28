import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Used only by `npx drizzle-kit push` to create the contact_messages table.
// The portfolio itself has no accounts, admin UI, or other backend surface.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.js",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@127.0.0.1:5432/app_db",
  },
});
