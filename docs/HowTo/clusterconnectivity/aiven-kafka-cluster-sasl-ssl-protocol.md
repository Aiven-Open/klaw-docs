# Connect with Aiven For Apache Kafka® cluster using SASL protocol

This section provides information on how to connect Aiven for
Apache Kafka® cluster with Klaw using the SASL_SSL authentication protocol.

## Prerequisite

- Set up the connection between the Klaw APIs (Core API and Cluster
  API), see `klaw-core-with-clusterapi`.
  This involves configuring the `klaw.clusterapi.url` setting in the
  Klaw UI and testing the connectivity to ensure the two APIs can
  communicate.
- A running Aiven for Apache Kafka® service. See [Getting started with
  Aiven for Apache Kafka for more
  information](https://docs.aiven.io/docs/products/kafka/getting-started.html).
- Configured [Java keystore and truststore containing the service SSL
  certificates](https://docs.aiven.io/docs/products/kafka/howto/keystore-truststore.html)
  to access Apache Kafka.

## Configure and connect using SASL protocol

Follow the steps below to configure and connect to an Aiven for Apache
Kafka® and Klaw using SSL protocol:

1.  In the Klaw web interface, navigate to **Environments**, and click
    **Clusters**.
2.  On the **Clusters** page, click **Add Cluster**.
3.  On the **Add Kafka cluster** page, enter the following details:
    - **Cluster Type:** Select **Kafka** from the drop-down list
    - **Cluster Name:** Provide a name for the cluster
    - **Protocol:** Select SSL protocol for your cluster
    - **Kafka Flavor:** Select Aiven for Apache Kafka® as the flavor
    - **Project Name:** Select the project name defined in the [Aiven
      Console](https://console.aiven.io/)
    - **Bootstrap server:** Enter the Service URI for your Apache Kafka
      service. You can find the service URI in the Connection information
      page of your service in Aiven Console.
    - **Service Name:** Enter the name of the service as defined in the [Aiven Console](https://console.aiven.io/) for your Apache Kafka service
4.  Click **Save**.
5.  Add the cluster to the preferred environment. Click **Environments**
    from the **Environments** drop-down menu.
6.  Click **Add Environment** and enter the details to add your Kafka
    environment.
7.  Enter an environment name, select the added cluster from the drop-down list, and configure partitions, replication factor, and tenant (set to default).
8.  Copy the **Cluster ID** from the **Clusters** page using the copy
    icon that is available on the right-hand side of each cluster
    row.
9.  Open the `application.properties` file located in the
    [klaw/cluster-api/src/main/resources] directory.
10. Depending on your SASL mechanism, copy one of the below properties, replace `clusterid` with the copied cluster id, and save the `application.properties` file.

    ```
    clusterid.kafkasasl.jaasconfig.plain=org.apache.kafka.common.security.plain.PlainLoginModule required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.scram=org.apache.kafka.common.security.scram.ScramLoginModule required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.gssapi=com.sun.security.auth.module.Krb5LoginModule required useKeyTab=true storeKey=true keyTab="/location/kafka_client.keytab" principal="kafkaclient1@EXAMPLE.COM";
    ```

11. To enable ACL authorization, copy the Authorization token from
    Aiven Console and configure `klaw.clusters.accesstoken` with the
    copied authorization token.
12. Save the `application.properties` file. Re-deploy the Cluster API
    with the updated configuration. This will apply the changes and
    enable Klaw to connect to Aiven for Apache Kafka® cluster using SSL
    protocol.
