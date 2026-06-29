---
sidebar_position: 11
title: 10. Acceptance Criteria & Future Roadmap
---

# 10. Acceptance Criteria & Future Roadmap

This section documents User Acceptance Criteria (UAT), risk mitigations, and the product development roadmap.

---

## 10.1 Acceptance Criteria Matrix

For the system to be approved for production, the following criteria must be satisfied during User Acceptance Testing (UAT):

| Component ID | Target Feature | Acceptance Criteria |
|:---|:---|:---|
| **AC-PORT-01** | My Tickets Dashboard | Mary can view dashboard cards representing Total, Open, In Progress, and Closed tickets for Jessore Clinic. |
| **AC-PORT-02** | Open Ticket Form | Mary can select from registered clinic devices when completing the form. |
| **AC-PORT-03** | Ticket Detail Thread | Mary can post replies with attachments, and John can post staff replies or resolve issues. |
| **AC-ADMIN-01** | Admin Assignment | Joseph can select experts from the assignee list to update ticket ownership. |
| **AC-ADMIN-02** | Team Transfers | Adam can transfer tickets to another team, resetting expert ownership to unassigned. |
| **AC-ADMIN-03** | Private Collaboration | Experts can post private internal notes that do not appear on Mary's portal screen. |
| **AC-AUDT-01** | Auditing Timeline | Changes to ticket owner, status, priority, and links are logged in the activity timeline. |

---

## 10.2 Operational & Technical Risk Matrix

| Risk Description | Impact | Probability | Mitigation Strategy |
|:---|:---:|:---:|:---|
| **R-1: SMTP Server / WhatsApp API Outage** <br /> System alerts and confirmation notifications fail. | **High** | **Medium** | Implement Kafka retry queues. Alerts are stored and retried with exponential backoff for up to 24 hours. |
| **R-2: ID Guessing (Insecure Direct Object Reference)** <br /> Guest users attempt to view other clinics' tickets. | **Critical** | **High** | Front-facing requests retrieve ticket details using a secure UUID `tracking_token` rather than DB incremental IDs. |
| **R-3: Kafka Cluster failure** <br /> Message synchronization between services stops. | **Critical** | **Low** | Implement a local DB Outbox Pattern. Services write outbound events to a local db table and publish once Kafka reconnects. |
| **R-4: Disk Space Exhaustion** <br /> File uploads fill storage drives. | **High** | **Medium** | Store files on S3 object storage rather than local VM storage. Enforce strict 5 MB file limits on the API gateway layer. |

---

## 10.3 Future Enhancements Roadmap

- **SLA Management**: Dedicated SLA timers tracking response and resolution progress.
- **Escalation Rules**: Automatic reassignment to higher teams if ticket exceeds resolution limits.
- **Knowledge Base**: Integrated portal articles suggesting self-service solutions.
- **AI Classification & Routing**: Machine-learning categorization based on ticket history.
- **Chatbot Support**: WhatsApp/Telegram bots allowing users to check ticket statuses.
- **Mobile App**: Support apps for agents and experts to log and resolve tickets.
