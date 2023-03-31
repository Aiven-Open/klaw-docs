Request a new schema
====================

You can request a new schema to be created in Kafka quickly and easily using Klaw. If you own a topic, you will automatically become the schema owner. As the topic owner, you have the ability to create, approve, or decline any schema request.

Prerequisites
-------------
- The Superadmin must configure the environment within Klaw. See :doc:`Environments <../../concepts/clusters-environments>` for the steps to configure the environments.

Make a schema request
---------------------

1. Navigate to the **Topics** menu in Klaw and select the topic for which you want to request a schema.
2. Select the **Schemas** tab, and **Request Schema** button in the bottom right corner.
3. Select the schema environment in which you want the schema to be created.

  .. note::
   In most cases, you must start with the lowest environment and use the promotion feature for higher environments.

4. If not already selected, choose the topic on which the schema will be registered. Keep in mind that, as per the ``TopicNameStrategy``, the schema is created on the subject-value, where the subject is the topic name. 

  .. note::
   Registering schemas on subject-key is not possible in Klaw.  Klaw enforces ``TopicNameStrategy`` strategy, and it uses the topic name to determine the subject to be used for schema lookups. This strategy enforces following only one schema per topic.

5. Upload the schema (avro) that you wish to register on this subject. Make sure it is a valid JSON.
6. Add any remarks that will help the reviewer decide whether to approve or decline the request.
7. Submit the request. Klaw will validate the Schema against the Schema Registry and fail if it is not valid. A team member will review the request and approve or decline it based on the request made.



Schema Validation
-----------------
When making a Schema Request the Schema will be validated against the appropriate Schema Registry.

Failure messages returned by Klaw.
Schema is not compatible.
    This is returned when a Schema does not meet the Schema Compatibility set on the schema registry.
    Review your schema and see what is breaking the compatibility.

Unable to validate Schema Compatibility.
    This is returned when the Schema submitted is invalid and missing the correct Schema definition fields. It is also returned if the Schema Registry is unreachable or there is another error in communicating to the Schema Registry.
    Review your Schema and if it is correctly defined contact your administrator to resolve the issue with communicating with the Schema Registry.