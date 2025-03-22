import express from "express";
import { handleLogin, handleRefreshAccessToken, handleSignup } from "../handlers/userHandlers";

const router = express.Router();

router.post("/user/signup", handleSignup);
router.post("/user/login", handleLogin);
router.get("/user/refresh", handleRefreshAccessToken);

export default router;
