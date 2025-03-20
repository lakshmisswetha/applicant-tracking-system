import z from "zod";

export const userValidationSchema = z.object({
    username: z.string().min(3, "Username must be atleast 3 characters long."),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be atleast 6 characters long"),
});

export const loginValidationSchema = z.object({
    email: z.string().email("Invalid email format"),
});
