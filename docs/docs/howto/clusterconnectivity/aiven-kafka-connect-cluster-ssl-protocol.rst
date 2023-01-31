Connect with Aiven for Apache Kafka® Connect service 
====================================================
Aiven for Apache Kafka® Connect is a fully managed distributed Apache Kafka® integration component, deployable in the cloud of your choice. Apache Kafka Connect lets you integrate your existing data sources and sinks with Apache Kafka.

This section provides you with information on how to connect Aiven for Apache Kafka Connect service with Klaw using SSL protocol. 

Prerequisite
------------
* Set up the connection between the Klaw APIs (Core API and Cluster API) to use secure SSL, see :doc:`klaw-core-with-clusterapi`. This involves configuring the ``klaw.clusterapi.url`` setting in the Klaw UI and testing the connectivity to ensure the two APIs can communicate over https.

Configure and connect with SSL protocol
---------------------------------------
Follow the steps below to configure and connect an Aiven for Apache Kafka Connect service with Klaw using SSL protocol:

1. In the Klaw web interface, navigate to **Environments**, and click **Clusters**. 
2. On the **Clusters** page, click **Add Cluster**. 
3. On the **Add Kafka cluster** page, enter the following details: 

- **Cluster Type:** Select **KafkaConnect** from the drop-down list
- **Cluster Name:** Provide a name for the cluster
- **Protocol:** Select SSL protocol for your cluster
- **Kafka Flavor:** Select Aiven for Apache Kafka® as the flavor
- **Project Name:** Select the project name defined in the `Aiven Console <https://console.aiven.io/>`_
- **Bootstrap server:** Enter the Service URI for your Apache Kafka Connect service. You can find the service URI in the Connection information page of your service in Aiven Console. 

    .. note:: 
        In the service URI, you can omit the ``https://`` portion of the URL and the user credentials. The Aiven for Kafka Connect server details should typically starts with ``kafkaconnect-<servicename>-<projectname>:<port>``. 
    
- **Service Name:** Enter the name of the service as defined in the `Aiven Console <https://console.aiven.io/>`_ for your Apache Kafka service
4. Click **Save**. 
5. Add the cluster to the preferred environment. Click **Environments** from the **Environments** drop-down menu.
6. In the **Kafka Connect Environments** section, click **Add Environment** and enter the details to add your schema registry environment. Click **Save**. 
7. Copy the **Cluster ID** from the **Clusters** page using the copy icon that is available on the right hand side of the each cluster row.
8. In the ``application.properties`` file for `cluster-api` (klaw/cluster-api/src/main/resources) module, configure Aiven for Apache Kafka Connect credentials copied from Aiven console::
::
    
    clusterid.klaw.kafkaconnect.credentials=username:password

Replace clusterid with Klaw cluster Id copied from Klaw UI.

9. Re-deploy the Cluster API with the updated configuration. This will apply the changes and enable Klaw to connect to the Aiven for Apache Kafka Connect service using SSL protocol.
