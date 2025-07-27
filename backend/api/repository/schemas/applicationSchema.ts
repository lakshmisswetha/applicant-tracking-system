import { pgTable, text, timestamp, integer, jsonb, date, serial } from "drizzle-orm/pg-core";
import { users } from "./userSchema";

import { jobs } from "./jobSchema";

export const applications = pgTable("applications", {
    applicationId: serial("application_id").primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => users.userId),
    jobId: integer("job_id")
        .notNull()
        .references(() => jobs.jobId),
    fullname: text("fullname").notNull(),
    phone: text("phone").notNull(),
    dob: date("dob"),
    education: jsonb("education"),
    experience: jsonb("experience"),
    skills: text("skills"),
    languages: text("languages"),
    location: text("location"),
    nationality: text("nationality"),
    stage: text("stage").notNull().default("application-review"),
    status: text("status").notNull().default("pending"),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()),
});
