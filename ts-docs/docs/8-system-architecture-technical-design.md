---
id: system-architecture-technical-design
sidebar_position: 8
title: 8. System Architecture & Technical Design
---

import ZoomableImage from '@site/src/components/ZoomableImage';
import erdImage from './images/erd.png';

# 8. System Architecture & Technical Design

This document summarizes the technical design of the MoH Helpdesk platform for handover, maintenance, and future enhancement.

---

## 8.1 System Context

The MoH Helpdesk is a centralized support and ticket management platform used by facility users, regional users, national users, and administrators.

Core capabilities include:

- Ticket creation from public portal, email, and internal form.
- Ticket routing by category and subcategory
- Role-based visibility for facility, regional, national, and administrator users.
- Ticket assignment, communication, attachments, and closure.
- Reporting, SLA monitoring, and overdue tracking.
- Email notification and event-driven workflow support.

---

## 8.2 Logical Architecture

| Layer | Responsibility |
| --- | --- |
| Presentation | React frontend and public portal. |
| API Gateway / Reverse Proxy | Routes requests, terminates HTTPS, forwards API calls. |
| Backend Services | .NET API services implementing business rules. |
| Data Layer | PostgreSQL databases split by service domain. |
| Event Layer | Kafka event bus for asynchronous communication. |
| Storage Layer | Persistent application volumes for attachments; object storage is a recommended scalable target. |
| Notification Layer | SMTP and optional messaging gateway integrations. |

---

## 8.3 Deployment Architecture

<ZoomableImage src="/img/installation/diagrams/visual-deployment-overview.svg" alt="TeraSupport deployment architecture diagram" maxHeight="640px" />

| Area | Architecture Detail |
| --- | --- |
| Entry Point | Users access the platform through public HTTPS, terminated by IIS, Nginx, or an external load balancer. |
| Frontend | React/Vite web app serves the user interface and calls backend APIs through the gateway route. |
| API Gateway | Ocelot API Gateway exposes stable public API routes and forwards requests to internal microservices. |
| Services | User, Ticketing, and Mail services run as .NET 9 CQRS/MediatR services behind the API Gateway. |
| Data | PostgreSQL databases are separated by service domain to reduce coupling and simplify ownership. |
| Events | Kafka handles asynchronous ticket, mail, user request, and notification events. |
| Operations | Kafdrop, logs, IIS/Portainer, and database tools are used for deployment verification and support. |

Supported deployment models:

| Model | Description |
| --- | --- |
| Windows Server / IIS | IIS hosts frontend and proxies or hosts .NET services. |
| Linux / Docker / Portainer | Portainer manages Docker containers and persistent volumes. |

---

## 8.4 Application Components

| Component | Description |
| --- | --- |
| Frontend Web App | Provides admin, service desk, reporting, and facility portal user interfaces. |
| User Service | Handles authentication, users, roles, and permissions. |
| Ticket Service | Handles tickets, categories, assignments, messages, attachments, and lifecycle actions. |
| Device Service | Maintains facility/device reference data where applicable. |
| Notification Worker | Processes notification events and dispatches emails or external messages. |
| API Gateway | Provides a stable public API routing layer. |

---

## 8.5 Data Architecture

<ZoomableImage src={erdImage} alt="Entity Relationship Diagram" maxHeight="600px" />

The platform uses PostgreSQL with service-oriented database ownership.

| Database | Main Data |
| --- | --- |
| User database | Users, roles, organizations, access control. |
| Ticket database | Tickets, categories, assignments, messages, attachments, audit activity. |
| Device database | Devices, facilities, external sync flags, device metadata. |

See [Data Architecture](./13.1-data-architecture.md) for detailed table definitions and schema references.

---

## 8.6 Ticket Lifecycle Design

The main ticket workflow is:

1. Ticket is created from portal, email, or internal form.
2. Ticket category is selected or identified.
3. Service Desk assigns the ticket to an expert or responsible person.
4. Users communicate through ticket messages and attachments.
5. SLA and overdue rules are monitored.
6. Ticket is closed after resolution.
7. Notifications and audit history are retained.

See [Ticket Lifecycle Process](/docs/ticket-lifecycle-and-journey) and [Process Workflows](./12.2-process-workflows.md) for visual flows.

---

## 8.7 Security Design

| Security Area | Design |
| --- | --- |
| Authentication | JWT-based user authentication. |
| Authorization | Role and permission checks in frontend and backend service policies. |
| Transport security | HTTPS for public access. |
| Service-to-service security | mTLS recommended between internal services. |
| Event security | Private-network Kafka in the supplied compose example; SSL/TLS and SASL/SCRAM are required when Kafka is exposed beyond the private network. |
| Attachment security | Persistent volumes in the documented deployment; object storage with time-limited download links is a recommended enhancement. |
| Audit integrity | Activity records retained for accountability. |

See [Security Architecture](./7-security-architecture.md) for additional security notes.

---

## 8.8 Integration Design

The platform can integrate with:

- SMTP / MoH Mail Gateway for email alerts.
- Kafka for asynchronous events.
- MinIO/S3 object storage for attachments when scalable external storage is configured.
- External device or facility systems if synchronization is configured.

See [Integration Documentation](/docs/integrations).

---

## 8.9 Operational Design

| Concern | Design Guidance |
| --- | --- |
| Logging | Application, IIS/container, database, and reverse proxy logs should be retained. |
| Backup | PostgreSQL and attachment volume backups are required; include object storage backups where MinIO/S3 is used. |
| Monitoring | Monitor API health, disk, memory, database, Kafka, and SMTP delivery. |
| Recovery | Restore database, attachments, and configuration together. |
| Scaling | Scale frontend and stateless API services horizontally where supported. |
| Handover | Transfer deployment scripts, environment values, credentials, and operational runbooks securely. |

---

## 8.10 Key Technical Risks

| Risk | Mitigation |
| --- | --- |
| SMTP outage | Queue notification events and retry delivery. |
| Kafka outage | Use retry and outbox pattern where supported. |
| Database growth | Apply indexing, archiving, and backup retention policies. |
| Incorrect role mapping | Verify role matrix before go-live. |
| Wrong category mapping | Test each category route with sample tickets. |
| Attachment storage failure | Monitor attachment volume or object storage capacity and backup attachments. |

---

## 8.11 Report Implementation Notes

Report implementation follows the CQRS structure used across the Ticketing microservice:

1. The controller receives the report request.
2. A MediatR query is created for the selected report.
3. The query handler calls the report repository.
4. The repository reads ticketing data, applies filters, performs grouping/calculations, and returns DTOs.
5. Export handlers pass the calculated result into spreadsheet helper classes.

When changing a report, update the calculation, displayed DTO, and export helper together so screen values and downloaded files remain consistent.
