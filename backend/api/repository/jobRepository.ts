import db from "../config/db";
import { jobs } from "./schemas/jobSchema";
import { eq } from "drizzle-orm";
import { IJob } from "../types";

export const createJob = async (jobDetails: IJob): Promise<number> => {
    try {
        const [newJob] = await db
            .insert(jobs)
            .values({
                userId: jobDetails.userId,
                jobTitle: jobDetails.jobTitle,
                department: jobDetails.department,
                location: jobDetails.location,
                openings: jobDetails.openings,
                experience: jobDetails.experience,
                employeeType: jobDetails.employeeType,
                workType: jobDetails.workType,
                qualificationRequired: jobDetails.qualificationRequired,
                salary: jobDetails.salary,
                jobDescription: jobDetails.jobDescription,
                skillsRequired: jobDetails.skillsRequired,
                applicationCount: 0,
                interviewCount: 0,
                documentVerificationCount: 0,
                backgroundCheckCount: 0,
                companyName: jobDetails.companyName,
            })
            .returning({ jobId: jobs.jobId });

        return newJob.jobId;
    } catch (err) {
        console.error("Error creating job: ", err);
        throw new Error("Database error: Unable to create job.");
    }
};

export const getAllJobs = async (): Promise<IJob[] | null> => {
    try {
        const allJobs = await db.select().from(jobs);
        return allJobs.length > 0 ? allJobs : null;
    } catch (err) {
        console.error("Error fetching all jobs: ", err);
        throw new Error("Database error: Unable to fetch all jobs");
    }
};

export const getJobById = async (jobId: number): Promise<IJob | null> => {
    try {
        const job = await db.select().from(jobs).where(eq(jobs.jobId, jobId));
        return job.length > 0 ? job[0] : null;
    } catch (err) {
        console.error("Error fetching job details: ", err);
        throw new Error("Database error: Unable to fetch job");
    }
};

export const updateJob = async (jobId: number, updatedDetails: Partial<IJob>): Promise<number | null> => {
    try {
        const [updatedJob] = await db
            .update(jobs)
            .set({
                ...updatedDetails,
                updatedAt: new Date(),
            })
            .where(eq(jobs.jobId, jobId))
            .returning({ jobId: jobs.jobId });

        return updatedJob ? updatedJob.jobId : null;
    } catch (err) {
        console.error("Error updating job: ", err);
        throw new Error("Database error: Unable to update job");
    }
};
