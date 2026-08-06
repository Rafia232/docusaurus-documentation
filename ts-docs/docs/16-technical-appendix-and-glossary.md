---
sidebar_position: 4
title: 12.4 Technical Appendix & Glossary
---

# 12.4 Technical Appendix & Glossary

This section contains the Glossary of terms and the Technical Appendix containing event payloads and Kubernetes manifest structures.

---

## 12.4.1 Glossary of Terms

- **SLA (Service Level Agreement)**: Target response and resolution times.
- **MTTR (Mean Time to Resolution)**: KPI measuring helpdesk speed.
- **FCR (First Contact Resolution)**: KPI measuring the percentage of tickets resolved without transfers.
- **CQRS (Command Query Responsibility Segregation)**: Design pattern separating write commands from read queries.
- **Apache Kafka**: Asynchronous distributed event streaming platform used to sync microservices.
- **React**: Component-based front-end SPA library.
- **.NET 9**: Open-source framework used to build REST API services.
- **MediatR**: In-process dispatcher library used to handle CQRS patterns.
- **JWT (JSON Web Token)**: Bearer tokens used for authorization.
- **mTLS (Mutual TLS)**: Secure service-to-service API communication.
- **UUID (Universally Unique Identifier)**: 128-bit cryptographic key used for guest tracking links.

---

## 12.4.2 Technical Appendix

### 12.4.2.1 Allowed Attachment MIME Formats

- `application/pdf` (.pdf)
- `application/msword` (.doc)
- `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (.docx)
- `text/plain` (.txt)
- `image/jpeg` (.jpg)
- `image/png` (.png)

### 12.4.2.2 Apache Kafka Topic Registry

- `ticket-creation`: Carries `TicketCreatedEvent` payloads.
- `ticket-assignment`: Carries `TicketAssignedEvent` payloads.
- `device-linking`: Carries `DeviceLinkedToTicketEvent` payloads.
- `ticket-notifications`: Queue for email and WhatsApp notifications.

### 12.4.2.3 Kafka Event Payload Schemas (JSON)

#### 12.4.2.3.1 `DeviceLinkedToTicketEvent` Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "DeviceLinkedToTicketEvent",
  "type": "object",
  "properties": {
    "ticketId": { "type": "integer" },
    "ticketNumber": { "type": "string" },
    "deviceCode": { "type": "string" },
    "facilityCode": { "type": "string" },
    "linkedByUserId": { "type": "integer" },
    "timestamp": { "type": "string", "format": "date-time" }
  },
  "required": [
    "ticketId",
    "ticketNumber",
    "deviceCode",
    "facilityCode",
    "linkedByUserId",
    "timestamp"
  ]
}
```
