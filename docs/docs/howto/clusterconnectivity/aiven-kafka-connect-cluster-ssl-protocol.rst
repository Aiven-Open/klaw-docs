Connect with Aiven for Apache Kafka® Connect service 
====================================================
Aiven for Apache Kafka® Connect is a fully managed distributed Apache Kafka® integration component, deployable in the cloud of your choice. Apache Kafka Connect lets you integrate your existing data sources and sinks with Apache Kafka.

This section provides you with information on how to connect Aiven for Apache Kafka Connect service with Klaw using SSL protocol. 

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
7. Open the ``application.properties`` file for `core`` (klaw/core/src/main/resources) and `cluster-api` (klaw/cluster-api/src/main/resources) modules. 
8. Configure the SSL properties to connect to Schema Registry cluster by copying and editing the following lines:
::    
    
        klawssl.kafkassl.keystore.location=client.keystore.p12
        klawssl.kafkassl.keystore.pwd=klaw1234
        klawssl.kafkassl.key.pwd=klaw1234
        klawssl.kafkassl.truststore.location=client.truststore.jks
        klawssl.kafkassl.truststore.pwd=klaw1234
        klawssl.kafkassl.keystore.type=pkcs12
        klawssl.kafkassl.truststore.type=JKS
    
- For the lines starting with ``klawssl``, replace ``klawssl`` with the Klaw Cluster ID.
- Replace ``client.keystore.p12`` with the path for the keystore and ``klaw1234`` with the password configured for the keystore file.
- Replace ``client.truststore.jks`` with the path for the truststore and ``klaw1234`` with the password configured for the truststore file.
- Save the ``application.properties`` file.
9. Additionally, in the `cluster-api` (klaw/cluster-api/src/main/resources) module, configure Aiven for Apache Kafka Connect credentials copied from Aiven console::
::
    
    klaw.aiven.kafkaconnect.credentials=username:password
    
10. Re-deploy the Cluster API with the updated configuration. This will apply the changes and enable Klaw to connect to the Aiven for Apache Kafka Connect service using SSL protocol.
