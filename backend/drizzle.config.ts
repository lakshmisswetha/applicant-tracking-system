import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./api/repository/schemas",
    out: "./migrations",
});
