import { Request, Response, NextFunction } from "express";
import { validateAccessToken } from "../utils/helper";

export interface AuthenticatedRequest extends Request {
    userId?: number;
    role?: "admin" | "candidate";
}

export const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(403).json({ error: "Authorization header is required" });
        return;
    }
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
        res.status(401).json({ error: "Access token is missing" });
        return;
    }
    try {
        const decoded = validateAccessToken(accessToken);
        console.log("decoded valuse is: ", decoded);
        if (!decoded) {
            res.status(401).json({ error: "Invalid access token" });
            return;
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    } catch {
        res.status(401).json({ error: "Access token verification failed" });
    }
};
