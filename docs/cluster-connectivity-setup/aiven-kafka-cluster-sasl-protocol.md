# Connect to Aiven for Apache Kafka® using the SASL_SSL protocol

This section describes how to connect Klaw to an Aiven for Apache Kafka® 
cluster using the SASL_SSL authentication protocol.

## Prerequisite

- Ensure that the Klaw Core API and Klaw Cluster API are connected. For details, 
  see `klaw-core-with-clusterapi`.
- Set the `klaw.clusterapi.url` in the Klaw UI and verify that the APIs can 
  communicate.
- A running Aiven for Apache Kafka service. See 
  [Getting started with Aiven for Apache Kafka](https://aiven.io/docs/products/kafka#get-started-with-aiven-for-apache-kafka).
- A [Java keystore and truststore configured with the service SSL 
  certificates](https://docs.aiven.io/docs/products/kafka/howto/keystore-truststore.html) for accessing the Kafka cluster.

## Configure and connect using SASL_SSL protocol

Follow these steps to configure Klaw to connect to an Aiven for Apache 
Kafka service using the SASL_SSL protocol:

1. In the Klaw web interface, go to **Environments**, and click
   **Clusters**.
2. On the **Clusters** page, click **Add Cluster**.
3. On the **Add Kafka cluster** page, enter the following details:
   - **Cluster Type:** Select **Kafka** from the drop-down list
   - **Cluster Name:** Provide a name for the cluster
   - **Protocol:** Select SSL protocol for your cluster
   - **Kafka Flavor:** Select Aiven for Apache Kafka as the flavor
   - **Project Name:** Select the project name defined in the [Aiven
     Console](https://console.aiven.io/)
   - **Bootstrap server:** Enter the Service URI for your Apache Kafka
     service. You can find the service URI in the Connection information
     page of your service in Aiven Console.
   - **Service Name:** Enter the name of the service as defined in the [Aiven Console](https://console.aiven.io/) for
     your Apache Kafka service
4. Click **Save**.
5. Add the cluster to the preferred environment. Click **Environments**
   from the **Environments** drop-down menu.
6. Click **Add Environment** and enter the details to add your Apache Kafka
   environment.
7. Enter an environment name, select the added cluster from the drop-down list, and configure partitions, replication
   factor, and tenant (set to default).
8. Copy the **Cluster ID** from the **Clusters** page.
9. Open the `application.properties` file located in the
   `klaw/cluster-api/src/main/resources` directory.
10. Add the SASL configuration block corresponding to your authentication mechanism. Replace `clusterid` with your copied Cluster ID.

    ```java
    clusterid.kafkasasl.jaasconfig.plain=org.apache.kafka.common.security.plain.PlainLoginModule required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.scram=org.apache.kafka.common.security.scram.ScramLoginModule required username='kwuser' password='kwuser-secret';
    clusterid.kafkasasl.jaasconfig.gssapi=com.sun.security.auth.module.Krb5LoginModule required useKeyTab=true storeKey=true keyTab="/location/kafka_client.keytab" principal="kafkaclient1@EXAMPLE.COM";
    clusterid.kafkasasl.jaasconfig.oauthbearer=org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule Required clientId="oidc-provider-client-id" clientSecret="clientSecret" unsecuredLoginStringClaim_sub="sub";
    ```

11. Save the `application.properties` file.
12. To enable ACL authorization, copy the Authorization token from
    the Aiven Console and set the `klaw.clusters.accesstoken` property in 
    the `application.properties` file.
13. Save the `application.properties` file and redeploy the Klaw Cluster API. This applies the 
    changes and enables Klaw to connect to the Aiven for Apache Kafka cluster using the 
    SASL_SSL protocol.
