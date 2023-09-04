import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const dockerScript = "docker run -d -t -i \\\n" +
      "-e KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET=\"dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==\" \\\n" +
      "-p 9343:9343 \\\n" +
      "--name klaw-cluster-api aivenoy/klaw-cluster-api --add-host host.docker.internal:host-gateway \\\n" +
      "&& docker run -d -t -i \\\n" +
      "-e KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET=\"dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==\" \\\n" +
      "-e SPRING_DATASOURCE_URL=\"jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;\" \\\n" +
      "-p 9097:9097 --name klaw-core aivenoy/klaw-core \\\n" +
      "&& docker run -d -t -i -p 2181:2181 --add-host host.docker.internal:host-gateway \\\n" +
      "-e ALLOW_ANONYMOUS_LOGIN=yes --name klaw-zookeeper bitnami/zookeeper:3.8 \\\n" +
      "&& docker run -d -t -i -p 9092:9092 --add-host host.docker.internal:host-gateway \\\n" +
      "-e KAFKA_CFG_ZOOKEEPER_CONNECT=host.docker.internal:2181 -e ALLOW_PLAINTEXT_LISTENER=yes \\\n" +
      "-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://host.docker.internal:9092 \\\n" +
      "--name klaw-kafka bitnami/kafka:3.3 \\\n" +
      "&& docker run -d -t -i -p 8081:8081 --add-host host.docker.internal:host-gateway \\\n" +
      "-e SCHEMA_REGISTRY_KAFKA_BROKERS=PLAINTEXT://host.docker.internal:9092 \\\n" +
      "--name klaw-schema-registry bitnami/schema-registry:latest";

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <div className="row">
              <div className="col col--4">
                  <h1 className="hero__title">{siteConfig.title}</h1>
                  <p className="hero__subtitle">{siteConfig.tagline}</p>
                  <div className={styles.buttons}>
                      <Link
                          className="button button--secondary button--lg"
                          to="/docs/getstarted">
                          Get started
                      </Link>
                  </div>
              </div>
              <div className="col col--4">
                  <h2>Trying Klaw is as easy as ...</h2>
                  <div className={"row"}>
                      <div className="col col--10">
                          <textarea id={"dockerScriptId"} rows={10} cols={40} value={dockerScript}>
                            </textarea>
                      </div>
                      <div className="col col--2">
                          <button onClick={handleCopy}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                   stroke="#fff" strokeWidth={2} strokeLinecap={"round"} strokeLinejoin={"round"}><title>Copy
                                  quick start command to clipboard</title>
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
                  <br></br>
                  Klaw will be running at <b><a href={"http://localhost:9097"}>http://localhost:9097</a></b> on your machine.
                  Learn about other options and next steps in the <b><a href={"/docs/getstarted"}>Quick start guides</a></b>.
              </div>
              <div className="col col--4">
                    <img src={'/images/homepage/quickstart.gif'}/>
              </div>
          </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Apache Kafka Governance toolkit <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function handleCopy() {
    var copyText = document.getElementById("dockerScriptId")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
}

