---
sidebar_position: 2
title: 2. Admin & Configuration Guide
---

# 2. Admin & Configuration Guide

This guide explains how administrators can configure the organization, regions, locations, users, roles, permissions, email integration, automation rules, ticket classifications, applications, and priority-based SLA settings.

Administrators should complete the initial configuration in the following sequence:

**1. Set Organization Profile**  
↓  
**2. Regions**  
↓  
**3. Locations**  
↓  
**4. Users**  
↓  
**5. Assign Roles to Users**  
↓  
**6. Assign Permissions to Roles**  
↓  
**7. Email Configuration**  
↓  
**8. Automation Rules**  
↓  
**9. Categories and Subcategories**  
↓  
**10. Applications**  
↓  
**11. Priorities**

:::note
Regions and locations should be configured before creating regional and facility users. This ensures that the correct region and facility can be assigned during user creation.
:::

---

## 2.1 Set Organization Profile

The **Organization Profile** contains the organization’s basic information, contact details, and public portal settings.

Administrators can update this information by clicking the **Edit Profile** button.

### 2.1.1 Basic Information

The Basic Information section contains the following fields:

| Field | Description |
|---|---|
| Name | The official name of the organization. |
| Organization Suffix | A unique suffix used to generate the organization’s public portal URL. |

### 2.1.2 Organization Suffix

The **Organization Suffix** is used as part of the generated Public Portal URL.
The suffix will be included in the generated Public Portal URL.

### 2.1.3 Contact Information

Administrators can enter or update the following organization contact information:

| Field | Description |
|---|---|
| Phone | The organization’s primary phone number. |
| City | The city where the organization is located. |
| State/Province | The state, province, or administrative area. |
| Address | The full address of the organization. |

### 2.1.4 Enable the Public Portal

The **Public Portal** setting controls whether the organization’s public helpdesk portal is accessible.

To enable the Public Portal:

1. Open the organization details.
2. Enter a valid **Organization Suffix**.
3. Enable the **Public Portal** toggle.
4. Review the generated **Public Portal URL**.
5. Click **Save**.

After the Public Portal is enabled and the organization details are saved, the generated Public Portal URL becomes functional.

The URL can then be shared with facility users so that they can log in, create tickets, and view tickets for their assigned facility.

:::tip
Use the copy icon beside the Public Portal URL to copy the complete portal address.
:::

---

## 2.2 Regions

The **Regions** section allows administrators to create and manage the geographical or administrative regions used by the organization.

Regions must be created before configuring locations, regional users, and facility users.

### 2.2.1 Create a Region

To create a new region:

1. Open the **Regions** menu under **Admin Panel**.
2. Click **Create Region**.
3. Enter the required **Region Name**.
4. Click **Save**.

Examples of regions may include:

- Hhohho
- Manzini
- Lubombo
- Shiselweni

---

## 2.3 Locations

The **Locations** menu is available under **Facility Management**.

Administrators can use this section to create and manage facility locations. Every location must be tagged to an existing region.

### 2.3.1 Create a Location

To create a location:

1. Open **Facility Management**.
2. Select **Locations**.
3. Click **Add New**.
4. Enter the required location information.
5. Select the appropriate region.
6. Enter any additional contact or reference information.
7. Click **Save**.

### 2.3.2 Region and Location Relationship

Each location must be associated with the correct region.

For example:

| Region | Location |
|---|---|
| Hhohho | Hhohho Government Hospital |
| Manzini | Manzini Regional Hospital |

This relationship ensures that:

- Facility users can be assigned to the correct facility.
- Regional users can manage tickets from facilities within their region.
- Tickets can be filtered by region and location.
- Reports and dashboards can present regional and facility-level information correctly.

:::caution
A location should not be created under the wrong region. The selected region is later used when assigning facility users and managing region-based ticket access.
:::

---

## 2.4 Users

The first major operational setup task is to create platform users.

Administrators should create the required regions and locations before creating users because regional and facility users require region-based assignments.

The platform supports four user types:

1. Facility User
2. Regional User
3. National User
4. Administrator

### 2.4.1 Users Page

The **Users** section contains two tabs:

- **Team Members**
- **Facility Users**

### 2.4.2 Team Members

The **Team Members** tab displays users with administrative, national, or regional responsibilities.

The following user types appear under Team Members:

- Administrators
- National Users
- Regional Users

### 2.4.3 Facility Users

The **Facility Users** tab displays users associated with specific facilities.


### 2.4.4 User Types and Access Scope

| User Type | Access Scope | Required Assignment |
|---|---|---|
| Facility User | Create tickets, view ticket history, and reply to technicians. | Region and facility |
| Regional User | View regional tickets, self-assign, assign colleagues, resolve, escalate tickets and access technician dashboard. | Region |
| National User | Monitor all regions, reassign tickets, manage escalations, and access national reporting. | No specific region required |
| Administrator | Manage users, lookup tables, reports, dashboards, and system configuration. | Based on administrative responsibilities |

### 2.4.5 Create a Regional User

When creating a Regional User, the administrator must assign the appropriate region.

Example:

| Field | Value |
|---|---|
| User Type | Regional User |
| Assigned Region | Manzini |

The user’s ticket access is then associated with the selected region.

### 2.4.6 Create a Facility User

When creating a Facility User, the administrator must assign:

1. A region
2. A facility located under the selected region

Example:

| Field | Value |
|---|---|
| User Type | Facility User |
| Region | Hhohho |
| Facility | Hhohho Government Hospital |

The facility selected for the user must belong to the selected region.

### 2.4.7 User Account Requirements

For every user account, the administrator must provide:

- A valid email address
- A valid password
- The correct user type
- The required region or facility assignment

#### Email Address

A valid email address must be entered for each user. The email address may be used for:

- User identification
- Login
- Password-related activities
- System notifications

#### Password

A password must be set for every user account.

The password must meet the platform’s password validation requirements.


---

## 2.5 Assign Roles to Users

Administrators can assign service-wise roles to Team Members by clicking the **Permission** button in the team members list.

Roles are assigned separately for each platform service. This allows the same user to have different responsibilities across different services.

### 2.5.1 Select Services

The administrator first selects the services that the user should be able to access.

Available services include:

- Service Desk
- Facility Management
- Admin Panel

### 2.5.2 Assign One Role per Service

After selecting the services, the administrator assigns one role for each selected service.

| Service | Available Roles |
|---|---|
| Service Desk | Admin, Supervisor, Expert |
| Facility Management | Facility Management Admin |
| Admin Panel | System Admin |

### 2.5.3 Assign Roles to a Team Member

To assign roles:

1. Open the user’s permission option.
2. Select the required services.
3. Review the roles available for each selected service.
4. Select one role for each service.
5. Click **Save**.

The assigned roles determine the user’s service-level access. Feature-level access is controlled separately from the Permissions Management dashboard.

:::note
Assigning a role gives the user access based on that role. The exact features and actions available to the role depend on the permissions configured under **Assign Permissions to Roles**.
:::

---

## 2.6 Assign Permissions to Roles

The Permissions Management dashboard allows administrators to configure feature-wise permissions for each role.

This provides granular access control instead of assigning broad permissions across the entire platform.

### 2.6.1 Permission Configuration Process

To configure role permissions:

1. Open **Permissions Management**.
2. Select a service.
3. Select the role to configure.
4. Review the features available under that service.
5. Enable or disable the required actions.
6. Click **Save**.

### 2.6.2 Service Desk Permissions

Service Desk roles include:

- Admin
- Supervisor
- Expert

Service Desk features may include:

| Feature | Available Permission Types |
|---|---|
| Ticket | View, Add, Edit, Threads, Assign, Close |
| Categories | View, Add, Edit, Delete |
| Applications | View, Add, Edit, Delete |
| Ticket Priority | Add |
| Ticket Reports | View |

The available actions may vary according to the selected role.

### 2.6.3 Facility Management Permissions

The Facility Management service includes the **Facility Management Admin** role.

Available features may include:

| Feature | Available Permission Types |
|---|---|
| Locations | View, Add, Edit, Delete |
| Facility Users | View, Add, Edit, Delete |

### 2.6.4 Admin Panel Permissions

The Admin Panel includes the **System Admin** role.

Available features may include:

| Feature | Available Permission Types |
|---|---|
| Users | View, Add, Edit, Manage Permission, Change Password, Deactivate |
| Regions | View, Add, Edit, Delete |
| Organizations | View, Edit |
| Permissions | Add |
| Mail Settings | View, Add, Edit, Delete, Configure Mail |
| Mail Templates | View, Edit |
| Automation Setting | Add |

:::caution
Permission changes affect all users assigned to the selected role. Review the enabled permissions carefully before saving.
:::

---

## 2.7 Email Configuration

The **Email Settings** menu is used to configure mail accounts, service mappings, and email templates.

The email configuration ensures that platform services can send and receive system emails using the correct SMTP and IMAP settings.

### 2.7.1 Email Configuration Overview

The Email Settings section displays all configured mail accounts with their current status and available configuration options.

Administrators can:

- Review active and inactive mail accounts.
- Add or update mail accounts.
- Configure SMTP and IMAP settings.
- Map mail accounts to platform services.
- Manage automated email templates.

### 2.7.2 Update Mail Settings

To configure or update a mail account:

1. Open **Email Settings**.
2. Select the mail account to update or create a new configuration.
3. Enter the SMTP details.
4. Enter the IMAP details.
5. Configure SSL options.
6. Enter the display name, email address, and password.
7. Set the account status.
8. Add optional notes.
9. Click **Save**.

### 2.7.3 Mail Setting Fields

| Field | Description |
|---|---|
| SMTP Server | The SMTP server address used to send emails. |
| SMTP Port | The SMTP port number. |
| IMAP Server | The IMAP server address used to receive emails. |
| IMAP Port | The IMAP port number. |
| SMTP Use SSL | Enables SSL for outgoing email communication. |
| IMAP Use SSL | Enables SSL for incoming email communication. |
| Display Name | The sender name displayed to email recipients. |
| Is Active | Controls whether the mail configuration is active. |
| Email Address | The email account used by the platform. |
| Password | The password or mail application password. |
| Notes | Additional information about the mail configuration. |

Example Gmail settings may include:

| Setting | Example |
|---|---|
| SMTP Server | `smtp.gmail.com` |
| SMTP Port | `587` |
| IMAP Server | `imap.gmail.com` |
| IMAP Port | `993` |

:::note
The correct server addresses, ports, passwords, SSL settings, and authentication requirements depend on the email provider.
:::

### 2.7.4 Configure Mail Mappings

The **Configure Mail** option allows administrators to link a configured mail account to one or more platform services.

Available services include:

- Service Desk
- Facility Management
- Admin Panel

To configure mail mappings:

1. Open the configured mail account.
2. Select **Configure Mail**.
3. Review the selected email account.
4. Select one or more platform services.
5. Click **Save**.

A single configured email account may be mapped to multiple services where required.

### 2.7.5 Managing Mail Templates

The **Mail Templates** section is used to manage automated email templates for different services, roles and events.

Administrators can update:

- Template Name
- Email Subject
- Email Body
- Attachments

### 2.7.6 Edit a Mail Template

To edit a mail template:

1. Open the **Mail Templates** section.
2. Select the template to edit.
3. Select the appropriate **Template Type**.
4. Select the appropriate **Role Type**.
5. Enter or update the **Template Name**.
6. Enter or update the **Email Subject**.
7. Edit the **Email Body** using the rich-text editor.
8. Add attachments if required.
9. Review the Email Preview.
10. Click **Update Template**.

### 2.7.7 Rich-Text Email Body

The rich-text editor may provide formatting options such as:

- Bold
- Italic
- Underline
- Headings
- Bulleted lists
- Numbered lists
- Links
- Images
- Code or special content blocks

### 2.7.8 Dynamic Variables

Dynamic Variables are placeholders that are automatically replaced with real platform data when an email is sent.

Example variables include:

```text
${customerName}
${organizationName}
${sentUrl}
${senderName}
```

The actual variables available may depend on the selected template type and notification event.

### 2.7.9 Email Preview

The **Email Preview** panel displays how the email will appear to recipients.

Administrators should review:

- Subject
- Email body
- Dynamic variable placement
- Formatting
- Sender information
- Links

Use the preview before updating the template to identify formatting or content issues.

### 2.7.10 Attachments

Administrators can add attachments to a mail template.

A maximum of five files can be attached where supported.

### 2.7.11 Reset and Update

The template editor provides the following actions:

| Action | Description |
|---|---|
| Cancel | Closes the editor without saving. |
| Reset Changes | Restores or removes unsaved changes. |
| Update Template | Saves the updated template. |

---

## 2.8 Automation Rules

The **Automation** page allows administrators to configure automated notification rules for platform services.

Automation rules determine:

- Which system events trigger notifications
- Which recipients receive notifications
- Whether email-based actions create tickets or messages

### 2.8.1 Select Service Type

Administrators first select the service for which the automation rules will be configured.

For example:

- Service Desk

After selecting the service, the system displays the email events available for that service.

### 2.8.2 Configure Service Desk Events

Service Desk automation events may include:

| Event | Description |
|---|---|
| New Ticket Alert | Sends an email when a new ticket is created. |
| Ticket Close Alert | Sends an email when a ticket is closed. |
| New Message Alert | Sends an email when a new message is added for the facility user. |
| New Internal Note Alert | Sends an email when an internal note is added for the technicians. |
| Ticket Assignment Alert | Sends an email when a ticket is assigned. |
| Overdue Ticket Alert | Sends an email when a ticket becomes overdue. |
| New Ticket via Email | Creates a ticket from an incoming email. |
| Message Added via Email | Creates a message from an incoming email. |

### 2.8.3 Select Notification Recipients

For each event, administrators can select which user groups receive the email notification.

Recipient types may include:

- Organization Admin
- Admin
- Assigned Person
- Supervisor
- Facility User


### 2.8.4 Save Automation Rules

After configuring the events, recipients, and email-based actions:

1. Review all selected events.
2. Verify the selected recipients.
3. Click **Save All Rules**.

:::caution
Automation rules can send email to multiple users. Review recipient selections carefully to prevent unnecessary or duplicate email notifications.
:::

---

## 2.9 Categories and Subcategories
This settings is under **Service Desk**

Categories and subcategories are used to classify tickets according to the type of issue being reported.

A category acts as the parent classification, while one or more subcategories can be created under that category.

### 2.9.1 Create a Category

To create a category:

1. Open the **Categories** section.
2. Click **Add New**.
3. Enter the required **Name**.
4. Enter an optional **Description**.
5. Click **Save**.


### 2.9.2 Create Subcategories

Multiple subcategories can be created under one parent category.

To create a subcategory:

1. Open the **Categories** page.
2. Locate the required parent category.
3. Click the **Subcategories** button.
4. Confirm that the correct parent category is displayed.
5. Click **Add New**.
6. Enter the subcategory information.
7. Click **Save**.

:::note
A single parent category can contain multiple subcategories. Each subcategory remains associated with the category under which it was created.
:::

---

## 2.10 Applications

The **Applications** section allows administrators to define the applications that can be associated with tickets.

### 2.10.1 Create an Application

To create an application:

1. Open the **Applications** section.
2. Click **Add New** or the equivalent create option.
3. Enter the application **Name**.
4. Click **Save**.

:::note
Application names should be clear and easily identifiable by users when creating or managing tickets.
:::

---

## 2.11 Priorities

The **Priorities** section allows administrators to configure the SLA time for each ticket priority level. After the specified period has elapsed, tickets under that priority will be marked as **Overdue**.

Available priority levels include:

- Low
- Medium
- High
- Critical

### 2.11.1 Configure SLA Time

For each priority level, the administrator can configure:

1. A time unit
2. A numerical SLA value

Supported time units may include:

- Day(s)
- Hour(s)
- Minute(s)

### 2.11.2 Example Priority Configuration

| Priority Level | Time Unit | SLA Value |
|---|---|---|
| Low | Day(s) | 4 |
| Medium | Day(s) | 1 |
| High | Hour(s) | 12 |
| Critical | Minute(s) | 2 |

The values above are example settings and can be changed according to the organization’s SLA policy.

:::caution
Priority SLA settings affect ticket deadlines and overdue calculations. Ensure that the configured values match the organization’s approved service-level targets.
:::

---

## 2.12 Initial Configuration Checklist

Before the platform is made available to users, verify that the following configuration tasks have been completed:

- Organization information has been entered.
- A valid Organization Suffix has been configured.
- The Public Portal has been enabled where required.
- All required regions have been created.
- All facilities have been created under the correct regions.
- Team Members and Facility Users have been created.
- Valid email addresses and passwords have been set.
- Regional Users have been assigned to the correct regions.
- Facility Users have been assigned to the correct regions and location.
- Service-wise roles have been assigned to Team Members.
- Feature-wise permissions have been reviewed for each role.
- SMTP and IMAP settings have been configured.
- Mail accounts have been mapped to the correct services.
- Email templates and dynamic variables have been reviewed.
- Automation events and recipients have been configured.
- Categories and subcategories have been created.
- Applications have been added.
- SLA times have been configured for all priority levels.

After completing this checklist, the platform is ready for operational use according to the configured roles, permissions, workflows, and service-level rules.
