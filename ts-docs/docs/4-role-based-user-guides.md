---
id: role-based-user-guide
sidebar_position: 4
title: 4. Role-Based User Guides
---

# 4. Role-Based User Guides
The **Role-Based User Guide** provides detailed instructions for each user type in the platform. It explains the responsibilities, available features, access scope, and standard workflows associated with each role.

---

## Role Summary

The guide is organized into the following user roles:

| User Type | Responsibilities | Access Scope |
|---|---|---|
| [Facility User](/docs/role-based-user-guide#41-facility-user) | Create tickets, view ticket history, and reply to technicians. | Tickets created within the assigned facility/location. |
| [Regional User](/docs/role-based-user-guide#42-regional-user) | Create and view regional tickets, self-assign, assign colleagues, resolve and escalate tickets, and access the technician dashboard. | Facilities within the assigned region. |
| [National User](/docs/role-based-user-guide#43-national-user) | Monitor all regions, reassign tickets, manage escalations, and access the Executive Dashboard. | All tickets. |
| [Management User](/docs/role-based-user-guide#44-management-user) | Review escalations from National Users and organization-wide service performance. | Tickets escalated to Management and dashboard access, subject to assigned permissions. |
| [Administrator](/docs/role-based-user-guide#45-administrator) | Manage users, lookup tables, reports, dashboards, and system configuration. | Entire system. |

---

## 4.1 Facility User

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

## 4.1.1 Accessing the Public Portal

Facility users can access the Service Desk from the organization’s public helpdesk portal.

The administrator configures and enables the Public Portal from the Organization Profile and provides the Public Portal URL to facility users.

To access the Public Portal:

1. Open the configured **Public Portal URL** in a web browser.

2. Enter the email address assigned to the facility user account.

3. Enter the account password.

4. Click the sign in option.

5. Wait for the Public Portal to load.

After successfully logging in, facility users can access the following options from the top navigation:

- **Open a New Ticket**

- **Tickets**

:::note

Facility users can access ticket information only for the facility assigned to their account.

:::

---

## 4.1.2 Open a New Ticket

The **Open a New Ticket** page allows facility users to submit a new support request for their assigned facility.

The user’s assigned location is displayed at the top of the page. Contact information associated with the logged-in account is automatically added to the ticket form.

The ticket form contains the following sections:

1. Ticket Details

2. Contact Information

3. Attachments

### 4.1.2.1 Create a New Ticket

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

### 4.1.2.2 Ticket Details

The **Ticket Details** section is used to describe and classify the reported issue.

| Field | Requirement | Description |
|---|---|---|
| Title | Required | A short and clear title that summarizes the reported issue. |
| Detailed Description | Required | A complete explanation of the issue and its impact. |
| Category | Required | The main classification of the reported issue. |
| Subcategory | Based on category | A more specific classification under the selected category. |
| Application | Required | The application associated with the issue. |

---

### 4.1.2.3 Title

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

### 4.1.2.4 Detailed Description

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

### 4.1.2.5 Category and Subcategory

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

### 4.1.2.6 Application

The **Application** field identifies the system or application associated with the reported issue.

Select the application that most closely relates to the support request.

The available applications are configured by the administrator.

---

### 4.1.2.7 Contact Information

The **Contact Information** section displays the facility user details associated with the logged-in account.

This information is automatically populated from the user account and may include:

- Contact name

- Email address

- Phone number

Facility users should review the information before submitting the ticket.

The contact information helps technicians identify and communicate with the user who reported the issue.

---

### 4.1.2.8 Attachments

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

### 4.1.2.9 Submit the Ticket

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

## 4.1.3 Tickets

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

### 4.1.3.1 All Tickets and My Tickets

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

### 4.1.3.2 Ticket Summary Cards

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

### 4.1.3.3 Ticket Search and Filters

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

### 4.1.3.4 Ticket List

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

### 4.1.3.5 Ticket Status

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

### 4.1.3.6 Ticket Priority

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

## 4.1.4 Ticket Details

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

### 4.1.4.1 Ticket Information

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

### 4.1.4.2 Contact Information

The contact information area displays the facility user details associated with the ticket.

The information may include:

- Facility user name

- Email address

- Phone number

- Assigned location or facility

- Assigned region

This information helps the support team identify the user and facility connected to the request.

---

### 4.1.4.3 Ticket Conversation

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

### 4.1.4.4 Post a Reply

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

### 4.1.4.5 Attach Files in a Reply

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

### 4.1.4.6 Close a Ticket

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

## 4.1.5 Facility User Workflow

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

## 4.1.6 Facility User Checklist

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

---

## 4.2 Regional User

Regional users can sign in to the platform using the account credentials created by the administrator. Each regional user is assigned to a specific region, and their ticket access is controlled according to that regional assignment and the roles and permissions configured for their account.

Regional users can:

- View unassigned tickets available within their assigned region

- View tickets assigned directly to them

- Create new tickets

- Edit ticket information

- Review complete ticket details

- Communicate with facility users and other technicians through ticket threads

- Post internal notes, staff replies, and resolutions

- Assign tickets to themselves or other users

- View and manage ticket attachments

- Resolve and close tickets

:::note

A regional user’s available actions depend on the role and permissions assigned by the administrator.

:::

---

## 4.2.1 Accessing the Platform

Regional users can log in using the email address and password created by the administrator.

During account creation, the administrator assigns the regional user to a specific region. The platform uses this regional assignment to determine which unassigned tickets and facilities are available to the user.

To access the platform:

1. Open the platform sign in page.

2. Enter the email address assigned to the regional user account.

3. Enter the account password.

4. Click the sign in option.

After logging in, the regional user can access the Service Desk features permitted for their assigned role.

---

## 4.2.2 Tickets

The **Tickets** page allows regional users to view, search, filter, create, assign, and manage tickets available to their account.

The page contains:

- All, My Tickets, and Unassigned tabs

- Ticket summary cards

- A Create Ticket button

- Search and date filters

- A ticket list

- Ticket assignment and action controls

### 4.2.2.1 Ticket Tabs

The Tickets page contains three tabs:

| Tab | Description |
|---|---|
| All | Displays all unassigned tickets available within the user’s assigned region, together with tickets assigned directly to the logged-in regional user. |
| My Tickets | Displays only tickets assigned directly to the logged-in regional user. |
| Unassigned | Displays tickets within the assigned region that have not yet been assigned to a user. |

---

### 4.2.2.2 Ticket Summary Cards

Ticket summary cards appear near the top of the Tickets page.

They provide a quick overview of ticket activity and may include:

- Total Tickets

- Open Tickets

- In Progress Tickets

- Overdue Tickets

- Closed Tickets

| Summary Card | Description |
|---|---|
| Total Tickets | Shows the total number of tickets available in the current view. |
| Open Tickets | Shows tickets that have been created and are waiting for action. |
| In Progress Tickets | Shows tickets currently being handled. |
| Overdue Tickets | Shows tickets that have passed their configured SLA deadline. |
| Closed Tickets | Shows tickets that have been completed or resolved. |

The summary cards allow regional users to understand ticket workload and progress at a glance.

---

### 4.2.2.3 Ticket Search and Date Filters

Regional users can search and filter the ticket list to locate specific tickets.

The available controls may include:

- Search by Ticket Number

- Search by Ticket Title

- Start Date

- End Date

- Refresh or reset option

To find a ticket:

1. Enter the Ticket Number or Title in the search field.

2. Select a Start Date when required.

3. Select an End Date when required.

4. Apply or refresh the search.

5. Review the filtered results.

:::tip

Use the Ticket Number when searching for a specific ticket because each Ticket Number uniquely identifies a request.

:::

---

### 4.2.2.4 Ticket List

The ticket list displays the tickets available under the selected tab.

The list may include:

| Column | Description |
|---|---|
| Ticket No. | The unique ticket reference number. |
| Title | The title of the ticket. |
| Created Date | The date on which the ticket was created. |
| Assign To | The user currently assigned to the ticket. |
| Location | The facility or location associated with the ticket. |
| Priority Level | The urgency level of the ticket. |
| Status | The current ticket status. |
| Action | Provides available ticket actions like- process, edit and close.  |

Regional users can select a Ticket Number or use the Action menu to open and manage a ticket.

---

## 4.2.3 Create Ticket

Regional users can create a new ticket from the Tickets page by selecting **Create Ticket**.

The ticket creation form contains:

1. Ticket Details

2. Facility User Information

3. Attachments

### 4.2.3.1 Ticket Details

The Ticket Details section may include:

| Field | Requirement | Description |
|---|---|---|
| Title | Required | A short and clear title describing the issue. |
| Ticket Summary | Required | A detailed description of the reported issue. |
| Category | Required | The main classification of the ticket. |
| Subcategory | Based on category | A more specific classification under the selected category. |
| Application | Optional or configuration-based | The application associated with the issue. |
| Location | Required | The facility or location associated with the ticket. |
| Ticket Source | Required | Identifies how the ticket was received or created. |
| Priority Level | Required | The urgency level assigned to the ticket. |
| User Type | Optional or configuration-based | The type of user the ticket will be assigned to. |
| Assign To | Optional | The user to whom the ticket will be assigned during creation. |

### 4.2.3.2 Facility User Information

The **Facility User Information** section allows the regional user to associate the ticket with a facility user.

Regional users can:

- Search for an existing facility user by phone number or email address

- Select an existing facility user

- Choose **Add a new Facility User** when the required user does not already exist

The selected facility user information connects the ticket to the correct requester and facility.

### 4.2.3.3 Attachments

Regional users can add supporting files while creating the ticket.

Supported file formats shown by the platform include:

- PDF

- DOC

- DOCX

- TXT

- JPG

- PNG

The maximum supported size is **5 MB per file**.

To create the ticket:

1. Click **Create Ticket**.

2. Enter the Title and Ticket Summary.

3. Select the Category and Subcategory.

4. Select the Application when applicable.

5. Select the Location.

6. Select the Ticket Source.

7. Select the Priority Level.

8. Select the User Type when required.

9. Select an assignee when appropriate.

10. Search for or add the Facility User.

11. Attach supporting files when required.

12. Click **Save**.

Click **Cancel** to leave the form without creating the ticket.

---

## 4.2.4 Edit Ticket

Regional users can edit an existing ticket when their assigned permissions allow it.

The Edit Ticket option can be used to update ticket information such as:

- Title

- Description or Ticket Summary

- Category

- Subcategory

- Application

- Location

- Ticket Source

- Priority Level

- Facility user information

- Other editable ticket fields

:::caution

A user cannot be assigned from the Edit Ticket page. Ticket assignment must be completed from the **Assign** tab on the Ticket Details page.

:::

To edit a ticket:

1. Open the required ticket.

2. Select the edit option.

3. Update the required ticket information.

4. Review the changes.

5. Save the updated ticket.

---

## 4.2.5 Ticket Details

The **Ticket Details** page displays the complete information and management options for a selected ticket.

The page may show:

| Information | Description |
|---|---|
| Status | The current progress of the ticket. |
| Priority | The urgency level of the ticket. |
| Title | The ticket title. |
| Description | The complete description of the issue. |
| Assigned To | The user currently assigned to the ticket. |
| Category | The selected ticket category. |
| Subcategory | The selected ticket subcategory. |
| Application | The application associated with the issue. |
| Location | The facility or location associated with the ticket. |
| Name | The facility user name. |
| Email | The facility user’s email address. |
| Phone | The facility user’s phone number. |
| Ticket Source | The source through which the ticket was created. |
| Due Date | The expected completion deadline. |
| Created | The date and time the ticket was created. |
| Last Updated | The most recent ticket update time. |

The Ticket Details page also contains the following tabs:

1. Threads

2. Assign

3. Activity

4. Attachments

---

## 4.2.6 Threads

The **Threads** tab displays the complete ticket conversation and allows regional users to post replies.

The conversation may contain:

- Internal Notes

- Staff Posts

- Client Posts

- Resolutions

### 4.2.6.1 Thread Filters

Regional users can filter the conversation by selecting one or more of the following options:

| Filter | Description |
|---|---|
| Internal Notes | Displays internal messages shared only among technicians. |
| Staff Posts | Displays standard replies posted by technicians sent to the client. |
| Client Posts | Displays messages sent by the facility user. |
| Resolutions | Displays replies posted as the final resolution of the ticket. |

The filters help users isolate specific types of communication within a long ticket conversation.

---

### 4.2.6.2 Post a Reply

To post a reply:

1. Open the required ticket.

2. Select the **Threads** tab.

3. Click **Post Reply**.

4. Enter the response.

5. Select the required posting option.

6. Attach a file when required.

7. Click **Post**.

The reply type depends on the selected option.

### 4.2.6.3 Reply Options

| Reply Option | Audience and Result |
|---|---|
| No option selected | Posts the message as a **Staff Post**. The message is visible to the client. |
| Post as Internal note | Posts an internal note visible only to technicians and support staff. It is not sent to the facility user. |
| Post as Resolution | Posts the message to the client as the ticket resolution and closes the ticket. |
| Close ticket on reply | Posts the message to the client as a Staff Post and closes the ticket. |

#### Internal Note

Select **Post as Internal note** when the message is intended only for technicians or internal support staff.

Examples include:

- Technical observations

- Troubleshooting notes

- Internal handover information

- Instructions for another technician

#### Staff Post

When no checkbox is selected, the response is posted as a **Staff Post**.

A Staff Post is visible to the facility user and is used for normal communication, such as:

- Requesting additional information

- Providing an update

- Sharing troubleshooting steps

- Confirming progress

#### Resolution

Select **Post as Resolution** when the response contains the final solution.

The resolution:

- Is visible to the client

- Is identified as a resolution

- Closes the ticket

#### Close Ticket on Reply

Select **Close ticket on reply** when the message should be sent as a normal Staff Post and the ticket should close immediately after posting.

:::caution

Review the message and selected reply option carefully before posting. Internal Notes are not visible to facility users, while Staff Posts and Resolutions are visible to them.

:::

---

### 4.2.6.4 Client Posts

Client Posts are messages submitted by the facility user.

Regional users can review Client Posts to:

- Understand the original request

- Read additional information from the facility user

- Review responses to technician questions

- Confirm whether suggested troubleshooting steps worked

- Identify whether the issue remains unresolved

---

## 4.2.7 Assign

The **Assign** tab allows a regional user to assign a ticket to an eligible user.

A regional user can assign a ticket to:

- Themselves

- A colleague who is another regional user under the same region

- A national user

- An administrator

### 4.2.7.1 Assign a Ticket

To assign a ticket:

1. Open the required ticket.

2. Select the **Assign** tab.

3. Click **Assign**.

4. Select the required user type and the Assignee.

5. Save the assignment.

The most recently assigned user is displayed as the **Ticket Owner**.

### 4.2.7.2 Ticket Ownership

The current Ticket Owner is the most recently assigned user.

When a regional user is assigned as the Ticket Owner:

- The ticket appears under that user’s **My Tickets** tab.

- The user can access and manage that specific ticket according to their assigned permissions.

- Gets notified about updates of the assigned ticket.

- A later reassignment changes the Ticket Owner to the newly assigned user.

### 4.2.7.3 Escalate a Ticket

When a Regional User needs higher-level support, escalate the ticket to the National level. Do not escalate directly from Regional to Management.

Escalation moves upward only. Once a ticket is escalated to the National level, it cannot be reassigned to the Regional level.

---

## 4.2.8 Activity

The **Activity** tab displays a chronological record of significant actions performed on the ticket.

The Activity Timeline may include:

- Ticket Created

- Ticket Assigned

- Ticket Updated

- Status changes

- Assignee changes

- Other recorded ticket actions

:::note

The Activity Timeline helps regional users understand how the ticket has progressed and who performed each action.

:::

## 4.2.9 Attachments

The **Attachments** tab displays files associated with the selected ticket.

Regional users may be able to:

- View an attachment

- Download or open an attachment

- Delete an attachment

The attachment list may include files uploaded:

- During ticket creation

- By the facility user

:::caution

Delete an attachment only when it is incorrect, duplicated, or no longer required.

:::

---

## 4.3 National User

National users can sign in to the platform using the account credentials created by the administrator. Unlike regional users, national users are not restricted to a single region and can view and manage tickets across the entire organization.

National users can perform the same ticket-management activities available to regional users, including:

- View all tickets across the organization

- Access the Executive Dashboard

- Create new tickets

- Edit ticket information

- Review complete ticket details

- Communicate with facility users and support staff through ticket threads

- Post internal notes, staff replies, and resolutions

- Assign and reassign tickets

- Review ticket activity history

- View and manage ticket attachments

- Resolve and close tickets

- Use advanced filters to locate tickets across regions, locations, applications, categories, and subcategories

When additional permissions are assigned, national users may also configure users and other required platform settings.

:::note

A national user’s available actions depend on the roles and permissions assigned by the administrator.

:::

---

## 4.3.1 Accessing the Platform

National users can log in using the email address and password created by the administrator.

To access the platform:

1. Open the platform login page.

2. Enter the email address assigned to the national user account.

3. Enter the account password.

4. Click the login option.

5. Wait for the platform dashboard or ticket page to load.

After logging in, the national user can access organization-wide Service Desk features according to their assigned role and permissions.

---

## 4.3.2 Tickets

The **Tickets** page allows national users to view, search, filter, create, assign, and manage tickets across the entire organization.

Unlike the Regional User ticket page, the National User ticket page does not contain separate **All**, **My Tickets**, or **Unassigned** tabs. National users can view all tickets from all regions and facilities in a single ticket list.

The page may contain:

- Ticket summary cards

- A **Create Ticket** button

- Standard search and date filters

- Advanced Filters

- A complete organization-wide ticket list

- Ticket assignment and action controls

### 4.3.2.1 Organization-Wide Ticket Access

National users can view all tickets created across:

- All regions

- All locations and facilities

- All configured applications

- All categories and subcategories

- All assigned and unassigned ticket states

This organization-wide access allows national users to monitor and manage ticket activity without being restricted to a specific region.

:::note

There are no separate ticket tabs for national users because all organization tickets are displayed in the same ticket list.

:::

### 4.3.2.2 Ticket Summary Cards

Ticket summary cards appear near the top of the Tickets page.

They provide a quick overview of organization-wide ticket activity and may include:

- Total Tickets

- Open Tickets

- In Progress Tickets

- Overdue Tickets

- Closed Tickets

| Summary Card | Description |
|---|---|
| Total Tickets | Shows the total number of tickets across the organization. |
| Open Tickets | Shows tickets that have been created and are awaiting action. |
| In Progress Tickets | Shows tickets currently being handled. |
| Overdue Tickets | Shows tickets that have passed their configured SLA deadline. |
| Closed Tickets | Shows tickets that have been completed or resolved. |

The summary cards allow national users to understand the overall ticket workload and service status at a glance.

### 4.3.2.3 Standard Search and Date Filters

National users can search and filter the ticket list to locate specific tickets.

The available controls may include:

- Search by Ticket Number

- Search by Ticket Title

- Start Date

- End Date

- Refresh or reset option

To find a ticket:

1. Enter the Ticket Number or Ticket Title in the search field.

2. Select a Start Date when required.

3. Select an End Date when required.

4. Apply or refresh the search.

5. Review the filtered results.

:::tip

Use the Ticket Number when searching for a specific request because each Ticket Number uniquely identifies a ticket.

:::

### 4.3.2.4 Advanced Filters

National users have access to **Advanced Filters** for narrowing the organization-wide ticket list.

Available Advanced Filters include:

- Region

- Location

- Application

- Category

- Subcategory

| Filter | Description |
|---|---|
| Region | Filters tickets by the selected region. |
| Location | Filters tickets by a facility or location under the selected region. |
| Application | Filters tickets by the related application or system. |
| Category | Filters tickets by the selected issue category. |
| Subcategory | Filters tickets by a subcategory under the selected category. |

### 4.3.2.5 Ticket List

The ticket list displays all tickets available across the organization.

The list may include:

| Column | Description |
|---|---|
| Ticket No. | The unique ticket reference number. |
| Title | The title of the ticket. |
| Created Date | The date on which the ticket was created. |
| Assign To | The user currently assigned to the ticket. |
| Region | The region associated with the ticket. |
| Location | The facility or location associated with the ticket. |
| Priority Level | The urgency level of the ticket. |
| Status | The current ticket status. |
| Action | Provides available ticket actions. |

National users can select a Ticket Number or use the Action menu to open and manage a ticket.

---

## 4.3.3 Create Ticket

National users can create a new ticket from the Tickets page by selecting **Create Ticket**.

The ticket creation form may contain:

1. Ticket Details

2. Facility User Information

3. Attachments

### 4.3.3.1 Ticket Details

The Ticket Details section may include:

| Field | Requirement | Description |
|---|---|---|
| Title | Required | A short and clear title describing the issue. |
| Ticket Summary | Required | A detailed description of the reported issue. |
| Category | Required | The main classification of the ticket. |
| Subcategory | Based on category | A more specific classification under the selected category. |
| Application | Optional or configuration-based | The application associated with the issue. |
| Region | Required or configuration-based | The region associated with the ticket. |
| Location | Required | The facility or location associated with the ticket. |
| Ticket Source | Required | Identifies how the ticket was received or created. |
| Priority Level | Required | The urgency level assigned to the ticket. |
| User Type | Optional or configuration-based | The type of user connected to the ticket. |
| Assign To | Optional | The user to whom the ticket will be assigned during creation. |

:::note

The Location options should correspond to the selected Region, and the Subcategory options should correspond to the selected Category.

:::

### 4.3.3.2 Facility User Information

The **Facility User Information** section allows the national user to associate the ticket with a facility user.

National users can:

- Search for an existing facility user by phone number or email address

- Select an existing facility user

- Choose **Add a new Facility User** when the required user does not already exist

The selected facility user information connects the ticket to the correct requester and facility.

### 4.3.3.3 Attachments

National users can add supporting files while creating the ticket.

Supported file formats shown by the platform may include:

- PDF

- DOC

- DOCX

- TXT

- JPG

- PNG

The maximum supported size is **5 MB per file**.

To create the ticket:

1. Click **Create Ticket**.

2. Enter the Title and Ticket Summary.

3. Select the Category and Subcategory.

4. Select the Application when applicable.

5. Select the Region and Location.

6. Select the Ticket Source.

7. Select the Priority Level.

8. Select the User Type when required.

9. Select an assignee when appropriate.

10. Search for or add the Facility User.

11. Attach supporting files when required.

12. Click **Save**.

Click **Cancel** to leave the form without creating the ticket.

---

## 4.3.4 Edit Ticket

National users can edit an existing ticket when their assigned permissions allow it.

The Edit Ticket option can be used to update ticket information such as:

- Title

- Description or Ticket Summary

- Category

- Subcategory

- Application

- Region

- Location

- Ticket Source

- Priority Level

- Facility user information

- Other editable ticket fields

:::caution

A user cannot be assigned from the Edit Ticket page. Ticket assignment must be completed from the **Assign** tab on the Ticket Details page.

:::

To edit a ticket:

1. Open the required ticket.

2. Select the edit option.

3. Update the required ticket information.

4. Review the changes.

5. Save the updated ticket.

---

## 4.3.5 Ticket Details

The **Ticket Details** page displays the complete information and management options for a selected ticket.

The page may show:

| Information | Description |
|---|---|
| Status | The current progress of the ticket. |
| Priority | The urgency level of the ticket. |
| Title | The ticket title. |
| Description | The complete description of the issue. |
| Assigned To | The user currently assigned to the ticket. |
| Category | The selected ticket category. |
| Subcategory | The selected ticket subcategory. |
| Application | The application associated with the issue. |
| Region | The region associated with the ticket. |
| Location | The facility or location associated with the ticket. |
| Name | The requester or facility user name. |
| Email | The requester’s email address. |
| Phone | The requester’s phone number. |
| Ticket Source | The source through which the ticket was created. |
| Due Date | The expected completion deadline. |
| Created | The date and time the ticket was created. |
| Last Updated | The most recent ticket update time. |

The Ticket Details page also contains the following tabs:

1. Threads

2. Assign

3. Activity

4. Attachments

---

## 4.3.6 Threads

The **Threads** tab displays the complete ticket conversation and allows national users to post replies.

The conversation may contain:

- Internal Notes

- Staff Posts

- Client Posts

- Resolutions

### 4.3.6.1 Thread Filters

National users can filter the conversation by selecting one or more of the following options:

| Filter | Description |
|---|---|
| Internal Notes | Displays internal messages shared only among technicians and support staff. |
| Staff Posts | Displays standard replies posted by technicians or support staff and sent to the client. |
| Client Posts | Displays messages sent by the facility user. |
| Resolutions | Displays replies posted as the final resolution of the ticket. |

The filters help users isolate specific types of communication within a long ticket conversation.

### 4.3.6.2 Post a Reply

To post a reply:

1. Open the required ticket.

2. Select the **Threads** tab.

3. Click **Post Reply**.

4. Enter the response.

5. Select the required posting option.

6. Attach a file when required.

7. Click **Post**.

The reply type depends on the selected option.

### 4.3.6.3 Reply Options

| Reply Option | Audience and Result |
|---|---|
| No option selected | Posts the message as a **Staff Post**. The message is visible to the client. |
| Post as Internal note | Posts an internal note visible only to technicians and support staff. It is not sent to the facility user. |
| Post as Resolution | Posts the message to the client as the ticket resolution and closes the ticket. |
| Close ticket on reply | Posts the message to the client as a Staff Post and closes the ticket. |

#### Internal Note

Select **Post as Internal note** when the message is intended only for technicians or internal support staff.

Examples include:

- Technical observations

- Troubleshooting notes

- Internal handover information

- Instructions for another technician

#### Staff Post

When no checkbox is selected, the response is posted as a **Staff Post**.

A Staff Post is visible to the facility user and is used for normal communication, such as:

- Requesting additional information

- Providing an update

- Sharing troubleshooting steps

- Confirming progress

#### Resolution

Select **Post as Resolution** when the response contains the final solution.

The resolution:

- Is visible to the client

- Is identified as a resolution

- Closes the ticket

#### Close Ticket on Reply

Select **Close ticket on reply** when the message should be sent as a normal Staff Post and the ticket should close immediately after posting.

:::caution

Review the message and selected reply option carefully before posting. Internal Notes are not visible to facility users, while Staff Posts and Resolutions are visible to them.

:::

### 4.3.6.4 Client Posts

Client Posts are messages submitted by the facility user.

National users can review Client Posts to:

- Understand the original request

- Read additional information from the facility user

- Review responses to technician questions

- Confirm whether suggested troubleshooting steps worked

- Identify whether the issue remains unresolved

### 4.3.6.5 Thread Attachments

National users can attach a supporting file while posting a reply.

To attach a file:

1. Open the Post Reply form.

2. Click **Choose File**.

3. Select the required file.

4. Confirm that the file is attached.

5. Post the reply.

---

## 4.3.7 Assign

The **Assign** tab allows a national user to assign or reassign a ticket to an eligible user across the organization.

Depending on available permissions, a national user may assign a ticket to:

- Themselves

- A regional user

- Another national user

- A management user

- An administrator

- Another eligible technician or support user

### 4.3.7.1 Assign a Ticket

To assign a ticket:

1. Open the required ticket.

2. Select the **Assign** tab.

3. Click **Assign**.

4. Select the required user.

5. Confirm the assignment.

The most recently assigned user is displayed as the **Ticket Owner**.

### 4.3.7.2 Ticket Ownership

The current Ticket Owner is the most recently assigned user.

When a user is assigned as the Ticket Owner:

- The ticket becomes the responsibility of that user.

- The user can access and manage the ticket according to their permissions.

- A later reassignment changes the Ticket Owner to the newly assigned user.

### 4.3.7.3 Escalate a Ticket

When a National User needs higher-level support, escalate the ticket to the Management level.

Escalation moves upward only. Once a ticket is escalated to Management, it cannot be reassigned to the National or Regional level.

:::note

Ticket assignment should be completed from the Assign tab. Assignment is not available from the Edit Ticket page.

:::

---

## 4.3.8 Activity

The **Activity** tab displays a chronological record of significant actions performed on the ticket.

The Activity Timeline may include:

- Ticket Created

- Ticket Assigned

- Ticket Updated

- Status changes

- Assignee changes

- Priority changes

- Other recorded ticket actions

The Activity Timeline helps national users understand how the ticket has progressed and who performed each action.

---

## 4.3.9 Attachments

The **Attachments** tab displays files associated with the selected ticket.

National users may be able to:

- View an attachment

- Download or open an attachment

- Delete an attachment when permitted

:::caution

Delete an attachment only when it is incorrect, duplicated, or no longer required, and only when the user’s permissions allow deletion.

:::

---

## 4.4 Management User

The Administration & Configuration Guide lists Management Users as Team Members with management responsibilities. They receive tickets escalated from National Users and can access the [Executive Dashboard](/docs/dashboard#54-executive-dashboard) to review organization-wide service performance.

Access to other pages and actions depends on the roles and permissions assigned to the account.

Once a ticket is escalated to Management, it cannot be reassigned to a lower support level.

Management Users can use the Executive Dashboard to review:

- Support trends across regions and facilities

- Incident volumes and recurring issues

- Technician performance and workload

- SLA compliance

## 4.5 Administrator

Administrators have the highest level of access in the platform. They are responsible for managing system configuration, users, access control, reporting, dashboards, and organization-wide Service Desk operations.

Administrators can:

- Access and manage all tickets across the organization

- Create, edit, assign, reassign, resolve, and close tickets

- Manage organization, user, and service configurations

- Create and manage users

- Assign service-wise roles to users

- Configure feature-wise permissions for roles

- Manage regions, locations, categories, subcategories, applications, and priorities

- Configure email accounts, mail mappings, and email templates

- Configure automation and notification rules

- Access all available reports

- Access the Management Dashboard

- Monitor organization-wide ticket activity, SLA performance, recurring issues, and technician workload
