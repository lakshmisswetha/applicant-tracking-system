import { LoginSchema, SignupSchema } from "@/schemas/auth.schema";
import { API_BASE_URL } from "@/lib/utils";

export const signupUser = async (payload: SignupSchema) => {
    const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed.");
    }

    return response.json();
};

export const loginUser = async (payload: LoginSchema) => {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
    }

    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("role", data.role);
    return data;
};
