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
          id: 'local-run-guide',
          label: '2. Local Run Guide',
        },
        {
          type: 'doc',
          id: 'admin-configuration-guide',
          label: '3. Administration & Configuration Guide',
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
          label: '4. Role-Based User Guides',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'role-based-user-guide',
          },
          items: [
            {
              type: 'link',
              label: '4.1 Facility User',
              href: '/docs/role-based-user-guide#41-facility-user',
            },
            {
              type: 'link',
              label: '4.2 Regional User',
              href: '/docs/role-based-user-guide#42-regional-user',
            },
            {
              type: 'link',
              label: '4.3 National User',
              href: '/docs/role-based-user-guide#43-national-user',
            },
            {
              type: 'link',
              label: '4.4 Management',
              href: '/docs/role-based-user-guide#44-management-user',
            },
            {
              type: 'link',
              label: '4.5 Administrator',
              href: '/docs/role-based-user-guide#45-administrator',
            },
          ],
        },

        {
          type: 'category',
          label: '5. Dashboards',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'dashboard',
          },
          items: [
            {
              type: 'link',
              label: '5.1 Technician Dashboard',
              href:
                '/docs/dashboard#51-technician-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '5.2 Regional Dashboard',
              href:
                '/docs/dashboard#52-regional-dashboard--regional-user',
            },
            {
              type: 'link',
              label: '5.3 Management Dashboard',
              href:
                '/docs/dashboard#53-management-dashboard--administrator',
            },
            {
              type: 'link',
              label: '5.4 Executive Dashboard',
              href:
                '/docs/dashboard#54-executive-dashboard',
            },
          ],
        },

        {
          type: 'category',
          label: '6. Reports',
          collapsed: true,
          link: {
            type: 'doc',
            id: 'reports',
          },
          items: [
            {
              type: 'link',
              label: '6.1 Ticket Log',
              href: '/docs/reports#61-ticket-log',
            },
            {
              type: 'link',
              label: '6.2 Incident Reports',
              href: '/docs/reports#62-incident-reports',
            },
            {
              type: 'link',
              label: '6.3 Technician Reports',
              href: '/docs/reports#63-technician-reports',
            },
            {
              type: 'link',
              label: '6.4 Facility Reports',
              href: '/docs/reports#64-facility-reports',
            },
            {
              type: 'link',
              label: '6.5 SLA Reports',
              href: '/docs/reports#65-sla-reports',
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
          label: '7. Security Architecture',
        },
        {
          type: 'doc',
          id: 'system-architecture-technical-design',
          label: '8. System Architecture & Technical Design',
        },
        {
          type: 'doc',
          id: 'api-specifications',
          label: '9. REST API Specifications',
        },
        {
          type: 'doc',
          id: 'integrations',
          label: '10. API / Integration Documentation',
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
          label: '11. Source Code Handover & Readiness',
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
          label: '12.1 Ticket Lifecycle',
        },
        {
          type: 'doc',
          id: 'process-workflows',
          label: '12.2 Process Workflows',
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
          label: '13.1 Data Architecture',
        },
        {
          type: 'doc',
          id: 'deployment-and-testing',
          label: '13.2 Deployment & Testing',
        },
        {
          type: 'doc',
          id: 'acceptance-criteria-and-future',
          label: '13.3 Risk Matrix',
        },
        {
          type: 'doc',
          id: 'technical-appendix-and-glossary',
          label: '13.4 Technical Appendix & Glossary',
        },
      ],
    },
  ],
};

export default sidebars;
