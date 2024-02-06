# Connector management

Apache Kafka® Connect is a tool that allows scalable and reliable data streaming
between Apache Kafka and other systems. For more information, see [Apache Kafka
Connect](https://kafka.apache.org/documentation/#connect).

Apache Kafka connectors simplify the process of quickly defining connectors
that move large collections of data into and out of Apache Kafka. With Apache Kafka
Connect, it is possible to ingest entire databases or collect metrics
from all application servers into Apache Kafka topics, thus making the data
available for low-latency stream processing.

Apache Kafka Connect is a tool for scalable and reliable streaming data between
Apache Kafka and other systems. For more information, see [Apache Kafka
Connect](https://kafka.apache.org/documentation/#connect)

## Manage Apache Kafka Connect

Apache Kafka Connect provides a REST API for managing connectors, which is
available in both standalone and distributed modes.

## Manage connectors in Klaw

Klaw manages connectors through a designated **Team** that takes
ownership and management. The team initiates requests to create
connectors in the development environment and has the ability to promote
them to other environments, including production. The team that owns the
connector is responsible for making the final decision related to any
requests, such as approving or declining them.

- [Request a new connector](request-connector.md)
- [Approve a connector](approve-connector.md)
- [Manage connectors](manage-connectors.md)
- [My connector requests](my-connector-requests.md)
