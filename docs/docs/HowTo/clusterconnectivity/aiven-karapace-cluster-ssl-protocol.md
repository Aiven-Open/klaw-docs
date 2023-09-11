# Connect to Karapace schema registry with SSL protocol

This section provides information on how to connect a Karapace schema
registry using the SSL protocol. Klaw connects to the Schema Registry over
the REST protocol.

## Prerequisite

-   Set up the connection between the Klaw APIs (Core API and Cluster
    API) to use secure SSL, see
    `klaw-core-with-clusterapi`. This
    involves configuring the `klaw.clusterapi.url` setting in the Klaw
    UI and testing the connectivity to ensure the two APIs can
    communicate over https.
-   Import the Karapace schema registry public certificate to truststore
    of Klaw. For more information, see [Java keystore and truststore
    containing the service SSL
    certificates](https://docs.aiven.io/docs/products/kafka/howto/keystore-truststore.html).

## Configure and connect SSL protocol

Follow the steps below to configure and connect to a Karapace schema
registry cluster with Klaw using SSL protocol:

1.  In the Klaw web interface, navigate to **Environments**, and click
    **Clusters**.
2.  On the **Clusters** page, click **Add Cluster**.
3.  On the **Add Kafka cluster** page, enter the following details:

    -   **Cluster Type:** Select **SchemaRegistry** from the drop-down list
    -   **Cluster Name:** Provide a name for the cluster
    -   **Protocol:** Select SSL protocol for your cluster
    -   **Kafka Flavor:** Select Aiven for Apache Kafka® as the flavor
    -   **Project Name:** Select the project name defined in the [Aiven Console](https://console.aiven.io/)
    -   **Bootstrap server:** Enter the Service URI for your Apache Kafka
    service. You can find the service URI in the Connection information
    page of your service in Aiven Console.
    -   **Service Name:** Enter the name of the service as defined in the
    [Aiven Console](https://console.aiven.io/) for your Apache Kafka
    service

4.  Click **Save**.
5.  Add the cluster to the preferred environment. Click **Environments**
    from the **Environments** drop-down menu.
6.  In the **Schema Registry Environments** section, click **Add
    Environment** and enter the details to add your schema registry
    environment. Click **Save**.
7.  Open the `application.properties` file for [cluster-api]
    (klaw/cluster-api/src/main/resources) modules.
8.  Copy the **Cluster ID** from the **Clusters** page using the copy
    icon that is available on the right-hand side of each cluster
    row.

9. In the `application.properties` file for [cluster-api](https://github.com/aiven/klaw/blob/main/cluster-api/src/main/resources/application.properties) module, configure Karapace credentials copied from Aiven console

    ```
    clusterid.klaw.schemaregistry.credentials=username:password
    ```

    Replace `clusterid` with Klaw cluster Id copied from Klaw UI.

10. Re-deploy the Cluster API with the updated configuration. This will
    apply the changes and enable Klaw to connect to the Kafka cluster
    using SSL protocol.
