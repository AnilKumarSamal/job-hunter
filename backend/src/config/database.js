import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "jobhunter",
  password: "jobhunter123",
  database: "jobhunter",
});

export default pool;
