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

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 1 | **Installation Manual** | Provides the required steps for installing, configuring, and preparing the platform for use. |
| 2 | **Admin & Configuration Guide** | Covers organization setup, regions, locations, users, roles, permissions, email configuration, automation rules, categories, subcategories, applications, and priorities. |
| 3 | **Role-Based User Guide** | Includes detailed instructions for each platform user type.<br /><br />**3.1 Facility User**<br />**3.2 Regional User**<br />**3.3 National User**<br />**3.4 Administrator** |
| 4 | **Dashboard** | Explains the role-based dashboards and the information available to each user.<br /><br />**4.1 Technician Dashboard**<br />**4.2 Regional Dashboard**<br />**4.3 Management Dashboard**<br />**4.4 Executive Dashboard** |
| 5 | **Reports** | Describes the available ticket, incident, technician, facility, and SLA reports.<br /><br />**5.1 Tickets Log**<br />**5.2 Incident Reports**<br />**5.3 Technician Reports**<br />**5.4 Facility Reports**<br />**5.5 SLA Reports** |
| 6 | **Security Architecture** | Documents authentication, authorization, API gateway security, inter-service communication, event-stream protection, audit-log integrity, and secure attachment access. |
| 7 | **System Architecture & Technical Design** | Documents the platform architecture, microservices, system components, technical design, communication patterns, and application structure. |
| 8 | **REST API Specifications** | Provides details of the available REST APIs, endpoints, request parameters, responses, authentication requirements, and error handling. |
| 9 | **API / Integration Documentation** | Explains external integrations, service communication, event exchange, third-party services, and integration requirements. |
| 10 | **Source Code Handover & Readiness** | Covers source-code handover, repository structure, environment requirements, dependencies, deployment readiness, and transfer validation. |
| 11 | **Operations & Support Guides** | Contains operational workflows and support procedures required for managing tickets and daily platform activities.<br /><br />**11.1 Ticket Lifecycle**<br />**11.2 Process Workflows** |
| 12 | **Technical Reference** | Provides supplementary technical information covering data architecture, deployment, testing, risks, roadmap items, technical appendices, and terminology.<br /><br />**12.1 Data Architecture**<br />**12.2 Deployment & Testing**<br />**12.3 Operational & Technical Risk Matrix & Future Roadmap**<br />**12.4 Technical Appendix & Glossary** |

---

## Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
