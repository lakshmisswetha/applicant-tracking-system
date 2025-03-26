import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    userId: serial("user_id").primaryKey(),
    username: text("username").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
