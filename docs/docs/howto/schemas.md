# Schemas

Defining a schema for events sent to a Kafka topic is essential to
provide clarity to both producers and consumers regarding the contents
of each event. This schema outlines the structure of the data format,
which could be in various formats, including JSON, Avro, or Protobuf. A
defined schema ensures smooth communication between producers and
consumers.

::: {.toctree maxdepth="3" hidden=""}
Request a schema\<schemas/Request-a-schema\> Promote a
schema\<schemas/Promote-a-schema\> Approve a
schema\<schemas/Approve-a-schema\> My Schema
Requests\<schemas/My-schema-requests\>
:::

## Manage schema

Aiven\'s Karapace and Confluent\'s Schema Registry are two highly
popular products that enable the management of schemas outside of a
Kafka cluster. For more infomation, see [Aiven
Karapace](https://karapace.io) and [Confluent Schema
registry](https://docs.confluent.io/platform/current/schema-registry/index.html).

## Manage schema in Klaw

Schema management in Klaw is structured around the following:

-   Klaw uses the concept of a **Team** for schema ownership and
    management, where the topic owner team requests a schema for a
    specific topic
-   The team that owns the topic is responsible for making the final
    decision on any schema-related requests, such as approving or
    declining the request.
-   For any requests related to a schema, the team that owns the topic
    is responsible for making the final decision, such as approving or
    declining the request.
-   Klaw enforces the `TopicNameStrategy` strategy to ensure only one
    schema is applied per topic, which uses the topic name to identify
    the schema subject used for schema lookups.
-   Klaw supports Aiven\'s Karapace and Confluent Schema registry.
-   `schemas/Request-a-schema`{.interpreted-text role="doc"}
-   `schemas/Promote-a-schema`{.interpreted-text role="doc"}
-   `schemas/Approve-a-schema`{.interpreted-text role="doc"}
-   `schemas/My-schema-requests`{.interpreted-text role="doc"}
