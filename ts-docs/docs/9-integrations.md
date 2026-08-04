---
sidebar_position: 9
title: 9. API / Integration Documentation
---

# 9. API / Integration Documentation

This page documents external and cross-service integrations used by the MoH Helpdesk platform. Detailed REST endpoint definitions are maintained in [REST API Specifications](./8-api-specifications.md).

---

## 9.1 Integration Inventory

| Integration | Type | Purpose | Required |
| --- | --- | --- | :---: |
| REST APIs | HTTP/JSON | Frontend and service communication. | Yes |
| PostgreSQL | Database | Persistent relational storage. | Yes |
| Kafka | Event streaming | Ticket, notification, and service synchronization events. | Recommended |
| SMTP / MoH Mail Gateway | Email | Sends platform notifications. | Yes |
| Object Storage / MinIO / S3 | File storage | Stores ticket attachments. | Yes |
| JWT/OAuth provider | Identity/security | Token authentication and authorization. | Yes |
| External device/facility systems | Data sync | Optional synchronization with external registries. | Optional |

---

## 9.2 REST API Integration

REST APIs use HTTP and JSON payloads. The primary ticket endpoints are routed with the `/ticket-api/` prefix.

Integration clients should confirm:

- Base URL for each environment.
- Authentication header requirements.
- JSON request/response shape.
- Error response format.
- Pagination and filtering behavior.
- File upload size limits.

Common headers:

| Header | Description |
| --- | --- |
| `Authorization: Bearer <token>` | Authenticates API requests. |
| `Content-Type: application/json` | Used for JSON request bodies. |
| `Accept: application/json` | Requests JSON responses. |

See [REST API Specifications](./8-api-specifications.md) for endpoint-level details.

---

## 9.3 Kafka Event Integration

Kafka supports asynchronous communication between services and notification workers.

Common event examples:

| Event | Purpose |
| --- | --- |
| `TicketCreatedEvent` | Published after a ticket is created. |
| `TicketAssignedEvent` | Published after assignment changes. |
| `TicketReassignedEvent` | Published after reassignment or transfer. |
| `TicketClosedEvent` | Published after a ticket is closed. |
| `TicketReopenedEvent` | Published when a closed ticket is reopened. |

Implementation guidance:

- Use stable event names and versioned payloads.
- Include event ID, timestamp, organization ID, ticket ID, and actor ID.
- Do not place sensitive secrets in event payloads.
- Enable TLS/SASL for production Kafka clusters.
- Retain failed notification events for retry where supported.

Kafka payload examples are available in [Technical Appendix & Glossary](./16-technical-appendix-and-glossary.md).

---

## 9.4 Email / SMTP Integration

The platform uses SMTP or the MoH Mail Gateway to send email notifications.

Required configuration:

| Setting | Description |
| --- | --- |
| SMTP host | Mail server hostname. |
| SMTP port | Usually 587 for TLS or 465 for SSL. |
| Username | Mail service account. |
| Password | Mail service password or app secret. |
| Sender address | From address used in notifications. |
| TLS/SSL | Must be enabled in production. |

Notification templates should be configured for:

- New ticket alert
- Ticket assignment alert
- New message alert
- Internal note alert
- Overdue ticket alert
- Ticket closure alert

---

## 9.5 Object Storage Integration

Ticket attachments should be stored outside the application server filesystem in object storage.

Supported pattern:

| Item | Description |
| --- | --- |
| Bucket/container | Stores ticket attachments. |
| Object key | Unique path or generated file identifier. |
| File size limit | Recommended maximum: 5 MB per file. |
| Allowed formats | PDF, DOC, DOCX, TXT, JPG, PNG. |
| Download access | Time-limited signed URL where supported. |

Production requirements:

- Enable access logging.
- Enable backups or replication.
- Restrict bucket access to application services.
- Rotate access keys according to security policy.

---

## 9.6 External Synchronization

The data model includes sync-related flags such as `IsSynced` and `IsTPSynced`, indicating that some records may synchronize with external or third-party systems.

For each external sync, document:

| Item | Description |
| --- | --- |
| Source system | Name and owner of the external system. |
| Direction | Import, export, or bidirectional. |
| Data objects | Facilities, devices, users, tickets, or lookup data. |
| Schedule | Real-time, scheduled, or manual. |
| Retry behavior | How failed sync attempts are handled. |
| Conflict handling | Which system is authoritative. |
| Audit trail | Where sync results are stored. |

If no external synchronization is active in the production environment, record it as **not enabled** during handover.

---

## 9.7 Integration Verification Checklist

| Test | Expected Result |
| --- | --- |
| Login API | Returns a valid JWT for active user credentials. |
| Ticket API | Creates, lists, updates, assigns, and closes tickets. |
| Kafka event | Ticket action publishes the expected event. |
| SMTP | Test notification is received by configured recipient. |
| Attachment upload | File uploads successfully and appears on ticket details. |
| Attachment download | Authorized user can download file. |
| External sync | Sync status updates correctly, if integration is enabled. |