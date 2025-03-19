import bcrypt from "bcrypt";
import { userValidationSchema } from "../validations/userValidation";
import { createUser, findUserByEmail } from "../repository/userRepository";
import { ZodError } from "zod";

export const signup = async (userData: any) => {
    try {
        const { username, email, password } = userValidationSchema.parse(userData);

        const userExists = await findUserByEmail(email);
        if (userExists) throw new Error("email already exists");

        const hashedPassword = await bcrypt.hash(password, 10);

        return await createUser(username, email, hashedPassword);
    } catch (err) {
        if (err instanceof ZodError) {
            console.error(
                "Error in signup service: ",
                err.errors.map((e) => e.message)
            );
            throw err;
        }
        console.error("Unexpected error in Signup service.");
    }
};
