---
sidebar_position: 10
title: 9. UI/UX Specifications
---

# 9. UI/UX Specifications

This section defines the layouts, components, interactive actions, and validation rules for the 9 primary application screens.

---

## 9.1 Self-Service Portal Screens (Dr. Mary)

### 9.1.1 Dashboard Screen
- **Purpose**: Displays a summary of support volume for the user's facility.
- **Key Components**:
  - **Summary Cards** (`#card-summary-total` ... `#card-summary-closed`): Shows total, open, in progress, and closed counts.
  - **Quick Action Button** (`#btn-quick-open`): Redirects to "Open Ticket" page.
- **Actions**: Clicking a card filters the tickets list.

### 9.1.2 My Tickets Screen
- **Purpose**: A grid directory to search, filter, and track tickets.
- **Key Components**:
  - **Search Input** (`#input-ticket-search`): Text input to filter by title or ID.
  - **Filter Grid** (`#select-filter-status`, `#select-filter-priority`): Dropdowns to filter entries.
  - **Tickets List Grid** (`#grid-my-tickets`): Display cards showing Title, ID, Created Date, Message Count, Category, Status, Priority, and Attachment indicators.

### 9.1.3 Open Ticket Screen
- **Purpose**: Input form to create support requests.
- **Key Components**:
  - **Input Fields**: Title, Detailed Description, Category.
  - **Device Lookup** (`#select-facility-device`): Dropdown grid displaying registered devices for the facility.
  - **Uploader Zone** (`#uploader-drag-drop`): Area accepting screenshots/logs.
- **Validations**: Form blocks submission if Title is under 10 chars, Description under 30 chars, or files exceed 5 MB.

### 9.1.4 Ticket Details Screen
- **Purpose**: Mary's workspace to view comments and add replies.
- **Key Components**:
  - **Metadata Card** (`#card-ticket-meta`): Displays Created Date, Due Date, Priority, and Status.
  - **Contact Panel** (`#panel-contact`): Displays Dr. Mary's email, phone, and clinic details.
  - **Thread List** (`#timeline-thread`): Chronological conversation feed.
  - **Reply Box** (`#input-reply-content`): Text field with "Add Attachment" button.

---

## 9.2 Admin Portal Screens (Adam, Joseph, John)

### 9.2.1 Admin Ticket List Screen
- **Purpose**: Control room display showing all organization or assigned tickets.
- **Key Components**:
  - **Triage Queue Table** (`#table-admin-tickets`): Grid containing Columns: Ticket ID, Title, Facility, Team, Expert, Priority, Status, Created Date, Actions.
  - **Triage Quick Actions Dropdown**: Edit, Assign, Reassign, Transfer.
- **Validations**: Dynamic server-side pagination with default page size of 25.

### 9.2.2 Admin Ticket Details Screen
- **Purpose**: Operational center for agents and experts to collaborate, link devices, and submit resolutions.
- **Key Components**:
  - **Metadata Actions** (`#actions-header`): Link Device modal launcher, Assign Expert, and Team Transfer modals.
  - **Tabbed Thread Workspace** (`#tabs-discussion-notes`): Tab 1: Public Discussion (Client-facing); Tab 2: Internal Notes (Private to staff).
  - **Activity Timeline Sidebar** (`#sidebar-timeline`): Audit trails.

### 9.2.3 Teams Screen
- **Purpose**: Admin view to manage support groups.
- **Key Components**:
  - **Teams Catalog Grid** (`#catalog-teams`): Lists teams, leads, and member counts.
  - **Add Member Modal** (`#modal-add-member`): List of experts to add.

### 9.2.4 Categories Screen
- **Purpose**: Admin setup for issue categories.
- **Key Components**:
  - **Categories List** (`#table-categories`): Table showing category name, description, and related ticket counts.
  - **Create Category Drawer** (`#drawer-create-category`): Name and description form.

### 9.2.5 Team Mapping Screen
- **Purpose**: Routing engine configuration panel.
- **Key Components**:
  - **Category Mapping Table** (`#table-mappings`):
    - Rows: Issue Category.
    - Columns: Mapped Team dropdown select.
- **Actions**: Select target team, click save icon.
