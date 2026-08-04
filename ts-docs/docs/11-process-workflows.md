---
sidebar_position: 2
title: 11.2 Process Workflows
---

import ZoomableImage from '@site/src/components/ZoomableImage';
import ticketCreationFlow from './images/ticket_creation_flow.png';
import ticketAssignmentFlow from './images/ticket_assignment_flow.png';
import ticketReassignmentFlow from './images/ticket_reassignment_flow.png';
import ticketResolutionFlow from './images/ticket_resolution_flow.png';
import notificationEngineFlow from './images/notification_engine_flow.png';

# 11.2 Process Workflows

This section visualizes the key operational workflows of the MoH Helpdesk Management System using **Mermaid diagrams**.

---

## 11.2.1 Facility User Ticket Creation Flow

Visualizes how Dr. Mary submits a ticket, associates a device, and triggers team mapping.

<ZoomableImage src={ticketCreationFlow} alt="Facility User Ticket Creation Flow" />

```mermaid
graph TD
    A[Dr. Mary logs into Self-Service Portal] --> B[Click Open New Ticket]
    B --> C[Enter Title & Detailed Description]
    C --> D[Select Category & choose Facility Device]
    D --> E[Upload optional file attachments]
    E --> F[Click Submit Ticket]
    
    F --> G{Inputs Valid & File <= 5MB?}
    G -->|No| G_Err[Render UI form field error messages]
    G -->|Yes| H[Submit CreateTicketCommand]
    
    H --> I[Ticket Service writes to Ticket DB]
    I --> J[Generate Ticket ID #000001]
    J --> K{Category mapping exists?}
    
    K -->|Yes| L[Set Ticket's Assigned Team]
    K -->|No| M[Route to Admin Triage queue]
    
    L --> N{Team has active member?}
    N -->|Yes| O[Auto-assign to Team Lead & set In Progress]
    N -->|No| P[Set as Unassigned]
    
    M --> P
    
    O --> Q[Publish TicketCreatedEvent to Kafka]
    P --> Q
    
    Q --> R[Queue email & WhatsApp creation alerts]
    R --> S[End Workflow]
```

---

## 11.2.2 Ticket Assignment Flow

Shows Joseph assigning a ticket to John.

<ZoomableImage src={ticketAssignmentFlow} alt="Ticket Assignment Flow" />

```mermaid
sequenceDiagram
    autonumber
    actor Joseph as Service Desk Agent (Joseph)
    participant Gateway as API Gateway
    participant TS as Ticket Service
    participant US as User Service
    participant DB as Ticket PostgreSQL DB
    participant Kafka as Kafka Event Bus
    
    Joseph->>Gateway: Open Ticket details page
    Gateway->>TS: GET /api/v1/tickets/45
    TS->>US: Fetch Experts in ticket's current team
    US-->>TS: Return list of Experts
    TS-->>Joseph: Render Assignee dropdown list
    Joseph->>Gateway: Select Expert John & confirm
    Gateway->>TS: POST /api/v1/tickets/45/assign (expert_id: 12)
    TS->>DB: Update ticket: expert_id = 12, status = 'In Progress'
    TS->>Kafka: Publish TicketAssignedEvent
    DB-->>TS: Confirm write
    TS-->>Joseph: UI updates (Status: In Progress, Expert: John)
```

---

## 11.2.3 Ticket Reassignment Flow

Shows reassigning a ticket to a different expert.

<ZoomableImage src={ticketReassignmentFlow} alt="Ticket Reassignment Flow" />

```mermaid
graph TD
    A[Start Reassignment] --> B[Joseph opens Ticket details]
    B --> C[Select Assignee dropdown]
    C --> D[Choose new Expert John]
    D --> E[Click Confirm Reassignment]
    
    E --> F{New Expert is in active Team?}
    F -->|No| F_Err[Throw validation error: Expert must be in team]
    F -->|Yes| G[Submit ReassignTicketCommand]
    
    G --> H[Update Ticket DB: expert_id = John]
    H --> I[Log reassignment timeline log]
    I --> J[Publish TicketReassignedEvent to Kafka]
    J --> K[Dispatch Kafka alerts to John]
    K --> L[End Reassignment]
```

---

## 11.2.4 Ticket Resolution Flow

Tracks ticket resolution, closure, and the 7-day reopen window.

<ZoomableImage src={ticketResolutionFlow} alt="Ticket Resolution Flow" />

```mermaid
graph TD
    A[Expert John opens assigned Ticket] --> B[Click Resolve Ticket]
    B --> C[Input Resolution Details & click Submit]
    
    C --> D{Details >= 20 characters?}
    D -->|No| D_Err[Prompt: Resolution detail is too short]
    D -->|Yes| E[Submit CloseTicketCommand]
    
    E --> F[Update local DB: status = Closed]
    F --> G[Append Resolution Update message to thread]
    G --> H[Publish TicketClosedEvent to Kafka]
    H --> I[Dispatch ticket closed alerts to Dr. Mary]
    I --> J[Start 7-day timer]
    
    J --> K{Did Dr. Mary reply within 7 days?}
    K -->|Yes| L[Submit ReopenTicketCommand]
    L --> M[Update DB: status = Open]
    M --> N[Publish TicketReopenedEvent to Kafka]
    N --> A
    
    K -->|No/Timer Expires| O[Status finalized; lock ticket from edits]
    O --> P[End Workflow]
```

---

## 11.2.5 Notification Engine Flow

Visualizes the event-driven notifications loop.

<ZoomableImage src={notificationEngineFlow} alt="Notification Engine Flow" />

```mermaid
sequenceDiagram
    autonumber
    participant App as Ticket Service Command
    participant Kafka as Kafka Event Bus
    participant Worker as Background Alert Consumer
    participant Templates as Template Engine
    participant Gateways as SMTP / WhatsApp Gateways
    actor Mary as Recipient (Dr. Mary)
    
    App->>App: Process Command (e.g. Ticket Closed)
    App->>Kafka: Publish Event (Event ID, Submitter Details)
    App-->>App: Return success to UI immediately
    
    Note over Worker: Listens to Kafka topic 'ticket-notifications'
    Kafka-.>>Worker: Deliver TicketClosedEvent message
    Worker->>Templates: Fetch template matching event
    Templates-->>Worker: Return compiled body
    Worker->>Gateways: Dispatch payloads (SMTP/Twilio API)
    Gateways->>Mary: Deliver Email / WhatsApp message
```