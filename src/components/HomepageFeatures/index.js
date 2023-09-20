import React from "react"
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Data governance",
        Svg: require("@site/static/images/homepage/gov.svg").default,
        description: (
            <p>
                Create, modify, subscribe and promote Apache Kafka® topics, schemas as
                well as manage users/acls via the web based UI.
            </p>
        ),
    },
    {
        title: "Security",
        Svg: require("@site/static/images/homepage/sec.svg").default,
        description: (
            <p>
                Fine grained permissions to access resources, combined with the
                &quot;Four Eyes&quot; approval principal ensure that your kafka cluster
                is protected from incorrect or malicious changes.
            </p>
        ),
    },
    {
        title: "User management",
        Svg: require("@site/static/images/homepage/users.svg").default,
        description: (
            <p>
                Easily authenticate and authorize users with assigned roles and teams.
                Ability to Integrate directly with AD/SSO/third party providers like
                Google/Microsoft.
            </p>
        ),
    },
];

const UseCases = [
    {
        title: "Make better decisions",
        Svg: require("@site/static/images/homepage/decision.svg").default,
        description: (
            <p>
                With the right governance in place, you can make consistent, confident
                business decisions based on the trustworthy metadata for all your Apache
                Kafka® environments.
            </p>
        ),
    },
    {
        title: "Enhanced regulatory compliance and audit",
        Svg: require("@site/static/images/homepage/audit.svg").default,
        description: (
            <p>
                Apache Kafka® moves critical data throughout your organizations. Using
                proper user management and policy with Klaw, you can avoid risks
                associated with noncompliance while proactively anticipating new
                requirements.
            </p>
        ),
    },
    {
        title: "Developer self-service",
        Svg: require("@site/static/images/homepage/self-service.svg").default,
        description: (
            <p>
                Klaw provides an intuitive and easy to use web UI to manage Apache Kafka
                topics and connectors, allowing developers to maintain velocity without
                needing to know kafka specific knowledge while conforming to an
                organizations governance standards.
            </p>
        ),
    },
];

const Support = [
    {
        title: "Kafka Flavors",
        Svg: require("@site/static/images/homepage/kafka.svg").default,
        description: (
            <ul className={styles.featuresList}>
                <li>Apache Kafka</li>
                <li>Aiven for Apache Kafka</li>
                <li>Confluent</li>
                <li>Confluent Cloud</li>
            </ul>
        ),
    },
    {
        title: "Authentication",
        Svg: require("@site/static/images/homepage/auth.svg").default,
        description: (
            <ul className={styles.featuresList}>
                <li>Windows Active directory</li>
                <li>Azure Active directory (AAD)</li>
                <li>Google</li>
                <li>Third party providers (ex: Github)</li>
                <li>Database</li>
            </ul>
        ),
    },
    {
        title: "Protocols",
        Svg: require("@site/static/images/homepage/protocols.svg").default,
        description: (
            <ul className={styles.featuresList}>
                <li>PLAINTEXT</li>
                <li>SSL</li>
                <li>SASL-PLAIN</li>
                <li>SASL-SSL/PLAIN</li>
                <li>SASL-SSL/GSSAPI/SCRAM</li>
            </ul>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg
                    className={styles.featureSvg}
                    role="img"
                    width="50%"
                    aria-hidden={true}
                    alt={`Icon ${title}`}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <>{description}</>
            </div>
        </div>
    );
}

Feature.propTypes = {
    Svg: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
};

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <center>
                    <h2 id={"keyfeatures"}>Key Features</h2>
                </center>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <br/>
                <center>
                    <h2>Use cases</h2>
                </center>
                <div className="row">
                    {UseCases.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <br/>
                <center>
                    <h2>Support</h2>
                </center>
                <div className="row">
                    {Support.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
