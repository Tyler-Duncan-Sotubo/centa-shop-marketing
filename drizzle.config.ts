// drizzle.config.ts
// Read-only tooling config (e.g. `drizzle-kit studio` to browse data).
// Migrations for admin_users / platform_posts are owned by backend/ —
// never run `generate` or `migrate` from here.
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: ["./src/shared/db/schema/index.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
