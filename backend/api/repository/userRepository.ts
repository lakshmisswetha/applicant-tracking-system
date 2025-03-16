import db from "../config/db";

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
