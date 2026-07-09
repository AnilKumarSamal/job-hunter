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

export async function createJobs(jobs) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const inserted = [];

    for (const job of jobs) {
      const { title, company, location, url, description, source, job_hash } =
        job;

      const result = await client.query(
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

      inserted.push(result.rows[0]);
    }

    await client.query("COMMIT");

    return {
      success: true,
      inserted: inserted.length,
    };
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}
