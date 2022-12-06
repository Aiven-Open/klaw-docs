Aiven Karapace Cluster with SSL Protocol
========================================

Klaw connects to Aiven Karapace over REST protocol.

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a kafka Schema registry cluster (flavor : Aiven for Apache Kafka) in Klaw with SSL protocol

3. For Klaw to connect to Schema Registry over HTTPS, make sure Klaw Cluster Api is running over HTTPS.

4. Import Karapace public certificate to truststore of Klaw. (or both certificates are signed by same CA)

5. Configure Karapace credentials copied from Aiven console::

    klaw.aiven.karapace.credentials=username:password

6. Restart Cluster Api.

That should be it.

