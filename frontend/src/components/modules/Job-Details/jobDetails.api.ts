import { API_BASE_URL } from "@/lib/utils";
import { IApplication } from "@/types/application";
import { Job } from "@/types/job";

// export const fetchJobById = async (jobId: string): Promise<{ status: boolean; data: Job }> => {
//     const token = localStorage.getItem("token");

//     try {
//         const res = await fetch(`${API_BASE_URL}/job/get/${jobId}`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         if (!res.ok) throw new Error("Failed to fetch job");
//         return res.json();
//     } catch (error: any) {
//         throw new Error(error.message || "Unexpected error while fetching job.");
//     }
// };

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

export const applyJob = async (application: IApplication): Promise<{ candidate_id: number }> => {
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(`${API_BASE_URL}/job/application/${application.jobId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(application),
        });
        if (!response.ok) throw new Error("Failed to submit job application");
        return response.json();
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while submitting job application.");
    }
};

export const fetchJobWithCandidates = async (
    jobId: string
): Promise<{ status: boolean; data: { job: Job; candidates: IApplication[] } }> => {
    const token = localStorage.getItem("token");

    try {
        const res = await fetch(`${API_BASE_URL}/job/get/${jobId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!res.ok) throw new Error("Failed to fetch job and candidates");

        return res.json();
    } catch (error: any) {
        throw new Error(error.message || "Unexpected error while fetching job and candidates.");
    }
};

export const updateCandidateStatus = async (applicationId: number, stage: string, status: string): Promise<number> => {
    const token = localStorage.getItem("token");
    try {
        const res = await fetch(`${API_BASE_URL}/job/application/status/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ applicationId: applicationId, stage, status }),
        });
        if (!res.ok) throw new Error("Failed to update candidate status");
        return res.json();
    } catch (err: any) {
        throw new Error(err.message || "Unexpected error while updaing candidate status");
    }
};
