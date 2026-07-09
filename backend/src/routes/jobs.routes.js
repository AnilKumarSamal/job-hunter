import express from "express";
import {
  createJob,
  getJobs,
  createJobs,
} from "../controllers/jobs.controller.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getJobs);
router.post("/bulk", createJobs);
export default router;
