import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
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
    appliedAt: timestamp("applied_at").defaultNow(),
});
