import { eq } from "drizzle-orm";
import db from "../config/db";
import { IUser } from "../types";
import { users } from "./schemas/usersSchema";

export const findUserByEmail = async (email: string): Promise<boolean> => {
    try {
        const user = await db.select({ userId: users.userId }).from(users).where(eq(users.email, email));
        return user.length > 0;
    } catch (err) {
        console.error("Error finding user: ", err);
        throw new Error("Database error: Unable to find user.");
    }
};

export const getUserDetailsByEmail = async (email: string): Promise<IUser | null> => {
    try {
        const user = await db
            .select({ userId: users.userId, username: users.username, email: users.email, password: users.password })
            .from(users)
            .where(eq(users.email, email));
        return user.length > 0 ? user[0] : null;
    } catch (err) {
        console.error("Error fetching user details: ", err);
        throw new Error("Database error: Unable to fetch user details");
    }
};

export const createUser = async (username: string, email: string, password: string): Promise<number> => {
    try {
        const user = await db.insert(users).values({ username, email, password }).returning({ userId: users.userId });
        return user[0].userId;
    } catch (err) {
        console.error("Error creating user: ", err);
        throw new Error("Database error: Unable to create user");
    }
};
