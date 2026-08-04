---
sidebar_position: 7
title: 6. Data Architecture
---

import ZoomableImage from '@site/src/components/ZoomableImage';
import erdImage from './images/erd.png';

# 6. Data Architecture

This section details the **Data Model** and **Database Design** of the MoH Helpdesk Management System. The databases are partitioned into three PostgreSQL databases: **User DB**, **Ticket DB**, and **Device DB**.

---

## 6.1 Entity Definitions

### 6.1.1 User Database
1. **Users**: System operators (Admins, Agents, Experts) with role classifications, referenced logically by GUID across other services.

### 6.1.2 Device Database
2. **Devices**: Asset tracking records for hardware devices (model, serial number, facility code, warranty status).

### 6.1.3 Ticket Database (Ticket Service)
All Ticket Service entities inherit from a common **BaseModel** and represent the core schema of the Ticketing system:

3. **BaseModel**: Abstract base entity containing common audit and status fields:
   - `CreatedBy` (Guid?): Operator who created the record.
   - `DateCreated` (DateTime?): Creation timestamp.
   - `ModifiedBy` (Guid?): Operator who last modified the record.
   - `DateModified` (DateTime?): Modification timestamp.
   - `OrganizationId` (Guid?): Linked organization ID.
   - `IsDeleted` (bool?): Soft delete status flag.
   - `IsSynced` / `IsTPSynced` (bool?): Core / Third-party integration synchronization status.
   - `IsArchived` (bool?): Archived status flag.
4. **Branch**: Represents a health facility branch location.
5. **BranchPermission**: Manages branch access permissions mapping specific users to branches.
6. **Category**: Ticket issue classifications (e.g. Software, Hardware, Network).
7. **Team**: Support teams responsible for resolving categories of tickets.
8. **TeamMember**: Links system users to support teams, defining leads and primary team status.
9. **IdentifiedCategory**: Maps issue categories to teams to dictate automated incident routing.
10. **Incident**: The central support ticket/case model containing metadata, SLA number, title, description, priority, status, and device references.
11. **IdentifiedAssignedIncident**: Incident assignments detailing assigned experts, teams, identification dates, and access control.
12. **IncidentAttachment**: File attachments associated directly with incidents.
13. **IncidentHistory**: Immutable change log/audit trail tracking changes to incident fields.
14. **IncidentSolutionSuggestion**: AI-generated similar-ticket solution suggestions for bulk-resolution workflow.
15. **Message**: Individual messages or updates within an incident's thread (includes public chats, internal notes, resolution updates).
16. **MessageAttachment**: File attachments associated with individual thread messages.

---

## 6.2 Entity Relationship Diagram (ERD)

<ZoomableImage src={erdImage} alt="Entity Relationship Diagram" maxHeight="600px" />

---

## 6.3 PostgreSQL DDL Schemas

### 6.3.1 User Database Schema
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('Admin', 'Agent', 'Expert')),
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

---

### 6.3.2 Ticket Database Schema

```sql
-- Helper function to generate audit fields in tables
-- Note: Audit fields from BaseModel are explicitly listed on every table for completeness.

CREATE TABLE branches (
    oid SERIAL PRIMARY KEY,
    name VARCHAR(90) NOT NULL,
    description VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE branch_permissions (
    oid SERIAL PRIMARY KEY,
    branch_id INTEGER NOT NULL REFERENCES branches(oid) ON DELETE CASCADE,
    user_account_id UUID NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
    oid SERIAL PRIMARY KEY,
    name VARCHAR(90) NOT NULL,
    description VARCHAR(500),
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE teams (
    oid SERIAL PRIMARY KEY,
    name VARCHAR(90) NOT NULL,
    description VARCHAR(500),
    is_assigned BOOLEAN NOT NULL DEFAULT FALSE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE team_members (
    oid SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    team_id INTEGER NOT NULL REFERENCES teams(oid) ON DELETE CASCADE,
    is_team_lead BOOLEAN NOT NULL DEFAULT TRUE,
    is_primary_team BOOLEAN NOT NULL DEFAULT TRUE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE identified_categories (
    oid SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES categories(oid) ON DELETE CASCADE,
    team_id INTEGER NOT NULL REFERENCES teams(oid) ON DELETE CASCADE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE incidents (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sl_number VARCHAR(100) NOT NULL,
    ticket_title VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    date_resolved TIMESTAMP WITH TIME ZONE,
    is_assigned BOOLEAN NOT NULL DEFAULT FALSE,
    incident_status VARCHAR(50) NOT NULL, -- e.g., 'Open', 'InProgress', 'Resolved', 'Closed'
    incident_source VARCHAR(50) NOT NULL, -- e.g., 'Email', 'Portal', 'WhatsApp'
    due_date TIMESTAMP WITH TIME ZONE NOT NULL,
    incident_priority VARCHAR(50),        -- e.g., 'Low', 'Medium', 'High', 'Critical'
    incident_create_method VARCHAR(50) NOT NULL, -- e.g., 'Manual', 'Auto'
    ticket_type VARCHAR(50),             -- e.g., 'Incident', 'Request'
    is_extention_contact BOOLEAN NOT NULL DEFAULT FALSE,
    extension_number VARCHAR(20),
    extension_name VARCHAR(100),
    brand_name VARCHAR(100),
    network_device_id UUID,
    is_self_assigned BOOLEAN NOT NULL DEFAULT FALSE,
    branch_id INTEGER REFERENCES branches(oid) ON DELETE SET NULL,
    contact_id UUID,
    mail_thread_id UUID,
    category_id INTEGER REFERENCES categories(oid) ON DELETE SET NULL,
    team_id INTEGER REFERENCES teams(oid) ON DELETE SET NULL,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_incidents_sl_number ON incidents(sl_number);
CREATE INDEX idx_incidents_status ON incidents(incident_status);

CREATE TABLE identified_assigned_incidents (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    description VARCHAR(250),
    date_identified TIMESTAMP WITH TIME ZONE,
    allow_access BOOLEAN NOT NULL DEFAULT TRUE,
    incident_id UUID NOT NULL REFERENCES incidents(oid) ON DELETE CASCADE,
    expert_id UUID,
    team_id INTEGER REFERENCES teams(oid) ON DELETE SET NULL,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE incident_attachments (
    oid SERIAL PRIMARY KEY,
    attachment_path TEXT NOT NULL,
    incident_id UUID NOT NULL REFERENCES incidents(oid) ON DELETE CASCADE,
    mail_attachment_id UUID,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE incident_histories (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    description TEXT,
    action_type VARCHAR(50) NOT NULL,
    action_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    field_name VARCHAR(90),
    old_field_value TEXT,
    new_field_value TEXT,
    incident_id UUID NOT NULL REFERENCES incidents(oid) ON DELETE CASCADE,
    user_account_id UUID,
    contact_id UUID,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

-- Trigger to make incident history logs immutable (updates/deletes blocked)
CREATE OR REPLACE FUNCTION block_modify_incident_history()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Updates and deletions are strictly prohibited on the incident_histories table.';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_incident_histories_immutable
BEFORE UPDATE OR DELETE ON incident_histories
FOR EACH ROW EXECUTE FUNCTION block_modify_incident_history();

CREATE TABLE incident_solution_suggestions (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    incident_id UUID NOT NULL REFERENCES incidents(oid) ON DELETE CASCADE,
    source_incident_id UUID NOT NULL,
    source_sl_number VARCHAR(20),
    suggested_solution TEXT,
    similarity_score DOUBLE PRECISION NOT NULL,
    is_ai_verified BOOLEAN NOT NULL DEFAULT FALSE,
    ai_verification_reason TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'Pending',
    customer_responded_at TIMESTAMP WITH TIME ZONE,
    customer_message_id UUID,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    message_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    is_internal BOOLEAN NOT NULL DEFAULT FALSE,
    is_resolution BOOLEAN NOT NULL DEFAULT FALSE,
    is_open BOOLEAN NOT NULL DEFAULT TRUE,
    incident_id UUID NOT NULL REFERENCES incidents(oid) ON DELETE CASCADE,
    email_message_id UUID,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);

CREATE TABLE message_attachments (
    oid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    attachment_path TEXT NOT NULL,
    message_id UUID NOT NULL REFERENCES messages(oid) ON DELETE CASCADE,
    
    -- BaseModel Audit & Sync Columns
    created_by UUID,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    modified_by UUID,
    date_modified TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    organization_id UUID,
    is_deleted BOOLEAN DEFAULT FALSE,
    is_synced BOOLEAN DEFAULT FALSE,
    is_tp_synced BOOLEAN DEFAULT FALSE,
    is_archived BOOLEAN DEFAULT FALSE
);
```

---

### 6.3.3 Device Database Schema
```sql
CREATE TABLE devices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    device_code VARCHAR(30) NOT NULL UNIQUE,
    model VARCHAR(100) NOT NULL,
    serial_number VARCHAR(100) NOT NULL UNIQUE,
    health_facility_code VARCHAR(30) NOT NULL,
    status VARCHAR(30) DEFAULT 'Active' NOT NULL CHECK (status IN ('Active', 'Under Repair', 'Decommissioned')),
    warranty_expires_at DATE,
    purchase_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE INDEX idx_devices_code ON devices(device_code);
```
