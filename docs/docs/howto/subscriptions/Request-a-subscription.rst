Request a new Subscription
==========================

The process of requesting a new Subscription to be created in Kafka is simple and speedy.

The team that owns a topic will be the able to approve/decline subscription requests.

Prerequisites
-------------
- The Superadmin must configure the environment within Klaw,  see :doc:`Environments <../../concepts/clusters-environments>` for the steps to configure the environments.

Make a request
--------------

1. In Klaw, from the Topics menu, select a topic, on which subscription has to be requested for.
2. Click the subscribe button available in the bottom right.
3. Select the environment. This is the Kafka environment in which the topic is available for subscription to be created.
    -  Based on kafka flavor of the environment, fields are displayed.
    -  For Aiven for Apache Kafka environment, there are no consumer groups but Service account has to be mentioned.
4. Select Acl type : Producer (write access on the topic) / Consumer (read access on the topic)
5. Acl type : Producer
    - Select Pattern type LITERAL (on one topic) / PREFIXED (all topics prefixed with)
    - A transaction id (optional) can be provided, required for exactly-once semantics
6. Acl type : Consumer
    - A consumer group is mandatory
7. Select Acl IP (host based) or Principal based
    - IP : add one or more IP addresses (IPv4 / IPv6).
    - Principal : add one or more Principals (SSL DN strings or usernames).
8. Add any remarks, this will inform the reviewer whether they should approve or decline the request.
9. Submit the request and topic owner team member will be able to review and approve or decline the request based on the request made.