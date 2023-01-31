Connect with Aiven for Apache Kafka® Cluster using SSL protocol
===============================================================

Aiven for Apache Kafka® is a fully managed distributed data streaming platform, deployable in the cloud of your choice. 
This section provides you with information on how to connect Aiven for Apache Kafka cluster with Klaw using SSL authentication protocol. 

Prerequisite
------------

* Set up the connection between the Klaw APIs (Core API and Cluster API), see :doc:`klaw-core-with-clusterapi`. This involves configuring the ``klaw.clusterapi.url`` setting in the Klaw UI and testing the connectivity to ensure the two APIs can communicate.
* A running Aiven for Apache Kafka® service. See `Getting started with Aiven for Apache Kafka for more information <https://docs.aiven.io/docs/products/kafka/getting-started.html>`_.
* Configured `Java keystore and truststore containing the service SSL certificates <https://docs.aiven.io/docs/products/kafka/howto/keystore-truststore.html>`_ to access Apache Kafka.  

Configure and connect using SSL protocol
----------------------------------------
Follow the steps below to configure and connect to an Aiven for Apache Kafka® and Klaw using SSL protocol:

1. In the Klaw web interface, navigate to **Environments**, and click **Clusters**. 
2. On the **Clusters** page, click **Add Cluster**. 
3. On the **Add Kafka cluster** page, enter the following details: 
    
- **Cluster Type:** Select **Kafka** from the drop-down list
- **Cluster Name:** Provide a name for the cluster
- **Protocol:** Select SSL protocol for your cluster
- **Kafka Flavor:** Select Aiven for Apache Kafka® as the flavor
- **Project Name:** Select the project name defined in the `Aiven Console <https://console.aiven.io/>`_
- **Bootstrap server:** Enter the Service URI for your Apache Kafka service. You can find the service URI in the Connection information page of your service in Aiven Console. 
- **Service Name:** Enter the name of the service as defined in the `Aiven Console <https://console.aiven.io/>`_ for your Apache Kafka service
    
4. Click **Save**. 
5. Add the cluster to the preferred environment. Click **Environments** from the **Environments** drop-down menu.
6. Click **Add Environment** and enter the details to add your Kafka environment. 
7. Enter an environment name, set the cluster you added from the drop-down list, and configure partitions and replication factor, and tenat (set to default). 
8. Copy the **Cluster ID** from the **Clusters** page using the copy icon that is available on the right hand side of the each cluster row.
9. Open the ``application.properties`` file located in the `klaw/cluster-api/src/main/resources` directory.
10. Configure the SSL properties to connect to Aiven for Apache Kafka® clusters by copying and editing the following lines. 
    ::    
        clusterid.kafkassl.keystore.location=client.keystore.p12
        clusterid.kafkassl.keystore.pwd=klaw1234
        clusterid.kafkassl.key.pwd=klaw1234
        clusterid.kafkassl.truststore.location=client.truststore.jks
        clusterid.kafkassl.truststore.pwd=klaw1234
        clusterid.kafkassl.keystore.type=pkcs12
        clusterid.kafkassl.truststore.type=JKS
    

- For the lines starting with ``clusterid``, replace ``clusterid`` with the Klaw Cluster ID.
- Replace ``client.keystore.p12`` with the path for the keystore and ``klaw1234`` with the password configured for the keystore file.
- Replace ``client.truststore.jks`` with the path for the truststore and ``klaw1234`` with the password configured for the truststore file.
- Save the ``application.properties`` file.

The following is an example of an application.properties file configured with Klaw cluster ID
::
    
    demo_cluster.kafkassl.keystore.location=/Users/demo.user/Documents/Klaw/demo-certs/client.keystore.p12
    demo_cluster.kafkassl.keystore.pwd=Aiventest123!
    demo_cluster.kafkassl.key.pwd=Aiventest123!
    demo_cluster.kafkassl.truststore.location=/Users/demo.user/Documents/Klaw/demo-certs/client.truststore.jks
    demo_cluster.kafkassl.truststore.pwd=Aiventest123!
    demo_cluster.kafkassl.keystore.type=pkcs12
    demo_cluster.kafkassl.truststore.type=JK
    

11.  Re-deploy the Cluster API with the updated configuration. This will apply the changes and enable Klaw to connect to Aiven for Apache Kafka® cluster using SSL protocol.