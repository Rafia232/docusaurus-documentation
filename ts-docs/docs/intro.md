---
id: intro
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


## Getting Started

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 1 | **[Installation Manual](/docs/installation-manual)** | Provides the required steps for installing, configuring, and preparing the platform for use. |
| 2 | **[Local Run Guide](/docs/local-run-guide)** | Provides a step-by-step local setup path for running the platform and dependencies in a development environment. |
| 3 | **[Administration & Configuration Guide](/docs/admin-configuration-guide)** | Covers organization setup, regions, locations, users, roles, permissions, email configuration, automation rules, categories, applications, and priorities. |

## User Operations

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 4 | **[Role-Based User Guides](/docs/role-based-user-guide)** | Provides instructions for each platform user type.<br /><br />**[4.1 Facility User](/docs/role-based-user-guide#41-facility-user)**<br />**[4.2 Regional User](/docs/role-based-user-guide#42-regional-user)**<br />**[4.3 National User](/docs/role-based-user-guide#43-national-user)**<br />**[4.4 Management User](/docs/role-based-user-guide#44-management-user)**<br />**[4.5 Administrator](/docs/role-based-user-guide#45-administrator)** |
| 5 | **[Dashboards](/docs/dashboard)** | Service monitoring and reporting across four dashboards.<br /><br />**[5.1 Technician Dashboard](/docs/dashboard#51-technician-dashboard--regional-user)**<br />**[5.2 Regional Dashboard](/docs/dashboard#52-regional-dashboard--regional-user)**<br />**[5.3 Management Dashboard](/docs/dashboard#53-management-dashboard--administrator)**<br />**[5.4 Executive Dashboard](/docs/dashboard#54-executive-dashboard)** |
| 6 | **[Reports](/docs/reports)** | Describes the available ticket, incident, technician, facility, and SLA reports.<br /><br />**[6.1 Ticket Log](/docs/reports#61-ticket-log)**<br />**[6.2 Incident Reports](/docs/reports#62-incident-reports)**<br />**[6.3 Technician Reports](/docs/reports#63-technician-reports)**<br />**[6.4 Facility Reports](/docs/reports#64-facility-reports)**<br />**[6.5 SLA Reports](/docs/reports#65-sla-reports)** |

## Technical Documentation

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 7 | **[Security Architecture](/docs/security-architecture)** | Documents authentication, authorization, API gateway security, inter-service communication, event-stream protection, audit-log integrity, and secure attachment access. |
| 8 | **[System Architecture & Technical Design](/docs/system-architecture-technical-design)** | Documents the platform architecture, microservices, system components, technical design, communication patterns, and application structure. |
| 9 | **[REST API Specifications](/docs/api-specifications)** | Provides details of the available REST APIs, endpoints, request parameters, responses, authentication requirements, and error handling. |
| 10 | **[API / Integration Documentation](/docs/integrations)** | Explains external integrations, service communication, event exchange, third-party services, and integration requirements. |

## Handover & Readiness

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 11 | **[Source Code Handover & Readiness](/docs/code-transfer-readiness)** | Covers source-code handover, repository structure, environment requirements, dependencies, deployment readiness, and transfer validation. |

## Operations & Support

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 12.1 | **[Ticket Lifecycle](/docs/ticket-lifecycle-and-journey)** | Explains the complete ticket journey from creation and assignment through investigation, resolution, closure, and reporting. |
| 12.2 | **[Process Workflows](/docs/process-workflows)** | Documents the operational workflows and support procedures used to manage tickets and daily platform activities. |

## Technical Reference

| Sequence | Documentation Section | Included Content |
|:---:|---|---|
| 13.1 | **[Data Architecture](/docs/data-architecture)** | Documents the platform data model, database structure, relationships, data flow, storage, and data-management considerations. |
| 13.2 | **[Deployment & Testing](/docs/deployment-and-testing)** | Covers deployment environments, deployment procedures, testing approaches, validation activities, and release-readiness requirements. |
| 13.3 | **[Risk Matrix](/docs/acceptance-criteria-and-future)** | Documents operational and technical risks, impact levels, probability, and mitigation strategies. |
| 13.4 | **[Technical Appendix & Glossary](/docs/technical-appendix-and-glossary)** | Provides supplementary technical references, abbreviations, definitions, terminology, and supporting platform information. |



---

## Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
