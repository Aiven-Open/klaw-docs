Synchronize ACLs to cluster
===========================

To synchronize ACLs from Klaw to an Apache Kafka cluster, follow the procedure below, which involves displaying the ACLs in Klaw and creating them on the Apache Kafka cluster.


1. Configure Environments and the ``klaw.tenant.config`` property as outlined in the ::doc:`tenant-config` documentation.

2. Log in as a SUPERADMIN or user with the ``SYNC_BACK_SUBSCRIPTIONS`` permission.

3. Navigate to the **Synchronize** menu and select **ACLs to Cluster**.

4. Select the source environment (Klaw metadata with topics) and target environment (kafka cluster where ACLs have to be created)

.. image:: /../../../_static/images/sync/SyncTopicsToCluster.png

By following these steps, you can create ACLs on any Apache Kafka cluster.