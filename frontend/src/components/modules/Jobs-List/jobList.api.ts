import { API_BASE_URL } from "@/lib/utils";

export const fetchAllJobs = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`${API_BASE_URL}/job/get`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.status) {
            throw new Error(data.message || "Failed to fetch jobs.");
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while fetching jobs.");
    }
};
