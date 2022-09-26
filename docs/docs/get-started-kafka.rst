Get started with Klaw and Apache Kafka®
=======================================

Once Klaw is up and running, the next step is to connect it to your Apache Kafka® service. Whether you are running this locally, or using a hosted service, the steps below will get you started.

Add a cluster
-------------

Tell Klaw about your Apache Kafka cluster so that it knows where to connect to. If you have more than one, you can repeat this step as needed to add them all.

1. Navigate to **Environments** and then **Clusters**. Choose **Add Cluster**.

2. **Cluster Type** will be "Kafka". Give your cluster a name.

3. Add your server details into **Bootstrap servers** (any port range is permitted).

4. Select the **Protocol** that is needed to connect. Check the :doc:`config` information for how to supply additional information such as certificates.

5. Save your new cluster and you should see it in the list of clusters.

Add the cluster to an environment
---------------------------------

Klaw supports environments, which is very useful if you have similar clusters at different stages of the lifecycle, such as staging and production.

6. Navigate to **Environments** and under **Kafka Environments**, choose **Add Environment**.

7. Pick an environment, and link a cluster to it. You can add more cluster/environment combinations as needed to suit your setup.

8. Configure the default and maximum values for this environment. Users will see this information when they are requesting new topics, so this ensures consistency across complex setups.

9. Save the environment.

10. Check the connection status by clicking the "status" icon for your new environment. Klaw will test the connection and return the status.

Configure the cluster to sync
-----------------------------

Once the clusters are configured, it is necessary to set up the tenant configuration so that Klaw understands how your environments are laid out. This can be found under **Settings** as the ``tenant.config`` setting.

An example value for a simple ``DEV`` environment might look something like this::

    {
      "tenantModel" : {
        "tenantName" : "default",
        "baseSyncEnvironment" : "DEV",
        "orderOfTopicPromotionEnvsList" : [ "DEV" ],
        "requestTopicsEnvironmentsList" : [ "DEV" ],
        "baseSyncKafkaConnectCluster" : null,
        "orderOfConnectorsPromotionEnvsList" : null,
        "requestConnectorsEnvironmentsList" : null
      }
    }


