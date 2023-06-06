Synchronize Schemas to cluster
==============================

To synchronize schemas from Klaw to a Schema Registry cluster, follow the below steps, which involve displaying the topics and schema versions in Klaw and creating them on the Schema Registry cluster.

.. note::  This process deletes all the existing schemas for that subject in target environment and creates new ones based on Klaw metadata.

Ex : If version 1 already exists on target cluster, it will be deleted, and new schemas will be created starting with '2' as new version.
Schemas will be registered in the same ascending order of versions. If there is a compatibility failure, schemas will be force registered based on force register selection.

1. Log in as a SUPERADMIN or user with the ``SYNC_BACK_SCHEMAS`` permission.

2. Navigate to the Synchronize menu and select **Schemas to Cluster**.

3. To synchronize schemas, select the source environment (Klaw metadata with topics, schemas) and target environment (kafka cluster (with associated schema registry) where schemas have to be created).

4. Select the force register checkbox, to make sure schemas are created on the target cluster, even in case of compatibility failures.

.. image:: /../../../_static/images/sync/SyncSchemasToCluster.png

By following these steps, you can synchronize schemas from a Klaw metadata to Schema Registry cluster.

.. note::  This kind of synchronization is mostly suitable for migrating to new schema registry clusters.