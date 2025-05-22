import express from "express";
import { handleLogin, handleRefreshAccessToken, handleSignup } from "../handlers/userHandlers";
import { authenticateUser } from "../middlewares/authMiddleware";
import { handleCreateJob, handleGetAllJobs, handleGetJob, handleUpdateJob } from "../handlers/jobHandlers";

const router = express.Router();

router.post("/user/signup", handleSignup);
router.post("/user/login", handleLogin);
router.get("/user/refresh", handleRefreshAccessToken);

router.post("/job/create", authenticateUser, handleCreateJob);
router.get("/job/get", authenticateUser, handleGetAllJobs);
router.get("/job/get/:jobId", authenticateUser, handleGetJob);
router.put("/job/update/:jobId", authenticateUser, handleUpdateJob);

export default router;
