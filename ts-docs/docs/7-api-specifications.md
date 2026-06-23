---
sidebar_position: 8
title: 7. REST API Specifications
---

# 7. REST API Specifications

This section defines the REST API design for the MoH Helpdesk Management System backend. All ticketing service endpoints are routed through the base path prefix `/ticket-api/`.

---

## 7.1 API Catalog

| HTTP Method | Endpoint | Description / Operation | Primary Tag |
|:---|:---|:---|:---|
| **POST** | `/ticket-api/branch` | POST operation | Branch |
| **GET** | `/ticket-api/branch/{key}` | GET operation | Branch |
| **PUT** | `/ticket-api/branch/{key}` | PUT operation | Branch |
| **DELETE** | `/ticket-api/branch/{key}` | DELETE operation | Branch |
| **GET** | `/ticket-api/branches/{organizationId}` | GET operation | Branch |
| **PUT** | `/ticket-api/bulk-branches` | PUT operation | Branch |
| **POST** | `/ticket-api/branch-permission` | POST operation | BranchPermission |
| **GET** | `/ticket-api/branch-permission/{key}` | GET operation | BranchPermission |
| **PUT** | `/ticket-api/branch-permission/{key}` | PUT operation | BranchPermission |
| **DELETE** | `/ticket-api/branch-permission/{key}` | DELETE operation | BranchPermission |
| **GET** | `/ticket-api/branch-permissions/{organizationId}/{branchId}` | GET operation | BranchPermission |
| **GET** | `/ticket-api/categories/{organizationId}` | GET operation | Category |
| **POST** | `/ticket-api/category` | POST operation | Category |
| **GET** | `/ticket-api/category/{key}` | GET operation | Category |
| **PUT** | `/ticket-api/category/{key}` | PUT operation | Category |
| **DELETE** | `/ticket-api/category/{key}` | DELETE operation | Category |
| **GET** | `/ticket-api/identify-categories/{categoryId}/{organizationId}` | GET operation | IdentifiedCategory |
| **GET** | `/ticket-api/identify-categories/{organizationId}` | GET operation | IdentifiedCategory |
| **POST** | `/ticket-api/identify-category` | POST operation | IdentifiedCategory |
| **GET** | `/ticket-api/identify-category/{key}` | GET operation | IdentifiedCategory |
| **PUT** | `/ticket-api/identify-category/{key}` | PUT operation | IdentifiedCategory |
| **DELETE** | `/ticket-api/identify-category/{key}` | DELETE operation | IdentifiedCategory |
| **GET** | `/ticket-api/admin-incidents/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/filter-incidents/{organizationId}/{startDate}/{endDate}` | GET operation | Incident |
| **POST** | `/ticket-api/incident` | POST operation | Incident |
| **PUT** | `/ticket-api/incident-close/{organizationId}` | PUT operation | Incident |
| **GET** | `/ticket-api/incident-details/{key}/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/incident-list/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/incident-portal/{key}/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/incident-status/{email}/{organizationId}` | GET operation | Incident |
| **PUT** | `/ticket-api/incident-status/{key}` | PUT operation | Incident |
| **GET** | `/ticket-api/incident/contactId/{contactId}/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/incident/networkDeviceId/{networkDeviceId}` | GET operation | Incident |
| **PUT** | `/ticket-api/incident/{key}` | PUT operation | Incident |
| **DELETE** | `/ticket-api/incident/{key}` | DELETE operation | Incident |
| **GET** | `/ticket-api/incident/{key}/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/incidents/{organizationId}` | GET operation | Incident |
| **GET** | `/ticket-api/last-incident/organizationId/{organizationId}` | GET operation | Incident |
| **PUT** | `/ticket-api/transfer-incident/{key}` | PUT operation | Incident |
| **POST** | `/ticket-api/incident-assigned` | POST operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigned-by-user/{userId}/{organizationId}` | GET operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigned-thread/{userId}/{incidentId}` | GET operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigned/member/download-csv/{organizationId}` | GET operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigned/member/{memberId}/{organizationId}` | GET operation | IncidentAssigned |
| **PUT** | `/ticket-api/incident-assigned/{key}` | PUT operation | IncidentAssigned |
| **DELETE** | `/ticket-api/incident-assigned/{key}` | DELETE operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigned/{key}/{organizationId}` | GET operation | IncidentAssigned |
| **GET** | `/ticket-api/incident-assigns/{incidentId}/{organizationId}` | GET operation | IncidentAssigned |
| **DELETE** | `/ticket-api/delete-incident-attachment` | DELETE operation | IncidentAttachment |
| **GET** | `/ticket-api/incident-attachment/{incidentId}` | GET operation | IncidentAttachment |
| **GET** | `/ticket-api/incident-history/{incidentId}/{organizationId}` | GET operation | IncidentHistory |
| **POST** | `/ticket-api/message` | POST operation | Message |
| **GET** | `/ticket-api/message/{key}` | GET operation | Message |
| **PUT** | `/ticket-api/message/{key}` | PUT operation | Message |
| **DELETE** | `/ticket-api/message/{key}` | DELETE operation | Message |
| **GET** | `/ticket-api/messages-external/{incidentId}` | GET operation | Message |
| **GET** | `/ticket-api/messages/{incidentId}` | GET operation | Message |
| **POST** | `/ticket-api/team` | POST operation | Team |
| **GET** | `/ticket-api/team/{key}` | GET operation | Team |
| **PUT** | `/ticket-api/team/{key}` | PUT operation | Team |
| **DELETE** | `/ticket-api/team/{key}` | DELETE operation | Team |
| **GET** | `/ticket-api/teams/{organizationId}` | GET operation | Team |
| **GET** | `/ticket-api/user-teams/{organizationId}/{userId}` | GET operation | Team |
| **DELETE** | `/ticket-api/bulk-team-member` | DELETE operation | TeamMember |
| **POST** | `/ticket-api/team-member` | POST operation | TeamMember |
| **PUT** | `/ticket-api/team-member/{key}` | PUT operation | TeamMember |
| **DELETE** | `/ticket-api/team-member/{key}` | DELETE operation | TeamMember |
| **GET** | `/ticket-api/team-members/{organizationId}/{teamId}` | GET operation | TeamMember |

---

## 7.2 Common Enums and Values

The API uses integer-based enums for several status, priority, and source fields. Below are the key mappings to their string representations:

### 7.2.1 TicketPriority
- `1`: Low
- `2`: Medium
- `3`: High
- `4`: Critical

### 7.2.2 IncidentStatus
- `0`: Unknown
- `1`: Open
- `2`: In Progress
- `3`: Resolved
- `4`: Closed
- `5`: Re-Opened
- `6`: Cancelled

### 7.2.3 SourceOfIncident
- `1`: Email
- `2`: Phone Call
- `3`: Web Form
- `4`: In Person
- `5`: Other

### 7.2.4 IncdentCreateMethod
- `1`: System
- `2`: Email
- `3`: Device
- `4`: RDP
- `5`: Other

### 7.2.5 ActionType
- `1`: View, `2`: Create, `3`: Update, `4`: Delete, `5`: Assign, `6`: Close, `7`: ManageMembers, `8`: Configure, `9`: ManagePermission, `10`: AssignService, `11`: ChangePassword, `12`: DealAction

---

## 7.3 Branch Management API

### 7.3.1 POST /ticket-api/branch
- **Method**: `POST`
- **Endpoint**: `/ticket-api/branch`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "isActive": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.3.2 GET /ticket-api/branch/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/branch/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.3.3 PUT /ticket-api/branch/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/branch/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "name": "string",
    "description": "string",
    "isActive": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.3.4 DELETE /ticket-api/branch/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/branch/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.3.5 GET /ticket-api/branches/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/branches/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.3.6 PUT /ticket-api/bulk-branches
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/bulk-branches`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "branchId": [
      0
    ],
    "isActive": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.4 Branch Permission API

### 7.4.1 POST /ticket-api/branch-permission
- **Method**: `POST`
- **Endpoint**: `/ticket-api/branch-permission`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "branchId": 0,
    "userAccountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "isActive": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.4.2 GET /ticket-api/branch-permission/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/branch-permission/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.4.3 PUT /ticket-api/branch-permission/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/branch-permission/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "branchId": 0,
    "userAccountId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "isActive": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.4.4 DELETE /ticket-api/branch-permission/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/branch-permission/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.4.5 GET /ticket-api/branch-permissions/\{organizationId\}/\{branchId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/branch-permissions/{organizationId}/{branchId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `branchId` | path | Yes | `integer (int32)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.5 Category API

### 7.5.1 GET /ticket-api/categories/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/categories/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.5.2 POST /ticket-api/category
- **Method**: `POST`
- **Endpoint**: `/ticket-api/category`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string"
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.5.3 GET /ticket-api/category/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.5.4 PUT /ticket-api/category/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "name": "string",
    "description": "string"
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.5.5 DELETE /ticket-api/category/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.6 Identified Category API

### 7.6.1 GET /ticket-api/identify-categories/\{categoryId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/identify-categories/{categoryId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `categoryId` | path | Yes | `integer (int32)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.6.2 GET /ticket-api/identify-categories/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/identify-categories/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.6.3 POST /ticket-api/identify-category
- **Method**: `POST`
- **Endpoint**: `/ticket-api/identify-category`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "categoryId": 0,
    "teamId": 0
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.6.4 GET /ticket-api/identify-category/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/identify-category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.6.5 PUT /ticket-api/identify-category/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/identify-category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "categoryId": 0,
    "teamId": 0
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.6.6 DELETE /ticket-api/identify-category/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/identify-category/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.7 Incident Management API

### 7.7.1 GET /ticket-api/admin-incidents/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/admin-incidents/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.2 GET /ticket-api/filter-incidents/\{organizationId\}/\{startDate\}/\{endDate\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/filter-incidents/{organizationId}/{startDate}/{endDate}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `startDate` | path | Yes | `string (date-time)` |  |
  | `endDate` | path | Yes | `string (date-time)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.3 POST /ticket-api/incident
- **Method**: `POST`
- **Endpoint**: `/ticket-api/incident`
- **Request Payload**:
  - Content-Type: `multipart/form-data`
  ```json
  {
    "incidentDto": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ticketTitle": "string",
      "description": "string",
      "dateResolved": "2026-06-22T04:19:00Z",
      "isAssigned": true,
      "incidentStatus": 0,
      "incidentSource": 1,
      "incidentCreateMethod": 1,
      "dueDate": "2026-06-22T04:19:00Z",
      "incidentPriority": 1,
      "brandName": "string",
      "branchId": 0,
      "contactId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "expertId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "teamId": 0,
      "slNumber": "string",
      "networkDeviceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "categoryId": 0,
      "isSelfAssigned": true,
      "isExtentionContact": true,
      "extensionDto": {
        "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "extentionName": "string",
        "extention": "string",
        "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      },
      "contactDto": {
        "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "contactFullName": "string",
        "contactEmail": "user@example.com",
        "contactPhone": "+8801700000000",
        "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    },
    "files": [
      "string"
    ]
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.4 PUT /ticket-api/incident-close/\{organizationId\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/incident-close/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `userId` | query | No | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "incidentId": [
      {
        "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.5 GET /ticket-api/incident-details/\{key\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-details/{key}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.6 GET /ticket-api/incident-list/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-list/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `search` | query | No | `string` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.7 GET /ticket-api/incident-portal/\{key\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-portal/{key}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.8 GET /ticket-api/incident-status/\{email\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-status/{email}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `email` | path | Yes | `string` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `slNumber` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.9 PUT /ticket-api/incident-status/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/incident-status/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | query | No | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "incidentStatus": 0,
    "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.10 GET /ticket-api/incident/contactId/\{contactId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident/contactId/{contactId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `contactId` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `status` | query | No | `string` |  |
  | `ticketPriority` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.11 GET /ticket-api/incident/networkDeviceId/\{networkDeviceId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident/networkDeviceId/{networkDeviceId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `networkDeviceId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.12 PUT /ticket-api/incident/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/incident/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | query | No | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `multipart/form-data`
  ```json
  {
    "incidentDto": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "ticketTitle": "string",
      "description": "string",
      "dateResolved": "2026-06-22T04:19:00Z",
      "isAssigned": true,
      "incidentStatus": 0,
      "incidentSource": 1,
      "incidentCreateMethod": 1,
      "dueDate": "2026-06-22T04:19:00Z",
      "incidentPriority": 1,
      "brandName": "string",
      "branchId": 0,
      "contactId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "expertId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "teamId": 0,
      "slNumber": "string",
      "networkDeviceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "categoryId": 0,
      "isSelfAssigned": true,
      "isExtentionContact": true,
      "extensionDto": {
        "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "extentionName": "string",
        "extention": "string",
        "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      },
      "contactDto": {
        "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "contactFullName": "string",
        "contactEmail": "user@example.com",
        "contactPhone": "+8801700000000",
        "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    },
    "files": [
      "string"
    ]
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.13 DELETE /ticket-api/incident/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/incident/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | query | No | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.14 GET /ticket-api/incident/\{key\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident/{key}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.15 GET /ticket-api/incidents/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incidents/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
  | `incidentStatus` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.16 GET /ticket-api/last-incident/organizationId/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/last-incident/organizationId/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.7.17 PUT /ticket-api/transfer-incident/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/transfer-incident/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "dateCreated": "2026-06-22T04:19:00Z",
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "dateModified": "2026-06-22T04:19:00Z",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "isDeleted": true,
    "isSynced": true,
    "isTPSynced": true,
    "isArchived": true,
    "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "teamId": 0,
    "expertId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.8 Incident Assignment API

### 7.8.1 POST /ticket-api/incident-assigned
- **Method**: `POST`
- **Endpoint**: `/ticket-api/incident-assigned`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "description": "string",
    "dateIdentified": "2026-06-22T04:19:00Z",
    "allowAccess": true,
    "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "expertId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "teamId": 0
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.2 GET /ticket-api/incident-assigned-by-user/\{userId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigned-by-user/{userId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `userId` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.3 GET /ticket-api/incident-assigned-thread/\{userId\}/\{incidentId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigned-thread/{userId}/{incidentId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `userId` | path | Yes | `string (uuid)` |  |
  | `incidentId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.4 GET /ticket-api/incident-assigned/member/download-csv/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigned/member/download-csv/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `startDate` | query | No | `string (date-time)` |  |
  | `endDate` | query | No | `string (date-time)` |  |
  | `categoryId` | query | No | `integer (int32)` |  |
  | `brandName` | query | No | `string` |  |
  | `incidentStatus` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.5 GET /ticket-api/incident-assigned/member/\{memberId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigned/member/{memberId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `memberId` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
  | `incidentStatus` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.6 PUT /ticket-api/incident-assigned/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/incident-assigned/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "description": "string",
    "dateIdentified": "2026-06-22T04:19:00Z",
    "allowAccess": true,
    "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "teamId": 0,
    "expertId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.7 DELETE /ticket-api/incident-assigned/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/incident-assigned/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.8.8 GET /ticket-api/incident-assigned/\{key\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigned/{key}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  ```json
  {
    "isSuccess": true,
    "data": [
      "string"
    ],
    "message": "string",
    "httpStatusCode": 100
  }
  ```

---

### 7.8.9 GET /ticket-api/incident-assigns/\{incidentId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-assigns/{incidentId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `incidentId` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.9 Incident Attachment API

### 7.9.1 DELETE /ticket-api/delete-incident-attachment
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/delete-incident-attachment`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "attachmentId": [
      0
    ]
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.9.2 GET /ticket-api/incident-attachment/\{incidentId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-attachment/{incidentId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `incidentId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.10 Incident History API

### 7.10.1 GET /ticket-api/incident-history/\{incidentId\}/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/incident-history/{incidentId}/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `incidentId` | path | Yes | `string (uuid)` |  |
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
  | `actionType` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.11 Message API

### 7.11.1 POST /ticket-api/message
- **Method**: `POST`
- **Endpoint**: `/ticket-api/message`
- **Request Payload**:
  - Content-Type: `multipart/form-data`
  ```json
  {
    "messageDto": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateCreated": "2026-06-22T04:19:00Z",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateModified": "2026-06-22T04:19:00Z",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isDeleted": true,
      "isSynced": true,
      "isTPSynced": true,
      "isArchived": true,
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "messageDate": "2026-06-22T04:19:00Z",
      "description": "string",
      "isInternal": true,
      "isResolution": true,
      "isOpen": true,
      "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "files": [
      "string"
    ]
  }
  ```
- **Response (200 - OK)**:
  ```json
  {
    "isSuccess": true,
    "data": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateCreated": "2026-06-22T04:19:00Z",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateModified": "2026-06-22T04:19:00Z",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isDeleted": true,
      "isSynced": true,
      "isTPSynced": true,
      "isArchived": true,
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "messageDate": "2026-06-22T04:19:00Z",
      "description": "string",
      "isInternal": true,
      "isResolution": true,
      "isOpen": true,
      "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "message": "string",
    "httpStatusCode": 100
  }
  ```

---

### 7.11.2 GET /ticket-api/message/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/message/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  ```json
  {
    "isSuccess": true,
    "data": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateCreated": "2026-06-22T04:19:00Z",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateModified": "2026-06-22T04:19:00Z",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isDeleted": true,
      "isSynced": true,
      "isTPSynced": true,
      "isArchived": true,
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "messageDate": "2026-06-22T04:19:00Z",
      "description": "string",
      "isInternal": true,
      "isResolution": true,
      "isOpen": true,
      "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "emailMessageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "message": "string",
    "httpStatusCode": 100
  }
  ```

---

### 7.11.3 PUT /ticket-api/message/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/message/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Request Payload**:
  - Content-Type: `multipart/form-data`
  ```json
  {
    "messageDto": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateCreated": "2026-06-22T04:19:00Z",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateModified": "2026-06-22T04:19:00Z",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isDeleted": true,
      "isSynced": true,
      "isTPSynced": true,
      "isArchived": true,
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "messageDate": "2026-06-22T04:19:00Z",
      "description": "string",
      "isInternal": true,
      "isResolution": true,
      "isOpen": true,
      "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "files": [
      "string"
    ]
  }
  ```
- **Response (200 - OK)**:
  ```json
  {
    "isSuccess": true,
    "data": {
      "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateCreated": "2026-06-22T04:19:00Z",
      "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "dateModified": "2026-06-22T04:19:00Z",
      "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "isDeleted": true,
      "isSynced": true,
      "isTPSynced": true,
      "isArchived": true,
      "oid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "messageDate": "2026-06-22T04:19:00Z",
      "description": "string",
      "isInternal": true,
      "isResolution": true,
      "isOpen": true,
      "incidentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "message": "string",
    "httpStatusCode": 100
  }
  ```

---

### 7.11.4 DELETE /ticket-api/message/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/message/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  ```json
  {
    "isSuccess": true,
    "data": true,
    "message": "string",
    "httpStatusCode": 100
  }
  ```

---

### 7.11.5 GET /ticket-api/messages-external/\{incidentId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/messages-external/{incidentId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `incidentId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.11.6 GET /ticket-api/messages/\{incidentId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/messages/{incidentId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `incidentId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.12 Team API

### 7.12.1 POST /ticket-api/team
- **Method**: `POST`
- **Endpoint**: `/ticket-api/team`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "string",
    "description": "string",
    "isAssigned": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.12.2 GET /ticket-api/team/\{key\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/team/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.12.3 PUT /ticket-api/team/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/team/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "name": "string",
    "description": "string",
    "isAssigned": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.12.4 DELETE /ticket-api/team/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/team/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.12.5 GET /ticket-api/teams/\{organizationId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/teams/{organizationId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.12.6 GET /ticket-api/user-teams/\{organizationId\}/\{userId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/user-teams/{organizationId}/{userId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `userId` | path | Yes | `string (uuid)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

## 7.13 Team Member API

### 7.13.1 DELETE /ticket-api/bulk-team-member
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/bulk-team-member`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": [
      0
    ]
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.13.2 POST /ticket-api/team-member
- **Method**: `POST`
- **Endpoint**: `/ticket-api/team-member`
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "createdBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "teamId": 0,
    "isTeamLead": true,
    "isPrimaryTeam": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.13.3 PUT /ticket-api/team-member/\{key\}
- **Method**: `PUT`
- **Endpoint**: `/ticket-api/team-member/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Request Payload**:
  - Content-Type: `application/json`
  ```json
  {
    "modifiedBy": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "organizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "oid": 0,
    "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "teamId": 0,
    "isTeamLead": true,
    "isPrimaryTeam": true
  }
  ```
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.13.4 DELETE /ticket-api/team-member/\{key\}
- **Method**: `DELETE`
- **Endpoint**: `/ticket-api/team-member/{key}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `key` | path | Yes | `integer (int32)` |  |
- **Response (200 - OK)**:
  *No response body returned*

---

### 7.13.5 GET /ticket-api/team-members/\{organizationId\}/\{teamId\}
- **Method**: `GET`
- **Endpoint**: `/ticket-api/team-members/{organizationId}/{teamId}`
- **Parameters**:
  | Name | In | Required | Type | Description |
  |:---|:---|:---|:---|:---|
  | `organizationId` | path | Yes | `string (uuid)` |  |
  | `teamId` | path | Yes | `integer (int32)` |  |
  | `page` | query | No | `integer (int32)` |  |
  | `pageSize` | query | No | `integer (int32)` |  |
  | `search` | query | No | `string` |  |
  | `sort` | query | No | `string` |  |
  | `sortDirection` | query | No | `string` |  |
- **Response (200 - OK)**:
  *No response body returned*

---