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

Klaw supports synchronization to and from Klaw and the Apache Kafka® and other clusters. This is found under the Synchronize menu item.

Synchronize either topics or ACLs from the cluster to Klaw if you have a new Klaw setup with existing data platforms.

Synchronize to the clusters if your Klaw setup is in place (for example, restored from backup, or unaffected by a cluster outage), this will reinstate the topics and/or ACLs on the clusters.