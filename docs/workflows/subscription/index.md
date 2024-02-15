# Subscriptions

Subscriptions in Apache Kafka® refer to the ability of a producer to create
events that consumers can read. By default, any Apache Kafka client, be it a
producer or consumer, can fully access the resources. However, it is
crucial to govern subscriptions to prevent misuse. Apache Kafka clients can
request permission to perform operations, such as read or write, and
access will be granted based on the request.

## Manage subscriptions in Apache Kafka

Apache Kafka ships with a pluggable authorization framework. Apache Kafka
provides default implementations that store ACLs in the cluster
metadata For a deeper understanding of ACLs, see [Apache Kafka authorization
and ACLs](https://kafka.apache.org/documentation/#security_authz)

Topics allow the producers to create events that consumers can read
quickly, securely, and durable manner. Furthermore, Apache Kafka is designed so
that if a producer or consumer becomes inactive due to maintenance,
faults, or other unexpected issues, it stays decoupled from the wider
environment and doesn't disrupt the entire system. A consumer can
continue to read messages even if there is a backlog of events waiting
to be processed. A producer can continue to generate events even if the
consumer is temporarily inactive. When the consumer becomes active
again, it can quickly resume processing from where it left off.

The ability to produce and consume events with Apache Kafka is a powerful
capability. However, having the proper governance and security measures
in place is essential to ensure that messages are correctly structured,
and producers have the necessary permissions to handle sensitive
information such as PII. Access Control Lists and schema registries are
crucial in securing the Apache Kafka environment and maintaining data privacy
and fidelity. The key to ensuring all these security measures are
effective is properly assigning ownership of the topic, which serves as
the central point for all the functionality in the Apache Kafka ecosystem.

## Manage subscriptions in Klaw

Klaw uses the concept of a **Team** for subscription ownership and
management. A team creates the request to subscribe (produce or
consumer) from a topic in an environment. For any requests related to a
subscription, the team that owns the topic is responsible for making the
final decision, such as approving or declining a request from the same
team or another team to produce/consume events from the topic.

- [Request a new subscription](request-subscription.md)
- [Manage subscription requests](manage-subscription-requests.md)
- [Delete a subscription](delete-subscription.md)
- [My subscription requests](my-subscription-requests.md)
