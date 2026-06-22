---
sidebar_position: 16
title: 15. Technical Appendix & Glossary
---

# 15. Technical Appendix & Glossary

This section contains the Glossary of terms and the Technical Appendix containing event payloads and Kubernetes manifest structures.

---

## 15.1 Glossary of Terms

- **Service Desk Admin (Adam)**: Platform administrator. Configures routing parameters, maps categories, and maintains the device registry.
- **Service Desk Agent (Joseph)**: Frontline triage agent. Reviews tickets, verifies devices, and reassigns tickets.
- **Service Desk Expert (John)**: Specialized technical resolver. Diagnoses hardware, software, network, and printing issues, and submits resolutions.
- **Facility User (Dr. Mary)**: Clinic requestor submitting tickets.
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

## 15.2 Technical Appendix

### 15.2.1 Allowed Attachment MIME Formats
- `application/pdf` (.pdf)
- `application/msword` (.doc)
- `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (.docx)
- `text/plain` (.txt)
- `image/jpeg` (.jpg)
- `image/png` (.png)

### 15.2.2 Apache Kafka Topic Registry
- `ticket-creation`: Carries `TicketCreatedEvent` payloads.
- `ticket-assignment`: Carries `TicketAssignedEvent` payloads.
- `device-linking`: Carries `DeviceLinkedToTicketEvent` payloads.
- `ticket-notifications`: Queue for email and WhatsApp notifications.

### 15.2.3 Kafka Event Payload Schemas (JSON)

#### `DeviceLinkedToTicketEvent` Schema
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
  "required": ["ticketId", "ticketNumber", "deviceCode", "facilityCode", "linkedByUserId", "timestamp"]
}
```

### 15.2.4 Kubernetes Deployment Manifest (API Gateway Ingress)
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: moh-helpdesk-ingress
  namespace: moh-production
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
spec:
  tls:
  - hosts:
    - helpdesk.moh.gov.bd
    secretName: moh-tls-secret
  rules:
  - host: helpdesk.moh.gov.bd
    http:
      paths:
      - path: /api/v1/users
        pathType: Prefix
        backend:
          service:
            name: user-microservice-svc
            port:
              number: 5001
      - path: /api/v1/tickets
        pathType: Prefix
        backend:
          service:
            name: ticket-microservice-svc
            port:
              number: 5002
      - path: /api/v1/devices
        pathType: Prefix
        backend:
          service:
            name: device-microservice-svc
            port:
              number: 5003
      - path: /
        pathType: Prefix
        backend:
          service:
            name: react-frontend-svc
            port:
              number: 80
```
