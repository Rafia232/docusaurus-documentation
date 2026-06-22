---
sidebar_position: 1
title: MoH Helpdesk Documentation Portal
---

# MoH Helpdesk Documentation Portal

Welcome to the comprehensive, enterprise-grade Product Documentation Suite for the **Ministry of Health (MoH) Helpdesk Management System**. This documentation acts as a combined **Business Requirements Document (BRD)**, **Product Requirements Document (PRD)**, **Functional Specification Document (FSD)**, **System Design Document (SDD)**, and **Operational Manual**.

The system is logically split into two primary operational portals:
1. **Facility User Self-Service Portal**: Used by health facility staff (e.g. Dr. Mary) to create tickets, associate devices, follow ticket statuses, and submit conversation updates.
2. **Service Desk Administration Portal**: Used by administrators, agents, and experts (Adam, Joseph, and John) to manage workflow assignments, configure teams, track audit timelines, and resolve issues.

---

## 📂 Document Directory & Navigation Guide

Use the left-hand navigation sidebar to browse the following sections of the suite:

| # | Section | Key Contents | Target Audience |
|---|---------|--------------|-----------------|
| 1 | **[Business Requirements](./1-business-requirements.md)** | Executive Summary, Vision, Objectives, Problem Statement, Scope | Executive Sponsors, PMs, Business Analysts |
| 2 | **[System Overview & Personas](./2-system-overview-and-personas.md)** | High-Level Architecture, Personas (Adam, Joseph, John, Dr. Mary), Permission Matrix | Product Owners, QA Leads, Architects |
| 3 | **[Functional Specifications](./3-functional-specifications.md)** | Portal Features list, Non-Functional Requirements, Business Rules, Validation rules | Developers, QA Engineers, Security Leads |
| 4 | **[User Stories & Use Cases](./4-user-stories-and-use-cases.md)** | Detailed User Stories (Agile format) and detailed operational Use Cases | QA Engineers, Product Owners, Developers |
| 5 | **[Journeys & Ticket Lifecycle](./5-journeys-and-lifecycle.md)** | Ticket Lifecycle States, Facility and Support Staff Journeys | UX Specialists, Operators, QA Engineers |
| 6 | **[Process Workflows](./6-process-workflows.md)** | Mermaid Flowcharts (Creation, Assignment, Reassignment, Transfers, Resolution, Email) | System Architects, Developers, Business Analysts |
| 7 | **[Data Architecture](./7-data-architecture.md)** | Mermaid ERD, Microservices Table Schemas, Constraints, Indexes, DDL Scripts | Database Administrators, Backend Developers |
| 8 | **[REST API Specifications](./8-api-specifications.md)** | REST Endpoints, Payloads, Webhooks, JSON schemas, Error validations | Integration Teams, Backend/Frontend Developers |
| 9 | **[UI/UX Specifications](./9-ui-ux-specifications.md)** | 9 Screen Layouts, UI Components list, Actions, Validations | UI/UX Designers, Frontend Developers |
| 10 | **[Reporting & Security](./10-reporting-and-security.md)** | KPIs, SLAs, mTLS authentication, JWT validation, Kafka SCRAM | IT Security, QA, Business Operations |
| 11 | **[Deployment & Testing](./11-deployment-and-testing.md)** | Kubernetes Topology, Testing Layers, QA Test Cases tables | DevOps, QA Engineers, Release Managers |
| 12 | **[Acceptance Criteria & Future Roadmap](./12-acceptance-criteria-and-future.md)** | Acceptance Criteria matrices, Risks Mitigation, Future AI & SLA roadmap | Product Owners, Support Leads, DevOps |
| 13 | **[User Manual](./13-user-manual.md)** | Self-service Portal User Guide for health facility staff (Dr. Mary) | Facility Admins, Medical Officers, End Users |
| 14 | **[Administrator Guide](./14-administrator-guide.md)** | Operational and operator configuration guide for Adam and Joseph | Helpdesk Admins, Support Leads, Operators |
| 15 | **[Technical Appendix & Glossary](./15-technical-appendix-and-glossary.md)** | Glossary of Terms, MIME formats, Kafka event payloads, Yaml deployment configurations | DevOps Teams, Support Engineers, Architects |

---

## 🛠️ Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
