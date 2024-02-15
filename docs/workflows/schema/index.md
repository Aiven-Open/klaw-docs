# Schemas

Defining a schema for events sent to an Apache Kafka® topic is essential to
provide clarity to both producers and consumers regarding the contents
of each event. This schema outlines the structure of the data format,
which could be in various formats, including JSON, Avro, or Protobuf. A
defined schema ensures smooth communication between producers and
consumers.

## Manage schema

Aiven's Karapace and Confluent's schema registry are two highly
popular products that enable the management of schemas outside a
Apache Kafka cluster. For more information, see [Aiven
Karapace](https://karapace.io) and [Confluent schema
registry](https://docs.confluent.io/platform/current/schema-registry/index.html).

## Manage schema in Klaw

Schema management in Klaw is structured around the following:

- Klaw uses the concept of a **Team** for schema ownership and
  management, where the topic owner team requests a schema for a
  specific topic
- The team that owns the topic is responsible for making the final
  decision on any schema-related requests, such as approving or
  declining the request.
- For any requests related to a schema, the team that owns the topic
  is responsible for making the final decision, such as approving or
  declining the request.
- Klaw enforces the `TopicNameStrategy` strategy to ensure only one
  schema is applied per topic, which uses the topic name to identify
  the schema subject used for schema lookups.
- Klaw supports Aiven's Karapace and Confluent schema registry.

## Learn how to

- [Request a new schema](request-schema.md)
- [Promote a schema](promote-schema.md)
- [Manage schema requests](manage-schema-requests.md)
- [My schema requests](my-schema-requests.md)
