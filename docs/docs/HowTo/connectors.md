# Connectors

Kafka Connect is a tool that allows scalable and reliable data streaming
between Apache Kafka and other systems. For more information, see [Kafka
Connect](https://kafka.apache.org/documentation/#connect).

Kafka connectors simplify the process of quickly defining connectors
that move large collections of data into and out of Kafka. With Kafka
Connect, it is possible to ingest entire databases or collect metrics
from all application servers into Kafka topics, thus making the data
available for low-latency stream processing.

Kafka Connect is a tool for scalably and reliably streaming data between
Apache Kafka and other systems. For more information, see [Kafka
Connect](https://kafka.apache.org/documentation/#connect)

::: {.toctree maxdepth="3" hidden=""}
Request a new Connector\<connectors/Request-a-new-connector\> Approve a
Connector\<connectors/Approve-a-connector\> My Connector
Requests\<connectors/My-connector-requests\> Manage
Connectors\<connectors/manage-connectors\>
:::

## Manage Kafka Connect

Kafka Connect provides a REST API for managing connectors, which is
available in both standalone and distributed modes.

## Manage connectors in Klaw

Klaw manages connectors through a designated **Team** that takes
ownership and management. The team initiates requests to create
connectors in the development environment and has the ability to promote
them to other environments, including production. The team that owns the
connector is responsible for making the final decision related to any
requests, such as approving or declining them.

-   `connectors/Request-a-new-connector`
-   `connectors/Approve-a-connector`
-   `connectors/My-connector-requests`
-   `connectors/manage-connectors`