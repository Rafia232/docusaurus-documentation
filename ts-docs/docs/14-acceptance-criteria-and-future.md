---
sidebar_position: 3
title: 12.3 Risk Matrix
---

# 12.3 Risk Matrix

This section documents operational and technical risks, impact levels, probability, and mitigation strategies.

---

## 12.3.1 Operational & Technical Risk Matrix

| Risk Description | Impact | Probability | Mitigation Strategy |
|:---|:---:|:---:|:---|
| **R-1: SMTP Server** <br /> System alerts and confirmation notifications fail. | **High** | **Medium** | Implement Kafka retry queues. Alerts are stored and retried with exponential backoff for up to 24 hours. |
| **R-2: ID Guessing (Insecure Direct Object Reference)** <br /> Guest users attempt to view other clinics' tickets. | **Critical** | **High** | Use non-enumerable UUID-based ticket lookup tokens for front-facing ticket access, and verify the implemented API field name before go-live. |
| **R-3: Kafka Cluster Failure** <br /> Message synchronization between services stops. | **Critical** | **Low** | Implement a local DB Outbox Pattern. Services write outbound events to a local DB table and publish once Kafka reconnects. |
| **R-4: Disk Space Exhaustion** <br /> File uploads fill storage drives. | **High** | **Medium** | Monitor persistent attachment volumes, enforce the documented application upload limits, and consider MinIO/S3 object storage for larger production deployments. |
