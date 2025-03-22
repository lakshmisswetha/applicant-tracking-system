import * as jobRepository from "../repository/jobRepository";

export const createJob = async (jobData: any) => {
    return await jobRepository.createJob(jobData);
};
