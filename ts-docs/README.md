# MoH Helpdesk Documentation Portal

This repository contains the **Docusaurus documentation portal for the MoH Helpdesk platform**.

The portal provides user, administration, technical, architecture, API, deployment, integration, and system handover documentation.

---

## Prerequisites

Before running the documentation portal, make sure the following are installed on your computer:

- **Node.js**
- **npm** (included with Node.js)

To verify the installation, open a terminal and run:

```bash
node --version
npm --version
```

If both commands display version numbers, you can continue.

If Node.js is not installed, install the **LTS (Long Term Support)** version of Node.js first.

---

## 1. Open the Project

After cloning the repository, locate the:

```text
ts-docs
```

folder and open a terminal inside it.

Make sure the folder contains files such as:

```text
package.json
package-lock.json
docusaurus.config.ts
sidebars.ts
```

> **Important:** All npm commands in this guide should be run from the `ts-docs` folder where the `package.json` file is located.

---

## 2. Install Dependencies

For the first-time setup, run:

```bash
npm install
```

This installs all packages and dependencies required to run the documentation portal.

Wait until the installation completes before continuing.

> You normally only need to run `npm install` once after cloning the repository.

---

## 3. Run the Documentation Portal

Start the local development server with:

```bash
npm run start
```

Wait for the server to start.

The terminal should display a local address, normally:

```text
http://localhost:3000
```

Open this address in your web browser.

The **MoH Helpdesk Documentation Portal** should now be running locally.

> Keep the terminal open while using the portal. Closing the terminal will stop the local server.

---

## 4. Stop the Server

When you are finished, return to the terminal and press:

```text
Ctrl + C
```

This will stop the local server.

---

## 5. Run the Portal Again Later

After the first-time setup, you do not need to run `npm install` again.

Open a terminal inside the `ts-docs` folder and run:

```bash
npm run start
```

Then open the local address shown in the terminal, normally:

```text
http://localhost:3000
```

---

## 6. Build the Project

To verify that the documentation portal can be successfully built for production, run:

```bash
npm run build
```

This compiles the Docusaurus project and generates the production-ready static website.

If the build is successful, the generated files will be available inside:

```text
build/
```

If the command completes without errors, the project has successfully passed the production build process.

---

## 7. Preview the Production Build

After creating the production build with:

```bash
npm run build
```

you can preview the generated website locally.

### Windows

Run:

```bash
npm run serve:local
```

Then open the local address displayed in the terminal, normally:

```text
http://localhost:3000
```

---

## Documentation Included

The portal contains the following documentation:

1. **Installation Guide**  
   Windows Server with IIS, Linux with Docker and Portainer, Kafka, PostgreSQL, services, NGINX, and verification steps.

2. **Administration & Configuration Guide**  
   Organization setup, regions, locations, users, roles, permissions, email configuration, automation rules, categories, applications, and priorities.

3. **Role-Based User Guides**  
   Facility, Regional, National, and Administrator workflows for everyday support operations.

4. **Dashboards**  
   Technician, Regional, Management, and Executive dashboards with role-specific monitoring information.

5. **Reports**  
   Ticket Log, Incident Reports, Technician Reports, Facility Reports, SLA monitoring, filters, and exports.

6. **Security Architecture**  
   Authentication, authorization, API gateway security, inter-service communication, event protection, audit integrity, and secure attachment access.

7. **System Architecture & Technical Design**  
   Deployment architecture, CQRS and MediatR services, gateway routing, database ownership, Kafka events, and application structure.

8. **REST API Specifications**  
   Ticketing and user API endpoints, request parameters, response structures, authentication requirements, and error handling.

9. **API / Integration Documentation**  
   Integration details for Kafka, email, file access, API gateway routes, service communication, event exchange, and external services.

10. **Source Code Handover & Readiness**  
    Repository transfer, sanitized configuration, environment requirements, dependencies, build verification, and ownership readiness.

11. **Ticket Lifecycle**  
    The complete ticket journey from creation and assignment through investigation, customer response, resolution, closure, and reporting.

12. **Process Workflows**  
    Operational workflows for ticket creation, assignment, reassignment, resolution, notifications, and support procedures.

13. **Data Architecture**  
    Platform data models, PostgreSQL databases, entity relationships, service ownership boundaries, storage, and data flow.

14. **Deployment & Testing**  
    Deployment topology, environments, testing approaches, validation activities, and release readiness.

15. **Risk Matrix**  
    Operational and technical risks, impact levels, probability, and mitigation strategies.

16. **Technical Appendix & Glossary**  
    Technical terminology, attachment formats, Kafka topics, event payload schemas, and Kubernetes manifest structures.

---

## Command Summary

| Command | Purpose |
| --- | --- |
| `npm install` | Installs all required project dependencies |
| `npm run start` | Starts the documentation portal locally |
| `npm run build` | Creates and verifies the production build |
| `npm run serve:local` | Previews the production build locally on Windows |
| `Ctrl + C` | Stops the running local server |

