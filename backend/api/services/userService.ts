import bcrypt from "bcrypt";
import { loginValidationSchema, signupValidationSchema } from "../validations/userValidation";
import { createUser, findUserByEmail, getUserDetailsByEmail } from "../repository/userRepository";
import { ZodError } from "zod";
import { generateTokens } from "../utils/helper";

export const signup = async (userData: any) => {
    try {
        const { username, email, password, role } = signupValidationSchema.parse(userData);
        const userExists = await findUserByEmail(email);
        if (userExists) throw new Error("email already exists");

        const hashedPassword = await bcrypt.hash(password, 10);

        return await createUser(username, email, hashedPassword, role);
    } catch (err) {
        if (err instanceof ZodError) {
            console.error(
                "Error in signup service: ",
                err.errors.map((e) => e.message)
            );
            throw err;
        }
        console.error("Unexpected error in signup service: ", err);
        throw new Error("Signup failed");
    }
};

export const login = async (loginData: any) => {
    try {
        const { email } = loginValidationSchema.parse(loginData);

        const user = await getUserDetailsByEmail(email);
        if (!user) throw new Error("Invalid Credentials");

        const { password } = loginData;
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid Credentials");

        const { accessToken, refreshToken } = generateTokens(user.userId, user.role);

        return { userId: user.userId, role: user.role, accessToken, refreshToken };
    } catch (err) {
        if (err instanceof ZodError) {
            console.error(
                "Error in login service: ",
                err.errors.map((e) => e.message)
            );
            throw err;
        }
        console.error("Unexpected error in login service: ", err);
        throw new Error("Login Failed");
    }
};
