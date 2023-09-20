---
sidebar_position: 1.3
---

# Features

Below mentioned are the key features in Klaw.

| Feature                                                                                        | Description                                                                                               |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| [_Topics Creation_](HowTo/topics/Request-a-new-topic)                                          | Request/Approve Kafka Topics                                                                              |
| [_Acls Creation_](HowTo/subscriptions/Request-a-subscription)                                  | Request/Approve Producer and Consumer access on Kafka Topics                                              |
| [_Schemas Creation_](HowTo/schemas/Request-a-schema)                                           | Request/Approve Avro schemas (Karapace, Confluent Schema registry compatible)                             |
| [_Connectors Creation_](HowTo/connectors-Request-a-new-connector)                              | Request/Approve Kafka Connectors                                                                          |
| [_Promote topics, schemas, connectors_](HowTo/topics/Promote-a-topic)                          | Define hierarchy of environments and able to promote to higher environments                               |
| [_Topic naming conventions_](HowTo/environments)                                               | Enforce prefix/suffix/regex on topic names                                                                |
| Reset Consumer Offsets                                                                         | Ability to reset consumer offsets of a consumer group per topic                                           |
| [_Schema Evolution_](HowTo/schemas/manage-schemas)                                             | Manage multiple versions of schemas                                                                       |
| View kafka events                                                                              | Ability to view events on a kafka topic                                                                   |
| View your own Topics                                                                           | View topics your applications are producing to and consuming from                                         |
| View consumer lag                                                                              | View lags on consumer offsets for a consumer group                                                        |
| [_Sync Topics to a cluster_](HowTo/kafka-cluster-migration/sync-topics-to-cluster)             | Synchronize topics to any new or existing kafka cluster                                                   |
| [_Sync Topics from a cluster_](HowTo/kafka-cluster-migration/sync-topics-from-cluster)         | Synchronize topics from any kafka cluster to Klaw                                                         |
| [_Sync Acls to a cluster_](HowTo/kafka-cluster-migration/sync-acls-to-cluster)                 | Synchronize acls to any new or existing kafka cluster                                                     |
| [_Sync Acls from a cluster_](HowTo/kafka-cluster-migration/sync-acls-from-cluster)             | Synchronize acls from any kafka cluster to Klaw                                                           |
| [_Sync Schemas to a cluster_](HowTo/kafka-cluster-migration/sync-schemas-to-cluster)           | Synchronize schemas including all versions to any new or existing SR cluster                              |
| [_Sync Schemas from a cluster_](HowTo/kafka-cluster-migration/sync-schemas-from-cluster)       | Synchronize schemas from any SR cluster to Klaw                                                           |
| [_Sync Connectors to a cluster_](HowTo/kafka-cluster-migration/sync-connectors-to-cluster)     | Synchronize Connectors to any new or existing Kafka connect cluster                                       |
| [_Sync Connectors from a cluster_](HowTo/kafka-cluster-migration/sync-connectors-from-cluster) | Synchronize Connectors from any Kafka connect cluster to Klaw                                             |
| [_Import / Export Klaw data_](HowTo/exportimport)                                              | Ability to export all the klaw metadata to json files and import to another Klaw instance                 | 
| [_Klaw login AD/SSO/DB_](HowTo/authentication)                                                 | Users can login to Klaw with Windows AD or SSO providers like Azure/Google..                              |
| Secured kafka topics                                                                           | With defined ownership on topics, schemas and acls, topics are secured and protected from unwanted access |
| [_Controlled access to users_](HowTo/rolespermissions)                                         | With defined roles and permissions at granular level, users are allowed to view/request/change entities   |
| [_Kafka connectivity PLAINTEXT/SSL/SASL_](HowTo/clusterconnectivity)                           | Klaw can connect kafka clusters over PLAINTEXT/SSL or SASL mechanisms                                     |
| [_Email Notifications_](HowTo/notifications)                                                   | Notify users on every request and approval and kafka cluster changes                                      |
| [_Analytics / Reports_](HowTo/analytics)                                                       | View/download report of your own set of topics, number of partitions, acls requests and more              |
| Audit history                                                                                  | Every request, approval and change is audited to keep track of changes                                    |
| [_Kafka flavor support_](HowTo/clusters)                                                       | Klaw supports Apache Kafka, Aiven Kafka, Confluent Kafka, Confluent Cloud Kafka                           | 

Many other minor features exist in Klaw which are not mentioned above.