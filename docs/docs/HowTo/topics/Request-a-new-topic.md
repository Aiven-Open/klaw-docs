# Request a new Topic

The process of requesting a new topic to be created in Kafka is simple
and speedy.

The team that requests a topic will automatically become the topic owner
and can approve or deny any Kafka Connector, Schemas, or Access Control
List requests made against the topic.

## Prerequisites

-   The Superadmin must configure the environment within Klaw, see
    `Environments <../../concepts/clusters-environments>`{.interpreted-text
    role="doc"} for the steps to configure the environments.
-   The Superadmin must also update the Server Config to include the
    environments, see
    `Configure Klaw <../installation/configure-klaw-wizard>`{.interpreted-text
    role="doc"} for the steps to configure the server settings.

## Make a request

1.  In Klaw, select **Requests** on the navigation bar, and then select
    **Request Topic** in the drop-down.
2.  Select the environment. This is the Kafka environment in which the
    topic will be created.

::: note
::: title
Note
:::

In most cases, you must start with the lowest environment and use the
promotion feature for higher environments.
:::

3.  Enter the name of your topic based on your organization\'s naming
    conventions, or Klaw will enforce a minimum 5-character name.
4.  Select the number of Topic Partitions you would like for your topic.
    To learn more, see
    [partitions](https://kafka.apache.org/intro#intro_concepts_and_terms).
5.  Select the Replication factor. This is the number of times each
    event is written to a broker. To learn more, see
    [replication](https://kafka.apache.org/intro#intro_concepts_and_terms).
6.  Add any advanced topic configuration settings. To learn more, see
    Kafka\'s [Topic configuration
    guide](https://kafka.apache.org/documentation/#topicconfigs).
7.  Add a topic description. This information will stay with the topic
    for the duration of its lifecycle.
8.  Add any remarks, this will inform the reviewer whether they should
    approve or decline the request.
9.  Submit the request and a team member will be able to review and
    approve or decline the request based on the request made.
