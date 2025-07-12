import { API_BASE_URL } from "@/lib/utils";
import { Job } from "@/types/job";

export const fetchJobById = async (jobId: string): Promise<{ status: boolean; data: Job }> => {
    const token = localStorage.getItem("token");

    try {
        const res = await fetch(`${API_BASE_URL}/job/get/${jobId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!res.ok) throw new Error("Failed to fetch job");
        return res.json();
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while fetching job.");
    }
};

export const editJob = async (job: Job) => {
    const token = localStorage.getItem("token");
    const { updatedAt, createdAt, ...safeJob } = job;

    try {
        const response = await fetch(`${API_BASE_URL}/job/update/${job.jobId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(safeJob),
        });

        if (!response.ok) throw new Error("Failed to edit job");
        return response.json();
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while editing job.");
    }
};
