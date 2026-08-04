---
sidebar_position: 6
title: 6. Security Architecture
---

# 6. Security Architecture

Security is managed via a zero-trust configuration across microservice container boundaries.

## 6.1 Authentication & Authorization

- **React Frontend:** Submits user credentials to the User Service, which returns a cryptographically signed JSON Web Token (JWT). The frontend stores the JWT and attaches it as a Bearer token in the `Authorization` header of all HTTP requests.

- **API Gateway Guard:** The NGINX API Gateway decodes the JWT and validates the signature using the public keys of the User Service before proxying the request to internal microservices.

- **CQRS Handler Pipeline:** In the backend .NET 9 services, MediatR pipeline behaviors intercept Command requests to verify role policies.

## 6.2 Inter-Service Security & Event Protection

- **Service-to-Service Communication:** Synchronous HTTP calls between microservices, such as the Ticket Service calling the Device Service, are secured using Mutual TLS (mTLS).

- **Kafka Event Streaming Encryption:** Kafka topics are encrypted in transit using SSL/TLS. Producer and consumer client nodes are authenticated using SASL/SCRAM credentials.

- **Audit Log Integrity:** Row updates or deletes on the `activity_logs` audit table are blocked at the database engine level via pgSQL triggers.

- **Secure Attachments:** Files are stored in object storage with temporary pre-signed download URLs that expire after **5 minutes**.