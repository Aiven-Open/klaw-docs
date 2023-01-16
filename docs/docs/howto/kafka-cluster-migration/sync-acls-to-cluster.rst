Synchronize Acls to Cluster
===========================

If Acls from Klaw have to be synchronized to a Kafka cluster, then follow the below procedure. This procedure involves displaying the Acls in Klaw and creating them on the Kafka cluster.


1. Make sure Environments and  ``klaw.tenant.config`` property is configured as described under :doc:`tenant-config`

2. Login as SUPERADMIN, or with role who has permission ``SYNC_BACK_SUBSCRIPTIONS``

3. Go to menu Synchronize -> Acls to Cluster

4. Select source environment (Klaw metadata with topics) and target environment (kafka cluster where acls have to be created)

.. image:: /../../../_static/images/sync/SyncTopicsToCluster.png

This way Acls can be created on any kafka cluster.