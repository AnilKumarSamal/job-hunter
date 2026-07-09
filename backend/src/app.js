import express from "express";
import jobsRoutes from "./routes/jobs.routes.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "Job Hunter API",
    version: "1.0.0",
  });
});

app.use("/jobs", jobsRoutes);

export default app;
