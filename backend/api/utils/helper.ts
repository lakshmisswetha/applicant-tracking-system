import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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
