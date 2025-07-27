import { IApplication, IJob } from "../types/jobTypes";
import * as jobRepository from "../repository/jobRepository";
import { applicationValidationSchema } from "../validations/applicationValidation";
import { ZodError } from "zod";

export const createJob = async (jobDetails: IJob) => {
    try {
        const newJobId = await jobRepository.createJob(jobDetails);
        if (!newJobId) {
            console.error("Job creation failed");
            return null;
        }
        return newJobId;
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Job creation failed");
    }
};

export const getAllJobs = async () => {
    try {
        const jobs = await jobRepository.getAllJobs();
        if (!jobs) {
            console.error("Failed to fetch all jobs");
        }
        return jobs;
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Failed to fetch all jobs");
    }
};

// export const getJobById = async (jobId: number) => {
//     try {
//         const job = await jobRepository.getJobById(jobId);
//         if (!job) {
//             console.error("Job fetching failed");
//         }
//         return job;
//     } catch (err) {
//         console.error("Unexpected error in job service: ", err);
//         throw new Error("Job fetching failed");
//     }
// };

export const updateJob = async (jobId: number, updatedDetails: Partial<IJob>) => {
    try {
        if (!jobId) {
            throw new Error("Job id is required");
        }
        if (Object.keys(updatedDetails).length === 0) {
            console.warn(`No fields provided for updating job`);
            throw new Error("At least one field is required for update.");
        }
        const updatedJobId = jobRepository.updateJob(jobId, updatedDetails);
        if (!updatedJobId) {
            console.error("Job update failed");
            return null;
        }
        return updatedJobId;
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Job update failed");
    }
};
export const deleteJob = async (jobId: number) => {
    try {
        if (!jobId) {
            throw new Error("Job id is required");
        }
        const deletedJobId = jobRepository.deleteJob(jobId);
        if (!deletedJobId) {
            console.error("Job deletion failed");
            return null;
        }
        return deletedJobId;
    } catch (error) {
        console.error("Unexpected error in job service: ", error);
        throw new Error("Job deletion failed");
    }
};

export const applyJob = async (application: IApplication) => {
    try {
        const parsedApplication = applicationValidationSchema.parse(application);
        const candidateId = await jobRepository.applyJob(parsedApplication);
        if (!candidateId) {
            console.error("Job application failed");
            return null;
        }
        return candidateId;
    } catch (err) {
        if (err instanceof ZodError) {
            console.error(
                "Error in job service: ",
                err.errors.map((e) => e.message)
            );
            throw err;
        }
        console.error("Unexpected error in job service: ", err);
        throw new Error("Job application failed");
    }
};

// export const getAllCandidates = async (jobId: number) => {
//     try {
//         const applicants = await jobRepository.fetchAllCandidates(jobId);
//         return applicants;
//     } catch (err) {
//         console.error("Unexpected error in job service: ", err);
//         throw new Error("Failed to fetch all candidates");
//     }
// };

export const getJobWithCandidates = async (jobId: number) => {
    try {
        const job = await jobRepository.getJobById(jobId);
        const candidates = await jobRepository.fetchAllCandidates(jobId);
        return {
            job,
            candidates,
        };
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Failed to fetch job details.");
    }
};

export const updatecandidateStatus = async (applicationId: number, stage: string, status: string) => {
    try {
        const updatedId = await jobRepository.updateCandidateStatus(applicationId, stage, status);
        if (!updatedId) {
            console.error("Status update failed");
            return null;
        }
        return updatedId;
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Failed to update candidate status.");
    }
};
