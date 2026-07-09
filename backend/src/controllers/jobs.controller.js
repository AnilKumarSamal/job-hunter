import * as jobsService from "../services/jobs.service.js";

export async function createJob(req, res) {
  try {
    const job = await jobsService.createJob(req.body);

    return res.status(201).json(job);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}

export async function getJobs(req, res) {
  try {
    const jobs = await jobsService.getJobs();

    return res.json(jobs);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}

export async function createJobs(req, res) {
  try {
    const jobs = await jobsService.createJobs(req.body);

    return res.status(201).json(jobs);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
}
