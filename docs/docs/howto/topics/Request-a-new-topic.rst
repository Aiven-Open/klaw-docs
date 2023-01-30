Reuest A New Topic
==================

Request a new topic to be created in Kafka is a simple and speedy process.

The team that requests a topic will automatically become the owner of that topic and have the ability to approve or deny any Kafka Connector, Schemas or Access Control List requests which are made against the topic.

Prerequisetes
-----------------------------------------
The Superadmin must configure the environment within klaw see :doc:`clusters-environments` for the steps to configure the environments.
The Superadmin must also update the Server Config to include the environments see :doc:`configure-klaw-wizard` for the steps to configure the server settings..


Making A Request
-----------------------------------------

1. On the navigation bar select 'My Requests' and in the drop down select 'Request Topic'
2. Select the environment, this is the kafka environment to which the topic will be created in.
  a) In most cases you will want to start with the lowest environment and use the promotion feature to higher environments.
3. Name your topic, if your organization has naming conventions follow them otherwise Klaw will just enforce a minimum 5 character name.
4. Select the number of Topic Partitions you would like for your topic. Learn more about `partitions <https://kafka.apache.org/intro#intro_concepts_and_terms>`_
5. Select the Replication factor, this is the number of times each event is written to a broker. Learn more about `replication <https://kafka.apache.org/intro#intro_concepts_and_terms>`_
6. Add any advanced topic configuration settings. See Kafka's `Topic configuration guide <https://kafka.apache.org/documentation/#topicconfigs>`_ for more information.
7. Add a topic description this will be information that will stay with the topic for the duration of its lifecycle.
8. Add any remarks, this will inform the reviewer as to whether they should approve or decline the request.
9. Submit the Request and a team member will be able to review and approve or decline the request based on the request made.