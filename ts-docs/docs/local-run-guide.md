---
sidebar_position: 3
title: Local Run Guide
---

# Local Run Guide

This guide explains how a new user can run TeraSupport on a local computer. Follow the steps in order. Do not start the APIs or web app before PostgreSQL, databases, Kafka, and environment variables are ready.

The local setup runs these projects:

| Project | Purpose |
| --- | --- |
| `User` | Login, users, roles, organizations, facilities, regions, and permissions. |
| `Ticketing` | Tickets, categories, assignment, messages, attachments, SLA, and reports. |
| `Mail` | Mail processing, notification delivery, and Kafka mail workflows. |
| `ApiGateway` | Ocelot API Gateway used by the web app. |
| `Web` | React/Vite frontend application. |

---

## Quick Run Summary

After PostgreSQL, databases, Kafka, .NET, Node.js, and Yarn are installed, the local run process is simple:

1. Create or copy the backend `.env` file provided with the project handover.
2. Add database, Kafka, JWT, and service URL values in that `.env` file.
3. Create or copy `Web/.env`.
4. Add the API Gateway URL in `Web/.env`.
5. Restore and build the backend solution.
6. Run the backend projects together as multiple startup projects:
   - `User`
   - `Ticketing`
   - `Mail`
   - `ApiGateway`
7. After the APIs are running, open the `Web` folder and run the frontend.

Create or copy the `.env` file for each backend service. Use the exact file location and variable names from the project handover or `.env.example`.

Common values for all backend services:

```text
ASPNETCORE_ENVIRONMENT=Development
ALLOWEDHOSTS=*
KAFKA_HOST=localhost
KAFKA_PORT=29092
JWT__KEY=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
```

User Service `.env`:

```text
ASPNETCORE_ENVIRONMENT=Development
ALLOWEDHOSTS=*
KAFKA_HOST=localhost
KAFKA_PORT=29092
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSUserDB;Username=terasupport_local;Password=ChangeThisLocalPassword
MAILAPI__BASEURL=https://localhost:7122
JWT_SECURITY_KEY=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
JWT_TOKEN_VALIDITY_MINS=60
JWT_SWITCHED_TOKEN_VALIDITY_MINS=60000
```

Ticketing Service `.env`:

```text
ASPNETCORE_ENVIRONMENT=Development
ALLOWEDHOSTS=*
KAFKA_HOST=localhost
KAFKA_PORT=29092
JWT__KEY=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSTicketDb;Username=terasupport_local;Password=ChangeThisLocalPassword
USERSERVICE__BASEURL=https://localhost:7250
APISETTINGS__BASEURL=https://localhost:7062
FILESETTING__FILEBASEURL=https://localhost:7137
```

Mail Service `.env`:

```text
ASPNETCORE_ENVIRONMENT=Development
ALLOWEDHOSTS=*
KAFKA_HOST=localhost
KAFKA_PORT=29092
MAIL_DB_HOST=localhost
MAIL_DB_PORT=5432
MAIL_DB_NAME=TSMailDB
MAIL_DB_USER=terasupport_local
MAIL_DB_PASSWORD=ChangeThisLocalPassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=TSMailDB
DB_USER=terasupport_local
DB_PASSWORD=ChangeThisLocalPassword
TicketHTTP_HOST=https://localhost:7137
```

API Gateway `.env`:

```text
ASPNETCORE_ENVIRONMENT=Development
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSUserDB;Username=postgres;Password=your_password_here
ALLOWEDHOSTS=*
Jwt__Key=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
OCELOTVARIABLES__DOWNSTREAMSCHEME=https
OCELOTVARIABLES__USERMANAGEMENTSERVICEHOST=localhost
OCELOTVARIABLES__USERMANAGEMENTSERVICEPORT=7250
OCELOTVARIABLES__TICKETINGSYSTEMSERVICEHOST=localhost
OCELOTVARIABLES__TICKETINGSYSTEMSERVICEPORT=7137
OCELOTVARIABLES__MAILSERVICEHOST=localhost
OCELOTVARIABLES__MAILSERVICEPORT=7122
OcelotVariables__UserManagementServiceName=UserManagementService
OcelotVariables__TicketingSystemServiceName=TicketingSystemService
OcelotVariables__MailServiceName=MailService
SwaggerSources__UserManagement=http://localhost:7250/openapi/v1.json
SwaggerSources__TicketingSystem=http://localhost:7137/swagger/v1/swagger.json
SwaggerSources__MailSystem=http://localhost:7122/openapi/v1.json
```

Use the exact variable names required by the project `.env.example` or handover file. If the project already has separate `.env` files for each API, copy each example file, then update the values for that API.

Web `.env`:

```text
VITE_API_URL=https://localhost:7062/ts-api
VITE_OLLAMA_BASE_URL=http://localhost:11434
VITE_OLLAMA_PROXY_TARGET=http://localhost:11434
VITE_OLLAMA_DEFAULT_MODEL=<local-model-name-if-used>
```

Run backend from Visual Studio:

1. Open `TS.sln`.
2. Set `User`, `Ticketing`, `Mail`, and `ApiGateway` as multiple startup projects.
3. Make sure each project loads its needed `.env` values.
4. Click **Start**.

Run backend from VS Code:

```bash
dotnet restore
dotnet build
dotnet run --project User/User.csproj
dotnet run --project Ticketing/Ticketing.csproj
dotnet run --project Mail/Mail.csproj
dotnet run --project ApiGateway/ApiGateway.csproj
```

Run each `dotnet run` command in a separate terminal.

Run web:

```bash
cd Web
yarn install
yarn dev
```

Open the local web URL shown in the terminal, commonly:

```text
http://localhost:5173
```

---

## 1. Install PostgreSQL and pgAdmin

PostgreSQL is the database server. pgAdmin is the beginner-friendly visual tool used to create and inspect databases.

Download links:

| Tool | Official Download Link |
| --- | --- |
| PostgreSQL for Windows | [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/) |
| pgAdmin for Windows | [https://www.pgadmin.org/download/pgadmin-4-windows/](https://www.pgadmin.org/download/pgadmin-4-windows/) |

The PostgreSQL Windows installer normally includes PostgreSQL Server, pgAdmin, and StackBuilder.

### 1.1 Download PostgreSQL

1. Open [PostgreSQL Windows downloads](https://www.postgresql.org/download/windows/).
2. Click the download link for the interactive installer.
3. Choose a supported PostgreSQL version.
4. Download the Windows x86-64 installer.

### 1.2 Install PostgreSQL

1. Run the downloaded PostgreSQL installer.
2. Keep the default installation directory unless the project team gives another path.
3. In **Select Components**, keep these checked:
   - PostgreSQL Server
   - pgAdmin 4
   - Command Line Tools
4. In **Data Directory**, keep the default path unless another drive is required.
5. Set and remember the password for the `postgres` admin user.
6. Keep the default port:

```text
5432
```

7. Keep the default locale unless the project team gives another value.
8. Finish the installation.
9. StackBuilder can be skipped for local development unless another tool is required.

### 1.3 Open pgAdmin and Connect

1. Open **pgAdmin 4** from the Start menu.
2. Set a pgAdmin master password if prompted.
3. In the left sidebar, expand **Servers**.
4. Select the local PostgreSQL server.
5. Enter the `postgres` password created during installation.
6. Confirm the server expands and shows **Databases**.

### 1.4 Verify PostgreSQL Is Running

Open Command Prompt, PowerShell, or the VS Code terminal:

```bash
pg_isready -h localhost -p 5432
```

Expected result:

```text
localhost:5432 - accepting connections
```

If `pg_isready` is not recognized, PostgreSQL command line tools may not be in the system PATH. Use pgAdmin instead, or add the PostgreSQL `bin` folder to PATH.

---

## 2. Create Required Databases

TeraSupport uses separate databases for separate services.

| Service | Database Name |
| --- | --- |
| User Service | `TSUserDB` |
| Ticketing Service | `TSTicketDb` |
| Mail Service | `TSMailDB` |

### 2.1 Create Databases With pgAdmin

1. Open pgAdmin.
2. Expand **Servers**.
3. Expand the local PostgreSQL server.
4. Right-click **Databases**.
5. Select **Create** -> **Database**.
6. Enter `TSUserDB` as the database name.
7. Click **Save**.
8. Repeat the same steps for:
   - `TSTicketDb`
   - `TSMailDB`

### 2.2 Create Databases With SQL

In pgAdmin, open **Tools** -> **Query Tool**, then run:

```sql
CREATE DATABASE "TSUserDB";
CREATE DATABASE "TSTicketDb";
CREATE DATABASE "TSMailDB";
```

### 2.3 Create Local Application User

Run this SQL in pgAdmin Query Tool:

```sql
CREATE USER terasupport_local WITH PASSWORD 'ChangeThisLocalPassword';

GRANT ALL PRIVILEGES ON DATABASE "TSUserDB" TO terasupport_local;
GRANT ALL PRIVILEGES ON DATABASE "TSTicketDb" TO terasupport_local;
GRANT ALL PRIVILEGES ON DATABASE "TSMailDB" TO terasupport_local;
```

For team or production environments, replace `ChangeThisLocalPassword` with a strong secret.

### 2.4 Verify Databases

In pgAdmin, expand **Databases** and confirm the list contains:

```text
TSUserDB
TSTicketDb
TSMailDB
```

---

## 3. Install Development Tools

Install these tools before opening the source code.

| Tool | Official Link | Purpose |
| --- | --- | --- |
| Git | [https://git-scm.com/downloads](https://git-scm.com/downloads) | Clone the source code. |
| .NET 9 SDK | [https://dotnet.microsoft.com/en-us/download/dotnet/9.0](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) | Build and run backend APIs. |
| Node.js LTS | [https://nodejs.org/en/download](https://nodejs.org/en/download) | Run the frontend application. |
| Yarn | [https://classic.yarnpkg.com/lang/en/docs/install/](https://classic.yarnpkg.com/lang/en/docs/install/) | Install frontend dependencies. |
| Docker Desktop | [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/) | Run Kafka locally. |
| Visual Studio Code | [https://code.visualstudio.com/download](https://code.visualstudio.com/download) | Lightweight editor for APIs and frontend. |
| Visual Studio Community | [https://visualstudio.microsoft.com/downloads/](https://visualstudio.microsoft.com/downloads/) | Full IDE for .NET backend projects. |

After installing Node.js, install Yarn:

```bash
npm install --global yarn
```

Verify tools:

```bash
git --version
dotnet --version
node --version
yarn --version
docker --version
```

Recommended Visual Studio workloads:

| Workload | Why It Is Needed |
| --- | --- |
| ASP.NET and web development | Run and debug .NET API projects. |
| Node.js development | Useful for frontend development from Visual Studio. |

Recommended VS Code extensions:

| Extension | Why It Is Needed |
| --- | --- |
| C# Dev Kit | C# project loading, build, and debug support. |
| C# | C# language support. |
| ESLint | Frontend linting support. |
| Prettier | Frontend formatting support. |

---

## 4. Download the Source Code

Open a terminal in the folder where the source code should be stored:

```bash
git clone <terasupport-source-repository-url>
cd <terasupport-source-folder>
```

If the project was shared as a ZIP file:

1. Extract the ZIP file.
2. Open the extracted folder.
3. Confirm it contains backend folders such as `ApiGateway`, `User`, `Ticketing`, `Mail`, and frontend folder `Web`.

---

## 5. Run Kafka Locally

Kafka must be running before testing ticket, mail, and notification events.

### 5.1 Start Kafka With Docker Compose

If the source repository includes `prod.kafka.compose.yml`, run this from the source root:

```bash
docker compose -f prod.kafka.compose.yml up -d
```

Check running containers:

```bash
docker ps
```

If Kafdrop is enabled, open:

```text
http://localhost:9001
```

### 5.2 Kafka Values for Local API Run

When APIs are run directly from Visual Studio or VS Code:

```text
KAFKA_HOST=localhost
KAFKA_PORT=29092
```

When APIs are run inside Docker on the same Docker network:

```text
KAFKA_HOST=kafka
KAFKA_PORT=9092
```

---

## 6. Set Backend Environment Variables First

Set environment variables before running any API. Every service must know its database, Kafka broker, JWT secret, and dependent service URLs.

For local development, use:

```text
ASPNETCORE_ENVIRONMENT=Development
ALLOWEDHOSTS=*
LOGGING__LOGLEVEL__DEFAULT=Information
LOGGING__LOGLEVEL__MICROSOFT_ASPNETCORE=Warning
KAFKA_HOST=localhost
KAFKA_PORT=29092
JWT__KEY=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
```

### 6.1 User Service Environment

Set these for the `User` API:

```text
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSUserDB;Username=terasupport_local;Password=ChangeThisLocalPassword
MAILAPI__BASEURL=https://localhost:7122
```

### 6.2 Ticketing Service Environment

Set these for the `Ticketing` API:

```text
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSTicketDb;Username=terasupport_local;Password=ChangeThisLocalPassword
USERSERVICE__BASEURL=https://localhost:7250
APISETTINGS__BASEURL=https://localhost:7250
FILESETTING__FILEBASEURL=https://localhost:7137
```

If AI settings are required by the source code, set the project-approved `AISETTINGS__...` values from the local `.env.example` or handover package.

### 6.3 Mail Service Environment

Set these for the `Mail` API:

```text
DB_HOST=localhost
DB_PORT=5432
DB_NAME=TSMailDB
DB_USER=terasupport_local
DB_PASSWORD=ChangeThisLocalPassword
TicketHTTP_HOST=https://localhost:7137
```

If SMTP is required for local testing, also set the SMTP values provided by the project team. Do not use production SMTP credentials in a shared local machine.

### 6.4 API Gateway Environment

Set these for `ApiGateway`:

```text
ASPNETCORE_ENVIRONMENT=Development
CONNECTIONSTRINGS__DBLOCATION=Host=localhost;Port=5432;Database=TSUserDB;Username=postgres;Password=your_password_here
ALLOWEDHOSTS=*
Jwt__Key=UseALongLocalDevelopmentSecretKeyOnlyForLocalRun
OCELOTVARIABLES__DOWNSTREAMSCHEME=https
OCELOTVARIABLES__USERMANAGEMENTSERVICEHOST=localhost
OCELOTVARIABLES__USERMANAGEMENTSERVICEPORT=7250
OCELOTVARIABLES__TICKETINGSYSTEMSERVICEHOST=localhost
OCELOTVARIABLES__TICKETINGSYSTEMSERVICEPORT=7137
OCELOTVARIABLES__MAILSERVICEHOST=localhost
OCELOTVARIABLES__MAILSERVICEPORT=7122
OcelotVariables__UserManagementServiceName=UserManagementService
OcelotVariables__TicketingSystemServiceName=TicketingSystemService
OcelotVariables__MailServiceName=MailService
SwaggerSources__UserManagement=http://localhost:7250/openapi/v1.json
SwaggerSources__TicketingSystem=http://localhost:7137/swagger/v1/swagger.json
SwaggerSources__MailSystem=http://localhost:7122/openapi/v1.json
```

### 6.5 Web Environment

Inside the `Web` folder, create or update `.env`:

```text
VITE_API_URL=https://localhost:7062/ts-api
VITE_OLLAMA_BASE_URL=http://localhost:11434
VITE_OLLAMA_PROXY_TARGET=http://localhost:11434
VITE_OLLAMA_DEFAULT_MODEL=<local-model-name-if-used>
```

If Ollama or AI features are not part of local testing, keep the values as placeholders or follow the project `.env.example`.

---

## 7. Apply Database Tables and Seed Data

The empty databases must receive tables before the APIs can work correctly.

### 7.1 Restore and Build First

From the source root:

```bash
dotnet restore
dotnet build
```

If the repository contains `TS.sln`, this can also be used:

```bash
dotnet restore TS.sln
dotnet build TS.sln
```

### 7.2 Apply EF Core Migrations

If the services use Entity Framework Core migrations:

```bash
dotnet ef database update --project User/User.csproj
dotnet ef database update --project Ticketing/Ticketing.csproj
dotnet ef database update --project Mail/Mail.csproj
```

If `dotnet ef` is missing, install the EF tool:

```bash
dotnet tool install --global dotnet-ef
```

Then close and reopen the terminal and run the migration commands again.

### 7.3 Apply SQL Scripts

If the handover package uses SQL scripts instead of EF migrations, run each script against the correct database:

| Script Type | Database |
| --- | --- |
| User schema and user seed data | `TSUserDB` |
| Ticketing schema, categories, teams, SLA data | `TSTicketDb` |
| Mail schema and mail configuration | `TSMailDB` |

Use pgAdmin:

1. Select the target database.
2. Open **Tools** -> **Query Tool**.
3. Open or paste the SQL script.
4. Click **Execute**.
5. Confirm tables appear under **Schemas** -> **Tables**.

Minimum setup data usually includes:

| Data Area | Needed For |
| --- | --- |
| Admin user | First login. |
| Roles and permissions | Menu and action access. |
| Organization | User and facility assignment. |
| Region and facility | Ticket ownership and reporting. |
| Categories and teams | Ticket creation and assignment. |
| SLA rules | SLA tracking and reports. |

---

## 8. Run the APIs With Visual Studio

Use this option when working on Windows with Visual Studio.

### 8.1 Open the Solution

1. Open Visual Studio.
2. Select **Open a project or solution**.
3. Open `TS.sln` from the source root.
4. Wait for package restore to finish.
5. Build the solution using **Build** -> **Build Solution**.

### 8.2 Set Environment Variables in Visual Studio

For each API project:

1. Right-click the project.
2. Select **Properties**.
3. Open **Debug** or **Debug launch profiles**.
4. Select the local profile.
5. Add the environment variables from section 6.
6. Save the profile.

Set service-specific values on the matching project:

| Project | Environment Section |
| --- | --- |
| `User` | Common values + User Service values |
| `Ticketing` | Common values + Ticketing Service values |
| `Mail` | Common values + Mail Service values |
| `ApiGateway` | Common values + API Gateway values |

### 8.3 Run Multiple Startup Projects

1. Right-click the solution.
2. Select **Configure Startup Projects**.
3. Choose **Multiple startup projects**.
4. Set these projects to **Start**:
   - `User`
   - `Ticketing`
   - `Mail`
   - `ApiGateway`
5. Start `ApiGateway` after the three service APIs when possible.
6. Click **Apply** and **OK**.
7. Press **F5** or click **Start**.

Expected local URLs:

| API | HTTPS URL | HTTP URL |
| --- | --- | --- |
| User | `https://localhost:7250` | `http://localhost:5184` |
| Ticketing | `https://localhost:7137` | `http://localhost:5193` |
| Mail | `https://localhost:7122` | `http://localhost:5070` |
| API Gateway | `https://localhost:7062` | `http://localhost:5256` |

If the browser warns about a local certificate, run:

```bash
dotnet dev-certs https --trust
```

Then restart Visual Studio and run the APIs again.

---

## 9. Run the APIs With VS Code

Use this option when working from VS Code or terminal.

### 9.1 Open the Folder

```bash
cd <terasupport-source-folder>
code .
```

Install recommended extensions when VS Code asks.

### 9.2 Restore and Build

Open the VS Code terminal:

```bash
dotnet restore
dotnet build
```

### 9.3 Run APIs in Separate Terminals

Open four terminals. Run one command in each terminal.

Terminal 1:

```bash
dotnet run --project User/User.csproj
```

Terminal 2:

```bash
dotnet run --project Ticketing/Ticketing.csproj
```

Terminal 3:

```bash
dotnet run --project Mail/Mail.csproj
```

Terminal 4:

```bash
dotnet run --project ApiGateway/ApiGateway.csproj
```

Start order:

1. User API
2. Ticketing API
3. Mail API
4. API Gateway

The API Gateway should run after the service APIs because it routes requests to them.

---

## 10. Run the Web App

The web app should be started only after the APIs and API Gateway are running.

### 10.1 Install Frontend Packages

Open a terminal:

```bash
cd Web
yarn install
```

### 10.2 Start the Web App

```bash
yarn dev
```

Open the local Vite URL shown in the terminal. It is commonly:

```text
http://localhost:5173
```

The web app sends API requests to:

```text
https://localhost:7062/ts-api
```

That URL must match `VITE_API_URL`.

---

## 11. Verify Everything Works

Use this checklist after all services are running:

| Check | Expected Result |
| --- | --- |
| PostgreSQL | pgAdmin shows `TSUserDB`, `TSTicketDb`, and `TSMailDB`. |
| Kafka | Docker shows Kafka containers running, and Kafdrop opens if enabled. |
| User API | User service starts without database errors. |
| Ticketing API | Ticketing service starts without database or Kafka errors. |
| Mail API | Mail service starts without database or Kafka errors. |
| API Gateway | Gateway starts and can route to downstream APIs. |
| Web app | Login page opens from the Vite URL. |
| Login | A seeded/admin user can sign in. |
| Ticket workflow | A test ticket can be created, viewed, assigned, and updated. |

---

## 12. Common Beginner Issues

| Issue | Cause | Fix |
| --- | --- | --- |
| PostgreSQL connection fails | PostgreSQL is stopped or wrong port is used. | Start PostgreSQL service and confirm port `5432`. |
| `password authentication failed` | Wrong database password. | Check `terasupport_local` password and env values. |
| `database does not exist` | Required database was not created. | Create `TSUserDB`, `TSTicketDb`, and `TSMailDB`. |
| Tables are missing | Migrations or SQL scripts were not applied. | Run EF migrations or schema scripts. |
| Kafka connection fails | Kafka is stopped or wrong host/port is used. | Use `localhost:29092` for local API runs. |
| API Gateway returns `404` | Downstream service host or port is wrong. | Check `OCELOTVARIABLES__...` values. |
| Web app cannot call API | `VITE_API_URL` is missing or wrong. | Set `VITE_API_URL=https://localhost:7062/ts-api`. |
| HTTPS warning appears | Local development certificate is not trusted. | Run `dotnet dev-certs https --trust`. |
| Login fails after APIs start | Seed/admin user is missing. | Apply seed data or create an admin user using the approved setup method. |

---

## 13. Local Startup Order Summary

Use this order every time:

1. Start PostgreSQL.
2. Confirm `TSUserDB`, `TSTicketDb`, and `TSMailDB` exist.
3. Start Kafka with Docker.
4. Confirm environment variables are set.
5. Run `User` API.
6. Run `Ticketing` API.
7. Run `Mail` API.
8. Run `ApiGateway`.
9. Run `Web`.
10. Open the web app and test login.
