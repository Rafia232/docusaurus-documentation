import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Project Handover',
      items: [
        {
          type: 'doc',
          id: 'installation-manual',
          label: '1. Installation Manual',
        },
        {
          type: 'doc',
          id: 'role-based-user-guide',
          label: '2. Role-Based User Guide',
        },
        {
          type: 'doc',
          id: 'admin-configuration-guide',
          label: '3. Admin & Configuration Guide',
        },
        {
          type: 'doc',
          id: 'architecture-technical-design',
          label: '4. Architecture / Technical Design',
        },
        {
          type: 'doc',
          id: 'api-specifications',
          label: '5. REST API Specifications',
        },
        {
          type: 'doc',
          id: 'integrations',
          label: '6. API / Integration Documentation',
        },
        {
          type: 'doc',
          id: 'code-transfer-readiness',
          label: '7. Code Transfer Readiness',
        },
      ],
    },
    {
      type: 'category',
      label: 'Operational Guides',
      items: [
        {
          type: 'doc',
          id: 'moh-helpdesk-administrator-guide',
          label: 'Administrator Guide',
        },
        {
          type: 'doc',
          id: 'service-desk',
          label: 'Service Desk',
        },
        {
          type: 'doc',
          id: 'facility-user',
          label: 'Facility User',
        },
        {
          type: 'doc',
          id: 'ticket-lifecycle-and-journey',
          label: 'Ticket Lifecycle and Journey',
        },
        {
          type: 'doc',
          id: 'process-workflows',
          label: 'Process Workflows',
        },
        {
          type: 'doc',
          id: 'reporting-and-security',
          label: 'Reporting & Security',
        },
      ],
    },
    {
      type: 'category',
      label: 'Technical Reference',
      items: [
        {
          type: 'doc',
          id: 'data-architecture',
          label: 'Data Architecture',
        },
        {
          type: 'doc',
          id: 'deployment-and-testing',
          label: 'Deployment & Testing',
        },
        {
          type: 'doc',
          id: 'acceptance-criteria-and-future',
          label: 'Acceptance Criteria & Future Roadmap',
        },
        {
          type: 'doc',
          id: 'technical-appendix-and-glossary',
          label: 'Technical Appendix & Glossary',
        },
      ],
    },
  ],
};

export default sidebars;
