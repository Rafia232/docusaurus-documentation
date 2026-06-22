---
sidebar_position: 5
title: 4. User Stories & Use Cases
---

# 4. User Stories & Use Cases

This section contains the **User Stories** and **Use Cases** for the MoH Helpdesk Management System.

---

## 4.1 Detailed User Stories

### US-1: Submit Ticket via Portal
- **As a** Health Facility User (Dr. Mary)
- **I want to** submit a ticket via the Self-Service Portal
- **So that** I can request support and attach error logs or screenshots.
- **Acceptance Criteria**:
  - **AC 1.1**: The ticket form contains: Title, Detailed Description, Category, linked Device (optional), and File Attachments.
  - **AC 1.2**: Originating Facility and Contact info are auto-filled.
  - **AC 1.3**: Upon submit, the ticket number (e.g. `#000045`) is returned, and email alert EVT-01 is dispatched.

### US-2: Search & Filter Own Tickets
- **As a** Health Facility User (Dr. Mary)
- **I want to** search by Title or ID and filter by status and priority on "My Tickets" page
- **So that** I can track my active and historical requests.
- **Acceptance Criteria**:
  - **AC 2.1**: The search input triggers a debounced query filtering the list based on match.
  - **AC 2.2**: The grid updates dynamically without page reloads.

### US-3: Automated Category Mapping
- **As a** Service Desk Admin (Adam)
- **I want** categories mapped to support teams
- **So that** incoming tickets route to the appropriate group without manual triage.
- **Acceptance Criteria**:
  - **AC 3.1**: Mappings trigger auto-routing. E.g. "Software Issue" routing to "Software Support Team".
  - **AC 3.2**: If the mapped team has a Lead, the Lead is set as owner. Otherwise, it stays unassigned.

### US-4: Expert Work Queue
- **As a** Service Desk Expert (John)
- **I want to** view only my assigned tickets
- **So that** I can focus on resolving my specific technical backlog.
- **Acceptance Criteria**:
  - **AC 4.1**: Dashboard and lists restrict views to Expert's assigned tickets.
  - **AC 4.2**: Direct access requests for tickets outside team scope return `403 Forbidden`.

---

## 4.2 Use Cases

### Use Case 1: Open Ticket (via Portal)
- **Actors**: Health Facility User (Dr. Mary)
- **Preconditions**: Mary is logged into the Facility Self-Service Portal.
- **Main Flow**:
  1. Mary clicks "Open New Ticket".
  2. Mary enters Title, Description, selects Category ("Software"), and attaches log file ("error.log", 2 MB).
  3. Mary clicks "Submit Ticket".
  4. System validates inputs and uploads file to object storage.
  5. Ticket Service creates database record, generates `#000045`, and publishes `TicketCreatedEvent` to Kafka.
  6. Mary is redirected to ticket confirmation view.
- **Exceptions**:
  - *Large Attachment*: Mary uploads a 6 MB file. System blocks upload, displaying: *"File exceeds maximum size of 5 MB."*

### Use Case 2: Assign Ticket
- **Actors**: Service Desk Agent (Joseph) / Admin (Adam)
- **Preconditions**: Ticket exists, status is `Open`, and assigned expert is empty.
- **Main Flow**:
  1. Joseph opens the ticket Details view.
  2. Joseph selects Expert "John" from the assignee dropdown list (restricted to active experts in mapped team).
  3. Joseph clicks "Confirm".
  4. Ticket Service updates assignee, sets status to `In Progress`, publishes `TicketAssignedEvent` to Kafka.
  5. John receives assignment notification.

### Use Case 3: Resolve & Close Ticket
- **Actors**: Service Desk Expert (John)
- **Preconditions**: Ticket is assigned to John, status is `In Progress`.
- **Main Flow**:
  1. John clicks "Resolution" and "Close on Reply" on the ticket details panel.
  2. John enters resolution details: *"Replaced printing driver on local workstation."*
  3. John clicks "Post".
  4. System updates status to `Closed`, appends a "Resolution Update" post to the thread.
  5. System sends closed notification (EVT-05) to Dr. Mary via email.
