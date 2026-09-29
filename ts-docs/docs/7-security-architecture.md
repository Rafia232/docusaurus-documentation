---
sidebar_position: 7
title: 7. Security Architecture
---

# 7. Security Architecture

Security is managed through layered controls across public HTTPS entry points, API gateway routing, JWT-based authentication, role-based authorization, private container networking, and operational monitoring.

## 7.1 Authentication & Authorization

- **React Frontend:** Submits user credentials to the User Service, which returns a cryptographically signed JSON Web Token (JWT). The frontend stores the JWT and attaches it as a Bearer token in the `Authorization` header of all HTTP requests.

- **API Gateway Guard:** The Ocelot API Gateway validates application-issued JWT bearer tokens using the configured shared signing key before proxying protected requests to internal microservices. NGINX acts as the reverse proxy/load balancer in the Linux deployment path.

- **CQRS Handler Pipeline:** In the backend .NET 9 services, MediatR pipeline behaviors intercept Command requests to verify role policies.

## 7.2 Inter-Service Security & Event Protection

- **Service-to-Service Communication:** Synchronous calls between internal services run on private network routes. Mutual TLS (mTLS) is recommended for hardened deployments but must be configured explicitly before it is treated as implemented.

- **Kafka Event Streaming Encryption:** The supplied Portainer example uses PLAINTEXT Kafka listeners on a private Docker network. Production deployments that expose Kafka beyond the private network must enable SSL/TLS and SASL/SCRAM and update service configuration accordingly.

- **Audit Log Integrity:** Row updates or deletes on the `activity_logs` audit table are blocked at the database engine level via pgSQL triggers.

- **Secure Attachments:** The documented deployment stores attachments on persistent application volumes. Object storage and time-limited signed URLs are recommended enhancements when a MinIO/S3-compatible service is configured.
