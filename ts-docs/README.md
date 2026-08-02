# MoH Helpdesk Documentation Portal

This repository contains the Docusaurus documentation portal for the MoH Helpdesk platform. It includes installation, user, administrator, architecture, API, integration, and handover documentation.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This starts a local development server. Most documentation changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This generates static content into the `build` directory.

## Documentation Structure

- Installation Manual: Windows Server/IIS and Linux Docker/Portainer.
- Role-Based User Guide: Facility, Regional, National, and Administrator users.
- Admin & Configuration Guide: categories, SLA, regions, lookups, user management, and notifications.
- Architecture / Technical Design: system design, deployment model, data architecture, security, and operations.
- REST API Specifications and Integration Documentation.
- Code Transfer Readiness checklist.

## Verification

Run this before handover:

```bash
npm run build
```
