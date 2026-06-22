---
sidebar_position: 3
title: 2. System Overview & Personas
---

# 2. System Overview & Personas

This section details the system architecture layout, outlines target user personas, and defines the Role-Based Access Control (RBAC) permissions matrix.

---

## 2.1 System Overview

The MoH Helpdesk Management System is built as a stateless, event-driven microservices architecture to ensure high scalability and database segregation:

- **Frontend Tier**: React SPA serving a responsive self-service view and an admin panel.
- **Backend Services (.NET Core 9 Web API)**:
  - **User Service**: Manages profiles, role scopes, and support teams configuration.
  - **Ticket Service**: Manages ticket CRUD commands, CQRS query logs, and communication.
  - **Device Service**: Tracks facility device configurations, warranty logs, and links.
- **Message Bus (Apache Kafka)**: Asynchronously distributes event tasks (e.g. `TicketCreated`, `DeviceStatusUpdated`, `EmailTriggerEvent`) between services.
- **Database Layer**: Divided into independent PostgreSQL instances.

---

## 2.2 User Personas

To guide functional behavior, four core system personas are established:

### Persona 1: Service Desk Admin (Adam)
- **Role**: IT Helpdesk Administrator & Systems Manager.
- **Responsibilities**: Configures support teams, assigns leads, maps categories, imports device catalogs, monitors system audit trails, and reassigns tickets during critical bottlenecks.
- **System Scope**: Full access to all tickets, settings, databases, and configuration portals.

### Persona 2: Service Desk Agent (Joseph)
- **Role**: Frontline Triage Coordinator & Helpdesk Operator.
- **Responsibilities**: Monitors organization-wide ticket queues, validates facility details, links device codes to tickets, routes tickets when auto-routing fails, and replies to client inquiries.
- **System Scope**: Access to view and manage all organization-specific tickets, view devices, and update priorities/categories. Cannot manage teams or mappings.

### Persona 3: Service Desk Expert (John)
- **Role**: Specialized Technical Resolver (Network/Software/Hardware Expert).
- **Responsibilities**: Troubleshoots assigned issues, adds private internal technical notes to document resolutions, links device replacement status, and submits final resolution details.
- **System Scope**: Restricted to viewing assigned tickets and device specs. Can post replies and submit resolutions. Cannot reassign tickets to other teams.

### Persona 4: Health Facility User (Dr. Mary)
- **Role**: Clinic Medical Officer / Requestor.
- **Responsibilities**: Logs issues affecting facility systems (e.g. software crashes, network outages, printing errors), selects registered facility devices, and tracks progress.
- **System Scope**: Restrained to the Facility User Portal. Accesses "My Tickets", opens tickets, uploads attachments, and communicates via public threads.

---

## 2.3 User Roles & Permission Matrix

The table below maps specific actions to system roles:

| System Action | Admin (Adam) | Agent (Joseph) | Expert (John) | Facility User (Dr. Mary) |
|:---|:---:|:---:|:---:|:---:|
| **Ticket View Permissions** | | | | |
| View All Tickets globally | 🟢 | 🔴 | 🔴 | 🔴 |
| View Organization Tickets | 🟢 | 🟢 | 🔴 | 🔴 |
| View Assigned Tickets Only | 🟢 | 🟢 | 🟢 | 🔴 |
| View Own Ticket Only | 🟢 | 🟢 | 🟢 | 🟢 |
| **Ticket Lifecycle Operations** | | | | |
| Create Ticket | 🟢 | 🟢 | 🟢 | 🟢 |
| Edit Ticket Basic Metadata | 🟢 | 🟢 | 🔴 | 🔴 |
| Assign Ticket to Expert | 🟢 | 🟢 | 🔴 | 🔴 |
| Reassign Expert within Team | 🟢 | 🟢 | 🔴 | 🔴 |
| Transfer Ticket between Teams | 🟢 | 🔴 | 🔴 | 🔴 |
| Close Ticket | 🟢 | 🟢 | 🔴 | 🔴 |
| Reopen Ticket | 🟢 | 🟢 | 🔴 | 🟡 (1) |
| **Communication & Threading** | | | | |
| Post Public Staff Reply | 🟢 | 🟢 | 🟢 | 🔴 |
| Post Public Client Reply | 🔴 | 🔴 | 🔴 | 🟢 |
| Add Private Internal Note | 🟢 | 🔴 | 🟢 | 🔴 |
| Submit Resolution Update | 🟢 | 🔴 | 🟢 | 🔴 |
| Upload File Attachment | 🟢 | 🟢 | 🟢 | 🟢 |
| **System Settings** | | | | |
| Manage Teams & Members | 🟢 | 🔴 | 🔴 | 🔴 |
| Manage Categories & Team Maps | 🟢 | 🔴 | 🔴 | 🔴 |
| View Audit Timeline | 🟢 | 🟢 | 🟢 | 🔴 |

### 🛠️ Conditions:
- **(1) Reopen Ticket**: Allowed automatically whenever a reply is made on a closed ticket.
- **(2) Escalation Rule**: Overdue tickets will automatically be set to Critical priority..
