Synchronize Topics to Cluster
=============================

If topics from Klaw have to be synchronized to a Kafka cluster, then follow the below procedure. This procedure involves displaying the topics in Klaw and creating them on the Kafka cluster.


1. Make sure Environments and  ``klaw.tenant.config`` property is configured as described under :doc:`tenant-config`

2. Login as SUPERADMIN, or with role who has permission ``SYNC_BACK_TOPICS``

3. Go to menu Synchronize -> Topics to Cluster

4. Topics can be synchronized with two options

    Select source environment (Klaw metadata with topics) and target environment (kafka cluster where topics have to be created)

.. image:: /../../../_static/images/sync/SyncTopicsToCluster.png

This way topics can be created on any kafka cluster. If a topic already exists, you would notice an 'TopicAlreadyExistsException', and proceed with others.