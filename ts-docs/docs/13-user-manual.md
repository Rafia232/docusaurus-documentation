---
sidebar_position: 14
title: 13. User Manual (Self-Service)
---

# 13. User Manual (Self-Service Portal)

This manual guides health facility staff (e.g. Dr. Mary) through navigating and using the **Facility User Self-Service Portal**.

---

## 13.1 Navigating the Portal

When you log into the Self-Service Portal, you are presented with a responsive interface containing a **Navigation Menu** at the top of the screen:

- **Open New Ticket**: Input form to log new support requests.
- **My Tickets**: Directory to search, filter, and track tickets.
- **User Profile**: Configures contact details and facility alignment.

---

## 13.2 Tracking Support Requests ("My Tickets")

Click **My Tickets** in the navigation menu to access your support dashboard:

```text
+-----------------------------------------------------------------------------------+
|  [Total Tickets: 12]   [Open: 2]   [In Progress: 3]   [Closed: 7]                 |
+-----------------------------------------------------------------------------------+
|  Search: [ Enter title or ID... ]    Status: [ All v ]    Priority: [ All v ]     |
+-----------------------------------------------------------------------------------+
|  #000045 | Clinical workstation printer jam | Jessore General Hospital | [In Prog] |
|  Created: 2026-06-21  |  Messages: 2  |  Category: Printing  |  [Attachment icon] |
+-----------------------------------------------------------------------------------+
```

### 13.2.1 How to search and filter:
1. **Summary Cards**: Click any summary card (e.g. *Open Tickets*) to filter the table below to show only tickets with that status.
2. **Search Box**: Type ticket titles or ID numbers (e.g. `#000045`) into the search bar. The grid updates automatically.
3. **Filter Dropdowns**: Use the Status and Priority filters to narrow results.

---

## 13.3 Logging a New Support Request

Click **Open New Ticket** in the navigation menu:

1. **Title**: Enter a clear title (e.g. *"Clinic computer fails to boot"*).
2. **Detailed Description**: Describe the symptoms, error messages, and what actions trigger the failure.
3. **Category**: Select the category:
   - *Software*: Application crashes, login failures.
   - *Hardware*: Computer components, network cards.
   - *Procurement*: Requesting parts or replacements.
   - *Network*: Offline internet, router connectivity.
   - *Printing*: Printer jams, toner issues.
4. **Link Device**: Select the failing device from the drop-down list. This is pre-filtered to devices registered at your health clinic (e.g., printer `DEV-009182`).
5. **Add Attachments**: Drag and drop screenshots or logs onto the dropzone.
   - **Allowed formats**: PDF, DOC, DOCX, TXT, JPG, PNG.
   - **Size limit**: Exactly **5 MB** per file.
6. **Submit**: Click **Submit Ticket**. The system will register the ticket, display your ticket number (e.g. `#000045`), and send confirmation alerts to your email and WhatsApp.

---

## 13.4 Reviewing Ticket Details & Replying

On the **My Tickets** page, click **View Details** on any ticket row:

- **Information Panel**: View the ticket status, priority, and due date.
- **Contact Details**: Review submitter name, email, phone, and facility code.
- **Conversation History**: Read client messages, staff replies, and resolution logs.
- **Posting a Reply**:
  1. Type your message in the reply editor text area.
  2. Drag and drop any screenshots if requested by the technician.
  3. Click **Send Reply**.
- **Reopening a Closed Ticket**:
  - If a ticket status is `Closed` but the issue returns, open the ticket page within **7 days** of closure and click the **Reopen Ticket** button. Enter the reopen reason and confirm.
