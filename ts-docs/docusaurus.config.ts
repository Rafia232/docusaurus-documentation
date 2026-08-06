import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MoH Service Desk',
  tagline: 'Centralized Support & Ticket Management Platform',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://moh-helpdesk-docs.example.org',
  baseUrl: '/',

  organizationName: 'moh',
  projectName: 'moh-helpdesk-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: 'MoH Service Desk',
      logo: {
        alt: 'MoH Service Desk Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Installation Manual',
              to: '/docs/installation-manual',
            },
            {
              label: 'Admin & Configuration',
              to: '/docs/admin-configuration-guide',
            },
            {
              label: 'Role-Based User Guide',
              to: '/docs/role-based-user-guide',
            },
            {
              label: 'Reports',
              to: '/docs/reports',
            },
          ],
        },
        {
          title: 'Technical Reference',
          items: [
            {
              label: 'Architecture / Technical Design',
              to: '/docs/system-architecture-technical-design',
            },
            {
              label: 'REST API Specifications',
              to: '/docs/api-specifications',
            },
            {
              label: 'API / Integration Documentation',
              to: '/docs/integrations',
            },
            {
              label: 'Data Architecture',
              to: '/docs/data-architecture',
            },
          ],
        },
        {
          title: 'Operations & Handover',
          items: [
            {
              label: 'Ticket Lifecycle',
              to: '/docs/ticket-lifecycle-and-journey',
            },
            {
              label: 'Process Workflows',
              to: '/docs/process-workflows',
            },
            {
              label: 'Deployment & Testing',
              to: '/docs/deployment-and-testing',
            },
            {
              label: 'Code Transfer Readiness',
              to: '/docs/code-transfer-readiness',
            },
          ],
        },
      ],
      copyright: '©️ 2026 Ministry of Health (MoH), Eswatini',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
