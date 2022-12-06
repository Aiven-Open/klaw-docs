Aiven For Apache Kafka Connect Cluster with SSL Protocol
========================================================

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a Kafka connect cluster in Klaw (flavor : Aiven for Apache Kafka) with SSL protocol

3. For Klaw to connect to Kafka Connect over HTTPS, make sure Klaw Cluster Api is running over HTTPS.

4. Import Kafka Connect public certificate to truststore of Klaw. (or both certificates are signed by same CA)

5. Configure Connect credentials below, copied from Aiven console::

    klaw.aiven.kafkaconnect.credentials=username:password


6. Re-deploy Cluster Api with the updated configuration.

That should be it.