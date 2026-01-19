import express from "express";
import { triageSymptoms } from "../Controllers/aiController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();

router.post("/triage", triageSymptoms);

export default router;
