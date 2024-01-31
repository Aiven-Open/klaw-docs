# Manage connectors

To effectively manage Klaw and Apache Kafka® Connect, the Administrator must be
able to stop, start, and restart Apache Kafka Connect as needed. This is
necessary in instances where tasks, connectors, or workers encounter
failures.

## View/restart connectors status

1. Log in to Klaw, and ensure you have the `MANAGE_CONNECTORS`
   permission.
2. Navigate to the Synchronize menu and select **Manage connectors**.
3. On this screen, you will be able to view the status of the
   connectors and their tasks.
4. To restart a connector, you can choose to restart all tasks, including the failed ones, or only the failed tasks.

![Screenshot Klaw Cluster status page. Includes a title that says "Manage Connectors," a table with five columns: "Connector," "Team," "Config," "Status," and "Restart." Each row in the table represents a different connector. There are buttons to restart the connector and view the connector's configuration](../../../static/images/sync/ConnectorStatus.png)
