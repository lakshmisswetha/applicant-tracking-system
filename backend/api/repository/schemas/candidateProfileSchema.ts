import { pgTable, text, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { users } from "./userSchema";

export const candidateProfile = pgTable("candidate_profiles", {
    userId: integer("user_id")
        .notNull()
        .references(() => users.userId),
    fullname: text("fullname").notNull(),
    phone: text("phone").notNull(),
    education: jsonb("education").notNull(),
    experience: jsonb("experience").notNull(),
    skills: jsonb("skills").notNull(),
    status: text("status"),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()),
});
