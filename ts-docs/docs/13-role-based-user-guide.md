---
sidebar_position: 3
title: Role-Based User Guide
---

# Role-Based User Guide

This guide explains how different user roles use the MoH Helpdesk platform. The detailed screen-by-screen Facility User guide, Service Desk guide, and Administrator guide remain available as supporting operational references.

---

## 1. Role Summary

| Role | Primary Responsibility | Typical Access |
| --- | --- | --- |
| Facility User | Submit and track support tickets for a facility. | Public portal, own tickets, replies, attachments. |
| Regional User | Monitor tickets and facilities within an assigned region. | Regional dashboard, regional ticket list, facility-level reporting. |
| National User | Monitor nationwide support performance and escalation status. | National dashboard, all-region reports, high-level ticket analytics. |
| Administrator | Configure users, roles, categories, teams, regions, notifications, and platform settings. | Admin panel, user management, configuration, audit, service desk settings. |

---

## 2. Facility User Guide

Facility users access the public portal to submit support requests and track progress.

### 2.1 Main Tasks

| Task | Description |
| --- | --- |
| Log in to the public portal | Use the portal URL provided by the administrator. |
| Open a new ticket | Submit issue title, description, category, contact details, and attachments. |
| View my tickets | Track submitted tickets from the **My Tickets** page. |
| Reply to a ticket | Continue communication with the support team. |
| Upload attachments | Add screenshots, documents, or evidence files. |
| Review status | Check Open, In Progress, Overdue, or Closed status. |

### 2.2 Visual Reference

See the dedicated Facility User page for screenshots:

- [Facility User](./3-facility-user.md)

---

## 3. Regional User Guide

Regional users monitor support activity for facilities under their assigned regional scope. Their access should be limited to tickets, facilities, and reports related to that region.

### 3.1 Main Tasks

| Task | Description |
| --- | --- |
| View regional dashboard | Review regional ticket volume, open issues, overdue tickets, and closure progress. |
| Monitor facility tickets | Check tickets submitted by facilities in the assigned region. |
| Track escalation | Identify delayed or high-priority tickets that need attention. |
| Review regional reports | Export or review ticket summaries by facility, category, priority, and status. |
| Coordinate with Service Desk | Follow up with Service Desk teams for overdue or critical issues. |

### 3.2 Recommended Access Rules

| Area | Regional User Access |
| --- | --- |
| Tickets | View tickets for assigned region only. |
| Facilities | View facilities under assigned region. |
| Reports | View and export regional reports. |
| Configuration | Read-only unless specifically delegated. |
| User Management | No access by default. |

### 3.3 Screenshots Required

Add screenshots for:

- Regional dashboard
- Regional ticket list
- Regional filters
- Regional report export
- Overdue ticket review

---

## 4. National User Guide

National users monitor country-wide service desk performance and escalation health. This role should focus on oversight, reporting, and coordination rather than day-to-day ticket handling.

### 4.1 Main Tasks

| Task | Description |
| --- | --- |
| View national dashboard | Review ticket volume and performance across all regions. |
| Compare regional performance | Identify regions with high open, overdue, or critical ticket counts. |
| Monitor SLA performance | Track SLA compliance and overdue trends. |
| Export national reports | Export data for management review and decision making. |
| Review escalations | Monitor critical issues that require national-level attention. |

### 4.2 Recommended Access Rules

| Area | National User Access |
| --- | --- |
| Tickets | View all tickets or summary-level tickets nationally. |
| Facilities | View all regions and facilities. |
| Reports | View and export national reports. |
| Configuration | Read-only unless specifically delegated. |
| User Management | No access by default. |

### 4.3 Screenshots Required

Add screenshots for:

- National dashboard
- Region comparison report
- SLA performance report
- National ticket filter
- Exported report confirmation

---

## 5. Administrator Guide

Administrators configure and maintain the platform. They are responsible for access control, organization settings, Service Desk configuration, notifications, and master data.

### 5.1 Main Tasks

| Task | Description |
| --- | --- |
| Manage users | Create, edit, activate, deactivate, and reset users. |
| Assign roles | Configure role and permission access. |
| Manage regions and facilities | Maintain organization hierarchy and facility records. |
| Configure categories | Create categories used for ticket classification and routing. |
| Configure teams | Create support teams and assign members. |
| Configure SLA | Set response and resolution thresholds. |
| Configure notifications | Manage email accounts, templates, and automation events. |
| Review audit activity | Monitor important system actions and changes. |

### 5.2 Visual Reference

See the dedicated administrator guide for existing screenshots:

- [MoH Helpdesk Administrator Guide](./1-moh-helpdesk-administrator-guide.md)
- [Admin & Configuration Guide](./14-admin-configuration-guide.md)

---

## 6. Role Permission Matrix

| Feature | Facility | Regional | National | Administrator |
| --- | :---: | :---: | :---: | :---: |
| Create own ticket | Yes | Optional | Optional | Yes |
| View own tickets | Yes | Yes | Yes | Yes |
| View regional tickets | No | Yes | Yes | Yes |
| View national tickets | No | No | Yes | Yes |
| Reply to tickets | Yes | Optional | Optional | Yes |
| Assign tickets | No | Optional | Optional | Yes |
| Export reports | No | Yes | Yes | Yes |
| Manage users | No | No | No | Yes |
| Manage categories | No | No | No | Yes |
| Manage SLA | No | No | No | Yes |
| Manage regions/facilities | No | Optional | Optional | Yes |

Permissions should be validated against the actual deployed configuration before handover.
