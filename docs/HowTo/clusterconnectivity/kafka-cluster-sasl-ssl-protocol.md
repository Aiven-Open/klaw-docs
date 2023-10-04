# Connect to Apache Kafka cluster using SASL protocol

This section provides information on connecting Klaw to an Apache Kafka cluster using SSL protocol.

## Prerequisite

- Set up the connection between the Klaw APIs (Core API and Cluster
  API), see `klaw-core-with-clusterapi`.
  This involves configuring the `klaw.clusterapi.url` setting in the
  Klaw UI and testing the connectivity to ensure the two APIs can
  communicate.

## Configure and connect using SASL protocol

Follow the steps below to configure and connect to an Apache Kafka®
cluster in Klaw using SASL_SSL protocol:

1. In the Klaw web interface, navigate to **Environments**, and click
   **Clusters**.
2. On the **Clusters** page, click **Add Cluster**.
3. On the **Add Apache Kafka cluster** page, enter the following details:

   - **Cluster Type:** Select **Apache Kafka** from the drop-down list
   - **Cluster Name:** Provide a name for the cluster
   - **Protocol:** Select SASL_SSL protocol for your cluster
   - **Apache Kafka Flavor:** Select Apache Kafka as the flavor
   - **Bootstrap server:** Enter the bootstrap server details for an Apache Kafka cluster.

4. Click **Save**.
5. Add the cluster to the preferred environment. Click **Environments**
   from the **Environments** drop-down menu.
6. Click **Add Environment** and enter the details to add your Apache Kafka
   environment.
7. Enter an environment name, select the added cluster from the drop-down list, and configure partitions, replication
   factor, and tenant (set to default).
8. Copy the **Cluster ID** from the **Clusters** page using the copy
   icon that is available on the right-hand side of each cluster
   row.
9. Open the `application.properties` file located in the
   [cluster-api](https://github.com/aiven/klaw/blob/main/cluster-api/src/main/resources) directory.
10. Depending on your SASL mechanism, copy one of the below
    properties, replace `clusterid` with the copied cluster id, and save
    the `application.properties` file.

    ```java
    2a3d24b (Fix markdownlint errors and adapt config.)
    clusterid.kafkasasl.jaasconfig.plain=org.apache.kafka.common.security.plain.PlainLoginModule
    required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.scram=org.apache.kafka.common.security.scram.ScramLoginModule
    required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.gssapi=com.sun.security.auth.module.Krb5LoginModule
    required useKeyTab=true storeKey=true
    keyTab=\"/location/kafka_client.keytab\"
    <principal=%22kafkaclient1@EXAMPLE.COM>\";
    ```

11. Add relevant ACLs on the Apache Kafka cluster (IP/Principal based) to authorize Klaw to create topics and ACLs. This can be
    done using: :

    `--operation All --clusterCluster:kafka-cluster --topic "*"`

12. Re-deploy the Cluster API with the updated configuration. This will
    apply the changes and enable Klaw to connect to the Apache Kafka cluster
    using SSL protocol.
