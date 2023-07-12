import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data governance',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Create, modify, subscribe and promote Apache Kafka® topics, schemas as well as manage users/acls via the web based UI.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Fine grained permissions to access resources, combined with the "Four Eyes" approval principal ensure that your kafka cluster is protected from incorrect or malicious changes.
      </>
    ),
  },
  {
    title: 'User management',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Easily authenticate and authorize users with assigned roles and teams. Ability to Integrate directly with AD/SSO/third party providers like Google/Microsoft.
      </>
    ),
  },
];

const UseCases = [
    {
        title: 'Make better decisions',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                With the right governance in place, you can make consistent, confident business decisions based on the trustworthy metadata for all your Apache Kafka® environments.
            </>
        ),
    },
    {
        title: 'Enhanced regulatory compliance and audit',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Apache Kafka® moves critical data throughout your organizations. Using proper user management and policy with Klaw, you can avoid risks associated with noncompliance while proactively anticipating new requirements.
            </>
        ),
    },
    {
        title: 'Developer self-service',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Klaw provides an intuitive and easy to use web UI to manage Apache Kafka topics and connectors, allowing developers to maintain velocity without needing to know kafka specific knowledge while conforming to an organizations governance standards.
            </>
        ),
    },
];

const Support = [
    {
        title: 'Kafka Flavors',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                <ul>
                    Apache Kafka
                </ul>
                <ul>
                    Aiven for Apache Kafka
                </ul>
                <ul>
                    Confluent
                </ul>
                <ul>
                    Confluent Cloud
                </ul>
            </>
        ),
    },
    {
        title: 'Protocols',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                <ul>
                        PLAINTEXT
                </ul>
                <ul>
                    SSL
                </ul>
                <ul>
                    SASL-PLAIN
                </ul>
                <ul>
                    SASL-SSL/PLAIN
                </ul>
                <ul>
                    SASL-SSL/GSSAPI
                </ul>
                <ul>
                    SASL-SSL/SCRAM
                </ul>
            </>
        ),
    },
    {
        title: 'Authentication',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
             <ul>
                 Windows Active directory
             </ul>
             <ul>
                 Azure Active directory (AAD)
             </ul>
             <ul>
                 Google
             </ul>
             <ul>
                 Third party providers (ex: Github)
             </ul>
             <ul>
                 Database
             </ul>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <center><h2>Key Features</h2></center>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <center><h2>Use cases</h2></center>
        <div className="row">
            {UseCases.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </div>
        <center><h2>Support</h2></center>
        <div className="row">
            {Support.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </div>
      </div>
    </section>
  );
}
