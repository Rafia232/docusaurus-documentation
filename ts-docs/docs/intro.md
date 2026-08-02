---
sidebar_position: 1
title: MoH Helpdesk Documentation Portal
---

# MoH Helpdesk Documentation Portal

Welcome to the **MoH Helpdesk Documentation Portal**. This documentation provides a complete guide for understanding, configuring, managing, and using the MoH Service Desk platform.

The portal is designed to help administrators, Facility users, Regional users, National users, Service Desk users, and technical teams quickly understand how the system works. It covers the full support process, including installation, user management, configuration, ticket creation, ticket assignment, communication, workflow tracking, reporting, security, deployment, API usage, integrations, and code transfer readiness.

Through this documentation, users can learn how to set up the platform, manage access and permissions, handle support tickets, track ticket lifecycle stages, configure workflows, and maintain the system effectively.

This guide is organized into clear sections so each user group can easily find the information they need and follow the correct process for their role.


---

## Document Directory & Navigation Guide

Use the left-hand navigation sidebar to browse the following sections of the suite:

| # | Section | Key Contents | Target Audience |
|---|---------|--------------|-----------------|
| 1 | **[Installation Manual](./12-installation-manual.md)** | Windows Server with IIS and Linux Docker deployment through Portainer | System Admins, DevOps, Implementation Teams |
| 2 | **[Role-Based User Guide](./13-role-based-user-guide.md)** | Facility, Regional, National, and Administrator responsibilities and access | Business Users, Support Leads, Trainers |
| 3 | **[Admin & Configuration Guide](./14-admin-configuration-guide.md)** | Categories, SLA, regions, lookups, user management, permissions, and notifications | System Admins and Organization Admins |
| 4 | **[Architecture / Technical Design](./15-architecture-technical-design.md)** | System context, services, data architecture, security, deployment, and operations | Architects, Developers, DevOps |
| 5 | **[REST API Specifications](./7-api-specifications.md)** | REST endpoints, payloads, enums, request parameters, and responses | Integration Teams, Backend/Frontend Developers |
| 6 | **[API / Integration Documentation](./16-integrations.md)** | REST, Kafka, SMTP, object storage, WhatsApp, and external synchronization | Integration Teams, DevOps, Security |
| 7 | **[Code Transfer Readiness](./17-code-transfer-readiness.md)** | Documentation, codebase, comments, handover, and acceptance checklist | Project Owners, Developers, Handover Teams |
| 8 | **[MoH Helpdesk Administrator Guide](./1-moh-helpdesk-administrator-guide.md)** | Existing administrator screenshots and operational walkthrough | System Admins and Organization Admins |
| 9 | **[Service Desk](./2-service-desk.md)** | Teams, categories, ticket creation, assignment, communication, tracking, and closure | Service Desk Admins, Agents and Experts |
| 10 | **[Facility User](./3-facility-user.md)** | Portal login, ticket submission, ticket tracking, replies, attachments, and notifications | Facility Users and Portal End Users |
| 11 | **[Data Architecture](./6-data-architecture.md)** | ERD, microservice table schemas, constraints, indexes, and DDL scripts | Database Administrators, Backend Developers |

---

## Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
