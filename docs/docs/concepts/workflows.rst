Workflows
=========


Klaw has defined workflows to apply configuration on Kafka clusters. A concept of raising a request and approving it, instead of directly creating a configuration on the cluster.

- This adds an extra layer of security avoiding risk of manual entries.
- The requests are properly reviewed and verified by another pair of eyes, maintaining sanity of the application.
- Information is audited. Who is raising the request, when it has been created, and who approved and when. Helps in identifying problems during unexpected behaviour of system.
- By maintaining a history of applied changes, easy track back on the evolution of a configuration.


Workflows are administered by defining ownerships, roles, permissions and authorizations in Klaw. Below here are certain concepts of owners in Klaw.

.. glossary::

    Request and approval
      One of the biggest benefits of working with Klaw is that it adds governance to your Apache Kafka® landscape as it grows.  When a new topic, schema, ACL or connector is needed, developers **request** that item themselves.  Another member of the same team can then **approve** the request, and the item will be created.
        .. note::
            Only holders of the ``USER`` role can make requests; users with the ``SUPERADMIN`` role cannot make requests, but can manage users and teams. This is the default configuration.

    Topic Owner
      Kafka has topics, and in Klaw every topic has an owner which is a Team. So all the team members would be the owners of the topic. Any request which directly or indirectly changes its configuration is coming to this team for approval. They have the right to approve or deny. This team can be producers, consumers or both or none.
      Note that this team would be the owners of the topic (same name) in all environments. Only this team has the right to delete the topic.

    Subscription Owner
      To provide security on kafka topics, subscriptions(acls) are defined. And in Klaw, every team whoever would like to produce or consume from the topic would become the subscription owner. A team can raise a subscription request (producer/consumer) on a topic, and request is sent to Topic Owner team for approval. Only this team has the right to delete the subscription, view consumer offsets, topic contents, or subscription related credentials if applicable.

    Schema Owner
      Klaw can integrate with Karapace or Schema registry and define schemas on a topic. Currently topic owner team can raise a schema request, and they would become the owners of the schema and its evolution.

    Connectors Owner
      Klaw can integrate with Kafka Connect and define various types of connectors. Any team can request for a particular connector and they would become the owners of it.

Note that any request raised cannot be approved by the same user, rather it has to be a different user.