import { Request, Response } from "express";
import { login, signup } from "../services/userService";
import { ZodError } from "zod";

export const handleSignup = async (req: Request, res: Response) => {
    try {
        const newUser = await signup(req.body);
        res.status(201).json({ status: true, user: newUser, message: "User Created Successfully." });
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).json({ status: false, error: "Validation error" });
        } else {
            console.error("Error in signup handler", err);
            res.status(500).json({ status: false, error: "Internal Server Error" });
        }
    }
};

export const handleLogin = async (req: Request, res: Response) => {
    try {
        const loginResponse = await login(req.body);
        res.status(200).json({
            status: true,
            userId: loginResponse.userId,
            accessToken: loginResponse.accessToken,
            refreshToken: loginResponse.refreshToken,
        });
    } catch (err) {
        if (err instanceof ZodError) {
            res.status(400).json({ status: false, error: "Validation error" });
        } else {
            console.error("Error in login handler", err);
            res.status(500).json({ status: false, error: "Internal Server Error" });
        }
    }
};
