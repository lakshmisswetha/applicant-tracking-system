import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["admin", "candidate"]),
});

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type SignupSchema = z.infer<typeof signupSchema>;
export type SigninSchema = z.infer<typeof loginSchema>;
