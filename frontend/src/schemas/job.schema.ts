import { z } from "zod";

export const jobSchema = z.object({
    jobTitle: z.string().min(1, "Job title is required"),
    companyName: z.string().min(1, "Company name is required"),
    location: z.string().min(1, "Location is required"),
    experience: z.string().min(1, "Experience is required"),
    skillsRequired: z.string().min(1, "Skills are required"),
    jobDescription: z.string().min(1, "Job description is required"),

    // Optional
    department: z.string().optional(),
    openings: z.number().min(1, "Must have at least 1 opening").optional(),
    employeeType: z.string().optional(),
    workType: z.string().optional(),
    qualificationRequired: z.string().optional(),
    salary: z.string().optional(),
});

export type JobFormSchema = z.infer<typeof jobSchema>;
