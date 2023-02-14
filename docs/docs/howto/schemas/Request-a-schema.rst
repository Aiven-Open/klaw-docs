Request a new Schema
====================

The process of requesting a new schema to be created in Kafka is simple and speedy.

The team that owns a topic will automatically become the schema owner too. Any schema request can be created/approved/declined by topic owner team.

Prerequisites
-------------
- The Superadmin must configure the environment within Klaw,  see :doc:`Environments <../../concepts/clusters-environments>` for the steps to configure the environments.

Make a request
--------------

1. In Klaw, from the Topics menu, select a topic, on which schema has to be requested for.
2. Click the Schemas tab, and **Request Schema** button would be available in the bottom right.
2. Select the environment. This is the Schema environment in which the schema will be created.

.. note::
   In most cases, you must start with the lowest environment and use the promotion feature for higher environments.

3. Select a topic if it's not selected already, on which schema would be registered. (as per TopicNameStrategy, schema is created on subject-value, where subject is topic name)

.. note::
   Registering schemas on subject-key is not possible in Klaw.  Klaw enforces TopicNameStrategy strategy, and it uses the topic name to determine the subject to be used for schema lookups. This strategy enforces to follow only one schema per topic.

3. Upload the schema (avro) you like to register on this subject. Make sure its a valid json.
4. Add any remarks, this will inform the reviewer whether they should approve or decline the request.
5. Submit the request and a team member will be able to review and approve or decline the request based on the request made.