import React from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./styles.module.css";
import clsx from "clsx";

const dockerScript =
  "docker run -d -t -i \\\n" +
  '-e KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET="dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==" \\\n' +
  "-p 9343:9343 \\\n" +
  "--name klaw-cluster-api aivenoy/klaw-cluster-api:latest --add-host host.docker.internal:host-gateway \\\n" +
  "&& docker run -d -t -i \\\n" +
  '-e KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET="dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==" \\\n' +
  "-e KLAW_QUICKSTART_ENABLED=true \\\n" +
  '-e SPRING_DATASOURCE_URL="jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;" \\\n' +
  "-p 9097:9097 --name klaw-core aivenoy/klaw-core:latest \\\n" +
  "&& docker run -d -t -i -p 2181:2181 --add-host host.docker.internal:host-gateway \\\n" +
  "-e ALLOW_ANONYMOUS_LOGIN=yes --name klaw-zookeeper bitnami/zookeeper:3.8 \\\n" +
  "&& docker run -d -t -i -p 9092:9092 --add-host host.docker.internal:host-gateway \\\n" +
  "-e KAFKA_CFG_ZOOKEEPER_CONNECT=host.docker.internal:2181 -e ALLOW_PLAINTEXT_LISTENER=yes \\\n" +
  "-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://host.docker.internal:9092 \\\n" +
  "--name klaw-kafka bitnami/kafka:3.3 \\\n" +
  "&& docker run -d -t -i -p 8081:8081 --add-host host.docker.internal:host-gateway \\\n" +
  "-e SCHEMA_REGISTRY_KAFKA_BROKERS=PLAINTEXT://host.docker.internal:9092 \\\n" +
  "--name klaw-schema-registry bitnami/schema-registry:latest";
export default function QuickStartRow() {
  return (
    <div
      className={clsx(
        "container",
        "padding-top--lg",
        styles.quickStartContainer
      )}
    >
      <h2 id={"quickstart"}>
        Quick start: Get up and running with Klaw in no time!
      </h2>
      <div className={clsx("row", styles.quickStartRow)}>
        <div className={"col col--6"}>
          <div style={{ fontSize: "0.8em " }}>
            <CodeBlock language={"typescript"}>{dockerScript}</CodeBlock>
          </div>
        </div>
        <div className="col col--6" aria-hidden={true}>
          <img
            alt="Gif showing a users log in to Klaw, create and approve a topic."
            src={"/images/homepage/quickstart.gif"}
          />
        </div>
      </div>
      <p>
        Klaw will be running at{" "}
        <b>
          <a href={"http://localhost:9097"}>http://localhost:9097</a>
        </b>{" "}
        on your machine. Learn about other options and next steps in the{" "}
        <b>
          <a href={"/docs/quickstart"}>Quick start guides</a>
        </b>
        .
      </p>
    </div>
  );
}
