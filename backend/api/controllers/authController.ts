import { Request, Response } from "express";
import { signup } from "../services/signup";
import { ZodError } from "zod";

export const handleSignup = async (req: Request, res: Response) => {
    try {
        const newUser = await signup(req.body);
        res.status(201).json({ status: true, user: newUser, message: "User Created Successfully." });
    } catch (err) {
        if (err instanceof ZodError) {
            const errorMessages = err.errors.map((e) => e.message);
            res.status(400).json({ status: false, error: errorMessages });
        }
        console.error("Error in handleSignup", err);
        res.status(500).json({ status: false, error: "Internal Server Error" });
    }
};
