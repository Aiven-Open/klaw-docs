---
sidebar_position: 1.2
---

# Features of Klaw

Explore the comprehensive range of features Klaw offers to manage your Kafka ecosystem more efficiently.

| Feature                                                                                          | Description                                                                                                                                                          |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [_Topics creation_](HowTo/topics/Request-a-new-topic)                                            | Easily request and approve Kafka Topics for your applications.                                                                                                       |
| [_ACLs creation_](HowTo/subscriptions/Request-a-subscription)                                    | Manage access control by requesting and approving Producer and Consumer access to Kafka Topics.                                                                      |
| [_Schemas creation_](HowTo/schemas/Request-a-schema)                                             | Request and approve Avro schemas, compatible with Karapace and Confluent Schema Registry.                                                                            |
| [_Connectors creation_](HowTo/connectors/Request-a-new-connector)                                | Request and approve Kafka Connectors for streamlined data integration.                                                                                               |
| [_Promote topics, schemas, connectors_](HowTo/topics/Promote-a-topic)                            | Define a hierarchy of environments and effortlessly promote entities to higher environments.                                                                         |
| [_Topic naming conventions_](HowTo/environments)                                                 | Enforce naming conventions using prefixes, suffixes, or regex on topic names.                                                                                        |
| [_Schema evolution_](HowTo/schemas/manage-schemas)                                               | Manage multiple versions of schemas efficiently.                                                                                                                     |
| Reset consumer offsets                                                                           | Gain the ability to reset consumer offsets for specific consumer groups per topic.                                                                                   |
| View kafka events                                                                                | Easily view events on any Kafka topic for better monitoring and debugging.                                                                                           |
| View your own topics                                                                             | Access dashboard to see the topics for which your team has created ACLs, both as a producer and consumer.                                                            |
| View consumer lag                                                                                | Keep track of consumer offsets and view lags for a consumer group.                                                                                                   |
| [_Sync topics to a cluster_](HowTo/kafka-cluster-migration/sync-topics-to-cluster)               | Synchronize topics with any new or existing Kafka cluster seamlessly.                                                                                                |
| [_Sync topics from a cluster_](HowTo/kafka-cluster-migration/sync-topics-from-cluster)           | Synchronize topics from any Kafka cluster to Klaw.                                                                                                                   |
| [_Sync ACLs to a cluster_](HowTo/kafka-cluster-migration/sync-acls-to-cluster)                   | Ensure access control by synchronizing access control lists with new or existing Kafka clusters.                                                                     |
| [_Sync ACLs from a cluster_](HowTo/kafka-cluster-migration/sync-acls-from-cluster)               | Ensure the security of your Kafka topics by synchronizing access control lists from any Kafka cluster with Klaw.                                                     |
| [_Sync schemas to a cluster_](HowTo/kafka-cluster-migration/sync-schemas-to-cluster)             | Maintain consistency by synchronizing schemas, including all versions, to new or existing Schema Registry clusters.                                                  |
| [_Sync schemas from a cluster_](HowTo/kafka-cluster-migration/sync-schemas-from-cluster)         | Ensure schema consistency by synchronizing schemas from any Schema Registry cluster to Klaw.                                                                         |
| [_Sync connectors from a cluster_](HowTo/kafka-cluster-migration/sync-connectors-from-cluster)   | Efficiently manage connectors by syncing them from any Kafka Connect cluster to Klaw.                                                                                |
| [_Import / Export Klaw data_](HowTo/exportimport)                                                | Easily export Klaw metadata to JSON files and import it into another Klaw instance for data security and smooth transitions.                                         |
| Secured kafka topics                                                                             | Secure and protect Kafka topics, schemas, and access control lists with defined ownership and access control.                                                        |
| [_Controlled access to users_](HowTo/rolespermissions)                                           | Define granular roles and permissions, allowing users to view, request, and modify entities as needed.                                                               |
| [_Kafka connectivity PLAINTEXT/SSL/SASL_](HowTo/clusterconnectivity)                             | Connect Klaw to Kafka clusters using PLAINTEXT, SSL, or SASL mechanisms.                                                                                             |
| [_Email Notifications_](HowTo/notifications)                                                     | Stay informed with email notifications for every request, approval, and Kafka cluster change.                                                                        |
| [_Analytics / Reports_](HowTo/analytics)                                                         | Access and download reports on your requests, topics, consumer groups, and ACL ownership in Klaw. Data availability varies based on your role as USER or SUPERADMIN. |
| Audit history                                                                                    | Keep track of every request, approval, and change with a comprehensive audit history.                                                                                |
| [_Kafka flavor support_](HowTo/clusters)                                                         | Klaw is compatible with multiple Kafka flavors, including Apache Kafka, Aiven Kafka, Confluent Kafka, and Confluent Cloud Kafka.                                     |
| [_Klaw login AD/SSO/DB_](HowTo/authentication)                                                   | Users can log in to Klaw using Windows AD or SSO providers like Azure and Google.                                                                                    |

:::note
    Klaw is continuously evolving, and many other minor features are also available that are not listed above.
:::
