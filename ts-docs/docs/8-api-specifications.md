---
sidebar_position: 8
title: REST API Specifications
---

# 6. REST API Specifications

This API reference was updated from the supplied OpenAPI 3.0.4 specifications for the **Ticketing API** and **User API**. It is intended for implementation, integration, testing, and handover teams.

---

## 6.1 API Sources

| API | OpenAPI Title | Version | Path Count | Primary Base Path |
| --- | --- | --- | ---: | --- |
| Ticketing API | Ticketing Api | v1 | 129 | `/ticket-api` |
| User API | User API | v1 | 94 | `/user-api` |

> Base paths are deployment conventions used by the documentation. Confirm the final host and reverse-proxy path during installation.

---

## 6.2 Authentication and Common Headers

Most protected endpoints should be called with a valid bearer token returned by the user/authentication service. Public endpoints, if any, must be confirmed during environment hardening.

| Header | Required | Description |
| --- | :---: | --- |
| `Authorization: Bearer &lt;token&gt;` | Yes, for protected endpoints | JWT access token for the signed-in user. |
| `Content-Type: application/json` | Yes, for JSON body requests | Indicates a JSON request payload. |
| `Accept: application/json` | Recommended | Requests JSON response data. |
| `Content-Type: multipart/form-data` | When uploading files | Used by attachment or file upload endpoints. |

---

## 6.3 Ticketing API Catalog

### 6.3.1 Ai

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/correct-text` | POST /ticket-api/correct-text | - | application/json: `TextCorrectionRequestDto`<br />text/json: `TextCorrectionRequestDto`<br />application/*+json: `TextCorrectionRequestDto` | `200` OK |

### 6.3.2 Application

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/application` | POST /ticket-api/application | - | application/json: `CreateApplication`<br />text/json: `CreateApplication`<br />application/*+json: `CreateApplication` | `200` OK |
| **DELETE** | `/ticket-api/application/&#123;key&#125;` | DELETE /ticket-api/application/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/application/&#123;key&#125;` | GET /ticket-api/application/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/ticket-api/application/&#123;key&#125;` | PUT /ticket-api/application/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateApplication`<br />text/json: `UpdateApplication`<br />application/*+json: `UpdateApplication` | `200` OK |
| **GET** | `/ticket-api/applications/&#123;organizationId&#125;` | GET /ticket-api/applications/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.3.3 Branch

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/branch` | POST /ticket-api/branch | - | application/json: `CreateBranch`<br />text/json: `CreateBranch`<br />application/*+json: `CreateBranch` | `200` OK |
| **DELETE** | `/ticket-api/branch/&#123;key&#125;` | DELETE /ticket-api/branch/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **GET** | `/ticket-api/branch/&#123;key&#125;` | GET /ticket-api/branch/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/branch/&#123;key&#125;` | PUT /ticket-api/branch/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateBranch`<br />text/json: `UpdateBranch`<br />application/*+json: `UpdateBranch` | `200` OK |
| **GET** | `/ticket-api/branches/&#123;organizationId&#125;` | GET /ticket-api/branches/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **PUT** | `/ticket-api/bulk-branches` | PUT /ticket-api/bulk-branches | - | application/json: `BulkBranchStatusDto`<br />text/json: `BulkBranchStatusDto`<br />application/*+json: `BulkBranchStatusDto` | `200` OK |

### 6.3.4 BranchPermission

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/branch-permission` | POST /ticket-api/branch-permission | - | application/json: `CreateBranchPermission`<br />text/json: `CreateBranchPermission`<br />application/*+json: `CreateBranchPermission` | `200` OK |
| **DELETE** | `/ticket-api/branch-permission/&#123;key&#125;` | DELETE /ticket-api/branch-permission/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **GET** | `/ticket-api/branch-permission/&#123;key&#125;` | GET /ticket-api/branch-permission/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/branch-permission/&#123;key&#125;` | PUT /ticket-api/branch-permission/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateBranchPermission`<br />text/json: `UpdateBranchPermission`<br />application/*+json: `UpdateBranchPermission` | `200` OK |
| **GET** | `/ticket-api/branch-permissions/&#123;organizationId&#125;/&#123;branchId&#125;` | GET /ticket-api/branch-permissions/&#123;organizationId&#125;/&#123;branchId&#125; | `organizationId` (path, required, string)<br />`branchId` (path, required, integer)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.3.5 Category

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/categories-list/&#123;organizationId&#125;` | GET /ticket-api/categories-list/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/categories/&#123;organizationId&#125;` | GET /ticket-api/categories/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **POST** | `/ticket-api/category` | POST /ticket-api/category | - | application/json: `CreateCategory`<br />text/json: `CreateCategory`<br />application/*+json: `CreateCategory` | `200` OK |
| **GET** | `/ticket-api/category-by-parent/&#123;parentId&#125;` | GET /ticket-api/category-by-parent/&#123;parentId&#125; | `organizationId` (query, string)<br />`parentId` (path, required, integer)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **DELETE** | `/ticket-api/category/&#123;key&#125;` | DELETE /ticket-api/category/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **GET** | `/ticket-api/category/&#123;key&#125;` | GET /ticket-api/category/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/category/&#123;key&#125;` | PUT /ticket-api/category/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateCategory`<br />text/json: `UpdateCategory`<br />application/*+json: `UpdateCategory` | `200` OK |
| **GET** | `/ticket-api/parent-categories/&#123;organizationId&#125;` | GET /ticket-api/parent-categories/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`search` (query, string) | - | `200` OK |

### 6.3.6 IdentifiedCategory

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/identify-categories/&#123;categoryId&#125;/&#123;organizationId&#125;` | GET /ticket-api/identify-categories/&#123;categoryId&#125;/&#123;organizationId&#125; | `categoryId` (path, required, integer)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/identify-categories/&#123;organizationId&#125;` | GET /ticket-api/identify-categories/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **POST** | `/ticket-api/identify-category` | POST /ticket-api/identify-category | - | application/json: `CreateIdentifiedCategory`<br />text/json: `CreateIdentifiedCategory`<br />application/*+json: `CreateIdentifiedCategory` | `200` OK |
| **DELETE** | `/ticket-api/identify-category/&#123;key&#125;` | DELETE /ticket-api/identify-category/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **GET** | `/ticket-api/identify-category/&#123;key&#125;` | GET /ticket-api/identify-category/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/identify-category/&#123;key&#125;` | PUT /ticket-api/identify-category/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateIdentifiedCategory`<br />text/json: `UpdateIdentifiedCategory`<br />application/*+json: `UpdateIdentifiedCategory` | `200` OK |

### 6.3.7 Incident

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/admin-incidents/&#123;organizationId&#125;` | GET /ticket-api/admin-incidents/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/agent-reply-suggestion/&#123;incidentId&#125;/&#123;organizationId&#125;` | GET /ticket-api/agent-reply-suggestion/&#123;incidentId&#125;/&#123;organizationId&#125; | `incidentId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **POST** | `/ticket-api/confirm-similar-resolve-ticket/&#123;suggestionId&#125;/&#123;organizationId&#125;` | POST /ticket-api/confirm-similar-resolve-ticket/&#123;suggestionId&#125;/&#123;organizationId&#125; | `suggestionId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **POST** | `/ticket-api/confirm-similar-resolve/&#123;resolvedIncidentId&#125;/&#123;organizationId&#125;` | POST /ticket-api/confirm-similar-resolve/&#123;resolvedIncidentId&#125;/&#123;organizationId&#125; | `resolvedIncidentId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/filter-incidents/&#123;organizationId&#125;/&#123;startDate&#125;/&#123;endDate&#125;` | GET /ticket-api/filter-incidents/&#123;organizationId&#125;/&#123;startDate&#125;/&#123;endDate&#125; | `organizationId` (path, required, string)<br />`startDate` (path, required, string)<br />`endDate` (path, required, string) | - | `200` OK |
| **POST** | `/ticket-api/incident` | POST /ticket-api/incident | - | multipart/form-data: `object` | `200` OK |
| **PUT** | `/ticket-api/incident-close/&#123;organizationId&#125;` | PUT /ticket-api/incident-close/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`userId` (query, string) | application/json: `ClosedIncident`<br />text/json: `ClosedIncident`<br />application/*+json: `ClosedIncident` | `200` OK |
| **GET** | `/ticket-api/incident-details/&#123;key&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-details/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/incident-list/&#123;organizationId&#125;` | GET /ticket-api/incident-list/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`search` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/incident-portal/&#123;key&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-portal/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident-report/&#123;organizationId&#125;` | GET /ticket-api/incident-report/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`status` (query)<br />`severity` (query)<br />`facilityName` (query, string)<br />`categoryId` (query, integer)<br />`facilityId` (query, string)<br />`regionId` (query, string)<br />`assignedUserId` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string)<br />`parentCategoryId` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/incident-reports/download-csv/&#123;organizationId&#125;` | GET /ticket-api/incident-reports/download-csv/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`status` (query)<br />`severity` (query)<br />`facilityName` (query, string)<br />`search` (query, string)<br />`categoryId` (query, integer)<br />`facilityId` (query, string)<br />`regionId` (query, string)<br />`assignedUserId` (query, string)<br />`parentCategoryId` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/incident-status/&#123;email&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-status/&#123;email&#125;/&#123;organizationId&#125; | `email` (path, required, string)<br />`organizationId` (path, required, string)<br />`slNumber` (query, string) | - | `200` OK |
| **PUT** | `/ticket-api/incident-status/&#123;key&#125;` | PUT /ticket-api/incident-status/&#123;key&#125; | `key` (path, required, string)<br />`organizationId` (query, string) | application/json: `IncidentStatusDto`<br />text/json: `IncidentStatusDto`<br />application/*+json: `IncidentStatusDto` | `200` OK |
| **DELETE** | `/ticket-api/incident/&#123;key&#125;` | DELETE /ticket-api/incident/&#123;key&#125; | `key` (path, required, string)<br />`organizationId` (query, string) | - | `200` OK |
| **PUT** | `/ticket-api/incident/&#123;key&#125;` | PUT /ticket-api/incident/&#123;key&#125; | `key` (path, required, string)<br />`organizationId` (query, string) | multipart/form-data: `object` | `200` OK |
| **GET** | `/ticket-api/incident/&#123;key&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/assigned-by-region/&#123;expertId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident/assigned-by-region/&#123;expertId&#125;/&#123;organizationId&#125; | `expertId` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`status` (query)<br />`ticketPriority` (query)<br />`isAssigned` (query, boolean)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`regionId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/categorywise-count/&#123;organizationId&#125;` | GET /ticket-api/incident/categorywise-count/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/companyId/&#123;companyId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident/companyId/&#123;companyId&#125;/&#123;organizationId&#125; | `companyId` (path, required, string)<br />`organizationId` (path, required, string)<br />`contactId` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`status` (query)<br />`ticketPriority` (query)<br />`startDate` (query, string)<br />`endDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/contactNumber/&#123;contactNumber&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident/contactNumber/&#123;contactNumber&#125;/&#123;organizationId&#125; | `contactNumber` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/details-count/&#123;organizationId&#125;` | GET /ticket-api/incident/details-count/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/facility-wise-count/&#123;organizationId&#125;` | GET /ticket-api/incident/facility-wise-count/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/networkDeviceId/&#123;networkDeviceId&#125;` | GET /ticket-api/incident/networkDeviceId/&#123;networkDeviceId&#125; | `networkDeviceId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/incident/team-wise-count/&#123;organizationId&#125;` | GET /ticket-api/incident/team-wise-count/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incidents/&#123;organizationId&#125;` | GET /ticket-api/incidents/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string)<br />`incidentStatus` (query)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`isAssigned` (query, boolean)<br />`companyName` (query, string)<br />`regionId` (query, string)<br />`expertUserId` (query, string)<br />`applicationId` (query, string)<br />`categoryId` (query, integer)<br />`parentCategoryId` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/last-incident/organizationId/&#123;organizationId&#125;` | GET /ticket-api/last-incident/organizationId/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/similar-resolved-tickets/&#123;incidentId&#125;/&#123;organizationId&#125;` | GET /ticket-api/similar-resolved-tickets/&#123;incidentId&#125;/&#123;organizationId&#125; | `incidentId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/ticket-api/ticket-solution-suggestions/&#123;organizationId&#125;` | GET /ticket-api/ticket-solution-suggestions/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`title` (query, string)<br />`description` (query, string) | - | `200` OK |
| **PUT** | `/ticket-api/transfer-incident/&#123;key&#125;` | PUT /ticket-api/transfer-incident/&#123;key&#125; | `key` (path, required, string) | application/json: `TeamTransferDto`<br />text/json: `TeamTransferDto`<br />application/*+json: `TeamTransferDto` | `200` OK |

### 6.3.8 IncidentAssigned

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/incident-assigned` | POST /ticket-api/incident-assigned | - | application/json: `CreateIdentifiedAssignedIncident`<br />text/json: `CreateIdentifiedAssignedIncident`<br />application/*+json: `CreateIdentifiedAssignedIncident` | `200` OK |
| **GET** | `/ticket-api/incident-assigned-by-user/&#123;userId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-assigned-by-user/&#123;userId&#125;/&#123;organizationId&#125; | `userId` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident-assigned-thread/&#123;userId&#125;/&#123;incidentId&#125;` | GET /ticket-api/incident-assigned-thread/&#123;userId&#125;/&#123;incidentId&#125; | `userId` (path, required, string)<br />`incidentId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **DELETE** | `/ticket-api/incident-assigned/&#123;key&#125;` | DELETE /ticket-api/incident-assigned/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/ticket-api/incident-assigned/&#123;key&#125;` | PUT /ticket-api/incident-assigned/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateIdentifiedAssignedIncident`<br />text/json: `UpdateIdentifiedAssignedIncident`<br />application/*+json: `UpdateIdentifiedAssignedIncident` | `200` OK |
| **GET** | `/ticket-api/incident-assigned/&#123;key&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-assigned/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` `ObjectIEnumerableApiResponse` OK |
| **GET** | `/ticket-api/incident-assigned/member/&#123;memberId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-assigned/member/&#123;memberId&#125;/&#123;organizationId&#125; | `memberId` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string)<br />`incidentStatus` (query)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`isAssigned` (query, boolean)<br />`companyName` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/incident-assigned/member/download-csv/&#123;organizationId&#125;` | GET /ticket-api/incident-assigned/member/download-csv/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`categoryId` (query, integer)<br />`brandName` (query, string)<br />`incidentStatus` (query) | - | `200` OK |
| **GET** | `/ticket-api/incident-assigns/&#123;incidentId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-assigns/&#123;incidentId&#125;/&#123;organizationId&#125; | `incidentId` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.3.9 IncidentAttachment

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **DELETE** | `/ticket-api/delete-incident-attachment` | DELETE /ticket-api/delete-incident-attachment | - | application/json: `DeleteAttachmentDto`<br />text/json: `DeleteAttachmentDto`<br />application/*+json: `DeleteAttachmentDto` | `200` OK |
| **GET** | `/ticket-api/incident-attachment/&#123;incidentId&#125;` | GET /ticket-api/incident-attachment/&#123;incidentId&#125; | `incidentId` (path, required, string) | - | `200` OK |

### 6.3.10 IncidentHistory

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/incident-history/&#123;incidentId&#125;/&#123;organizationId&#125;` | GET /ticket-api/incident-history/&#123;incidentId&#125;/&#123;organizationId&#125; | `incidentId` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string)<br />`actionType` (query) | - | `200` OK |

### 6.3.11 Message

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/message` | POST /ticket-api/message | - | multipart/form-data: `object` | `200` `MessageDtoApiResponse` OK |
| **DELETE** | `/ticket-api/message/&#123;key&#125;` | DELETE /ticket-api/message/&#123;key&#125; | `key` (path, required, string) | - | `200` `BooleanApiResponse` OK |
| **GET** | `/ticket-api/message/&#123;key&#125;` | GET /ticket-api/message/&#123;key&#125; | `key` (path, required, string) | - | `200` `MessageApiResponse` OK |
| **PUT** | `/ticket-api/message/&#123;key&#125;` | PUT /ticket-api/message/&#123;key&#125; | `key` (path, required, string) | multipart/form-data: `object` | `200` `MessageDtoApiResponse` OK |
| **GET** | `/ticket-api/messages-external/&#123;incidentId&#125;` | GET /ticket-api/messages-external/&#123;incidentId&#125; | `incidentId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/messages/&#123;incidentId&#125;` | GET /ticket-api/messages/&#123;incidentId&#125; | `incidentId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/messages/sl/&#123;sl&#125;/&#123;organizationId&#125;` | GET /ticket-api/messages/sl/&#123;sl&#125;/&#123;organizationId&#125; | `sl` (path, required, string)<br />`organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.3.12 PriorityConfiguration

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/priority-configuration` | POST /ticket-api/priority-configuration | `organizationId` (query, string) | application/json: `array&lt;CreatePriorityConfigurationDto&gt;`<br />text/json: `array&lt;CreatePriorityConfigurationDto&gt;`<br />application/*+json: `array&lt;CreatePriorityConfigurationDto&gt;` | `200` OK |
| **GET** | `/ticket-api/priority-configurations/&#123;organizationId&#125;` | GET /ticket-api/priority-configurations/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |

### 6.3.13 Report

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/download-executive-facility-ticket-summary` | GET /ticket-api/download-executive-facility-ticket-summary | `organizationId` (query, string)<br />`userId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/download-executive-technician-ticket-summary` | GET /ticket-api/download-executive-technician-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`userId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-application-ticket-summary` | GET /ticket-api/executive-application-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-facility-ticket-summary` | GET /ticket-api/executive-facility-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-facility-ticket-with-pagination-summary` | GET /ticket-api/executive-facility-ticket-with-pagination-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`facilityId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/executive-recurring-issue-summary` | GET /ticket-api/executive-recurring-issue-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-regional-ticket-summary` | GET /ticket-api/executive-regional-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-technician-ticket-summary` | GET /ticket-api/executive-technician-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-technician-ticket-with-pagination-summary` | GET /ticket-api/executive-technician-ticket-with-pagination-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/executive-ticket-priority-summary` | GET /ticket-api/executive-ticket-priority-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/executive-ticket-summary` | GET /ticket-api/executive-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/monthly-incident-count-wise` | GET /ticket-api/monthly-incident-count-wise | `organizationId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/monthwise-count-wise` | GET /ticket-api/monthwise-count-wise | `organizationId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/regional-average-response-summary` | GET /ticket-api/regional-average-response-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/regional-facility-rank-summary` | GET /ticket-api/regional-facility-rank-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/regional-open-ticket-summary` | GET /ticket-api/regional-open-ticket-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query)<br />`page` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/regional-ticket-result-list` | GET /ticket-api/regional-ticket-result-list | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`categoryId` (query, integer)<br />`applicationId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/root-cause-frequent-issue-summary` | GET /ticket-api/root-cause-frequent-issue-summary | `organizationId` (query, string)<br />`regionId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/sla-achievement-count` | GET /ticket-api/sla-achievement-count | `organizationId` (query, string)<br />`regionId` (query, string)<br />`priority` (query)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-assigned-ticket` | GET /ticket-api/technician-assigned-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-closed-ticket` | GET /ticket-api/technician-closed-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-due-ticket` | GET /ticket-api/technician-due-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-high-priority-ticket` | GET /ticket-api/technician-high-priority-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-pending-ticket` | GET /ticket-api/technician-pending-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-performance-stat-ticket` | GET /ticket-api/technician-performance-stat-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-productivity` | GET /ticket-api/technician-productivity | `organizationId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |
| **GET** | `/ticket-api/technician-sla-ticket` | GET /ticket-api/technician-sla-ticket | `organizationId` (query, string)<br />`expertId` (query, string)<br />`startDate` (query, string)<br />`endDate` (query, string)<br />`dashboardTimeFilter` (query) | - | `200` OK |

### 6.3.14 ReportFile

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/ticket-api/annual-incident-report` | GET /ticket-api/annual-incident-report | `organizationId` (query, string)<br />`userId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/annual-incident-report-list` | GET /ticket-api/annual-incident-report-list | `organizationId` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/average-resolution-time-report` | GET /ticket-api/average-resolution-time-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/average-resolution-time-report-download` | GET /ticket-api/average-resolution-time-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/daily-incident-report` | GET /ticket-api/daily-incident-report | `organizationId` (query, string)<br />`userId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/daily-incident-report-list` | GET /ticket-api/daily-incident-report-list | `organizationId` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/escalated-tickets-report` | GET /ticket-api/escalated-tickets-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/escalated-tickets-report-download` | GET /ticket-api/escalated-tickets-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/first-time-fix-rate-report` | GET /ticket-api/first-time-fix-rate-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/first-time-fix-rate-report-download` | GET /ticket-api/first-time-fix-rate-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/monthly-incident-report` | GET /ticket-api/monthly-incident-report | `organizationId` (query, string)<br />`userId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/monthly-incident-report-list` | GET /ticket-api/monthly-incident-report-list | `organizationId` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/overall-sla-report` | GET /ticket-api/overall-sla-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/overall-sla-report-download` | GET /ticket-api/overall-sla-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/sla-breached-report` | GET /ticket-api/sla-breached-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/sla-breached-report-download` | GET /ticket-api/sla-breached-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/sla-met-report` | GET /ticket-api/sla-met-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/sla-met-report-download` | GET /ticket-api/sla-met-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/tickets-by-facility-report` | GET /ticket-api/tickets-by-facility-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/tickets-by-facility-report-download` | GET /ticket-api/tickets-by-facility-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/tickets-by-region-report` | GET /ticket-api/tickets-by-region-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/tickets-by-region-report-download` | GET /ticket-api/tickets-by-region-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/tickets-handled-per-technician-report` | GET /ticket-api/tickets-handled-per-technician-report | `organizationId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |
| **GET** | `/ticket-api/tickets-handled-per-technician-report-download` | GET /ticket-api/tickets-handled-per-technician-report-download | `organizationId` (query, string)<br />`userId` (query, string)<br />`fromDate` (query, string)<br />`toDate` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/weekly-incident-report` | GET /ticket-api/weekly-incident-report | `organizationId` (query, string)<br />`userId` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/weekly-incident-report-list` | GET /ticket-api/weekly-incident-report-list | `organizationId` (query, string)<br />`pageNumber` (query, integer)<br />`pageSize` (query, integer) | - | `200` OK |

### 6.3.15 Team

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/ticket-api/team` | POST /ticket-api/team | - | application/json: `CreateTeam`<br />text/json: `CreateTeam`<br />application/*+json: `CreateTeam` | `200` OK |
| **DELETE** | `/ticket-api/team/&#123;key&#125;` | DELETE /ticket-api/team/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **GET** | `/ticket-api/team/&#123;key&#125;` | GET /ticket-api/team/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/team/&#123;key&#125;` | PUT /ticket-api/team/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateTeam`<br />text/json: `UpdateTeam`<br />application/*+json: `UpdateTeam` | `200` OK |
| **GET** | `/ticket-api/teams/&#123;organizationId&#125;` | GET /ticket-api/teams/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/ticket-api/user-teams/&#123;organizationId&#125;/&#123;userId&#125;` | GET /ticket-api/user-teams/&#123;organizationId&#125;/&#123;userId&#125; | `organizationId` (path, required, string)<br />`userId` (path, required, string) | - | `200` OK |

### 6.3.16 TeamMember

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **DELETE** | `/ticket-api/bulk-team-member` | DELETE /ticket-api/bulk-team-member | - | application/json: `RemoveTeamMemberDto`<br />text/json: `RemoveTeamMemberDto`<br />application/*+json: `RemoveTeamMemberDto` | `200` OK |
| **POST** | `/ticket-api/team-member` | POST /ticket-api/team-member | - | application/json: `CreateTeamMember`<br />text/json: `CreateTeamMember`<br />application/*+json: `CreateTeamMember` | `200` OK |
| **DELETE** | `/ticket-api/team-member/&#123;key&#125;` | DELETE /ticket-api/team-member/&#123;key&#125; | `key` (path, required, integer) | - | `200` OK |
| **PUT** | `/ticket-api/team-member/&#123;key&#125;` | PUT /ticket-api/team-member/&#123;key&#125; | `key` (path, required, integer) | application/json: `UpdateTeamMember`<br />text/json: `UpdateTeamMember`<br />application/*+json: `UpdateTeamMember` | `200` OK |
| **GET** | `/ticket-api/team-members/&#123;organizationId&#125;/&#123;teamId&#125;` | GET /ticket-api/team-members/&#123;organizationId&#125;/&#123;teamId&#125; | `organizationId` (path, required, string)<br />`teamId` (path, required, integer)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

---

## 6.4 User API Catalog

### 6.4.1 AssignedDepartment

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/assigned-department` | POST /user-api/assigned-department | - | application/json: `CreateAssignUserDepartmentDto`<br />text/json: `CreateAssignUserDepartmentDto`<br />application/*+json: `CreateAssignUserDepartmentDto` | `200` OK |
| **GET** | `/user-api/assigned-user-department/&#123;departmentId&#125;` | GET /user-api/assigned-user-department/&#123;departmentId&#125; | `departmentId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/assigned-user-department/&#123;departmentId&#125;/&#123;organizationId&#125;` | GET /user-api/assigned-user-department/&#123;departmentId&#125;/&#123;organizationId&#125; | `departmentId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **DELETE** | `/user-api/delete-assigned-department/&#123;key&#125;` | DELETE /user-api/delete-assigned-department/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **POST** | `/user-api/multiple-assigned-department` | POST /user-api/multiple-assigned-department | - | application/json: `AssignDepartmentDto`<br />text/json: `AssignDepartmentDto`<br />application/*+json: `AssignDepartmentDto` | `200` OK |
| **GET** | `/user-api/multiple-assigned-department/&#123;organizationId&#125;` | GET /user-api/multiple-assigned-department/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.4.2 AssignedOrganizationService

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/assigned-organization-service` | POST /user-api/assigned-organization-service | - | application/json: `CreateAssignedOrganizationService`<br />text/json: `CreateAssignedOrganizationService`<br />application/*+json: `CreateAssignedOrganizationService` | `200` OK |
| **DELETE** | `/user-api/delete-assigned-organization-service` | DELETE /user-api/delete-assigned-organization-service | - | application/json: `DeleteAssignedOrganizationService`<br />text/json: `DeleteAssignedOrganizationService`<br />application/*+json: `DeleteAssignedOrganizationService` | `200` OK |
| **DELETE** | `/user-api/delete-multiple-assigned-organization-service` | DELETE /user-api/delete-multiple-assigned-organization-service | - | application/json: `array&lt;DeleteAssignedOrganizationService&gt;`<br />text/json: `array&lt;DeleteAssignedOrganizationService&gt;`<br />application/*+json: `array&lt;DeleteAssignedOrganizationService&gt;` | `200` OK |
| **POST** | `/user-api/multiple-assigned-organization-service` | POST /user-api/multiple-assigned-organization-service | - | application/json: `array&lt;CreateAssignedOrganizationService&gt;`<br />text/json: `array&lt;CreateAssignedOrganizationService&gt;`<br />application/*+json: `array&lt;CreateAssignedOrganizationService&gt;` | `200` OK |
| **GET** | `/user-api/multiple-assigned-organization-service/&#123;organizationId&#125;` | GET /user-api/multiple-assigned-organization-service/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |

### 6.4.3 AutomationRule

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/automation-rule` | POST /user-api/automation-rule | - | application/json: `CreateAutomationRuleDto`<br />text/json: `CreateAutomationRuleDto`<br />application/*+json: `CreateAutomationRuleDto` | `200` OK |
| **GET** | `/user-api/automation-rules/&#123;organizationId&#125;` | GET /user-api/automation-rules/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` `CreateAutomationRuleDtoApiResponse` OK |
| **GET** | `/user-api/automation-rules/by-time/&#123;organizationId&#125;` | GET /user-api/automation-rules/by-time/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/exist-automation-rule/&#123;organizationId&#125;/&#123;serviceType&#125;/&#123;eventType&#125;` | GET /user-api/exist-automation-rule/&#123;organizationId&#125;/&#123;serviceType&#125;/&#123;eventType&#125; | `organizationId` (path, required, string)<br />`serviceType` (path, required)<br />`eventType` (path, required) | - | `200` `GetExistingAutomationDtoApiResponse` OK |

### 6.4.4 Company

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/user-api/companies/&#123;organizationId&#125;` | GET /user-api/companies/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`regionId` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **POST** | `/user-api/company` | POST /user-api/company | - | application/json: `CreateCompany`<br />text/json: `CreateCompany`<br />application/*+json: `CreateCompany` | `200` OK |
| **GET** | `/user-api/company-by-region/&#123;regionId&#125;` | GET /user-api/company-by-region/&#123;regionId&#125; | `regionId` (path, required, string)<br />`organizationId` (query, string)<br />`search` (query, string) | - | `200` OK |
| **DELETE** | `/user-api/company/&#123;key&#125;` | DELETE /user-api/company/&#123;key&#125; | `key` (path, required, string)<br />`organizationId` (query, string) | - | `200` OK |
| **PUT** | `/user-api/company/&#123;key&#125;` | PUT /user-api/company/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateCompany`<br />text/json: `UpdateCompany`<br />application/*+json: `UpdateCompany` | `200` OK |
| **GET** | `/user-api/company/&#123;key&#125;/&#123;organizationId&#125;` | GET /user-api/company/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |

### 6.4.5 Contact

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/user-api/check-contact/&#123;contactId&#125;/&#123;userAccountId&#125;` | GET /user-api/check-contact/&#123;contactId&#125;/&#123;userAccountId&#125; | `userAccountId` (path, required, string)<br />`contactId` (path, required, string) | - | `200` `boolean` OK |
| **POST** | `/user-api/contact` | POST /user-api/contact | - | application/json: `CreateContact`<br />text/json: `CreateContact`<br />application/*+json: `CreateContact` | `200` OK |
| **GET** | `/user-api/contact-company/&#123;cellphone&#125;/&#123;companyId&#125;` | GET /user-api/contact-company/&#123;cellphone&#125;/&#123;companyId&#125; | `cellphone` (path, required, string)<br />`companyId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/contact-details-phone/&#123;search&#125;/&#123;organizationId&#125;` | GET /user-api/contact-details-phone/&#123;search&#125;/&#123;organizationId&#125; | `search` (path, required, string)<br />`organizationId` (path, required, string)<br />`regionId` (query, string) | - | `200` OK |
| **GET** | `/user-api/contact-details/&#123;contactId&#125;/&#123;organizationId&#125;` | GET /user-api/contact-details/&#123;contactId&#125;/&#123;organizationId&#125; | `contactId` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/contact-email/&#123;email&#125;/&#123;organizationId&#125;` | GET /user-api/contact-email/&#123;email&#125;/&#123;organizationId&#125; | `email` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **POST** | `/user-api/contact-login` | POST /user-api/contact-login | - | application/json: `ContactLoginDto`<br />text/json: `ContactLoginDto`<br />application/*+json: `ContactLoginDto` | `200` OK |
| **GET** | `/user-api/contact-organization/&#123;organizationId&#125;` | GET /user-api/contact-organization/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/contact-phone/&#123;phone&#125;/&#123;organizationId&#125;` | GET /user-api/contact-phone/&#123;phone&#125;/&#123;organizationId&#125; | `phone` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/contact-search-organization/&#123;organizationId&#125;` | GET /user-api/contact-search-organization/&#123;organizationId&#125; | `search` (query, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **POST** | `/user-api/contact-validation` | POST /user-api/contact-validation | `organizationId` (query, string) | application/json: `ContactDto`<br />text/json: `ContactDto`<br />application/*+json: `ContactDto` | `200` OK |
| **DELETE** | `/user-api/contact/&#123;key&#125;` | DELETE /user-api/contact/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/contact/&#123;key&#125;` | GET /user-api/contact/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/user-api/contact/&#123;key&#125;` | PUT /user-api/contact/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateContact`<br />text/json: `UpdateContact`<br />application/*+json: `UpdateContact` | `200` OK |
| **GET** | `/user-api/contacts-by-region/&#123;organizationId&#125;` | GET /user-api/contacts-by-region/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`regionId` (query, string)<br />`search` (query, string) | - | `200` OK |
| **GET** | `/user-api/contacts/&#123;companyId&#125;` | GET /user-api/contacts/&#123;companyId&#125; | `companyId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/search-contact/&#123;organizationId&#125;/&#123;search&#125;` | GET /user-api/search-contact/&#123;organizationId&#125;/&#123;search&#125; | `organizationId` (path, required, string)<br />`search` (path, required, string) | - | `200` OK |

### 6.4.6 Department

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/department` | POST /user-api/department | - | application/json: `CreateDepartmentDto`<br />text/json: `CreateDepartmentDto`<br />application/*+json: `CreateDepartmentDto` | `200` OK |
| **DELETE** | `/user-api/department/&#123;key&#125;` | DELETE /user-api/department/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/user-api/department/&#123;key&#125;` | PUT /user-api/department/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateDepartmentDto`<br />text/json: `UpdateDepartmentDto`<br />application/*+json: `UpdateDepartmentDto` | `200` OK |
| **GET** | `/user-api/department/&#123;key&#125;/&#123;organizationId&#125;` | GET /user-api/department/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/departments/&#123;organizationId&#125;` | GET /user-api/departments/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.4.7 Organization

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **GET** | `/user-api/check-organization-suffix-duplicate/&#123;organizationSuffix&#125;` | GET /user-api/check-organization-suffix-duplicate/&#123;organizationSuffix&#125; | `organizationSuffix` (path, required, string)<br />`organizationId` (query, string) | - | `200` OK |
| **PUT** | `/user-api/link-whatsApp/&#123;organizationId&#125;` | PUT /user-api/link-whatsApp/&#123;organizationId&#125; | `organizationId` (path, required, string) | application/json: `LinkWhatsAppDto`<br />text/json: `LinkWhatsAppDto`<br />application/*+json: `LinkWhatsAppDto` | `200` OK |
| **POST** | `/user-api/organization` | POST /user-api/organization | - | application/json: `CreateOrganization`<br />text/json: `CreateOrganization`<br />application/*+json: `CreateOrganization` | `200` OK |
| **PUT** | `/user-api/organization-by-organization-admin/&#123;key&#125;` | PUT /user-api/organization-by-organization-admin/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateOrganizationByOrganizationAdmin`<br />text/json: `UpdateOrganizationByOrganizationAdmin`<br />application/*+json: `UpdateOrganizationByOrganizationAdmin` | `200` OK |
| **GET** | `/user-api/organization-by-user/&#123;userId&#125;` | GET /user-api/organization-by-user/&#123;userId&#125; | `userId` (path, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/organization-by-userId/&#123;userId&#125;` | GET /user-api/organization-by-userId/&#123;userId&#125; | `userId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/organization-suffix/&#123;suffix&#125;` | GET /user-api/organization-suffix/&#123;suffix&#125; | `suffix` (path, required, string) | - | `200` OK |
| **DELETE** | `/user-api/organization/&#123;key&#125;` | DELETE /user-api/organization/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/organization/&#123;key&#125;` | GET /user-api/organization/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/user-api/organization/&#123;key&#125;` | PUT /user-api/organization/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateOrganization`<br />text/json: `UpdateOrganization`<br />application/*+json: `UpdateOrganization` | `200` OK |
| **GET** | `/user-api/organizations` | GET /user-api/organizations | `page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **PUT** | `/user-api/user-active-in-active-from-organization` | PUT /user-api/user-active-in-active-from-organization | - | application/json: `InActiveUserFromOrganizationDto`<br />text/json: `InActiveUserFromOrganizationDto`<br />application/*+json: `InActiveUserFromOrganizationDto` | `200` OK |
| **GET** | `/user-api/whats-app-phone-id/&#123;phoneId&#125;` | GET /user-api/whats-app-phone-id/&#123;phoneId&#125; | `phoneId` (path, required, string) | - | `200` OK |

### 6.4.8 Package

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/multiple-packages` | POST /user-api/multiple-packages | - | application/json: `array&lt;CreatePackage&gt;`<br />text/json: `array&lt;CreatePackage&gt;`<br />application/*+json: `array&lt;CreatePackage&gt;` | `200` OK |
| **POST** | `/user-api/package` | POST /user-api/package | - | application/json: `CreatePackage`<br />text/json: `CreatePackage`<br />application/*+json: `CreatePackage` | `200` OK |
| **PUT** | `/user-api/package-status/&#123;key&#125;` | PUT /user-api/package-status/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdatePackageStatus`<br />text/json: `UpdatePackageStatus`<br />application/*+json: `UpdatePackageStatus` | `200` OK |
| **DELETE** | `/user-api/package/&#123;key&#125;` | DELETE /user-api/package/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/package/&#123;key&#125;` | GET /user-api/package/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/user-api/package/&#123;key&#125;` | PUT /user-api/package/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdatePackage`<br />text/json: `UpdatePackage`<br />application/*+json: `UpdatePackage` | `200` OK |
| **GET** | `/user-api/packages` | GET /user-api/packages | `page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.4.9 Region

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/region` | POST /user-api/region | - | application/json: `CreateRegion`<br />text/json: `CreateRegion`<br />application/*+json: `CreateRegion` | `200` OK |
| **DELETE** | `/user-api/region/&#123;key&#125;` | DELETE /user-api/region/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/region/&#123;key&#125;` | GET /user-api/region/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **PUT** | `/user-api/region/&#123;key&#125;` | PUT /user-api/region/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateRegion`<br />text/json: `UpdateRegion`<br />application/*+json: `UpdateRegion` | `200` OK |
| **GET** | `/user-api/regions` | GET /user-api/regions | `OrganizationId` (query, required, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |

### 6.4.10 RoleMapping

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/role-mapping` | POST /user-api/role-mapping | - | application/json: `FeatureMappingDto`<br />text/json: `FeatureMappingDto`<br />application/*+json: `FeatureMappingDto` | `200` OK |
| **GET** | `/user-api/role-mappings/&#123;organizationId&#125;` | GET /user-api/role-mappings/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |

### 6.4.11 UserAccess

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/user-access` | POST /user-api/user-access | - | application/json: `UserRoleDto`<br />text/json: `UserRoleDto`<br />application/*+json: `UserRoleDto` | `200` OK |
| **GET** | `/user-api/user-access/&#123;userId&#125;/&#123;organizationId&#125;` | GET /user-api/user-access/&#123;userId&#125;/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`userId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-access/validate/&#123;userEmail&#125;/&#123;serviceName&#125;/&#123;requiredRole&#125;` | GET /user-api/user-access/validate/&#123;userEmail&#125;/&#123;serviceName&#125;/&#123;requiredRole&#125; | `userEmail` (path, required, string)<br />`serviceName` (path, required, string)<br />`requiredRole` (path, required, string) | - | `200` OK |

### 6.4.12 UserAccount

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **PUT** | `/user-api/admin-change-password/&#123;adminUserId&#125;` | PUT /user-api/admin-change-password/&#123;adminUserId&#125; | `adminUserId` (path, required, string) | application/json: `ChangeUserPasswordByAdminDto`<br />text/json: `ChangeUserPasswordByAdminDto`<br />application/*+json: `ChangeUserPasswordByAdminDto` | `200` OK |
| **PUT** | `/user-api/change-password/&#123;key&#125;` | PUT /user-api/change-password/&#123;key&#125; | `key` (path, required, string) | application/json: `ChangePasswordDto`<br />text/json: `ChangePasswordDto`<br />application/*+json: `ChangePasswordDto` | `200` OK |
| **GET** | `/user-api/check-user-account/&#123;userAccountId&#125;` | GET /user-api/check-user-account/&#123;userAccountId&#125; | `userAccountId` (path, required, string) | - | `200` `boolean` OK |
| **POST** | `/user-api/device-monitor/login` | POST /user-api/device-monitor/login | - | application/json: `LoginDto`<br />text/json: `LoginDto`<br />application/*+json: `LoginDto` | `200` `ResponseDto` OK |
| **GET** | `/user-api/expert-users/&#123;organizationId&#125;` | GET /user-api/expert-users/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`search` (query, string) | - | `200` OK |
| **POST** | `/user-api/login` | POST /user-api/login | - | application/json: `AuthenticationRequest`<br />text/json: `AuthenticationRequest`<br />application/*+json: `AuthenticationRequest` | `200` OK |
| **PUT** | `/user-api/logout` | PUT /user-api/logout | - | application/json: `LogoutDto`<br />text/json: `LogoutDto`<br />application/*+json: `LogoutDto` | `200` OK |
| **POST** | `/user-api/rdp/login` | POST /user-api/rdp/login | - | application/json: `LoginDto`<br />text/json: `LoginDto`<br />application/*+json: `LoginDto` | `200` `ResponseDto` OK |
| **POST** | `/user-api/refresh-token` | POST /user-api/refresh-token | - | application/json: `RefreshTokenDto`<br />text/json: `RefreshTokenDto`<br />application/*+json: `RefreshTokenDto` | `200` OK |
| **POST** | `/user-api/user-account` | POST /user-api/user-account | - | application/json: `CreateUserAccountWithContact`<br />text/json: `CreateUserAccountWithContact`<br />application/*+json: `CreateUserAccountWithContact` | `200` OK |
| **POST** | `/user-api/user-account-organization` | POST /user-api/user-account-organization | - | application/json: `CreateUserAccount`<br />text/json: `CreateUserAccount`<br />application/*+json: `CreateUserAccount` | `200` OK |
| **DELETE** | `/user-api/user-account/&#123;key&#125;` | DELETE /user-api/user-account/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-account/&#123;key&#125;` | GET /user-api/user-account/&#123;key&#125; | `key` (path, required, string)<br />`organizationId` (query, string) | - | `200` OK |
| **PUT** | `/user-api/user-account/&#123;key&#125;` | PUT /user-api/user-account/&#123;key&#125; | `key` (path, required, string) | application/json: `UpdateUserAccount`<br />text/json: `UpdateUserAccount`<br />application/*+json: `UpdateUserAccount` | `200` OK |
| **GET** | `/user-api/user-account/email/&#123;email&#125;` | GET /user-api/user-account/email/&#123;email&#125; | `email` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-account/organization-admin/&#123;organizationId&#125;` | GET /user-api/user-account/organization-admin/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-account/organization-concern/&#123;organizationId&#125;/&#123;facilityId&#125;/&#123;serviceRoleType&#125;` | GET /user-api/user-account/organization-concern/&#123;organizationId&#125;/&#123;facilityId&#125;/&#123;serviceRoleType&#125; | `organizationId` (path, required, string)<br />`facilityId` (path, required, string)<br />`serviceRoleType` (path, required) | - | `200` OK |
| **GET** | `/user-api/user-account/swiched-organization/&#123;key&#125;/&#123;organizationId&#125;` | GET /user-api/user-account/swiched-organization/&#123;key&#125;/&#123;organizationId&#125; | `key` (path, required, string)<br />`organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-account/userId-or-contactId/&#123;key&#125;` | GET /user-api/user-account/userId-or-contactId/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-account/userId/&#123;key&#125;` | GET /user-api/user-account/userId/&#123;key&#125; | `key` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-accounts-by-type/&#123;organizationId&#125;` | GET /user-api/user-accounts-by-type/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`userType` (query)<br />`regionId` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/user-accounts/&#123;organizationId&#125;` | GET /user-api/user-accounts/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`regionId` (query, string)<br />`page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string) | - | `200` OK |
| **GET** | `/user-api/user-accounts/organizationId/&#123;organizationId&#125;` | GET /user-api/user-accounts/organizationId/&#123;organizationId&#125; | `organizationId` (path, required, string) | - | `200` OK |
| **GET** | `/user-api/user-accounts/search-by-text/&#123;organizationId&#125;` | GET /user-api/user-accounts/search-by-text/&#123;organizationId&#125; | `organizationId` (path, required, string)<br />`search` (query, string) | - | `200` OK |

### 6.4.13 UserRequest

| Method | Endpoint | Operation | Parameters | Request Body | Responses |
| --- | --- | --- | --- | --- | --- |
| **POST** | `/user-api/internal-user-request` | POST /user-api/internal-user-request | - | application/json: `CreateInternalUserRequestDto`<br />text/json: `CreateInternalUserRequestDto`<br />application/*+json: `CreateInternalUserRequestDto` | `200` OK |
| **POST** | `/user-api/internal-user-request/status-update` | POST /user-api/internal-user-request/status-update | - | application/json: `InternalUserRequestStatusUpdateDto`<br />text/json: `InternalUserRequestStatusUpdateDto`<br />application/*+json: `InternalUserRequestStatusUpdateDto` | `200` OK |
| **POST** | `/user-api/password-recovery-request` | POST /user-api/password-recovery-request | - | application/json: `RecoveryRequestDto`<br />text/json: `RecoveryRequestDto`<br />application/*+json: `RecoveryRequestDto` | `200` OK |
| **DELETE** | `/user-api/remove-user-requests` | DELETE /user-api/remove-user-requests | - | application/json: `DeleteUserRequest`<br />text/json: `DeleteUserRequest`<br />application/*+json: `DeleteUserRequest` | `200` OK |
| **POST** | `/user-api/reset-password-by-recovery-request` | POST /user-api/reset-password-by-recovery-request | - | application/json: `ResetPasswordByRecoveryRequestDto`<br />text/json: `ResetPasswordByRecoveryRequestDto`<br />application/*+json: `ResetPasswordByRecoveryRequestDto` | `200` OK |
| **POST** | `/user-api/user-request` | POST /user-api/user-request | - | application/json: `CreateUserRequestDto`<br />text/json: `CreateUserRequestDto`<br />application/*+json: `CreateUserRequestDto` | `200` OK |
| **POST** | `/user-api/user-request/set-password/&#123;userRequestId&#125;` | POST /user-api/user-request/set-password/&#123;userRequestId&#125; | `userRequestId` (path, required, string) | application/json: `SetPasswordDto`<br />text/json: `SetPasswordDto`<br />application/*+json: `SetPasswordDto` | `200` OK |
| **POST** | `/user-api/user-request/status-update` | POST /user-api/user-request/status-update | - | application/json: `UserRequestStatusUpdateDto`<br />text/json: `UserRequestStatusUpdateDto`<br />application/*+json: `UserRequestStatusUpdateDto` | `200` OK |
| **GET** | `/user-api/user-requests` | GET /user-api/user-requests | `page` (query, integer)<br />`pageSize` (query, integer)<br />`search` (query, string)<br />`sort` (query, string)<br />`sortDirection` (query, string)<br />`organizationId` (query, string) | - | `200` OK |

---

## 6.5 Common Schemas and Enums

Schemas below are generated from the OpenAPI component definitions. They are grouped by API and should be used when preparing payloads or validating responses.

### 6.5.1 Ticketing API Schemas

| Schema | Type | Required Fields | Fields / Values |
| --- | --- | --- | --- |
| `ActionType` | enum | - | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15` |
| `BooleanApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `boolean`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `BulkBranchStatusDto` | object | - | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`branchId`: `array&lt;integer&gt;`<br />`isActive`: `boolean` |
| `ClosedIncident` | object | - | `incidentId`: `array&lt;IncidenKey&gt;` |
| `ContactDto` | object | - | `oid`: `string`<br />`contactFullName`: `string`<br />`contactEmail`: `string`<br />`companyId`: `string`<br />`contactPhone`: `string`<br />`organizationId`: `string` |
| `CreateApplication` | object | `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string` |
| `CreateBranch` | object | `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string`<br />`description`: `string`<br />`isActive`: `boolean` |
| `CreateBranchPermission` | object | `branchId` | `createdBy`: `string`<br />`organizationId`: `string`<br />`branchId`: `integer`<br />`userAccountId`: `string`<br />`isActive`: `boolean` |
| `CreateCategory` | object | `isSubCategory`, `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string`<br />`description`: `string`<br />`isSubCategory`: `boolean`<br />`parentCategoryId`: `integer` |
| `CreateIdentifiedAssignedIncident` | object | `incidentId` | `createdBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`description`: `string`<br />`dateIdentified`: `string`<br />`allowAccess`: `boolean`<br />`incidentId`: `string`<br />`expertId`: `string` |
| `CreateIdentifiedCategory` | object | `categoryId` | `createdBy`: `string`<br />`organizationId`: `string`<br />`categoryId`: `integer`<br />`teamId`: `integer` |
| `CreatePriorityConfigurationDto` | object | `createdBy`, `priority`, `timeInMinutes` | `priority`: `TicketPriority`<br />`timeInMinutes`: `number`<br />`createdBy`: `string` |
| `CreateTeam` | object | `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string`<br />`description`: `string`<br />`isAssigned`: `boolean` |
| `CreateTeamMember` | object | - | `createdBy`: `string`<br />`organizationId`: `string`<br />`userId`: `string`<br />`teamId`: `integer`<br />`isTeamLead`: `boolean`<br />`isPrimaryTeam`: `boolean` |
| `DashboardTimeFilter` | enum | - | `1`, `2`, `3`, `4`, `5` |
| `DeleteAttachmentDto` | object | - | `attachmentId`: `array&lt;integer&gt;` |
| `ExtensionDto` | object | - | `oid`: `string`<br />`extentionName`: `string`<br />`extention`: `string`<br />`organizationId`: `string` |
| `HttpStatusCode` | enum | - | `100`, `101`, `102`, `103`, `200`, `201`, `202`, `203`, `204`, `205`, `206`, `207`, `208`, `226`, `300`, `301`, `302`, `303`, `304`, `305`, `306`, `307`, `308`, `400`, `401`, `402`, `403`, `404`, `405`, `406`, `407`, `408`, `409`, `410`, `411`, `412`, `413`, `414`, `415`, `416`, `417`, `421`, `422`, `423`, `424`, `426`, `428`, `429`, `431`, `451`, `500`, `501`, `502`, `503`, `504`, `505`, `506`, `507`, `508`, `510`, `511` |
| `IncidenKey` | object | - | `incidentId`: `string` |
| `IncidentCreateMethod` | enum | - | `1`, `2`, `3`, `4`, `5` |
| `IncidentDto` | object | `categoryId`, `description`, `facilityId`, `ticketTitle` | `createdBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`ticketTitle`: `string`<br />`description`: `string`<br />`facilityId`: `string`<br />`dateResolved`: `string`<br />`isAssigned`: `boolean`<br />`incidentStatus`: `IncidentStatus`<br />`incidentSource`: `SourceOfIncident`<br />`incidentCreateMethod`: `IncidentCreateMethod`<br />`dueDate`: `string`<br />`incidentPriority`: `TicketPriority`<br />`brandName`: `string`<br />`branchId`: `integer`<br />`contactId`: `string`<br />`expertId`: `string`<br />`slNumber`: `string`<br />...7 more |
| `IncidentStatus` | enum | - | `0`, `1`, `2`, `3`, `4`, `5`, `6` |
| `IncidentStatusDto` | object | - | `organizationId`: `string`<br />`incidentStatus`: `IncidentStatus`<br />`incidentId`: `string`<br />`modifiedBy`: `string` |
| `Message` | object | - | `createdBy`: `string`<br />`dateCreated`: `string`<br />`modifiedBy`: `string`<br />`dateModified`: `string`<br />`organizationId`: `string`<br />`isDeleted`: `boolean`<br />`isSynced`: `boolean`<br />`isTPSynced`: `boolean`<br />`isArchived`: `boolean`<br />`oid`: `string`<br />`messageDate`: `string`<br />`description`: `string`<br />`isInternal`: `boolean`<br />`isResolution`: `boolean`<br />`isOpen`: `boolean`<br />`incidentId`: `string`<br />`emailMessageId`: `string` |
| `MessageApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `Message`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `MessageDto` | object | - | `createdBy`: `string`<br />`dateCreated`: `string`<br />`modifiedBy`: `string`<br />`dateModified`: `string`<br />`organizationId`: `string`<br />`isDeleted`: `boolean`<br />`isSynced`: `boolean`<br />`isTPSynced`: `boolean`<br />`isArchived`: `boolean`<br />`oid`: `string`<br />`messageDate`: `string`<br />`description`: `string`<br />`isInternal`: `boolean`<br />`isResolution`: `boolean`<br />`isOpen`: `boolean`<br />`incidentId`: `string` |
| `MessageDtoApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `MessageDto`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `ObjectIEnumerableApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `array&lt;object&gt;`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `RemoveTeamMemberDto` | object | - | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `array&lt;integer&gt;` |
| `SourceOfIncident` | enum | - | `1`, `2`, `3`, `4`, `5` |
| `TeamTransferDto` | object | - | `createdBy`: `string`<br />`dateCreated`: `string`<br />`modifiedBy`: `string`<br />`dateModified`: `string`<br />`organizationId`: `string`<br />`isDeleted`: `boolean`<br />`isSynced`: `boolean`<br />`isTPSynced`: `boolean`<br />`isArchived`: `boolean`<br />`incidentId`: `string`<br />`teamId`: `integer`<br />`expertId`: `string` |
| `TextCorrectionRequestDto` | object | - | `text`: `string` |
| `TicketPriority` | enum | - | `1`, `2`, `3`, `4` |
| `UpdateApplication` | object | `name` | `id`: `string`<br />`name`: `string` |
| `UpdateBranch` | object | `name`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`name`: `string`<br />`description`: `string`<br />`isActive`: `boolean` |
| `UpdateBranchPermission` | object | `branchId`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`branchId`: `integer`<br />`userAccountId`: `string`<br />`isActive`: `boolean` |
| `UpdateCategory` | object | `name`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`name`: `string`<br />`description`: `string`<br />`isSubCategory`: `boolean`<br />`parentCategoryId`: `integer` |
| `UpdateIdentifiedAssignedIncident` | object | `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`description`: `string`<br />`dateIdentified`: `string`<br />`allowAccess`: `boolean`<br />`incidentId`: `string`<br />`teamId`: `integer`<br />`expertId`: `string` |
| `UpdateIdentifiedCategory` | object | `categoryId`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`categoryId`: `integer`<br />`teamId`: `integer` |
| `UpdateTeam` | object | `name`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`name`: `string`<br />`description`: `string`<br />`isAssigned`: `boolean` |
| `UpdateTeamMember` | object | - | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `integer`<br />`userId`: `string`<br />`teamId`: `integer`<br />`isTeamLead`: `boolean`<br />`isPrimaryTeam`: `boolean` |

### 6.5.2 User API Schemas

| Schema | Type | Required Fields | Fields / Values |
| --- | --- | --- | --- |
| `ActionType` | enum | - | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15` |
| `AssignDepartmentDto` | object | - | `createdBy`: `string`<br />`organizationId`: `string`<br />`departmentId`: `string`<br />`users`: `array&lt;string&gt;` |
| `AuthenticationRequest` | object | - | `email`: `string`<br />`password`: `string` |
| `AutomationChannelDto` | object | - | `channel`: `NotificationChannel`<br />`roles`: `array&lt;NotificationRole&gt;` |
| `AutomationRuleDto` | object | - | `oid`: `string`<br />`serviceType`: `Service`<br />`eventType`: `EventTypes`<br />`isCreate`: `boolean`<br />`autoAssignTime`: `integer`<br />`description`: `string`<br />`automationChannels`: `array&lt;AutomationChannelDto&gt;` |
| `AutomationRuleRequestDto` | object | - | `automationRules`: `array&lt;AutomationRuleDto&gt;`<br />`createdBy`: `string`<br />`organizationId`: `string` |
| `ChangePasswordDto` | object | `confirmPassword`, `oldPassword` | `email`: `string`<br />`organizationId`: `string`<br />`oldPassword`: `string`<br />`newPassword`: `string`<br />`confirmPassword`: `string` |
| `ChangeUserPasswordByAdminDto` | object | `confirmPassword` | `userId`: `string`<br />`newPassword`: `string`<br />`confirmPassword`: `string` |
| `ContactDto` | object | - | `oid`: `string`<br />`contactFullName`: `string`<br />`contactEmail`: `string`<br />`contactPhone`: `string`<br />`companyId`: `string`<br />`organizationId`: `string` |
| `ContactLoginDto` | object | `email`, `organizationId`, `password` | `email`: `string`<br />`password`: `string`<br />`organizationId`: `string` |
| `CreateAssignedOrganizationService` | object | - | `createdBy`: `string`<br />`organizationId`: `string`<br />`services`: `array&lt;Service&gt;` |
| `CreateAssignUserDepartmentDto` | object | - | `createdBy`: `string`<br />`organizationId`: `string`<br />`departmentId`: `string`<br />`userId`: `string` |
| `CreateAutomationRuleDto` | object | `automationRulesRequest` | `automationRulesRequest`: `array&lt;AutomationRuleRequestDto&gt;` |
| `CreateAutomationRuleDtoApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `CreateAutomationRuleDto`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `CreateCompany` | object | `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string`<br />`description`: `string`<br />`address`: `string`<br />`primaryPhone`: `string`<br />`secondaryPhoneNumber`: `string`<br />`email`: `string`<br />`website`: `string`<br />`facebookPageUrl`: `string`<br />`linkedInPageUrl`: `string`<br />`facilityCode`: `string`<br />`regionId`: `string` |
| `CreateContact` | object | `fullName` | `createdBy`: `string`<br />`organizationId`: `string`<br />`fullName`: `string`<br />`email`: `string`<br />`phone`: `string`<br />`companyId`: `string`<br />`password`: `string` |
| `CreateDepartmentDto` | object | `departmentName` | `createdBy`: `string`<br />`organizationId`: `string`<br />`departmentName`: `string`<br />`description`: `string` |
| `CreateInternalUserRequestDto` | object | - | `organizationId`: `string`<br />`email`: `string` |
| `CreateOrganization` | object | `expiryDate`, `isActive`, `name` | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string`<br />`address`: `string`<br />`city`: `string`<br />`state`: `string`<br />`expiryDate`: `string`<br />`contactNumber`: `string`<br />`isActive`: `boolean` |
| `CreatePackage` | object | `description`, `title` | `title`: `string`<br />`description`: `string`<br />`isActive`: `boolean`<br />`packageFeatures`: `array&lt;PackageFeature&gt;` |
| `CreateRegion` | object | - | `createdBy`: `string`<br />`organizationId`: `string`<br />`name`: `string` |
| `CreateUserAccount` | object | `email`, `firstName`, `password` | `createdBy`: `string`<br />`organizationId`: `string`<br />`firstName`: `string`<br />`surname`: `string`<br />`gender`: `Gender`<br />`dateOfBirth`: `string`<br />`email`: `string`<br />`countryCode`: `string`<br />`cellphone`: `string`<br />`address`: `string`<br />`password`: `string`<br />`regionId`: `string` |
| `CreateUserAccountWithContact` | object | `email`, `firstName`, `organizationId`, `password`, `userType` | `firstName`: `string`<br />`surname`: `string`<br />`gender`: `Gender`<br />`dateOfBirth`: `string`<br />`email`: `string`<br />`countryCode`: `string`<br />`cellphone`: `string`<br />`address`: `string`<br />`password`: `string`<br />`regionId`: `string`<br />`companyId`: `string`<br />`userType`: `UserType`<br />`organizationId`: `string` |
| `CreateUserRequestDto` | object | `email`, `firstName`, `organizationName` | `organizationName`: `string`<br />`firstName`: `string`<br />`surname`: `string`<br />`email`: `string`<br />`countryCode`: `string`<br />`cellphone`: `string` |
| `DeleteAssignedOrganizationService` | object | - | `organizationId`: `string`<br />`services`: `array&lt;Service&gt;` |
| `DeleteUserRequest` | object | - | `requestId`: `array&lt;string&gt;` |
| `EventTypes` | enum | - | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `21`, `22`, `23`, `41`, `42`, `43`, `44`, `45`, `46`, `61`, `62`, `63`, `64`, `65` |
| `ExistingAutomationDto` | object | - | `channel`: `NotificationChannel`<br />`role`: `NotificationRole`<br />`isCreate`: `boolean` |
| `Feature` | object | - | `featureName`: `FeatureName`<br />`actions`: `array&lt;ActionType&gt;` |
| `FeatureMappingDto` | object | - | `organizationId`: `string`<br />`userId`: `string`<br />`roles`: `array&lt;RoleDto&gt;` |
| `FeatureName` | enum | - | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`, `21`, `22`, `23`, `24`, `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`, `45`, `46`, `47`, `48`, `49`, `50`, `51`, `52`, `53`, `54`, `55`, `56`, `57`, `58`, `59`, `60`, `61`, `62` |
| `Gender` | enum | - | `1`, `2`, `3` |
| `GetExistingAutomationDto` | object | - | `notifications`: `array&lt;ExistingAutomationDto&gt;` |
| `GetExistingAutomationDtoApiResponse` | object | - | `isSuccess`: `boolean`<br />`data`: `GetExistingAutomationDto`<br />`message`: `string`<br />`httpStatusCode`: `HttpStatusCode` |
| `HttpStatusCode` | enum | - | `100`, `101`, `102`, `103`, `200`, `201`, `202`, `203`, `204`, `205`, `206`, `207`, `208`, `226`, `300`, `301`, `302`, `303`, `304`, `305`, `306`, `307`, `308`, `400`, `401`, `402`, `403`, `404`, `405`, `406`, `407`, `408`, `409`, `410`, `411`, `412`, `413`, `414`, `415`, `416`, `417`, `421`, `422`, `423`, `424`, `426`, `428`, `429`, `431`, `451`, `500`, `501`, `502`, `503`, `504`, `505`, `506`, `507`, `508`, `510`, `511` |
| `InActiveUserFromOrganizationDto` | object | - | `organizationId`: `string`<br />`userId`: `string`<br />`active`: `boolean` |
| `InternalUserRequestStatusUpdateDto` | object | `accept`, `userRequestId` | `userRequestId`: `string`<br />`accept`: `boolean` |
| `LinkWhatsAppDto` | object | - | `phoneId`: `string`<br />`wabaId`: `string` |
| `LoginDto` | object | `email`, `password` | `email`: `string`<br />`password`: `string` |
| `LogoutDto` | object | - | `userId`: `string` |
| `NotificationChannel` | enum | - | `0`, `1`, `2`, `3` |
| `NotificationRole` | enum | - | `0`, `1`, `2`, `3`, `4`, `5`, `7`, `8`, `9`, `10`, `11`, `12` |
| `PackageFeature` | object | `description` | `description`: `string` |
| `RecoveryRequestDto` | object | `email`, `firstName` | `firstName`: `string`<br />`surName`: `string`<br />`email`: `string` |
| `RefreshTokenDto` | object | - | `refreshToken`: `string` |
| `ResetPasswordByRecoveryRequestDto` | object | `confirmPassword`, `newPassword` | `userRequestId`: `string`<br />`newPassword`: `string`<br />`confirmPassword`: `string` |
| `ResponseDto` | object | - | `statusCode`: `HttpStatusCode`<br />`message`: `string`<br />`data`: `object`<br />`isSuccess`: `boolean` |
| `RoleDto` | object | - | `role`: `ServiceRoleType`<br />`features`: `array&lt;Feature&gt;` |
| `Service` | enum | - | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `100` |
| `ServiceRole` | object | - | `service`: `Service`<br />`roles`: `ServiceRoleType` |
| `ServiceRoleType` | enum | - | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13` |
| `SetPasswordDto` | object | `confirmPassword` | `userRequestId`: `string`<br />`newPassword`: `string`<br />`confirmPassword`: `string` |
| `UpdateCompany` | object | `name`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`name`: `string`<br />`description`: `string`<br />`address`: `string`<br />`primaryPhone`: `string`<br />`secondaryPhoneNumber`: `string`<br />`email`: `string`<br />`website`: `string`<br />`facebookPageUrl`: `string`<br />`linkedInPageUrl`: `string`<br />`facilityCode`: `string`<br />`regionId`: `string` |
| `UpdateContact` | object | `fullName`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`fullName`: `string`<br />`email`: `string`<br />`phone`: `string`<br />`companyId`: `string`<br />`password`: `string` |
| `UpdateDepartmentDto` | object | `departmentName`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`departmentName`: `string`<br />`description`: `string` |
| `UpdateOrganization` | object | `expiryDate`, `isActive`, `name`, `oid`, `userId` | `oid`: `string`<br />`name`: `string`<br />`address`: `string`<br />`city`: `string`<br />`state`: `string`<br />`expiryDate`: `string`<br />`contactNumber`: `string`<br />`isActive`: `boolean`<br />`organizationSuffix`: `string`<br />`isPublicPortalConfigured`: `boolean`<br />`userId`: `string` |
| `UpdateOrganizationByOrganizationAdmin` | object | `name`, `oid`, `userId` | `oid`: `string`<br />`name`: `string`<br />`address`: `string`<br />`city`: `string`<br />`state`: `string`<br />`contactNumber`: `string`<br />`organizationSuffix`: `string`<br />`isPublicPortalConfigured`: `boolean`<br />`userId`: `string` |
| `UpdatePackage` | object | `description`, `oid`, `title` | `oid`: `string`<br />`title`: `string`<br />`isActive`: `boolean`<br />`description`: `string`<br />`packageFeatures`: `array&lt;PackageFeature&gt;` |
| `UpdatePackageStatus` | object | `oid` | `oid`: `string`<br />`isActive`: `boolean` |
| `UpdateRegion` | object | `id`, `name` | `id`: `string`<br />`name`: `string` |
| `UpdateUserAccount` | object | `email`, `firstName`, `oid` | `modifiedBy`: `string`<br />`organizationId`: `string`<br />`oid`: `string`<br />`firstName`: `string`<br />`surname`: `string`<br />`gender`: `Gender`<br />`dateOfBirth`: `string`<br />`email`: `string`<br />`countryCode`: `string`<br />`cellphone`: `string`<br />`address`: `string`<br />`regionId`: `string`<br />`userType`: `UserType` |
| `UserRequestStatusUpdateDto` | object | `requestStatus`, `userRequestId` | `userRequestId`: `string`<br />`requestStatus`: `UserRuquestStatus` |
| `UserRoleDto` | object | - | `userId`: `string`<br />`organizationId`: `string`<br />`createdBy`: `string`<br />`serviceRoles`: `array&lt;ServiceRole&gt;` |
| `UserRuquestStatus` | enum | - | `1`, `2`, `3`, `4`, `5`, `6` |
| `UserType` | enum | - | `1`, `2`, `3`, `4` |

---

## 6.6 Integration Notes

- Use the **User API** for authentication, user accounts, contacts, roles, organizations, departments, regions, packages, automation rules, and user requests.
- Use the **Ticketing API** for branches, categories, incidents/tickets, assignments, attachments, messages, priority configuration, reports, report files, teams, and AI/application support endpoints.
- Report and report-file endpoints are part of the Ticketing API and support the documentation menu item **4. Reports**.
- File upload/download behavior should be verified against the deployed storage provider and maximum upload policy before go-live.
- Exact production base URLs depend on the IIS or Portainer reverse-proxy configuration documented in the installation manual.

---

## 6.7 Verification Checklist

| Test | Expected Result |
| --- | --- |
| Authenticate with User API | Valid users receive a token or expected login response. |
| Create/update users | Administrator can create and maintain user accounts. |
| Configure regions and organizations | Region and organization endpoints return saved values. |
| Create ticket category | Ticketing API stores category and returns it in category list. |
| Create incident/ticket | Ticketing API creates a new ticket with expected status and identifiers. |
| Assign ticket | Assignment endpoints update responsible team/user. |
| Add message | Message appears in ticket conversation. |
| Upload/list attachment | Attachment is stored and returned by attachment endpoint. |
| Generate reports | Report endpoints return filtered report data. |
