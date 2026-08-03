---
sidebar_position: 4
title: 3. Facility User
---

# 3. Facility User

Facility users can access the Service Desk through the organization’s configured **Public Portal URL** using the login credentials created by the administrator.

When creating a facility user account, the administrator assigns the user to a specific region and facility. The user’s ticket access is therefore limited to the facility associated with their account.

Through the public portal, facility users can:

- Open new support tickets
- View tickets submitted within their assigned facility
- View tickets created from their own account
- Search and filter tickets
- Track ticket status and priority
- Review complete ticket details
- Communicate with technicians
- Upload supporting attachments
- Review ticket conversation history
- Close tickets after the reported issue has been resolved

:::note
A facility user must have a valid email address and password created by the administrator before accessing the Public Portal.
:::

---

## 3.1 Accessing the Public Portal

Facility users can access the Service Desk from the organization’s public helpdesk portal.

The administrator configures and enables the Public Portal from the Organization Profile and provides the Public Portal URL to facility users.

To access the Public Portal:

1. Open the configured **Public Portal URL** in a web browser.
2. Enter the email address assigned to the facility user account.
3. Enter the account password.
4. Click the login option.
5. Wait for the Public Portal to load.

After successfully logging in, facility users can access the following options from the top navigation:

- **Open a New Ticket**
- **Tickets**

:::note
Facility users can access ticket information only for the facility assigned to their account.
:::

---

## 3.2 Open a New Ticket

The **Open a New Ticket** page allows facility users to submit a new support request for their assigned facility.

The user’s assigned location is displayed at the top of the page. Contact information associated with the logged-in account is automatically added to the ticket form.

The ticket form contains the following sections:

1. Ticket Details
2. Contact Information
3. Attachments

### 3.2.1 Create a New Ticket

To create a new ticket:

1. Select **Open a New Ticket** from the top navigation.
2. Enter a clear ticket title.
3. Provide a detailed description of the issue.
4. Select the appropriate category.
5. Select a subcategory under the selected category.
6. Select the application associated with the issue.
7. Select the appropriate priority level.
8. Review the automatically populated contact information.
9. Attach supporting files when required.
10. Click **Save** to submit the ticket.

After the ticket is successfully submitted, it becomes available on the **Tickets** page.

---

### 3.2.2 Ticket Details

The **Ticket Details** section is used to describe and classify the reported issue.

| Field | Requirement | Description |
|---|---|---|
| Title | Required | A short and clear title that summarizes the reported issue. |
| Detailed Description | Required | A complete explanation of the issue and its impact. |
| Category | Required | The main classification of the reported issue. |
| Subcategory | Based on category | A more specific classification under the selected category. |
| Application | Required | The application associated with the issue. |
| Priority Level | Required | The urgency level of the support request. |

---

### 3.2.3 Title

The **Title** should provide a short and specific summary of the issue.

Example:

```text
Unable to access the reporting dashboard
```

Avoid unclear titles such as:

```text
System problem
```

A clearer title would be:

```text
Reporting dashboard remains blank after login
```

A descriptive title helps the technicians understand the general issue before opening the complete ticket.

---

### 3.2.4 Detailed Description

The **Detailed Description** field should include as much relevant information as possible.

A useful description may include:

- What the user was trying to do
- What happened
- What was expected to happen
- Any error message displayed
- When the issue started
- Whether the issue occurs repeatedly
- The effect of the issue on facility operations
- Any troubleshooting already attempted

Example:

```text
The reporting dashboard does not load after signing in. The page remains blank, and no error message is displayed. The issue started this morning and still occurs after refreshing the browser and signing in again.
```

Providing complete information helps the technicians investigate and resolve the issue more efficiently.

---

### 3.2.5 Category and Subcategory

The **Category** identifies the main type of issue being reported.

After selecting a category, the **Subcategory** field becomes available and displays the subcategories configured under the selected category.

Examples include:

| Category | Subcategory |
|---|---|
| Dashboard | Dashboard Account Activation |
| Dashboard | Figures Not Reflecting |
| Network | Internet Connection Issue |
| Hardware | Device Not Working |

:::note
A category must be selected before a related subcategory can be selected.
:::

The facility user should select the category and subcategory that most accurately describe the issue.

---

### 3.2.6 Application

The **Application** field identifies the system or application associated with the reported issue.

Select the application that most closely relates to the support request.

The available applications are configured by the administrator.

---

### 3.2.7 Priority Level

The **Priority Level** indicates how urgently the issue requires attention.

Available priority levels may include:

| Priority | Description |
|---|---|
| Low | The issue has limited impact and does not require immediate attention. |
| Medium | The issue has a moderate operational impact. |
| High | The issue has a significant impact and requires prompt attention. |
| Critical | The issue has a severe operational impact and requires urgent action. |

Facility users should select the priority level that accurately represents the impact and urgency of the issue.

:::caution
Do not select a higher priority unless the issue has the corresponding operational impact. Priority levels are connected to the SLA time configured by the administrator.
:::

---

### 3.2.8 Contact Information

The **Contact Information** section displays the facility user details associated with the logged-in account.

This information is automatically populated from the user account and may include:

- Contact name
- Email address
- Phone number

Facility users should review the information before submitting the ticket.

The contact information helps technicians identify and communicate with the user who reported the issue.

---

### 3.2.9 Attachments

Facility users can attach supporting files when creating a ticket.

Relevant attachments may include:

- Screenshots
- Images
- Error messages
- Documents
- Reports
- Supporting text files

Supported file formats include:

- PDF
- DOC
- DOCX
- TXT
- JPG
- PNG

The maximum supported file size is **5 MB per file**.

To attach a file:

1. Click **Attach Files**.
2. Select the required file from the device.
3. Confirm that the file appears in the attachment area.
4. Repeat the process for additional files when required.

:::tip
Attach a clear screenshot when reporting a visual error, unexpected message, incorrect data, or page-loading issue.
:::

---

### 3.2.10 Submit the Ticket

Before submitting the ticket:

1. Review the title and detailed description.
2. Confirm that the correct category and subcategory have been selected.
3. Confirm the selected application.
4. Verify the selected priority level.
5. Review the contact information.
6. Confirm that the required attachments have been added.

Click **Save** to create the ticket.

Click **Cancel** to leave the page without submitting the ticket.

---

## 3.3 Tickets

The **Tickets** page allows facility users to monitor and manage support tickets associated with their account and assigned facility.

The page provides:

- All Tickets and My Tickets tabs
- Ticket summary cards
- Search functionality
- Status filters
- Priority filters
- Date-range filters
- Ticket cards
- Access to complete ticket details

This page helps facility users quickly understand the current progress of their support requests.

---

### 3.3.1 All Tickets and My Tickets

The Tickets page contains two ticket-view tabs:

| Tab | Description |
|---|---|
| All Tickets | Displays all tickets created within the facility assigned to the logged-in user. |
| My Tickets | Displays only tickets created directly by the logged-in facility user. |

#### All Tickets

The **All Tickets** tab displays all tickets created under the facility assigned to the logged-in user.

This may include tickets created by other facility users assigned to the same facility.

Tickets belonging to other facilities are not displayed.

#### My Tickets

The **My Tickets** tab displays only the tickets created by the currently logged-in facility user.

This tab allows users to monitor their own submitted requests without viewing tickets created by other users from the same facility.

---

### 3.3.2 Ticket Summary Cards

At the top of the Tickets page, facility users can view ticket summary cards.

These cards usually display:

- Total Tickets
- Open Tickets
- In-Progress Tickets
- Overdue Tickets
- Closed Tickets

The summary cards provide a quick overview of ticket activity and help users understand the current stage of their requests.

They are useful for reviewing overall ticket progress before opening individual ticket details.

---

### 3.3.3 Ticket Search and Filters

Facility users can search and filter tickets to locate specific requests quickly.

Users can search by:

- Ticket title
- Ticket ID

Users can filter tickets by:

- Status
- Priority
- Date range

The filters can help users locate:

- Open tickets
- In-progress tickets
- Overdue tickets
- Closed tickets
- High-priority tickets
- Critical tickets
- Tickets submitted within a selected date range
- Older support requests

A **Clear Filters** option is available to remove all selected filters and return to the complete ticket list.

:::tip
Use the Ticket ID when searching for a specific request because each Ticket ID uniquely identifies a ticket.
:::

---

### 3.3.4 Ticket List

The ticket list displays submitted tickets in a card-based layout.

Each ticket card may show the following information:

| Information | Description |
|---|---|
| Ticket Title | The title of the support request. |
| Ticket ID | The unique reference number of the ticket. |
| Short Description | A brief summary of the reported issue. |
| Created Date | The date on which the ticket was submitted. |
| Message Count | The number of messages in the ticket conversation. |
| Category | The category assigned to the ticket. |
| Status | The current progress of the ticket. |
| Priority | The urgency level of the ticket. |
| Attachment Indicator | Indicates whether the ticket contains attachments. |

To review a ticket:

1. Locate the required ticket.
2. Click the ticket card.
3. Review the complete information on the **Ticket Details** page.

---

### 3.3.5 Ticket Status

Ticket status indicates the current progress of a support request.

Common ticket statuses include:

| Status | Description |
|---|---|
| Open | The ticket has been submitted and is awaiting review or action. |
| In Progress | The support team or assigned technician is currently working on the issue. |
| Overdue | The ticket has passed its configured SLA deadline without being completed. |
| Closed | The reported issue has been resolved or the ticket has been completed. |

The status allows facility users to monitor ticket progress without contacting the support team separately.

---

### 3.3.6 Ticket Priority

Ticket priority indicates the urgency level of the support request.

Common priority levels include:

| Priority | Description |
|---|---|
| Low | The issue has limited impact and does not require immediate attention. |
| Medium | The issue has a moderate operational impact. |
| High | The issue has a significant impact and requires prompt attention. |
| Critical | The issue has a severe operational impact and requires urgent action. |

The selected priority helps the support team process the ticket according to its urgency and configured SLA time.

---

## 3.4 Ticket Details

The **Ticket Details** page displays complete information about a selected ticket.

This page allows facility users to:

- Review ticket information
- Review the current status and priority
- View created and due dates
- Review contact information
- Read technician responses
- Review the complete conversation history
- Post replies
- Upload attachments
- Close the ticket after the issue has been resolved

The Ticket Details page keeps all ticket-related information and communication in one place.

---

### 3.4.1 Ticket Information

The ticket information area displays the primary details of the selected ticket.

The available information may include:

| Information | Description |
|---|---|
| Ticket ID | The unique reference number of the ticket. |
| Created Date | The date and time when the ticket was submitted. |
| Due Date | The expected completion deadline based on the configured SLA. |
| Priority | The urgency level assigned to the ticket. |
| Status | The current progress of the ticket. |
| Category | The selected issue category. |
| Subcategory | The selected issue subcategory. |
| Application | The application associated with the reported issue. |

This information helps facility users understand the ticket timeline, urgency, classification, and current progress.

---

### 3.4.2 Contact Information

The contact information area displays the facility user details associated with the ticket.

The information may include:

- Facility user name
- Email address
- Phone number
- Assigned location or facility
- Assigned region

This information helps the support team identify the user and facility connected to the request.

---

### 3.4.3 Ticket Conversation

The main ticket detail area displays the complete conversation history between the facility user and the support team.

The conversation may include:

- Messages submitted by the facility user
- Replies from technicians
- Support team updates
- Resolution information
- Attachment references

Each conversation entry usually displays:

- Sender name
- Message type
- Message content
- Date and time

The conversation history allows facility users to follow the full discussion and understand the actions already taken by the support team.

:::note
Continue an existing discussion by replying to the same ticket instead of creating another ticket for the same issue.
:::

---

### 3.4.4 Post a Reply

Facility users can post replies from the Ticket Details page.

To post a reply:

1. Open the **Tickets** page.
2. Select the required ticket.
3. Review the existing conversation.
4. Go to the reply section.
5. Enter the reply message.
6. Attach a supporting file when required.
7. Submit the reply.

The submitted reply is added to the ticket conversation history.

Replies can be used to:

- Provide additional information
- Answer technician questions
- Share updates about the issue
- Confirm whether troubleshooting steps worked
- Request additional assistance
- Confirm whether the issue has been resolved

---

### 3.4.5 Attach Files in a Reply

Facility users can attach files when posting a reply.

Attachments help technicians understand the issue more clearly and provide an appropriate response.

Relevant attachments may include:

- Screenshots
- Images
- Error messages
- Documents
- Reports
- Supporting files

To attach a file:

1. Open the required ticket.
2. Go to the reply section.
3. Select the attachment option.
4. Choose the required file.
5. Confirm that the file has been added.
6. Enter the reply message.
7. Submit the reply.

:::tip
Include a short explanation in the reply describing what the attached file shows.
:::

---

### 3.4.6 Close a Ticket

Facility users can close a ticket when the reported issue has been resolved.

Before closing a ticket:

1. Review the latest technician response.
2. Confirm that the issue has been resolved.
3. Verify that no additional support is required.
4. Select the option to close the ticket.

After the ticket is closed, its status changes to **Closed**.

:::caution
Do not close a ticket while the issue is still unresolved or while additional assistance is required.
:::

---

## 3.5 Facility User Workflow

The following flow summarizes the standard facility user process:

**1. Open the configured Public Portal URL**  
↓  
**2. Log in using the facility user credentials**  
↓  
**3. Select Open a New Ticket or Tickets**  
↓  
**4. Create and submit a new support ticket when required**  
↓  
**5. Open the Tickets page to monitor submitted requests**  
↓  
**6. Search, filter, or select a ticket**  
↓  
**7. Review the ticket status, priority, and details**  
↓  
**8. Review technician responses and conversation history**  
↓  
**9. Post replies and attach supporting files when required**  
↓  
**10. Monitor the ticket until the issue is resolved**  
↓  
**11. Close the ticket after confirming the resolution**

---

## 3.6 Facility User Checklist

Before submitting a new ticket, confirm that:

- The ticket title clearly summarizes the issue.
- The detailed description contains sufficient information.
- The correct category has been selected.
- The correct subcategory has been selected.
- The relevant application has been selected.
- The selected priority accurately represents the issue.
- The contact information is correct.
- Relevant screenshots or documents have been attached.

When monitoring an existing ticket, confirm that:

- The correct ticket has been opened.
- The latest technician response has been reviewed.
- Requested information has been provided.
- Replies have been added to the same ticket.
- Relevant supporting files have been attached.
- The ticket is closed only after the issue has been resolved.
