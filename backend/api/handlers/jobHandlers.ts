import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import * as jobService from "../services/jobService";
import { Request, Response } from "express";

export const handleCreateJob = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.userId;
        const jobDetails = { ...req.body, user_id: userId };
        const jobId = await jobService.createJob(jobDetails);
        res.status(201).json({ status: true, message: "Successfully created job", job_id: jobId });
    } catch (err) {
        console.error("Error creating job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const handleGetJob = async (req: Request, res: Response) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const job = await jobService.getJobById(jobId);
        if (!job) {
            res.status(404).json({ status: false, error: "Job not found" });
        }
        res.status(200).json({ status: true, job, message: "Successfully fetched job" });
    } catch (err) {
        console.error("Error fetching job details: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const handleUpdateJob = async (req: Request, res: Response) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const updatedDetails = req.body;
        const updatedJobId = await jobService.updateJob(jobId, updatedDetails);
        res.status(200).json({ status: true, message: "Successfully updated job", job_id: updatedJobId });
    } catch (err) {
        console.error("Error updating job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
