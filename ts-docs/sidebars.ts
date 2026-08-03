import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
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
          id: 'admin-configuration-guide',
          label: '2. Admin & Configuration Guide',
        },
        {
          type: 'category',
          label: '3. Role-Based User Guide',
          link: {
            type: 'doc',
            id: 'role-based-user-guide',
          },
          items: [
            {
              type: 'link',
              label: '3.1 Facility User',
              href: '/docs/role-based-user-guide#31-facility-user',
            },
            {
              type: 'link',
              label: '3.2 Regional User',
              href: '/docs/role-based-user-guide#32-regional-user',
            },
            {
              type: 'link',
              label: '3.3 National User',
              href: '/docs/role-based-user-guide#33-national-user',
            },
            {
              type: 'link',
              label: '3.4 Administrator',
              href: '/docs/role-based-user-guide#34-administrator',
            },
          ],
        },
        {
          type: 'category',
          label: '4. Dashboard',
          link: {
            type: 'doc',
            id: 'dashboard',
          },
          items: [
            {
              type: 'link',
              label: '4.1 Technician Dashboard',
              href: '/docs/dashboard#41-technician-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '4.2 Regional Dashboard',
              href: '/docs/dashboard#42-regional-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '4.3 Management Dashboard',
              href: '/docs/dashboard#43-management-dashboard--national-user',
            },
            {
              type: 'link',
              label: '4.4 Executive Dashboard',
              href: '/docs/dashboard#44-executive-dashboard--administrator',
            },
          ],
        },
        {
          type: 'doc',
          id: 'reporting-and-security',
          label: '5. Reports',
        },
        {
          type: 'doc',
          id: 'architecture-technical-design',
          label: '6. Architecture / Technical Design',
        },
        {
          type: 'doc',
          id: 'api-specifications',
          label: '7. REST API Specifications',
        },
        {
          type: 'doc',
          id: 'integrations',
          label: '8. API / Integration Documentation',
        },
        {
          type: 'doc',
          id: 'code-transfer-readiness',
          label: '9. Code Transfer Readiness',
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