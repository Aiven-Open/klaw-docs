Kafka Cluster with SSL Protocol
===============================

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a kafka cluster in Klaw with SSL protocol

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

6. Add relevant Acls on the kafka cluster (IP/Principal based) to authorize Klaw to create Topics and Acls::

    --operation All  --cluster Cluster:kafka-cluster --topic "*"


7. Re-deploy Cluster Api with the updated configuration.

That should be it.