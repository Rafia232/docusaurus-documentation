---
sidebar_position: 2
title: 1. Business Requirements
---

# 1. Business Requirements

This document details the strategic, strategic and scope foundations of the **MoH Helpdesk Management System**. It aligns the product goals with the business requirements of the Ministry of Health.

---

## 1.1 Executive Summary

The Ministry of Health (MoH) coordinates clinical and technical operations across thousands of healthcare facilities. These facilities rely on critical software systems, networking hardware, printing tools, and medical devices. Currently, technical issues are reported via unmonitored emails, phone calls, and direct messages, resulting in slow ticket resolutions, lack of tracking, and diagnostic errors.

The **MoH Helpdesk Management System** is a centralized ticket tracking and asset correlation platform. Built on a modern **microservices architecture** using a **.NET Core 9 Web API** backend with the **CQRS (Command Query Responsibility Segregation) pattern**, and a **React** frontend SPA, it divides operations into:
1. **Facility User Self-Service Portal**: Allowing clinical and administrative facility users (like Dr. Mary) to report issues and track resolutions.
2. **Service Desk Administration Portal**: Allowing agents, experts, and administrators (Adam, Joseph, and John) to route, manage, and resolve tickets.

By integrating automated email ingestion via `[EMAIL_ADDRESS]`, WhatsApp chatbot intake, and **Device Management**, the platform bridges the gap between hardware tracking and issue resolution.

---

## 1.2 Product Vision

> *“To provide the Ministry of Health with an event-driven support ecosystem that guarantees rapid ticket resolution, correlates support requests directly with facility device profiles, and automates helpdesk routing to maximize healthcare system availability across all national health facilities.”*

---

## 1.3 Business Objectives

The helpdesk platform's performance will be evaluated against these metrics:

| Objective ID | Business Objective | Target Metric / KPI | Timeline |
|--------------|--------------------|---------------------|----------|
| **OBJ-001**  | Reduce MTTR (Mean Time to Resolution) | Decrease average resolution time by **35%** | 6 months post-launch |
| **OBJ-002**  | Automate Ticket Routing | Route **>95%** of tickets automatically using Category-Team mappings | Immediate upon launch |
| **OBJ-003**  | Minimize Call Bottlenecks | Route **50%** of guest intake requests through WhatsApp and Email | 3 months post-launch |
| **OBJ-004**  | Protect Device Integrity | Track and link **100%** of device-related tickets to registered device profiles | Continuous |

---

## 1.4 Stakeholder Analysis

A diverse group of stakeholders interacts with or is affected by the MoH Helpdesk:

| Stakeholder Group | Role in Project | Influence | Interest | Key Requirements |
|-------------------|-----------------|-----------|----------|------------------|
| **Ministry Officials** | Sponsors / Executive Board | **High** | **Medium**| System auditability, SLA compliance, device downtime reporting. |
| **Organization Administrators** | Configuration Owners | **High** | **High** | Configuration panels for teams, members, categories, and routing maps. |
| **Service Desk Agents** | Frontline Triage Operators | **Medium** | **High** | Easy ticket queue filtering, manual team transfer widgets, device associations. |
| **Service Desk Experts** | Specialized Technical Resolvers | **Medium** | **High** | Work queue restricted to assigned tickets, private internal notes, resolution forms. |
| **Facility Users** | Facility Users / Requestors | **Low** | **High** | Simple portal layout, automated email/WhatsApp alerts, ticket creation. |
| **QA Teams** | Validation Specialists | **Medium** | **Medium**| Detailed functional specs, acceptance criteria, test matrices. |
| **Developers & UI Designers** | System Builders | **High** | **High** | Clear REST API payloads, data diagrams, interface mockups, CQRS handlers. |

---

## 1.5 Scope Boundaries

### 1.5.1 In-Scope Capabilities
- **Multi-Channel Intake**: Ticketing via Public Web Portal, email parsing via `[EMAIL_ADDRESS]`, WhatsApp Webhook, and Agent Form.
- **Facility User Portal**: Dashboard metrics, My Tickets grid, Ticket Details, Text/File Replies, Profile page.
- **Service Desk Admin Portal**: Ticket boards, status transitions, team transfers, user/member allocation, category mappings.
- **Device Management**: Inventory tracking, linking device codes (`DEV-XXXXXX`) to tickets, device history logs.
- **AI Classification & Chatbot**: Conversational guest intake, automatic routing, NLP-based categorization.
- **System Actions**: Standard ticket operations (create, assign, reassign, transfer, note, comment, attach, resolve, close, reopen within 7 days).

### 1.5.2 Out-of-Scope Capabilities
- **Asset Auto-Discovery**: Network scanner sweep tools.
- **Direct Telephony Integration**: Built-in VoIP helpdesk call routing.
- **Third-Party SLA Escalations**: Active automated notification escalations to external ministry departments.
