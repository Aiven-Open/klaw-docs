Schema Registry Cluster with SSL Protocol
=========================================

Klaw connects to Schema registry over REST protocol.

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a kafka Schema registry cluster in Klaw with SSL protocol

3. For Klaw to connect to Schema Registry over HTTPS, make sure Klaw Cluster Api is running over HTTPS.

4. Import Schema registry public certificate to truststore of Klaw. (or both certificates are signed by same CA)

5. Restart Cluster Api.

That should be it.

