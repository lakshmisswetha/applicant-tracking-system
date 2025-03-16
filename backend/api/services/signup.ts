import bcrypt from "bcrypt";
import { userValidationSchema } from "../validations/userValidation";
import { createUser, findUserByEmail } from "../repository/userRepository";

export const signup = async (userData: any) => {
    try {
        const { username, email, password } = userValidationSchema.parse(userData);

        const userExists = await findUserByEmail(email);
        if (userExists) throw new Error("email already exists");

        const hashedPassword = await bcrypt.hash(password, 10);

        return await createUser(username, email, hashedPassword);
    } catch (err) {
        console.error("Error in signup service: ", err);
        throw new Error();
    }
};
