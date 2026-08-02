---
sidebar_position: 4
title: Admin & Configuration Guide
---

# Admin & Configuration Guide

This guide defines the configuration areas administrators must complete before go-live and maintain after deployment.

---

## 1. Configuration Sequence

Complete initial setup in this order:

1. Organization profile
2. Regions and facilities
3. User accounts
4. Roles and permissions
5. Service Desk teams
6. Ticket categories
7. Category-to-team mapping
8. SLA and overdue rules
9. Lookup/master data
10. Email accounts
11. Email templates
12. Automation and notification events
13. Verification ticket

---

## 2. Organization and Portal Settings

Administrators manage organization profile information and public portal availability from the organization settings page.

| Setting | Purpose |
| --- | --- |
| Organization name | Displayed across the platform and notifications. |
| Contact information | Used for administrative and support references. |
| Public portal status | Enables or disables facility user access. |
| Public portal URL | Shared with facility users for ticket submission. |

See the existing screenshot reference in [MoH Helpdesk Administrator Guide](./1-moh-helpdesk-administrator-guide.md).

---

## 3. Region and Facility Configuration

Regions and facilities define the operational hierarchy used for visibility, reporting, and ticket ownership.

| Configuration | Description |
| --- | --- |
| Region | Administrative region used for grouping facilities. |
| Facility | Health facility that submits or owns tickets. |
| Facility user | End user associated with a facility. |
| Regional visibility | Controls which tickets a regional user can view. |
| National visibility | Controls country-wide ticket and report visibility. |

Recommended rules:

- Each facility must belong to one active region.
- Facility users should be linked to the correct facility before go-live.
- Regional users should be mapped only to their assigned region.
- National users should receive reporting access without unnecessary configuration permissions.

---

## 4. User Management

Administrators can create and maintain user accounts from the admin panel.

| Action | Description |
| --- | --- |
| Create user | Add a new system or facility user. |
| Edit user | Update profile, contact, and access details. |
| Reset password | Help users recover access. |
| Activate/deactivate user | Control platform access without deleting historical records. |
| Assign role | Apply permissions based on job responsibility. |

User accounts should not be shared. Every user should have an individual account for audit and accountability.

---

## 5. Roles and Permissions

Permissions should follow the principle of least privilege.

| Role | Recommended Permission Scope |
| --- | --- |
| Facility User | Public portal access and own tickets only. |
| Regional User | Regional tickets and regional reports. |
| National User | National dashboards and reports. |
| Service Desk Agent | Assigned or organization-level tickets, depending on policy. |
| Service Desk Expert | Tickets assigned to the expert. |
| Service Desk Admin | Full Service Desk operations. |
| System Administrator | Full platform configuration and user management. |

Review feature-wise permission screenshots in [MoH Helpdesk Administrator Guide](./1-moh-helpdesk-administrator-guide.md).

---

## 6. Service Desk Teams

Teams define who handles tickets after routing.

| Field | Guidance |
| --- | --- |
| Team name | Use clear operational names such as Network Support or Procurement Support. |
| Description | Explain what the team handles. |
| Team lead | Assign responsible lead where applicable. |
| Members | Add agents or experts who work on tickets. |
| Primary team | Mark primary team when a user belongs to multiple teams. |

See [Service Desk](./2-service-desk.md) for screenshots and team member workflow.

---

## 7. Categories

Categories classify tickets and drive routing.

| Category Setup Rule | Reason |
| --- | --- |
| Use simple names | Facility users can choose correctly. |
| Avoid duplicate categories | Prevents routing confusion. |
| Add clear descriptions | Helps admins and users understand purpose. |
| Review periodically | Keeps categories aligned with actual support work. |

Example categories:

- Software
- Hardware
- Network
- Procurement
- Printing
- User Account
- Facility Device

---

## 8. Category-to-Team Mapping

Map each category to the correct support team before go-live.

| Category | Example Team |
| --- | --- |
| Network | Network Support Team |
| Software | Application Support Team |
| Hardware | Hardware Support Team |
| Procurement | Procurement Support Team |
| Printing | Printing Support Team |

Incorrect mapping may route tickets to the wrong team and delay resolution.

---

## 9. SLA and Overdue Rules

SLA configuration defines the expected response and resolution time for support tickets.

| SLA Area | Recommended Configuration |
| --- | --- |
| Priority | Low, Medium, High, Critical. |
| Response target | Time allowed before first response is expected. |
| Resolution target | Time allowed before closure/resolution is expected. |
| Overdue rule | Defines when a ticket is marked overdue. |
| Notification rule | Defines who receives SLA or overdue alerts. |

Example SLA matrix:

| Priority | First Response Target | Resolution Target | Escalation |
| --- | --- | --- | --- |
| Low | 2 business days | 7 business days | Team lead |
| Medium | 1 business day | 3 business days | Team lead |
| High | 4 business hours | 1 business day | Service Desk Admin |
| Critical | 1 business hour | 4 business hours | Regional/National escalation |

The final SLA values must be confirmed with MoH operational policy.

---

## 10. Lookup and Master Data

Lookup values control dropdowns, classifications, and standard values used across the platform.

| Lookup | Example Values |
| --- | --- |
| Ticket priority | Low, Medium, High, Critical |
| Ticket status | Open, In Progress, Overdue, Closed |
| Ticket source | Portal, Email, Internal |
| Facility type | Clinic, Hospital, Office, Warehouse |
| Region | Approved region list |
| Category | Approved ticket category list |

Only administrators should modify production lookup values. Changes can affect reporting, routing, and user training material.

---

## 11. Email and Notification Configuration

Configure email settings before users begin submitting tickets.

| Configuration | Purpose |
| --- | --- |
| SMTP account | Sends platform email notifications. |
| Mail mapping | Links mail accounts to modules such as Service Desk or Admin Panel. |
| Templates | Controls subject/body content for notification types. |
| Dynamic variables | Inserts ticket, user, organization, and status values. |
| Automation events | Defines when notifications are sent. |

Common notification events:

- New ticket alert
- Ticket assignment alert
- New message alert
- Internal note alert
- Overdue ticket alert
- Ticket close alert

---

## 12. Configuration Verification

Before handover, administrators should complete this verification:

| Test | Expected Result |
| --- | --- |
| Create a facility user | User can log in to the portal. |
| Create a Service Desk team | Team appears in assignment lists. |
| Create a category | Category appears in ticket creation forms. |
| Map category to team | New ticket routes to correct team. |
| Configure SLA | Ticket due date and overdue behavior follow the configured rule. |
| Configure email | User receives ticket notification. |
| Export report | Exported file reflects selected filters. |
| Deactivate user | User can no longer access the system. |
