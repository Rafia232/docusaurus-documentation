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
| 5 | **Reports** | Describes the available operational, technician, facility, regional, national, and management reports. |
| 6 | **Architecture / Technical Design** | Documents the platform architecture, system components, technical design, and application structure. |
| 7 | **REST API Specifications** | Provides details of the available REST APIs, endpoints, request parameters, responses, and authentication requirements. |
| 8 | **API / Integration Documentation** | Explains external integrations, service communication, data exchange, and integration requirements. |
| 9 | **Code Transfer Readiness** | Covers source-code handover, repository structure, environment requirements, deployment readiness, dependencies, and transfer validation. |
| — | **Operational Guides** | Contains additional operational procedures, workflows, and support instructions required for daily platform use. |
| — | **Technical Reference** | Provides supplementary technical information, configuration references, troubleshooting guidance, and developer resources. |

---

## Technical Stack Reference

- **Backend**: .NET Core 9 Web API (CQRS Pattern via MediatR)
- **Frontend**: React SPA
- **Databases**: Partitioned PostgreSQL DBs (User DB, Ticket DB, Device DB)
- **Communication Bus**: Apache Kafka Event Stream
- **Ticket Sequential ID Format**: `#000001`, `#000002`, `#000003`...
