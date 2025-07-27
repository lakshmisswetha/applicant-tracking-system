import { z } from "zod";

export const applicationValidationSchema = z.object({
    userId: z.number(),
    jobId: z.number(),
    fullName: z.string().min(4, "Full name is required"),
    phone: z.string().min(10, "Provide valid phone number"),
    location: z.string().optional(),
    dob: z.string().optional(),
    nationality: z.string().optional(),
    languages: z.string().optional(),
    skills: z.string().optional(),

    education: z.array(
        z.object({
            institute: z.string().optional(),
            course: z.string().optional(),
            location: z.string().optional(),
            passedYear: z.string().optional(),
            passedMonth: z.string().optional(),
        })
    ),
    experience: z.array(
        z.object({
            company: z.string().optional(),
            designation: z.string().optional(),
            location: z.string().optional(),
            fromYear: z.string().optional(),
            toYear: z.string().optional(),
            jobDescription: z.string().optional(),
        })
    ),
});
