import express from "express";
import { handleSignup } from "../controllers/authController";

const router = express.Router();

router.post("/user/signup", handleSignup);

export default router;
