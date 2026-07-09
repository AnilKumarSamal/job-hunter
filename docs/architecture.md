# Job Hunter Architecture

## Goal

Job Hunter is a production-grade backend platform that automates job discovery, AI-based resume matching, and application tracking.

The project is designed to demonstrate production backend engineering using Node.js, PostgreSQL, Docker, n8n, Redis, Kubernetes, GitHub Actions, Terraform, Prometheus, and Grafana.

---

# High-Level Architecture

                    +----------------+
                    |   React UI     |
                    +-------+--------+
                            |
                            |
                    REST APIs
                            |
                            ▼
                  +------------------+
                  |  Node.js Backend |
                  +------------------+
                     |     |      |
                     |     |      |
             PostgreSQL  Redis   n8n
                     |             |
                     |             |
                     |         AI Services
                     |             |
                     +-------------+
                           |
                    Google Sheets

---

## Responsibilities

### Node.js Backend

The backend owns all business logic.

Responsibilities:

- Job Management
- Resume Analysis
- AI Integration
- Authentication
- CRUD APIs
- Database Access
- Validation
- Logging

---

### PostgreSQL

Primary database.

Stores:

- Jobs
- Companies
- Applications
- AI Scores
- Resume Versions

---

### Redis

Used for

- Caching
- Rate Limiting
- Queue Support
- Session Storage (future)

---

### n8n

n8n is used only for workflow orchestration.

Responsibilities:

- Schedule searches
- Call backend APIs
- Trigger AI analysis
- Send notifications
- Export data

Business logic always remains inside the backend.

---

### Google Sheets

Google Sheets is used only as a reporting/export layer.

It is NOT the source of truth.

---

# Engineering Principles

- Clean Architecture
- Separation of Concerns
- Layered Design
- RESTful APIs
- Docker First
- Infrastructure as Code
- Observability
- CI/CD
- Incremental Development

---

# Folder Structure

backend/
src/
config/
controllers/
middleware/
repositories/
routes/
services/
utils/
logger/

---

# Sprint Roadmap

Sprint 1

- Backend
- Docker
- PostgreSQL
- Health API

Sprint 2

- Job APIs

Sprint 3

- AI Resume Matching

Sprint 4

- n8n Integration

Sprint 5

- Dashboard

Sprint 6

- Redis

Sprint 7

- GitHub Actions

Sprint 8

- Kubernetes

Sprint 9

- Monitoring

Sprint 10

- Terraform
