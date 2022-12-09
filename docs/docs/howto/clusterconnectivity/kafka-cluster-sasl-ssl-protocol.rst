Connect to Apache Kafka® cluster using SASL_SSL Protocol
========================================================

This section provides you with information on how to connect Apache Kafka cluster to Klaw using SASL_SSL protocol. 

Prerequisite
------------
Set up the connection between the :doc:`klaw-core-with-clusterapi`. This involves configuring the ``klaw.clusterapi.url`` setting in the Klaw UI and testing the connectivity to ensure the two APIs can communicate.

Configure SASL_SSL protocol
---------------------------

Follow the steps below to configure and connect to an Apache Kafka® cluster in Klaw using SASL_SSL protocol:

1. In the Klaw web interface, navigate to **Environments**, and click **Clusters**. 
2. On the **Clusters** page, click **Add Cluster**. 
3. On the **Add Kafka cluster** page, enter the following details: 
    
    - **Cluster Type:** Select Kafka from the drop-down list
    - **Cluster Name:** Provide a name for the cluster
    - **Protocol:** Select SASL_SSL protocol for your cluster
    - **Kafka Flavor:** Select Apache Kafka as the flavor
    - **Bootstrap server:** Enter  the bootstrap servers details for an Apache Kafka cluster. 

4. Click **Save**. 
5. Copy the **Cluster ID** from the **Clusters** page using the copy icon.
6.  Open the ``application.properties`` file located in the `klaw/cluster-api/src/main/resources` directory.
7. Depending on the SASL mechanism you are using, copy one of the below properties,replace ``klawsasl`` with the copied cluster id, and save the ``application.properties`` file. 
    
    klawsasl.kafkasasl.jaasconfig.plain=org.apache.kafka.common.security.plain.PlainLoginModule required username='kwuser' password='kwuser-secret';
    klawsasl.kafkasasl.jaasconfig.scram=org.apache.kafka.common.security.scram.ScramLoginModule required username='kwuser' password='kwuser-secret';
    klawsasl.kafkasasl.jaasconfig.gssapi=com.sun.security.auth.module.Krb5LoginModule required useKeyTab=true storeKey=true keyTab="/location/kafka_client.keytab" principal="kafkaclient1@EXAMPLE.COM";

8. Add relevant ACLs on the Kafka cluster (IP/Principal based) to authorize Klaw to create topics and ACLs. This can be done using
    
    --operation All --clusterCluster:kafka-cluster --topic "*"

9.  Re-deploy the Cluster API with the updated configuration. This will apply the changes and enable Klaw to connect to the Kafka cluster using SSL protocol.
