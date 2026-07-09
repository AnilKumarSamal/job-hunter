import express from "express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD API",
      version: "1.0.0",
      description: "CRUD API Documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};
const app = express();

// Global Middlewares
app.use(express.json());

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "Job Hunter API",
    version: "1.0.0",
  });
});

export default app;
