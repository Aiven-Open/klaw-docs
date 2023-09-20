---
sidebar_position: 1.3
---

# Features

Below mentioned are the key features in Klaw.

| Feature                               | Description                                                                                               |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Topics Creation                       | Request/Approve Kafka Topics                                                                              |
| Acls Creation                         | Request/Approve Producer and Consumer access on Kafka Topics                                              |
| Schemas Creation                      | Request/Approve Avro schemas (Karapace, Confluent Schema registry compatible)                             |
| Connectors Creation                   | Request/Approve Kafka Connectors                                                                          |
| Promote topics, schemas, connectors   | Define hierarchy of environments and able to promote to higher environments                               |
| Topic naming conventions              | Enforce prefix/suffix/regex on topic names                                                                |
| Reset Consumer Offsets                | Ability to reset consumer offsets of a consumer group per topic                                           |
| Schema Evolution                      | Manage multiple versions of schemas                                                                       |
| View kafka events                     | Ability to view events on a kafka topic                                                                   |
| View your own Topics                  | View topics your applications are producing to and consuming from                                         |
| View consumer lag                     | View lags on consumer offsets for a consumer group                                                        |
| Sync Topics to a cluster              | Synchronize topics to any new or existing kafka cluster                                                   |
| Sync Topics from a cluster            | Synchronize topics from any kafka cluster to Klaw                                                         |
| Sync Acls to a cluster                | Synchronize acls to any new or existing kafka cluster                                                     |
| Sync Acls from a cluster              | Synchronize acls from any kafka cluster to Klaw                                                           |
| Sync Schemas to a cluster             | Synchronize schemas including all versions to any new or existing SR cluster                              |
| Sync Schemas from a cluster           | Synchronize schemas from any SR cluster to Klaw                                                           |
| Sync Connectors to a cluster          | Synchronize Connectors to any new or existing Kafka connect cluster                                       |
| Sync Connectors from a cluster        | Synchronize Connectors from any Kafka connect cluster to Klaw                                             |
| Import / Export Klaw data             | Ability to export all the klaw metadata to json files and import to another Klaw instance                 | 
| Klaw login AD/SSO/DB                  | Users can login to Klaw with Windows AD or SSO providers like Azure/Google..                              |
| Secured kafka topics                  | With defined ownership on topics, schemas and acls, topics are secured and protected from unwanted access |
| Controlled access to users            | With defined roles and permissions at granular level, users are allowed to view/request/change entities   |
| Kafka connectivity PLAINTEXT/SSL/SASL | Klaw can connect kafka clusters over PLAINTEXT/SSL or SASL mechanisms                                     |
| Email Notifications                   | Notify users on every request and approval and kafka cluster changes                                      |
| Analytics / Reports                   | View/download report of your own set of topics, number of partitions, acls requests and more              |
| Audit history                         | Every request, approval and change is audited to keep track of changes                                    |
| Kafka flavor support                  | Klaw supports Apache Kafka, Aiven Kafka, Confluent Kafka, Confluent Cloud Kafka                           | 

Many other minor features exist in Klaw which are not mentioned above.