# Connect to schema registry cluster with SSL protocol

This section provides information on connecting a schema registry cluster using the SSL protocol. Klaw connects to
the schema registry over the REST protocol.

## Prerequisite

- Set up the connection between the Klaw APIs (Klaw Core API and Klaw Cluster
  API) to use secure SSL, see
  `klaw-core-with-clusterapi`. This
  involves configuring the `klaw.clusterapi.url` setting in the Klaw
  UI and testing the connectivity to ensure the two APIs can
  communicate over HTTPS.
- Import the schema registry public certificate to truststore of Klaw.
  Ensure that the certificates used in the keystore and truststore are
  signed by the same CA.

## Configure SSL protocol

Follow the steps below to configure and connect to a schema registry
cluster with Klaw using SSL protocol:

1.  In the Klaw web interface, navigate to **Environments**, and click
    **Clusters**.
2.  On the **Clusters** page, click **Add Cluster**.
    <!-- vale off -->
3.  On the **Add Kafka cluster** page, enter the following details:
    <!-- vale on -->
    - **Cluster Type:** Select **SchemaRegistry** from the drop-down list
    - **Cluster Name:** Provide a name for the cluster
    - **Protocol:** Select SSL protocol for your cluster
    - **Kafka Flavor:** Select Apache Kafka® as the flavor
    - **Bootstrap server:** Enter the bootstrap server details for an
      Apache Kafka cluster.

4.  Click **Save**.
5.  Add the cluster to the preferred environment. Click **Environments**
    from the **Environments** drop-down menu.
6.  In the **Schema Registry Environments** section, click **Add
    Environment** and enter the details to add your schema registry
    environment. Click **Save**.
7.  Open the `application.properties` file for [`core`](https://github.com/aiven/klaw/tree/main/core)
    and [`cluster-api`](https://github.com/aiven/klaw/tree/main/cluster-api) modules.

8.  Copy the **Cluster ID** from the **Clusters** page using the copy
    icon that is available on the right-hand side of each cluster
    row.

9.  Configure the SSL properties to connect to the schema registry cluster
    by copying and editing the following lines. Where the **`clusterid`**
    should be replaced by the value copied in step 8.

        clusterid.kafkassl.keystore.location=client.keystore.p12
        clusterid.kafkassl.keystore.pwd=klaw1234
        clusterid.kafkassl.key.pwd=klaw1234
        clusterid.kafkassl.truststore.location=client.truststore.jks
        clusterid.kafkassl.truststore.pwd=klaw1234
        clusterid.kafkassl.keystore.type=pkcs12
        clusterid.kafkassl.truststore.type=JKS

- For the lines starting with `clusterid`, replace `clusterid` with
  the Klaw Cluster ID.
- Replace `client.keystore.p12` with the path for the keystore and
  `klaw1234` with the password configured for the keystore file.
- Replace `client.truststore.jks` with the path for the truststore and
  `klaw1234` with the password configured for the truststore file.

- Save the `application.properties` file. 10. Re-deploy the Klaw Cluster API
  with the updated configuration. This will apply the changes and enable
  Klaw to connect to the Apache Kafka cluster using SSL protocol.
