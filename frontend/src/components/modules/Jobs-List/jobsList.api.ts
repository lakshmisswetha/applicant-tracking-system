import { API_BASE_URL } from "@/lib/utils";

export const fetchAllJobs = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/job/all`, {
            method: "GET",
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch jobs.");
        }

        return data;
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while fetching jobs.");
    }
};
