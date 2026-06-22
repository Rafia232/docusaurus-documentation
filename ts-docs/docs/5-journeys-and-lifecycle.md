---
sidebar_position: 6
title: 5. Ticket Lifecycle & Journeys
---

# 5. Ticket Lifecycle & Journeys

This section details the ticket lifecycle states and maps out step-by-step journeys for both Facility Users and Service Desk Staff.

---

## 5.1 Ticket Lifecycle States

A ticket transitions through three core status values governed by command handlers:

```
[Open] ────(Assign Command / Work Begins)────> [In Progress] ────(Submit Resolution / Close Ticket On Reply)────> [Closed]
                                                  ▲                                                                   │
                                                  └────────────(Reopen with reply)────────────────────────────────────┘
```

- **Open**: Created via Portal, Email, or WhatsApp. Auto-routed to a team. Assignee is empty or set to Team Lead.
- **In Progress**: Triggered when Joseph assigns John, or when John posts a staff reply.
- **Closed**: Triggered when John submits a Close Ticket on Reply.
- **Reopen Loop**: If Dr. Mary posts a reply, a `ReopenTicketCommand` transitions the status back to `InProgress` and notifies the previously assigned expert.

---

## 5.2 Facility User Journey (Dr. Mary)

This journey tracks Dr. Mary's experience reporting a printing failure:

1. **Discovery**: A clinical printer in X Clinic jams. Dr. Mary cannot print prescriptions.
2. **Access**: Dr. Mary logs into the **Facility User Self-Service Portal** using her local credentials.
3. **Drafting**: She clicks "Open New Ticket", enters title: *"X Clinic main printer jamming"*, selects category **Printing**, and links device **DEV-009182** (HP LaserJet to her facility).
4. **Submission**: Dr. Mary clicks submit. The portal generates Ticket `#000045`. She immediately receives a confirmation alert on WhatsApp.
5. **Tracking**: Over the next 2 hours, she monitors the ticket card under the "My Tickets" dashboard, which transitions from `Open` to `In Progress`.
6. **Collaboration**: She receives a WhatsApp message stating that John (Expert) added a reply: *"Please confirm if the orange light is flashing."* She opens the ticket details page and posts a reply confirming it is flashing.
7. **Resolution**: John resolves the ticket. She receives the resolution alert on WhatsApp: *"Replaced printing rollers. Verified test print."*
8. **Closure**: Dr. Mary verifies the print works, and the ticket status updates to `Closed`.

---

## 5.3 Service Desk Journeys

### 5.3.1 Frontline Agent Journey (Joseph)
1. **Alert**: Joseph logs into the Admin Portal and sees `#000045` in the unassigned triage list.
2. **Review**: He opens the ticket, checks the associated client details.
3. **Routing**: Since the category is **Printing**, the system auto-assigned it to the "Printing Support Team".
4. **Assignment**: Joseph assigns the ticket to "John" (Printing Expert). This triggers an assignment notification.

### 5.3.2 Support Expert Journey (John)
1. **Notification**: John receives a notification on his mail: *"New ticket #000045 assigned to you."*
2. **Investigation**: John opens the ticket on his dashboard. He reviews the issues.
3. **Communication**: John posts a public reply asking Dr. Mary for confirmation on the alert light status.
4. **Resolution**: After receiving her reply and performing the physical repair, John clicks "Resolve Ticket", inputs the repair details, and completes the ticket.
