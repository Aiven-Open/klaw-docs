# Request a new connector

You can request a new connector to be created in Kafka quickly and
easily using Klaw. The team that requests the connector automatically
becomes the connector owner, with the ability to approve or deny any
Kafka Connector.

## Prerequisites

-   The Superadmin must configure the environment within Klaw. See
    `Environments <../../concepts/clusters-environments>`{.interpreted-text
    role="doc"} for the steps to configure the environments.

## Make a connector request

1.  From the navigation bar in Klaw, select **Requests** and then click
    on **Request Connector** from the drop-down menu
2.  In the **Connect create request** screen, select the Kafka Connect
    environment where the connector will be created.

::: note
::: title
Note
:::

In most cases, you must start with the lowest environment and use the
promotion feature for higher environments.
:::

3.  Enter a name for the connector based on your organization's naming
    conventions. Ensure that the name is at least 5 characters long to
    comply with Klaw's minimum requirements.
4.  Add the connector configuration in valid JSON format in the
    configuration field.
5.  Add a description for the connector, which will be associated with
    the connector throughout its lifecycle.
6.  Include any remarks that can help the reviewer make an informed
    decision to approve or decline the request.
7.  Submit the request, and a team member will review it and approve or
    decline the request based on the request details.
