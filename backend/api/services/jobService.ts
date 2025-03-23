import { IJob } from "../models/jobModel";
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
