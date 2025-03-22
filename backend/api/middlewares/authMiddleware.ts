import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { validateAccessToken } from "../utils/helper";

export interface AuthenticatedRequest extends Request {
    userId?: number;
}

export const authenticateUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({ error: "Authorization header is required" });
    }
    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) {
        return res.status(401).json({ error: "Access token is missing" });
    }
    try {
        const decoded = validateAccessToken(accessToken);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid access token" });
        }
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ error: "Access token verification failed" });
    }
};
