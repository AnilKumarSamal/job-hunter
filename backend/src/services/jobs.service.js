import pool from "../config/database.js";

export async function createJob(job) {
  const { title, company, location, url, description, source, job_hash } = job;

  const result = await pool.query(
    `
    INSERT INTO jobs
    (
      title,
      company,
      location,
      url,
      description,
      source,
      job_hash
    )
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING *
    `,
    [title, company, location, url, description, source, job_hash],
  );

  return result.rows[0];
}

export async function getJobs() {
  const result = await pool.query(`
    SELECT *
    FROM jobs
    ORDER BY created_at DESC
  `);

  return result.rows;
}
