import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import * as jobService from "../services/jobService";
import { Request, Response } from "express";
import { updateStageValidation } from "../validations/updateStageValidation";

export const handleCreateJob = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (req.role !== "admin") {
            res.status(403).json({ status: false, error: "User not allowed to create jobs" });
        } else {
            const userId = req.userId;
            const jobDetails = { ...req.body, userId: userId };
            const jobId = await jobService.createJob(jobDetails);
            res.status(201).json({ status: true, message: "Job created successfully", job_id: jobId });
        }
    } catch (err) {
        console.error("Error creating job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const handleGetAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await jobService.getAllJobs();
        if (!jobs) {
            res.status(404).json({ status: false, error: "Jobs not found" });
        } else {
            res.status(200).json({ status: true, message: "Succesfully fetched all jobs", data: jobs });
        }
    } catch (err) {
        console.error("Error fetching jobs: ", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

// export const handleGetJob = async (req: Request, res: Response) => {
//     try {
//         const jobId = parseInt(req.params.jobId);
//         const job = await jobService.getJobById(jobId);
//         if (!job) {
//             res.status(404).json({ status: false, error: "Job not found" });
//         } else {
//             res.status(200).json({ status: true, data: job, message: "Job fetched successfully" });
//         }
//     } catch (err) {
//         console.error("Error fetching job details: ", err);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

export const handleUpdateJob = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (req.role !== "admin") {
            res.status(403).json({ status: false, error: "User not allowed to update jobs" });
        }
        const jobId = parseInt(req.params.jobId);
        const updatedDetails = req.body;
        const updatedJobId = await jobService.updateJob(jobId, updatedDetails);
        res.status(200).json({ status: true, message: "Job updated Successfully", job_id: updatedJobId });
    } catch (err) {
        console.error("Error updating job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const handleDeleteJob = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (req.role !== "admin") {
            res.status(403).json({ status: false, error: "User not allowed to delete job" });
        }
        const jobId = parseInt(req.params.jobId);
        const deletedJobId = await jobService.deleteJob(jobId);
        res.status(200).json({ status: true, message: "Job deleted successfully", job_id: deletedJobId });
    } catch (err) {
        console.error("Error deleting job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const handleJobApplication = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const userId = req.userId;
        const application = { ...req.body, userId: userId };
        const candidateId = await jobService.applyJob(application);
        res.status(201).json({
            status: true,
            message: "Job application submitted successfully",
            candidate_id: candidateId,
        });
    } catch (err) {
        console.error("Error applying to the job: ", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const handleGetJobDetails = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const jobId = parseInt(req.params.jobId);
        const data = await jobService.getJobWithCandidates(jobId);

        if (!data.job) {
            res.status(404).json({ status: false, message: "Job not found" });
        }

        res.status(200).json({
            status: true,
            data,
            message: "Job and candidates fetched successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};

export const handleUpdateCandidateStatus = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { applicationId, stage, status } = updateStageValidation.parse(req.body);
        const updatedId = await jobService.updatecandidateStatus(applicationId, stage, status);
        if (!updatedId) {
            res.status(400).json({ status: false, message: "Failed to update candidate status" });
        }

        res.status(200).json({
            status: true,
            message: "Candidate status updated successfully",
            application_id: updatedId,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};
