import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type DocCard = {
  number: string;
  title: string;
  description: string;
  to: string;
  meta: string;
};

const handoverDocs: DocCard[] = [
  {
    number: '',
    title: 'Introduction',
    description:
      'Overview of the project, documentation scope, and the handover structure for the MoH Helpdesk platform.',
    to: '/docs/intro',
    meta: 'Overview',
  },
  {
    number: '1',
    title: 'Installation Manual',
    description:
      'Windows Server with IIS, Linux with Docker and Portainer, Kafka, PostgreSQL, services, NGINX, and verification steps.',
    to: '/docs/installation-manual',
    meta: 'Getting Started',
  },
  {
    number: '2',
    title: 'Local Run Guide',
    description:
      'Local setup instructions for running the application and its dependent services in a development environment.',
    to: '/docs/local-run-guide',
    meta: 'Getting Started',
  },
  {
    number: '3',
    title: 'Administration & Configuration Guide',
    description:
      'Organization setup, regions, locations, users, roles, permissions, email configuration, automation rules, categories, applications, and priorities.',
    to: '/docs/admin-configuration-guide',
    meta: 'Getting Started',
  },
  {
    number: '4',
    title: 'Role-Based User Guides',
    description:
      'Facility, Regional, National, and Administrator workflows for everyday support operations.',
    to: '/docs/role-based-user-guide',
    meta: 'User Operations',
  },
  {
    number: '5',
    title: 'Dashboards',
    description:
      'Four dashboards for ticket monitoring, service performance, and organization-wide oversight.',
    to: '/docs/dashboard',
    meta: 'User Operations',
  },
  {
    number: '6',
    title: 'Reports',
    description:
      'Ticket Log, Incident Reports, Technician Reports, Facility Reports, SLA monitoring, filters, and exports.',
    to: '/docs/reports',
    meta: 'User Operations',
  },
  {
    number: '7',
    title: 'Security Architecture',
    description:
      'Authentication, authorization, API gateway security, inter-service communication, event protection, audit integrity, and secure attachment access.',
    to: '/docs/security-architecture',
    meta: 'Technical',
  },
  {
    number: '8',
    title: 'System Architecture & Technical Design',
    description:
      'Deployment architecture, CQRS and MediatR services, gateway routing, database ownership, Kafka events, and application structure.',
    to: '/docs/system-architecture-technical-design',
    meta: 'Technical',
  },
  {
    number: '9',
    title: 'REST API Specifications',
    description:
      'Ticketing and user API endpoints, request parameters, response structures, authentication requirements, and error handling.',
    to: '/docs/api-specifications',
    meta: 'Technical',
  },
  {
    number: '10',
    title: 'API / Integration Documentation',
    description:
      'Integration details for Kafka, email, file access, API gateway routes, service communication, event exchange, and external services.',
    to: '/docs/integrations',
    meta: 'Technical',
  },
  {
    number: '11',
    title: 'Source Code Handover & Readiness',
    description:
      'Repository transfer, sanitized configuration, environment requirements, dependencies, build verification, and ownership readiness.',
    to: '/docs/code-transfer-readiness',
    meta: 'Handover',
  },
  {
    number: '12.1',
    title: 'Ticket Lifecycle',
    description:
      'The complete ticket journey from creation and assignment through investigation, customer response, resolution, closure, and reporting.',
    to: '/docs/ticket-lifecycle-and-journey',
    meta: 'Operations',
  },
  {
    number: '12.2',
    title: 'Process Workflows',
    description:
      'Operational workflows for ticket creation, assignment, reassignment, resolution, notifications, and support procedures.',
    to: '/docs/process-workflows',
    meta: 'Operations',
  },
  {
    number: '13.1',
    title: 'Data Architecture',
    description:
      'Platform data models, PostgreSQL databases, entity relationships, service ownership boundaries, storage, and data flow.',
    to: '/docs/data-architecture',
    meta: 'Reference',
  },
  {
    number: '13.2',
    title: 'Deployment & Testing',
    description:
      'Deployment topology, environments, testing approaches, validation activities, and release readiness.',
    to: '/docs/deployment-and-testing',
    meta: 'Reference',
  },
  {
    number: '13.3',
    title: 'Risk Matrix',
    description:
      'Operational and technical risks, impact levels, probability, and mitigation strategies.',
    to: '/docs/acceptance-criteria-and-future',
    meta: 'Reference',
  },
  {
    number: '13.4',
    title: 'Technical Appendix & Glossary',
    description:
      'Technical terminology, attachment formats, Kafka topics, and event payload schemas.',
    to: '/docs/technical-appendix-and-glossary',
    meta: 'Reference',
  },
];

const checkpoints = [
  'Public deployment values use placeholders and network restrictions',
  'Windows IIS and Linux Portainer paths',
  'Role guides for Facility, Regional, National, Administrator',
  'Architecture, API, integration, and code-transfer coverage',
];

function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          MoH Helpdesk Documentation Portal
        </div>

        <Heading as="h1" className={styles.title}>
          Project handover, deployment, and operations knowledge base
        </Heading>

        <p className={styles.subtitle}>
          Access the full documentation package for installing, configuring,
          operating, integrating, and transferring the MoH Helpdesk
          platform.
        </p>

        <div className={styles.heroActions}>
          <Link
            className={styles.primaryButton}
            to="/docs/installation-manual">
            Open Installation Manual
          </Link>

          <Link className={styles.secondaryButton} to="/docs/intro">
            View Documentation Index
          </Link>
        </div>
      </div>

      <aside
        className={styles.signInInspiredPanel}
        aria-label="Documentation status">
        <div className={styles.panelTopline}>Welcome to</div>

        <Heading as="h2" className={styles.panelTitle}>
          MoH Helpdesk
        </Heading>

        <p className={styles.panelText}>
          A structured documentation dashboard for seamless support,
          deployment, and IT service management handover.
        </p>

        <div className={styles.panelMetricGrid}>
          <div>
            <strong>18</strong>
            <span>Document pages</span>
          </div>

          <div>
            <strong>4</strong>
            <span>User roles</span>
          </div>

          <div>
            <strong>2</strong>
            <span>Deployment paths</span>
          </div>
        </div>
      </aside>
    </section>
  );
}

function HandoverCards() {
  return (
    <section className={styles.docsSection}>
      <div className={styles.sectionHeader}>
        <Heading as="h2">Handover Documents</Heading>
      </div>

      <div className={styles.docGrid}>
        {handoverDocs.map((doc) => (
          <Link className={styles.docCard} to={doc.to} key={doc.to}>
            <span className={styles.docNumber}>{doc.number}</span>
            <span className={styles.docMeta}>{doc.meta}</span>

            <Heading as="h3">{doc.title}</Heading>

            <p>{doc.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ReadinessPanel() {
  return (
    <section className={styles.readiness}>
      <div>
        <Heading as="h2">Ready For Review</Heading>

        <p>
          The portal is arranged for client handover review: deployment first,
          then administration, role operations, reports, architecture, APIs,
          integrations, and code transfer.
        </p>
      </div>

      <ul>
        {checkpoints.map((checkpoint) => (
          <li key={checkpoint}>{checkpoint}</li>
        ))}
      </ul>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="MoH Helpdesk Documentation Portal"
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <HomeHero />
        <HandoverCards />
        <ReadinessPanel />
      </main>
    </Layout>
  );
}
