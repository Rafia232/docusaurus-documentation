---
sidebar_position: 15
title: 14. Administrator Guide
---

# 14. Administrator Guide (Service Desk Portal)

This guide instructs administrators and support agents (Adam and Joseph) on using the **Service Desk Administration Portal**.

---

## 14.1 Ticket Queue Management (Joseph's Triage Workflow)

When you log into the Service Desk Portal, the main dashboard displays total support queues:

```text
+-----------------------------------------------------------------------------------+
|  [All Tickets: 154]   [Open: 24]   [In Progress: 48]   [Closed: 82]               |
+-----------------------------------------------------------------------------------+
|  Triage Queue Table                                                               |
|  ID      Title                       Facility        Mapped Team     Assignee     |
|  #000045 Workstation printer jam    Jessore Clinic  Printing Team   John         |
+-----------------------------------------------------------------------------------+
```

### 14.1.1 Triage Steps:
1. **Unassigned Queue**: Open the list filtered by `Unassigned`.
2. **Reviewing Details**: Click a ticket row. Check the linked **Device Card** in the header to verify model details, warranty status, and past device failure history.
3. **Assigning an Expert**:
   - In the ticket details view, click the **Assignee** dropdown menu.
   - The system displays active Experts who are members of the ticket's assigned team.
   - Select an Expert (e.g. John) and click **Confirm**. The ticket status transitions to `In Progress`.
4. **Reassignment**: If an Expert is occupied, click the dropdown and select another member from the team list.
5. **Team Transfers**:
   - If an issue belongs to a different department (e.g., Software Team needs to address printer firmware before John can repair the paper roller), click **Transfer Team**.
   - Select the target team, enter the transfer reason, and confirm. This clears the expert assignment and routes the ticket to the new team queue.

---

## 14.2 Communication & Collaboration (Joseph & John)

On the **Ticket Details** page, support operators use the tabbed chat workspace:

1. **Tab 1: Public Discussion** (`#tab-public-chat`):
   - Use this tab to reply directly to the client (Dr. Mary).
   - Staff replies are sent to the client's portal and trigger WhatsApp/Email alerts.
2. **Tab 2: Internal Notes** (`#tab-internal-notes`):
   - Use this tab to post troubleshooting updates, diagnostic logs, and coordinates.
   - **Important**: These notes are private. They do not trigger client notifications and are hidden from Dr. Mary's portal view.
3. **Submit Resolution**:
   - Once resolved, click **Resolve Ticket**.
   - Input the resolution details (must be at least 20 characters) and confirm. This updates the status to `Closed` and alerts the client.

---

## 14.3 System Administration (Adam's Configuration Workflow)

Administrators (Adam) configure routing settings:

### 14.3.1 Managing Support Teams:
- Navigate to **Teams** menu.
- Click **Add Team** to create a team (e.g. *Network Support Team*).
- Click **Edit Members** on any team card to add experts or designate the Team Lead.

### 14.3.2 Managing Categories:
- Navigate to **Categories** menu.
- Add or modify issue types (e.g. *Procurement Issue*).

### 14.3.3 Category-Team Mapping:
- Navigate to **Team Mappings**.
- Select a category in the table and choose the target support team from the dropdown. Click **Save Mappings**.
- All new tickets logged under this category will route to the mapped team.
