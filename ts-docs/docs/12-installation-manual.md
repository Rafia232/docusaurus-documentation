---
sidebar_position: 2
title: Installation Manual
---

import ZoomableImage from '@site/src/components/ZoomableImage';
import deploymentTopology from './images/deployment_topology.png';

# Installation Manual

This manual explains how to deploy the MoH Helpdesk platform in two supported environments:

1. **Windows Server with IIS**
2. **Linux server with Docker containerization managed through Portainer**

The installation should be completed by a system administrator, DevOps engineer, or implementation partner with access to server infrastructure, DNS, firewall rules, database credentials, and production secrets.

---

## 1. Deployment Overview

<ZoomableImage src={deploymentTopology} alt="Deployment Topology" />

The platform is designed as a web-based service desk system with a React frontend, .NET API services, PostgreSQL databases, Kafka event streaming, object storage for attachments, and email/notification services.

| Component | Purpose |
| --- | --- |
| React Web Application | Browser-based user interface for administrators, service desk users, and facility users. |
| .NET API Services | Backend services for user, ticket, device, notification, and configuration operations. |
| PostgreSQL | Relational data storage for users, tickets, devices, and configuration records. |
| Kafka | Event streaming for ticket events, notification events, and cross-service synchronization. |
| Object Storage | Stores uploaded ticket attachments and related files. |
| SMTP / Mail Gateway | Sends ticket alerts, assignment notifications, and closure emails. |
| Reverse Proxy | IIS or NGINX routes HTTPS traffic to the frontend and APIs. |

---

## 2. Pre-Installation Checklist

Before installation, collect and verify the following items.

| Item | Windows Server / IIS | Linux / Docker / Portainer |
| --- | --- | --- |
| Server access | Administrator RDP access | SSH access with sudo privileges |
| Runtime | .NET Hosting Bundle, IIS, URL Rewrite | Docker Engine and Portainer |
| Database | PostgreSQL server or managed PostgreSQL | PostgreSQL container or managed PostgreSQL |
| Web server | IIS | Portainer stack with reverse proxy |
| SSL certificate | PFX or certificate store entry | PEM/certbot/reverse proxy certificate |
| DNS | Public or internal DNS record | Public or internal DNS record |
| Firewall | Ports 80/443 plus internal service ports | Ports 80/443 and Docker network access |
| Secrets | App settings, JWT keys, SMTP credentials | Environment variables or Docker secrets |
| Backups | Database and file backup path | Volume/database backup path |

Recommended production ports:

| Service | Port | Exposure |
| --- | ---: | --- |
| HTTPS | 443 | Public or internal network |
| HTTP | 80 | Redirect to HTTPS |
| Frontend | 3000 or static IIS site | Internal only when proxied |
| API Gateway | 5000 or 8080 | Internal only when proxied |
| PostgreSQL | 5432 | Internal only |
| Kafka | 9092 | Internal only |
| Object Storage | 9000 / 9001 | Internal only unless admin console is required |

---

## 3. Required Configuration Values

Prepare one environment file or deployment record containing these values.

| Configuration | Description | Example |
| --- | --- | --- |
| `ASPNETCORE_ENVIRONMENT` | Runtime environment | `Production` |
| `ConnectionStrings__UserDb` | User service database connection | `Host=db;Database=userdb;Username=...` |
| `ConnectionStrings__TicketDb` | Ticket service database connection | `Host=db;Database=ticketdb;Username=...` |
| `ConnectionStrings__DeviceDb` | Device service database connection | `Host=db;Database=devicedb;Username=...` |
| `Jwt__Issuer` | Token issuer | `moh-helpdesk` |
| `Jwt__Audience` | Token audience | `moh-helpdesk-users` |
| `Jwt__SigningKey` | JWT signing secret or certificate reference | Production secret |
| `Kafka__BootstrapServers` | Kafka broker address | `kafka:9092` |
| `Storage__Endpoint` | Object storage endpoint | `https://storage.example.org` |
| `Storage__Bucket` | Attachment bucket/container | `helpdesk-attachments` |
| `Smtp__Host` | SMTP server | `smtp.example.org` |
| `Smtp__Port` | SMTP port | `587` |
| `Smtp__Username` | SMTP user | Service account |
| `Smtp__Password` | SMTP password | Production secret |
| `PublicPortal__BaseUrl` | Public portal URL | `https://helpdesk.example.org` |

Do not store production secrets in source control. Use IIS environment variables, server-level secret stores, Portainer environment variables, or Docker secrets.

---

## 4. Windows Server Installation With IIS

### 4.1 Server Preparation

1. Install all Windows Server updates.
2. Install IIS from **Server Manager > Add Roles and Features**.
3. Enable these IIS features:
   - Web Server
   - Static Content
   - Default Document
   - HTTP Errors
   - URL Rewrite support
   - Application Request Routing, if IIS will proxy API traffic
4. Install the **.NET Hosting Bundle** matching the backend runtime.
5. Restart IIS after installing the hosting bundle:

```powershell
iisreset
```

### 4.2 Database Preparation

1. Create the required PostgreSQL databases.
2. Create separate database users for the application services.
3. Apply schema migration scripts or deployment migrations.
4. Confirm the application server can connect to PostgreSQL.

Recommended database split:

| Database | Owner |
| --- | --- |
| `moh_user_db` | User service |
| `moh_ticket_db` | Ticket service |
| `moh_device_db` | Device service |

### 4.3 Backend API Deployment

1. Publish each .NET service in Release mode.
2. Copy the published output to the server, for example:

```text
C:\inetpub\moh-helpdesk\api-gateway
C:\inetpub\moh-helpdesk\user-service
C:\inetpub\moh-helpdesk\ticket-service
C:\inetpub\moh-helpdesk\device-service
```

3. Create an IIS site or application for each service.
4. Set the application pool to **No Managed Code**.
5. Configure environment variables for each application pool.
6. Confirm each service has a valid `web.config` from the .NET publish output.
7. Grant the application pool identity read access to the application folder.
8. Restart the application pools.

### 4.4 Frontend Deployment

1. Build the React frontend for production.
2. Copy the generated static files to an IIS site folder, for example:

```text
C:\inetpub\moh-helpdesk\web
```

3. Configure the frontend API base URL to point to the public API gateway URL.
4. Add URL Rewrite rules so browser refreshes route back to `index.html`.
5. Bind the IIS site to the production hostname and SSL certificate.

### 4.5 IIS Reverse Proxy Pattern

If IIS is used as the single public entry point, configure routing similar to this:

| Public Path | Destination |
| --- | --- |
| `/` | React frontend static site |
| `/user-api/*` | User service |
| `/ticket-api/*` | Ticket service |
| `/device-api/*` | Device service |
| `/notification-api/*` | Notification service |

### 4.6 Windows Verification Checklist

After deployment, verify:

- IIS site opens over HTTPS.
- Login page loads without browser console errors.
- Administrator can sign in.
- Facility portal URL opens.
- Ticket creation works from the public portal.
- Ticket assignment works from the Service Desk.
- Email notification is received.
- Attachment upload and download work.
- API health endpoints return successful responses.
- Windows Event Viewer and IIS logs show no startup errors.

### 4.7 Windows Screenshots to Capture

For final visual documentation, capture and store these screenshots:

| Screenshot | Suggested File Name |
| --- | --- |
| IIS site bindings | `iis-site-bindings.png` |
| Application pool settings | `iis-app-pool-settings.png` |
| Environment variables | `iis-environment-variables.png` |
| URL Rewrite rule | `iis-url-rewrite.png` |
| Successful login page | `windows-login-success.png` |
| API health response | `windows-api-health.png` |

Place screenshots under `docs/images/installation/` and reference them from this manual.

---

## 5. Linux Docker Installation Through Portainer

### 5.1 Server Preparation

1. Install Linux security updates.
2. Install Docker Engine.
3. Install Portainer.
4. Configure DNS for the helpdesk hostname.
5. Configure firewall rules for ports 80 and 443.
6. Prepare persistent storage locations for database and attachment volumes.

### 5.2 Docker Network and Volumes

Create a dedicated Docker network for the platform:

```bash
docker network create moh-helpdesk
```

Recommended volumes:

| Volume | Purpose |
| --- | --- |
| `moh-postgres-data` | PostgreSQL data |
| `moh-kafka-data` | Kafka data |
| `moh-object-storage` | Attachment/object storage files |
| `moh-api-logs` | API service logs |

### 5.3 Portainer Stack Deployment

In Portainer:

1. Open **Stacks**.
2. Select **Add stack**.
3. Name the stack `moh-helpdesk`.
4. Paste the approved production `docker-compose.yml`.
5. Add environment variables in the Portainer environment section.
6. Deploy the stack.
7. Confirm all containers reach the **running** state.

Example stack structure:

```yaml
services:
  frontend:
    image: registry.example.org/moh/helpdesk-frontend:latest
    restart: unless-stopped
    depends_on:
      - api-gateway

  api-gateway:
    image: registry.example.org/moh/helpdesk-api-gateway:latest
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: Production
      Jwt__Issuer: moh-helpdesk
      Kafka__BootstrapServers: kafka:9092

  ticket-service:
    image: registry.example.org/moh/helpdesk-ticket-service:latest
    restart: unless-stopped
    environment:
      ASPNETCORE_ENVIRONMENT: Production
      ConnectionStrings__TicketDb: ${TICKET_DB_CONNECTION}

  postgres:
    image: postgres:16
    restart: unless-stopped
    volumes:
      - moh-postgres-data:/var/lib/postgresql/data

volumes:
  moh-postgres-data:
```

Use the final project compose file from the application codebase during production deployment. The sample above is a structure guide, not a complete production compose file.

### 5.4 Reverse Proxy and SSL

The Docker deployment should expose only the reverse proxy publicly. Use NGINX, Traefik, Caddy, or another approved reverse proxy.

Recommended routing:

| Host / Path | Container |
| --- | --- |
| `https://helpdesk.example.org/` | Frontend |
| `https://helpdesk.example.org/ticket-api/` | Ticket service or API gateway |
| `https://helpdesk.example.org/user-api/` | User service or API gateway |
| `https://helpdesk.example.org/device-api/` | Device service or API gateway |

### 5.5 Portainer Verification Checklist

After deployment, verify:

- Stack status is healthy in Portainer.
- All application containers are running.
- Container logs show no migration, database, Kafka, or SMTP errors.
- Frontend opens over HTTPS.
- API health endpoints respond through the reverse proxy.
- Admin login works.
- Facility ticket creation works.
- Ticket assignment works.
- Email notification works.
- Attachment upload/download works.
- Persistent volumes remain after container restart.

### 5.6 Portainer Screenshots to Capture

For final visual documentation, capture and store these screenshots:

| Screenshot | Suggested File Name |
| --- | --- |
| Portainer stack overview | `portainer-stack-overview.png` |
| Container list and health | `portainer-containers-health.png` |
| Stack environment variables | `portainer-env-values.png` |
| Reverse proxy routes | `portainer-reverse-proxy.png` |
| Volume list | `portainer-volumes.png` |
| Successful login page | `linux-login-success.png` |
| API health response | `linux-api-health.png` |

Place screenshots under `docs/images/installation/` and reference them from this manual.

---

## 6. First-Time Application Setup

After either Windows or Linux deployment:

1. Sign in with the initial administrator account.
2. Change the initial administrator password.
3. Configure organization profile and public portal status.
4. Create required users.
5. Assign roles and feature permissions.
6. Create regions, facilities, and facility users.
7. Create Service Desk teams.
8. Create ticket categories.
9. Map categories to teams.
10. Configure SLA and overdue thresholds.
11. Configure email accounts and templates.
12. Configure notification automation.
13. Submit a test ticket from the public portal.
14. Assign, reply to, close, and export the test ticket.

---

## 7. Go-Live Checklist

| Area | Check |
| --- | --- |
| Security | HTTPS is enabled and HTTP redirects to HTTPS. |
| Access | Admin, Service Desk, Regional, National, and Facility roles are verified. |
| Database | Backup schedule is configured and tested. |
| Attachments | Upload limits and storage location are verified. |
| Email | SMTP delivery is tested for ticket creation, assignment, reply, overdue, and closure. |
| Monitoring | Server logs, API logs, and container/IIS logs are accessible. |
| Recovery | Restore procedure is documented and tested. |
| Documentation | Installation screenshots are captured and linked. |
| Handover | Admin credentials, environment values, and support contacts are transferred securely. |
