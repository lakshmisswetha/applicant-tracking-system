import { IJob } from "../types/jobTypes";
import * as jobRepository from "../repository/jobRepository";

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

export const getJobById = async (jobId: number) => {
    try {
        const job = await jobRepository.getJobById(jobId);
        if (!job) {
            console.error("Job fetching failed");
        }
        return job;
    } catch (err) {
        console.error("Unexpected error in job service: ", err);
        throw new Error("Job fetching failed");
    }
};

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
