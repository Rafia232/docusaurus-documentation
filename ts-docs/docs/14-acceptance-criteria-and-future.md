---
sidebar_position: 3
title: 12.3 Risk Matrix & Future Roadmap
---

# 12.3 Risk Matrix & Future Roadmap

This section documents operational and technical risk mitigations and the product development roadmap.

---

## 12.3.1 Operational & Technical Risk Matrix

| Risk Description | Impact | Probability | Mitigation Strategy |
|:---|:---:|:---:|:---|
| **R-1: SMTP Server** <br /> System alerts and confirmation notifications fail. | **High** | **Medium** | Implement Kafka retry queues. Alerts are stored and retried with exponential backoff for up to 24 hours. |
| **R-2: ID Guessing (Insecure Direct Object Reference)** <br /> Guest users attempt to view other clinics' tickets. | **Critical** | **High** | Front-facing requests retrieve ticket details using a secure UUID `tracking_token` rather than DB incremental IDs. |
| **R-3: Kafka Cluster Failure** <br /> Message synchronization between services stops. | **Critical** | **Low** | Implement a local DB Outbox Pattern. Services write outbound events to a local DB table and publish once Kafka reconnects. |
| **R-4: Disk Space Exhaustion** <br /> File uploads fill storage drives. | **High** | **Medium** | Store files on S3 object storage rather than local VM storage. Enforce strict 5 MB file limits on the API gateway layer. |
