# Connect with Confluent Cloud Kafka Cluster

Confluent Cloud Kafka® is a fully managed distributed data streaming
platform, deployable in a cloud, maintained by Confluent. This section
provides you with information on how to connect Confluent Cloud Kafka
cluster with Klaw. The following functionalities are available in Klaw for Confluent Cloud:

- Create Topics
- Delete Topics
- Create ACLs
- Delete ACLs
- Sync Topics
- Sync ACLs

References :

<https://docs.confluent.io/cloud/current/api.html#tag/Topic-(v3)>
<https://docs.confluent.io/cloud/current/api.html#tag/ACL-(v3)>

## Prerequisite

- Set up the connection between the Klaw APIs (Core API and Cluster
  API), see `klaw-core-with-clusterapi`.
  This involves configuring the `klaw.clusterapi.url` setting in the
  Klaw UI and testing the connectivity to ensure the two APIs can
  communicate.
- Both the Klaw Apis are running on SSL/HTTPS.

## Configure and connect using SSL/ApiKeys

Follow the steps below to configure and connect to a Confluent Cloud Kafka and Klaw using SSL protocol:

1.  In the Klaw web interface, navigate to **Environments**, and click
    **Clusters**.
2.  On the **Clusters** page, click **Add Cluster**.
3.  On the **Add Kafka cluster** page, enter the following details:

    - **Cluster Type:** Select **Kafka** from the drop-down list
    - **Cluster Name:** Provide a name for the cluster
    - **Protocol:** Select SSL protocol for your cluster
    - **Kafka Flavor:** Select Confluent Cloud Kafka as the flavor
    - **Bootstrap server:** Enter the REST endpoint of your Confluent cloud Kafka cluster (without <https://>). Ex:
      `xyz-pk07es.us-west4.gcp.confluent.cloud:443`

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
10. Configure the Apikey, Api secret, uris to connect to Confluent Cloud
    Kafka clusters by copying and editing the following lines:

    ```
    #clusterid.klaw.confluentcloud.credentials=apikey:apisecret
    #clusterid.klaw.clusters.counfluentcloud.acls.api=/kafka/v3/clusters/{cluster_id}/acls
    #clusterid.klaw.clusters.counfluentcloud.topics.api=/kafka/v3/clusters/{cluster_id}/topics
    #Example :
    dev3.klaw.clusters.counfluentcloud.acls.api=/kafka/v3/clusters/abc-ab1abc/acls
    ```

    - Copy the {cluster_id} from the Confluent Cloud portal (Cluster Settings > General > Identification > Cluster ID) and insert into the API URI.
    - Copy the API key/secrets from Confluent Cloud > API Keys.
    - For the lines starting with `clusterid`, replace `clusterid` with the Klaw Cluster ID. Save the `application.properties` file.

11. Re-deploy the Cluster API with the updated configuration. This will
    apply the changes and enable Klaw to connect to Confluent Cloud
    Kafka® cluster using ApiKey/Secret.
