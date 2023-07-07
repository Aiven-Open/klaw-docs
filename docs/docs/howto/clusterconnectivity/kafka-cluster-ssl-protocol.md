# Connect to Apache Kafka cluster using SSL protocol

Connecting Apache Kafka cluster and Klaw allows you to easily manage and
enforce governance policies for topics, ACLs, and more on your Kafka
cluster.

This section provides you with information on how to connect Apache
Kafka cluster to Klaw using SSL protocol.

## Prerequisite

-   Set up the connection between the Klaw APIs (Core API and Cluster
    API), see `klaw-core-with-clusterapi`{.interpreted-text role="doc"}.
    This involves configuring the `klaw.clusterapi.url` setting in the
    Klaw UI and testing the connectivity to ensure the two APIs can
    communicate.

## Configure and connect using SSL protocol

Follow the steps below to configure and connect to an Apache Kafka®
cluster in Klaw using SSL protocol:

1.  In the Klaw web interface, navigate to **Environments**, and click
    **Clusters**.
2.  On the **Clusters** page, click **Add Cluster**.
3.  On the **Add Kafka cluster** page, enter the following details:

-   **Cluster Type:** Select **Kafka** from the drop-down list
-   **Cluster Name:** Provide a name for the cluster
-   **Protocol:** Select SSL protocol for your cluster
-   **Kafka Flavor:** Select Apache Kafka as the flavor
-   **Bootstrap server:** Enter the bootstrap servers details for an
    Apache Kafka cluster.

4.  Click **Save**.
5.  Add the cluster to the preferred environment. Click **Environments**
    from the **Environments** drop-down menu.
6.  Click **Add Environment** and enter the details to add your Kafka
    environment.
7.  Enter an environment name, set the cluster you added from the
    drop-down list, and configure partitions and replication factor, and
    tenant (set to default).ß
8.  Copy the **Cluster ID** from the **Clusters** page using the copy
    icon that is available on the right hand side of the each cluster
    row.
9.  Open the `application.properties` file located in the
    [klaw/cluster-api/src/main/resources]{.title-ref} directory.

10\. Configure the SSL properties to connect to Apache Kafka clusters by
copying and editing the following lines: :

    clusterid.kafkassl.keystore.location=client.keystore.p12
    clusterid.kafkassl.keystore.pwd=klaw1234
    clusterid.kafkassl.key.pwd=klaw1234
    clusterid.kafkassl.truststore.location=client.truststore.jks
    clusterid.kafkassl.truststore.pwd=klaw1234
    clusterid.kafkassl.keystore.type=pkcs12
    clusterid.kafkassl.truststore.type=JKS

::: note
::: title
Note
:::

It is possible to configure JKS, PKCS12 and PEM certificate types.
:::

-   For the lines starting with `clusterid`, replace `clusterid` with
    the Klaw Cluster ID.
-   Replace `client.keystore.p12` with the path for the keystore and
    `klaw1234` with the password configured for the keystore file.
-   Replace `client.truststore.jks` with the path for the truststore and
    `klaw1234` with the password configured for the truststore file.
-   Save the `application.properties` file.

The following is an example of an application.properties file configured
with Klaw cluster ID: :

    demo_cluster1.kafkassl.keystore.location=/Users/demo.user/Documents/Klaw/demo-certs/client.keystore.p12
    demo_cluster1.kafkassl.keystore.pwd=Aiventest123!
    demo_cluster1.kafkassl.key.pwd=Aiventest123!
    demo_cluster1.kafkassl.truststore.location=/Users/demo.user/Documents/Klaw/demo-certs/client.truststore.jks
    demo_cluster1.kafkassl.truststore.pwd=Aiventest123!
    demo_cluster1.kafkassl.keystore.type=pkcs12
    demo_cluster1.kafkassl.truststore.type=JKS

11\. Add relevant ACLs on the Kafka cluster (IP/Principal based) to
authorize Klaw to create topics and ACLs. This can be done using :

    --operation All --clusterCluster:kafka-cluster --topic "*"

12. Re-deploy the Cluster API with the updated configuration. This will
    apply the changes and enable Klaw to connect to the Kafka cluster
    using SSL protocol.

Once the above steps are completed, you should be able to connect a
Kafka cluster to Klaw using the SSL protocol and perform the necessary
operations on the cluster.
