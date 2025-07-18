# Connect to Apache Kafka® cluster using SASL_SSL protocol

This section explains how to connect Klaw to an Apache Kafka cluster using the SASL_SSL protocol.

## Prerequisite

- Ensure that the Klaw Core API and Klaw Cluster API are connected. See `klaw-core-with-clusterapi`.
- Set the `klaw.clusterapi.url` in the Klaw UI and verify that the APIs can communicate.

## Configure and connect using SASL_SSL protocol

Follow these steps to configure and connect Klaw to an Apache Kafka cluster using SASL_SSL:

1. In the Klaw web interface, go to **Environments**, and click
   **Clusters**.
2. On the **Clusters** page, click **Add Cluster**.
3. On the **Add Kafka cluster** page, enter the following details:

   - **Cluster Type:** Select **Kafka** from the drop-down list
   - **Cluster Name:** Provide a name for the cluster
   - **Protocol:** Select SASL_SSL protocol for your cluster
   - **Kafka Flavor:** Select Apache Kafka as the flavor
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
   [`cluster-api`](https://github.com/aiven/klaw/blob/main/cluster-api/src/main/resources) directory.
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

11. If using the OAUTHBEARER mechanism with SASL_SSL, add the following configurations:

    ```java
    clusterid.kafkasasl.saslmechanism.oauthbearer=OAUTHBEARER
    clusterid.kafkasasl.sasl.oauthbearer.token.endpoint.url=http://localhost:8080/realms/klaw/protocol/openid-connect/token
    clusterid.kafkasasl.sasl.client.callback.handler.class=org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler
    clusterid.kafkasasl.jaasconfig.oauthbearer=org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule Required clientId="klaw" clientSecret="clientSecret" unsecuredLoginStringClaim_sub="sub";
    ```

12. Add the necessary access control lists (ACLs) to the Apache Kafka cluster to authorize Klaw to create topics and ACLs.
    For example:

    `--operation All --clusterCluster:kafka-cluster --topic "*"`

13. Redeploy the Klaw Cluster API with the updated configuration. This enables Klaw to connect to the
    Apache Kafka cluster using the SASL_SSL protocol.
