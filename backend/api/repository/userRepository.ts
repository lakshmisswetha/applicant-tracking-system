import db from "../config/db";
import { IUser } from "../models/userModel";

export const findUserByEmail = async (email: string): Promise<boolean> => {
    try {
        const query = `SELECT user_id FROM users WHERE email = $1`;
        const { rows } = await db.query(query, [email]);
        return rows.length > 0;
    } catch (err) {
        console.error("Error finding user by email: ", err);
        throw new Error("Database error: Unable to check user existence");
    }
};

export const getUserDetailsByEmail = async (email: string): Promise<IUser | null> => {
    try {
        const query = `SELECT user_id, username, email, password FROM users WHERE email = $1`;
        const result = await db.query(query, [email]);
        if (result.rows.length === 0) return null;
        return result.rows[0];
    } catch (err) {
        console.error("Error fetching user by email: ", err);
        throw new Error("Database error: Unable to fetch user details");
    }
};

export const createUser = async (username: string, email: string, password: string): Promise<number> => {
    try {
        const query = `    
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING user_id;    
        `;

        const values = [username, email, password];
        const result = await db.query(query, values);
        return result.rows[0].user_id;
    } catch (err) {
        console.error("Error creating user: ", err);
        throw new Error("Database Error: Unable to create user");
    }
};
