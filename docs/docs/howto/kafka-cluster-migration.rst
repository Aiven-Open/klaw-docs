Klaw Installation
=================

.. toctree::
   :maxdepth: 3
   :hidden:


   Tenant Configuration<kafka-cluster-migration/tenant-config>
   Synchronize Topics from Cluster<kafka-cluster-migration/sync-topics-from-cluster>
   Synchronize Topics to Cluster<kafka-cluster-migration/sync-topics-to-cluster>
   Synchronize Acls from Cluster<kafka-cluster-migration/sync-acls-from-cluster>
   Synchronize Acls to Cluster<kafka-cluster-migration/sync-acls-to-cluster>


Klaw supports data synchronization between Klaw and Apache Kafka® and other clusters. This can be accessed through the Synchronize menu option.

If you have a new Klaw setup and already have data on other clusters, you can synchronize the topics and ACLs from those clusters to Klaw.

If your Klaw setup is already in place, for example, if it has been restored from a backup or was not affected by a cluster outage, you can use the Synchronize option to reinstate topics and/or ACLs on the clusters.