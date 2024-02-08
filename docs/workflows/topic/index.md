# Topics

Topics are a fundamental part of the Apache Kafka® ecosystem, and the management
of topics is one of the core and richest features available in Klaw.

## Topics in Apache Kafka

Apache Kafka uses topics as a core concept, as a grouping mechanism to organize
and store messages or events. For a deeper understanding of topics, see
[Apache Kafka Main Concepts and
Terminology](https://kafka.apache.org/intro#intro_concepts_and_terms)

## Manage topics in Apache Kafka

Topics allow the producers to create events that consumers can then
read. Using Apache Kafka, this is done in an incredibly fast, secure, and
durable way. Due to the nature of Apache Kafka, it also means that if a
producer or consumer cannot operate for a period of time (maintenance,
faults, or other unexpected reasons), it is decoupled from the wider
environment and does not impact the entire system. A consumer can still
read messages even if there is a backlog of events waiting to be
processed, and a producer can still generate events even if the consumer
is temporarily inactive. The consumer can easily resume the last
processed message once it starts operating again.

This capability is incredibly powerful. However, it is essential to
implement proper governance and security measures to ensure that the
messages are correctly structured and the producers have the necessary
rights to process sensitive information like PII. This is where Access
Control Lists and schema registries come into play. They help secure the
Apache Kafka environment and ensure that data privacy and fidelity are
maintained. The key to ensuring all these security measures are
effective is properly assigning ownership of the topic, which serves as
the central point for all the functionality in the Apache Kafka ecosystem.

## Manage topics in Klaw

Klaw uses the concept of a **Team** for topic ownership and management.
The team creates the request to create a topic in the development
environment and has the ability to promote it to other environments,
including production. For any requests related to a topic, the team that
owns the topic is responsible for making the final decision, such as
approving or declining a request from another team to consume events
from the topic. Similarly, if the team wants to enforce a schema on the
topic, the team submits a request, and another team member reviews and
approves or declines it.

- [Topic overview](topic-overview.md)
- [Request a new topic](request-topic.md)
- [Claim a topic](claim-topic.md)
- [Edit a topic](edit-topic.md)
- [Promote a topic](promote-topic.md)
- [Delete a topic](delete-topic.md)
- [Mange topic requests](manage-topic-requests.md)
- [My topic requests](my-topic-requests.md)
