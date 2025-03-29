import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { users } from "./usersSchema";

export const jobs = pgTable("jobs", {
    jobId: serial("job_id").primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => users.userId),
    jobTitle: text("job_title").notNull(),
    department: text("department"),
    location: text("location"),
    openings: integer("openings"),
    experience: text("experience"),
    employeeType: text("employee_type"),
    workType: text("work_type"),
    qualificationRequired: text("qualification_required"),
    salary: text("salary"),
    jobDescription: text("job_description"),
    skillsRequired: text("skills_required"),
    applicationCount: integer("application_count"),
    interviewCount: integer("interview_count"),
    documentVerificationCount: integer("document_verification_count"),
    backgroundCheckCount: integer("background_check"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date()),
});
