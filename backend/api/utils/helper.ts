import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface JWTPayload {
    userId: number;
}

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET || !REFRESH_TOKEN_SECRET) {
    throw new Error("JWT Secrets are missing.");
}

export const generateTokens = (userId: number) => {
    const accessToken = jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
    const refreshToken = jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

    return { accessToken, refreshToken };
};

export const validateAccessToken = (accessToken: string): JWTPayload | null => {
    try {
        return jwt.verify(accessToken, ACCESS_TOKEN_SECRET) as JWTPayload;
    } catch (err) {
        console.error(err);
        throw Error("Access token verification failed");
    }
};

export const validateRefreshToken = (refreshToken: string): JWTPayload | null => {
    try {
        return jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as JWTPayload;
    } catch (err) {
        console.error(err);
        throw Error("Refresh token verification failed");
    }
};

export const refreshAccessToken = (refreshToken: string): string | null => {
    try {
        const decoded = validateRefreshToken(refreshToken);
        if (!decoded) {
            throw new Error("Invalid refresh token");
        }
        return jwt.sign({ userId: decoded.userId }, ACCESS_TOKEN_SECRET, { expiresIn: "5m" });
    } catch (err) {
        console.error(err);
        throw new Error("Error refreshing access token");
    }
};
