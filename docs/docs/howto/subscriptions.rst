Subscriptions
=============

The default behaviour of a resource in kafka, is they are fully accessible by any kafka client, and it is important to govern them to avoid mis-usage of the resources.
A kafka client, be it producer or consumer can request for a permission and is allowed an operation (read/write) based on the request.

.. toctree::
   :maxdepth: 3
   :hidden:


    Request a subscription<subscriptions/Request-a-subscription>
    Approve a subscription<subscriptions/Approve-a-subscription>
    Delete a subscription<subscriptions/Delete-a-subscription>
    My Subscription Requests<subscriptions/My-subscription-requests>

Subscription management in Kafka
--------------------------------

Apache Kafka ships with a pluggable authorization framework. Kafka provides default implementations which store ACLs in the cluster metadata
For a deeper understanding of Acls, see `Kafka Authorization and ACLs <https://kafka.apache.org/documentation/#security_authz>`_

Topics allow the producers to create events that consumers can then read. Using Kafka, this is done in an incredibly fast, secure, and durable way. Due to the nature of Kafka, it also means that if a producer or consumer cannot operate for a period of time (maintenance, faults or other unexpected reasons), it is decoupled from the wider environment and does not impact the entire system.
A consumer can still read messages even if there is a backlog of events waiting to be processed, and a producer can still generate events even if the consumer is temporarily inactive. The consumer can easily resume the last processed message once it starts operating again.

This capability is incredibly powerful. However, it is essential to implement proper governance and security measures to ensure that the messages are correctly structured and the producers have the necessary rights to process sensitive information like PII. This is where Access Control Lists and Schema Registries come into play. They help secure the Kafka environment and ensure that data privacy and fidelity are maintained. The key to ensuring all these security measures are effective is properly assigning ownership of the topic, which serves as the central point for all the functionality in the Kafka ecosystem.


Subscription management in Klaw
-------------------------------

Klaw uses the concept of a **Team** for subscription ownership and management. A team creates the request to subscribe (produce or consumer) from a topic in an environment.
For any requests related to a subscription, the team that owns the topic is responsible for making the final decision, such as approving or declining a request either from same team or another team to produce/consume events from the topic.
