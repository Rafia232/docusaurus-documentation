---
sidebar_position: 1
title: MoH Helpdesk Documentation Portal
---

# MoH Helpdesk Documentation Portal

Welcome to the **MoH Helpdesk Documentation Portal**. This documentation provides a complete guide for understanding, configuring, managing, and using the MoH Service Desk platform.

The portal is designed to help administrators, Service Desk users, facility users, and technical teams quickly understand how the system works. It covers the full support process, including user management, ticket creation, ticket assignment, communication, workflow tracking, reporting, security, deployment, API usage, and self-service support.

Through this documentation, users can learn how to set up the platform, manage access and permissions, handle support tickets, track ticket lifecycle stages, configure workflows, and maintain the system effectively.

This guide is organized into clear sections so each user group can easily find the information they need and follow the correct process for their role.


---

## 📂 Document Directory & Navigation Guide

Use the left-hand navigation sidebar to browse the following sections of the suite:

| # | Section | Key Contents | Target Audience |
|---|---------|--------------|-----------------|
| 1 | **[MoH Helpdesk Administrator Guide](./1-moh-helpdesk-administrator-guide.md)** | User setup, roles, permissions, portal settings, email, automation, and facility management | System Admins and Organization Admins |
| 2 | **[Service Desk](./2-service-desk.md)** | Teams, categories, ticket creation, assignment, communication, tracking, and closure | Service Desk Admins, Agents and Experts |
| 3 | **[Facility User](./3-facility-user.md)** | Portal login, ticket submission, ticket tracking, replies, attachments, and notifications | Facility Users and Portal End Users |
| 4 | **[Journeys & Ticket Lifecycle](./4-ticket-lifecycle-and-journey.md)** | Ticket journey from creation to assignment, progress tracking, communication, overdue handling, and closure | Admins, Service Desk Teams, Facility Users |
| 5 | **[Process Workflows](./5-process-workflows.md)** | Mermaid Flowcharts (Creation, Assignment, Reassignment, Transfers, Resolution, Email) | System Architects, Developers, Business Analysts |
| 6 | **[Data Architecture](./6-data-architecture.md)** | Mermaid ERD, Microservices Table Schemas, Constraints, Indexes, DDL Scripts | Database Administrators, Backend Developers |
| 7 | **[REST API Specifications](./7-api-specifications.md)** | REST Endpoints, Payloads, Webhooks, JSON schemas, Error validations | Integration Teams, Backend/Frontend Developers |
| 8 | **[Reporting & Security](./8-reporting-and-security.md)** | KPIs, SLAs, mTLS authentication, JWT validation, Kafka SCRAM | IT Security, QA, Business Operations |
| 9 | **[Deployment & Testing](./9-deployment-and-testing.md)** | Kubernetes Topology, Testing Layers, QA Test Cases tables | DevOps, QA Engineers, Release Managers |
| 10 | **[Acceptance Criteria & Future Roadmap](./10-acceptance-criteria-and-future.md)** | Acceptance Criteria matrices, Risks Mitigation, Future AI & SLA roadmap | Product Owners, Support Leads, DevOps |
| 11 | **[Technical Appendix & Glossary](./11-technical-appendix-and-glossary.md)** | Glossary of Terms, MIME formats, Kafka event payloads, Yaml deployment configurations | DevOps Teams, Support Engineers, Architects |

---

## 🛠️ Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
