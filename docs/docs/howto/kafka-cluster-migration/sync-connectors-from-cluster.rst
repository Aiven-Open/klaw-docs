Synchronize Topics from cluster
===============================

To synchronize connectors from an Apache Kafka connect cluster with Klaw, follow the below procedure, which involves retrieving the connectors from an existing Apache Kafka connect cluster and assigning them to a team in Klaw.


1. Configure Environments and the ``klaw.tenant.config`` property as outlined in the :doc:`tenant-config` documentation.

2. Log in as a SUPERADMIN or user with the ``SYNC_CONNECTORS`` permission.

3. Navigate to the Synchronize menu and select **Connectors from Cluster**.

4. Synchronize connectors with following option:

    Select one or more connectors individually, choose a team, and save. The selected topics will now appear in the **Topics** menu, assigned to the chosen team.

.. image:: /../../../_static/images/sync/SyncConnectorsFromCluster.png

If a connector is deleted on the cluster but still exists in Klaw metadata, you can remove it from Klaw. You will notice this at the end of the record.

By following these steps, you can synchronize topics from a Apache Kafka connect cluster with Klaw metadata.