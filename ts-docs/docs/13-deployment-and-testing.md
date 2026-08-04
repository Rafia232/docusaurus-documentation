---
sidebar_position: 2
title: 12.2 Deployment & Testing
---

import ZoomableImage from '@site/src/components/ZoomableImage';
import deploymentTopology from './images/deployment_topology.png';

# 12.2 Deployment & Testing

This section defines the infrastructure deployment topology, testing plan, and QA verification matrices.

---

## 12.2.1 Deployment Topology

The MoH Helpdesk is hosted as a microservice framework within a Kubernetes (K8s) cluster.

<ZoomableImage src={deploymentTopology} alt="Deployment Topology" />

```mermaid
graph TD
    User([Requester Mary / Admin Adam]) -->|HTTPS: Port 443| LB[NGINX Ingress API Gateway]
    
    subgraph Frontend Pods
        LB -->|Route Static UI| FE[React SPA Host Service]
    end
    
    subgraph Microservice Pods
        LB -->|Route /api/v1/users| US[User Microservice .NET 9]
        LB -->|Route /api/v1/tickets| TS[Ticket Microservice .NET 9]
        LB -->|Route /api/v1/devices| DS[Device Microservice .NET 9]
    end
    
    subgraph Database Clusters
        US -->|Read / Write SQL| US_DB[(User PostgreSQL DB)]
        TS -->|Read / Write SQL| TS_DB[(Ticket PostgreSQL DB)]
        DS -->|Read / Write SQL| DS_DB[(Device PostgreSQL DB)]
    end
    
    subgraph Messaging Stream
        TS -->|Publish Events| Kafka[Kafka Event Broker]
        DS -->|Publish Events| Kafka
        US -->|Publish Events| Kafka
        
        Kafka -.->|Asynchronous Consume| TS
        Kafka -.->|Asynchronous Consume| DS
        Kafka -.->|Asynchronous Consume| US
    end
    
    subgraph External Gateways
        TS -->|Upload Attachment| S3[(MinIO Object Storage)]
        TS -->|Relay SMTP| MailServer[MoH Mail Gateway]
        TS -->|Twilio Hook| TwilioWhatsApp[Twilio WhatsApp Gateway]
    end
```