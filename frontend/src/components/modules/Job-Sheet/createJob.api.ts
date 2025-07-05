import { API_BASE_URL } from "@/lib/utils";

export const createJob = async (jobData: Record<string, any>) => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`${API_BASE_URL}/job/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(jobData),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.status) {
            throw new Error(data.message || "Failed to create job.");
        }
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while creating job.");
    }
};
