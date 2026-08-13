import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'installation-manual',
          label: '1. Installation Manual',
        },
        {
          type: 'doc',
          id: 'admin-configuration-guide',
          label: '2. Administration & Configuration Guide',
        },
      ],
    },

    {
      type: 'category',
      label: 'User Operations',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: '3. Role-Based User Guides',
          collapsed: true,
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
          label: '4. Dashboards',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'dashboard',
          },
          items: [
            {
              type: 'link',
              label: '4.1 Technician Dashboard',
              href:
                '/docs/dashboard#41-technician-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '4.2 Regional Dashboard',
              href:
                '/docs/dashboard#42-regional-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '4.3 Management Dashboard',
              href:
                '/docs/dashboard#43-management-dashboard--national-user',
            },
            {
              type: 'link',
              label: '4.4 Executive Dashboard',
              href:
                '/docs/dashboard#44-executive-dashboard--administrator',
            },
          ],
        },

        {
          type: 'category',
          label: '5. Reports',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'reports',
          },
          items: [
            {
              type: 'link',
              label: '5.1 Ticket Log',
              href: '/docs/reports#51-ticket-log',
            },
            {
              type: 'link',
              label: '5.2 Incident Reports',
              href: '/docs/reports#52-incident-reports',
            },
            {
              type: 'link',
              label: '5.3 Technician Reports',
              href: '/docs/reports#53-technician-reports',
            },
            {
              type: 'link',
              label: '5.4 Facility Reports',
              href: '/docs/reports#54-facility-reports',
            },
            {
              type: 'link',
              label: '5.5 SLA Reports',
              href: '/docs/reports#55-sla-reports',
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Technical Documentation',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'security-architecture',
          label: '6. Security Architecture',
        },
        {
          type: 'doc',
          id: 'system-architecture-technical-design',
          label: '7. System Architecture & Technical Design',
        },
        {
          type: 'doc',
          id: 'api-specifications',
          label: '8. REST API Specifications',
        },
        {
          type: 'doc',
          id: 'integrations',
          label: '9. API / Integration Documentation',
        },
      ],
    },

    {
      type: 'category',
      label: 'Handover & Readiness',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'code-transfer-readiness',
          label: '10. Source Code Handover & Readiness',
        },
      ],
    },

    {
      type: 'category',
      label: 'Operations & Support',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'ticket-lifecycle-and-journey',
          label: '11.1 Ticket Lifecycle',
        },
        {
          type: 'doc',
          id: 'process-workflows',
          label: '11.2 Process Workflows',
        },
      ],
    },

    {
      type: 'category',
      label: 'Technical Reference',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'data-architecture',
          label: '12.1 Data Architecture',
        },
        {
          type: 'doc',
          id: 'deployment-and-testing',
          label: '12.2 Deployment & Testing',
        },
        {
          type: 'doc',
          id: 'acceptance-criteria-and-future',
          label: '12.3 Risk Matrix',
        },
        {
          type: 'doc',
          id: 'technical-appendix-and-glossary',
          label: '12.4 Technical Appendix & Glossary',
        },
      ],
    },
  ],
};

export default sidebars;
