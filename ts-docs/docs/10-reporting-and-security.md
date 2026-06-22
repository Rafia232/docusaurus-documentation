---
sidebar_position: 11
title: 10. Reporting & Security
---

# 10. Reporting & Security

This section details the **Reporting & Analytics Framework** and the **Security Architecture** for the MoH Helpdesk.

---

## 10.1 Reporting & SLA Metrics

### 10.1.1 SLA Targets
The support queue monitors response and resolution targets:

| Priority Level | Target Response Time (Acknowledge) | Target Resolution Time (Close) | SLA Breach Action |
|:---|:---|:---|:---|
| **Critical** | Within **30 minutes** | Within **4 hours** | Immediate alert to Team Lead and Administrator. |
| **High** | Within **4 hours** | Within **24 hours** | Notification sent to Team Lead if open at hour 20. |
| **Low** | Within **24 hours** | Within **5 business days** | Standard email reminder dispatched to Expert John. |

### 10.1.2 KPIs & Trend Tracking
- **Mean Time to Resolution (MTTR)**: Elapsed duration from ticket creation to final state closure.
- **First Contact Resolution (FCR)**: Percentage of tickets resolved on the first assignment loop without team transfers.
- **Device Outage Index**: Cumulative downtime tracking for linked devices during the `Under Repair` status duration.
- **Chatbot Self-Resolution Rate**: Percentage of WhatsApp guest triage interactions that resolve without creating a ticket.

---

## 10.2 Security Architecture

Security is managed via a zero-trust configuration across microservice container boundaries:

### 10.2.1 Authentication & Authorization
- **React Frontend**: Submits user credentials to the User Service, which returns a cryptographically signed JSON Web Token (JWT). The frontend stores the JWT and attaches it as a Bearer token in the `Authorization` header of all HTTP requests.
- **API Gateway Guard**: The NGINX API Gateway decodes the JWT and validates the signature using the public keys of the User Service before proxying the request to internal microservices.
- **CQRS Handler Pipeline**: In the backend .NET 9 services, MediatR pipeline behaviors intercept Command requests to verify role policies.

### 10.2.2 Inter-Service Security & Event Protection
- **Service-to-Service Communication**: Synchronous HTTP calls between microservices (e.g. Ticket Service calling Device Service) are secured using Mutual TLS (mTLS).
- **Kafka Event Streaming Encryption**: Kafka topics are encrypted in transit using SSL/TLS. Producer and consumer client nodes are authenticated using SASL/SCRAM credentials.
- **Audit Log Integrity**: Row updates or deletes on the `activity_logs` audit table are blocked at the database engine level via pgSQL triggers.
- **Secure Attachments**: Files are stored in object storage with temporary pre-signed download URLs that expire after **5 minutes**.
