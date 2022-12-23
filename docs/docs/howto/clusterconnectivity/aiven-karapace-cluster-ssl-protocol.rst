Connect to Karapace schema registry with SSL protocol
=====================================================
This section provides information on how to connect a Karapace schema registry using the SSL protocol. Klaw connects to Schema Registry over the REST protocol.

Prerequisite
------------
* Set up the connection between the Klaw APIs (Core API and Cluster API), see :doc:`klaw-core-with-clusterapi`. This involves configuring the ``klaw.clusterapi.url`` setting in the Klaw UI and testing the connectivity to ensure the two APIs can communicate.
* Import the Karapce scehma registry public certificate to truststore of Klaw. For more information, see `Java keystore and truststore containing the service SSL certificates <https://docs.aiven.io/docs/products/kafka/howto/keystore-truststore.html>`_.

Configure and connect SSL protocol
----------------------------------
Follow the steps below to configure and connect to a Karapace schema registry cluster with Klaw using SSL protocol:

1. In the Klaw web interface, navigate to **Environments**, and click **Clusters**. 
2. On the **Clusters** page, click **Add Cluster**. 
3. On the **Add Kafka cluster** page, enter the following details: 

- **Cluster Type:** Select **SchemaRegistry** from the drop-down list
- **Cluster Name:** Provide a name for the cluster
- **Protocol:** Select SSL protocol for your cluster
- **Kafka Flavor:** Select Aiven for Apache Kafka® as the flavor
- **Project Name:** Select the project name defined in the `Aiven Console <https://console.aiven.io/>`_
- **Bootstrap server:** Enter the Service URI for your Apache Kafka service. You can find the service URI in the Connection information page of your service in Aiven Console. 
- **Service Name:** Enter the name of the service as defined in the `Aiven Console <https://console.aiven.io/>`_ for your Apache Kafka service
    
4. Click **Save**. 
5. Add the cluster to the preferred environment. Click **Environments** from the **Environments** drop-down menu.
6. In the **Schema Registry Environments** section, click **Add Environment** and enter the details to add your schema registry environment. Click **Save**. 
7. Open the ``application.properties`` file for `core`` (klaw/core/src/main/resources) and `cluster-api` (klaw/cluster-api/src/main/resources) modules. 
8. Configure the SSL properties to connect to Schema Registry cluster by copying and editing the following lines. 
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

9. Additionally, in the `cluster-api` (klaw/cluster-api/src/main/resources) module, configure Karapace credentials copied from Aiven console::
::

    clusterid.klaw.schemaregistry.credentials=username:password

Replace clusterid with Klaw cluster Id copied from Klaw UI.

10. Re-deploy the Cluster API with the updated configuration. This will apply the changes and enable Klaw to connect to the Kafka cluster using SSL protocol.

