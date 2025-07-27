import db from "../config/db";
import { jobs } from "./schemas/jobSchema";
import { applications } from "./schemas/applicationSchema";
import { eq } from "drizzle-orm";
import { IApplication, IJob } from "../types";

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
                status: jobDetails.status,
                jobDescription: jobDetails.jobDescription,
                skillsRequired: jobDetails.skillsRequired,
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
        const { updatedAt, ...otherDetails } = updatedDetails;

        const [updatedJob] = await db
            .update(jobs)
            .set({
                ...otherDetails,
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

export const deleteJob = async (jobId: number): Promise<number> => {
    try {
        const result = await db.delete(jobs).where(eq(jobs.jobId, jobId));
        if ((result.rowCount ?? 0) > 0) {
            return jobId;
        }
        throw new Error("Job not found or already deleted");
    } catch (err) {
        console.error("Error deleting job: ", err);
        throw new Error("Database error: Unable to delete job");
    }
};

export const applyJob = async (application: IApplication): Promise<number> => {
    try {
        if (!application.userId) return 0;
        const newApplication = await db
            .insert(applications)
            .values({
                userId: application.userId,
                jobId: application.jobId,
                fullname: application.fullName,
                phone: application.phone,
                location: application.location,
                dob: application.dob,
                nationality: application.nationality,
                skills: application.skills,
                education: application.education,
                experience: application.experience,
                updatedAt: new Date(),
            })
            .returning({ applicationId: applications.applicationId });

        return newApplication[0].applicationId;
    } catch (err) {
        console.error("Error while applying to job: ", err);
        throw new Error("Database error: Unable to apply for the job");
    }
};

export const fetchAllCandidates = async (jobId: number): Promise<IApplication[]> => {
    try {
        const rows = await db.select().from(applications).where(eq(applications.jobId, jobId));
        const applicants: IApplication[] = rows.map((row) => ({
            applicationId: row.applicationId,
            userId: row.userId,
            jobId: row.jobId,
            fullName: row.fullname,
            phone: row.phone,
            dob: row.dob ?? "",
            education: row.education as any,
            experience: row.experience as any,
            skills: row.skills ?? "",
            languages: row.languages ?? "",
            location: row.location ?? "",
            nationality: row.nationality ?? "",
            stage: row.stage ?? "",
            status: row.status ?? "",
            updatedAt: row.updatedAt ? new Date(row.updatedAt) : null,
        }));
        return applicants;
    } catch (err) {
        console.error("Error fetching candidates: ", err);
        throw new Error("Database error: Unable to fetch candidates");
    }
};

export const updateCandidateStatus = async (applicationId: number, stage: string, status: string): Promise<number> => {
    try {
        const [updated] = await db
            .update(applications)
            .set({
                stage,
                status,
                updatedAt: new Date(),
            })
            .where(eq(applications.applicationId, applicationId))
            .returning({ applicationId: applications.applicationId });

        return updated?.applicationId ?? null;
    } catch (err) {
        console.log("Error updating candidate status: ", err);
        throw new Error("Database error: Unable to update candidate status");
    }
};
