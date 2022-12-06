Aiven For Apache Kafka Cluster with SSL Protocol
================================================

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a kafka cluster in Klaw (flavor : Aiven for Apache Kafka) with SSL protocol

3. Copy the cluster id from Klaw clusters page with the available copy option.

4. Copy the below properties and replace 'klawssl' with the copied cluster id ::

    klawssl.kafkassl.keystore.location=client.keystore.p12
    klawssl.kafkassl.keystore.pwd=klaw1234
    klawssl.kafkassl.key.pwd=klaw1234
    klawssl.kafkassl.truststore.location=client.truststore.jks
    klawssl.kafkassl.truststore.pwd=klaw1234
    klawssl.kafkassl.keystore.type=pkcs12
    klawssl.kafkassl.truststore.type=JKS


5. Update the properties with relevant values of certificates

6. Copy the access token from Aiven Console profile and add the below property::

    klaw.clusters.accesstoken=<access-token>

7. Re-deploy Cluster Api with the updated configuration.

That should be it.