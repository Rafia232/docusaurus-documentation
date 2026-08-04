import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type DocCard = {
  title: string;
  description: string;
  to: string;
  meta: string;
};

const handoverDocs: DocCard[] = [
  {
    title: 'Installation Manual',
    description:
      'Windows Server with IIS, Linux with Docker and Portainer, Kafka, PostgreSQL, services, Nginx, and verification steps.',
    to: '/docs/installation-manual',
    meta: 'Deployment',
  },
  {
    title: 'Admin & Configuration Guide',
    description:
      'Categories, SLA rules, regions, lookups, team mapping, permissions, and user management configuration.',
    to: '/docs/admin-configuration-guide',
    meta: 'Administration',
  },
  {
    title: 'Role-Based User Guide',
    description:
      'Facility, Regional, National, and Administrator workflows for everyday support operations.',
    to: '/docs/role-based-user-guide',
    meta: 'Users',
  },
  {
    title: 'Reports',
    description:
      'Ticket dashboards, exports, monitoring views, SLA reporting, and reporting security expectations.',
    to: '/docs/reports',
    meta: 'Operations',
  },
  {
    title: 'Architecture / Technical Design',
    description:
      'Deployment architecture, CQRS/MediatR services, gateway routing, database ownership, Kafka events, and integrations.',
    to: '/docs/system-architecture-technical-design',
    meta: 'Technical',
  },
  {
    title: 'REST API Specifications',
    description:
      'Ticketing API and User API endpoint reference generated from the provided OpenAPI specifications.',
    to: '/docs/api-specifications',
    meta: 'API',
  },
  {
    title: 'API / Integration Documentation',
    description:
      'External integration notes for Kafka, mail, file access, API gateway routes, and optional integration points.',
    to: '/docs/integrations',
    meta: 'Integration',
  },
  {
    title: 'Code Transfer Readiness',
    description:
      'Transfer checklist for source handover, sanitized configuration, build verification, and ownership readiness.',
    to: '/docs/code-transfer-readiness',
    meta: 'Handover',
  },
];

const checkpoints = [
  'Public-safe deployment values only',
  'Windows IIS and Linux Portainer paths',
  'Role guides for Facility, Regional, National, Administrator',
  'Architecture, API, integration, and code-transfer coverage',
];

function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>MoH Helpdesk Documentation Portal</div>
        <Heading as="h1" className={styles.title}>
          Project handover, deployment, and operations knowledge base
        </Heading>
        <p className={styles.subtitle}>
          Access the full documentation package for installing, configuring,
          operating, integrating, and transferring the TeraSupport helpdesk
          platform.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/installation-manual">
            Open Installation Manual
          </Link>
          <Link className={styles.secondaryButton} to="/docs/intro">
            View Documentation Index
          </Link>
        </div>
      </div>

      <aside className={styles.signInInspiredPanel} aria-label="Documentation status">
        <div className={styles.panelTopline}>Welcome to</div>
        <Heading as="h2" className={styles.panelTitle}>
          MoH Helpdesk
        </Heading>
        <p className={styles.panelText}>
          A structured documentation dashboard for seamless support, deployment,
          and IT service management handover.
        </p>
        <div className={styles.panelMetricGrid}>
          <div>
            <strong>8</strong>
            <span>Core documents</span>
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
        <p>
          Start with installation for deployment work, or open the role,
          administration, architecture, API, and transfer guides directly.
        </p>
      </div>
      <div className={styles.docGrid}>
        {handoverDocs.map((doc, index) => (
          <Link className={styles.docCard} to={doc.to} key={doc.title}>
            <span className={styles.docNumber}>{String(index + 1).padStart(2, '0')}</span>
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
