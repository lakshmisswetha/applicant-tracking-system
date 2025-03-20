import express from "express";
import { handleLogin, handleSignup } from "../handlers/userHandlers";

const router = express.Router();

router.post("/user/signup", handleSignup);
router.post("/user/login", handleLogin);

export default router;
