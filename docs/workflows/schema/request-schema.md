# Request a new schema

You can request a new schema to be created in Apache Kafka® quickly and easily
using Klaw. If you own a topic, you will automatically become the schema
owner. As the topic owner, you have the ability to create, approve, or
decline any schema request.

## Prerequisites

- The Superadmin must configure the environment within Klaw. See
  [Environments](../../cluster-management/clusters-environments/index.md) for the steps to configure the environments.

## Make a schema request

1. Navigate to the **Topics** menu in Klaw and select the topic for
   which you want to request a schema.
2. Select the **Schemas** tab, and **Request Schema** button in the
   bottom right corner.
3. Select the schema environment in which you want the schema to be
   created.

   :::note
   In most cases, you must start with the lowest environment and use the
   promotion feature for higher environments.
   :::

4. If not already selected, choose the topic on which the schema will
   be registered. Keep in mind that, as per the `TopicNameStrategy`,
   the schema is created on the subject-value, where the subject is the
   topic name.

   :::note
   Registering schemas on subject-key is not possible in Klaw. Klaw enforces `TopicNameStrategy` strategy, and it uses
   the topic name to determine the subject to be used for schema lookups. This strategy enforces following only one
   schema per topic.
   :::

5. Upload the schema (Avro) that you wish to register on this subject.
   Make sure it is a valid JSON.
6. Add any remarks that will help the reviewer decide whether to
   approve or decline the request.
7. Submit the request. Klaw will validate the schema against the schema
   registry and fail if it is not valid. A team member will review the
   request and approve or decline it based on the request made.

Once approved, all producers and consumers linked to this topic in the environment will receive a notification regarding a schema change.

## Schema validation

When you submit a schema request, the schema will be checked for
validation against the schema registry.

In case of errors, Klaw provides the following failure messages:

- **Schema is not compatible**: This message indicates that the submitted
  schema fails to comply with the schema compatibility set on the schema
  registry. To fix this issue, review the schema to see what is causing
  the compatibility problem.

- **Unable to validate Schema
  Compatibility**: It indicates that the submitted schema may be invalid
  or missing the required schema definition fields. It could also occur if
  there is a problem with communication to the schema registry, such as if
  it is not reachable. To fix this issue, review your schema to ensure it
  is correctly defined. If it is, contact your administrator to resolve
  the issue with communication to the schema registry.
