import { pgTable, serial, text, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { users } from "./usersSchema";
import { jobs } from "./jobsSchema";

export const applications = pgTable("applications", {
    application_id: serial("application_id").primaryKey(),
    user_id: integer("user_id")
        .notNull()
        .references(() => users.userId),
    job_id: integer("job_id")
        .notNull()
        .references(() => jobs.jobId),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    education: jsonb("education").notNull(),
    experience: jsonb("experience").notNull(),
    skills: jsonb("skills").notNull(),
    status: text("status").default("applied"),
    applied_at: timestamp("applied_at").defaultNow(),
});
