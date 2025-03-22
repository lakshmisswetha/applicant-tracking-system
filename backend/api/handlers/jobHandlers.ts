import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import * as jobService from "../services/jobService";
import { Response } from "express";

export const handleCreateJob = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.userId;
        const jobDetails = { ...req.body, user_id: userId };
        const jobId = await jobService.createJob(jobDetails);
        res.status(201).json({ status: true, message: "Successfully created job", job_id: jobId });
        return;
    } catch (err) {
        console.error("Error creating job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
    }
};
