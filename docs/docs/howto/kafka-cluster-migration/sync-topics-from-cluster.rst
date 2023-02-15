Synchronize Topics from cluster
===============================

To synchronize topics from an Apache Kafka cluster with Klaw, follow the below procedure, which involves retrieving the topics from an existing Apache Kafka cluster and assigning them to a team in Klaw.


1. Configure Environments and the ``klaw.tenant.config`` property as outlined in the :doc:`tenant-config` documentation.

2. Log in as a SUPERADMIN or user with the ``SYNC_TOPICS`` permission.

3. Navigate to the Synchronize menu and select **Topics from Cluster**.

4. Synchronize topics with either of following two options:

    - `Individual Options`: Select one or more topics individually, choose a team, and save. The selected topics will now appear in the **Topics** menu, assigned to the chosen team.
    
    - `Bulk Options` tab: Select all topics from the Kafka cluster at once, choose a team, and save. The selected topics will now appear in the **Topics** menu, assigned to the chosen team.

.. image:: /../../../_static/images/sync/SyncTopicsFromCluster.png

5. You can view all the topics and assign topics to a different team by selecting the **Show All** option. This displays all the Apache Kafka topics, both assigned and unassigned to any team.

If a topic is deleted on the cluster but still exists in Klaw metadata, you can remove it from Klaw. You will notice this at the end of the record.

By following these steps, you can synchronize topics from a Apache Kafka cluster with Klaw metadata.