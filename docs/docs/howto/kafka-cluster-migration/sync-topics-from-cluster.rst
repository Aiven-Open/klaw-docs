Synchronize Topics from Cluster
===============================

If topics from a kafka cluster have to be synchronized with Klaw metadata, then follow the below procedure. This procedure involves retrieving the topics from an existing kafka cluster, and assigning to a team in Klaw.


1. Make sure Environments and  ``klaw.tenant.config`` property is configured as described under :doc:`tenant-config`

2. Login as SUPERADMIN, or with role who has permission ``SYNC_TOPICS``

3. Go to menu Synchronize -> Topics from Cluster

4. Topics can be synchronized with two options

    - `Individual Options` you may select one or more topics, and select a team and save. The topic(s) then appear in the 'Topics' menu assigned to a team.

    - `Bulk Options` tab, all the topics from the kafka cluster would be selected in one go. Select a team and save. The topic(s) then appear in the 'Topics' menu assigned to a team.

.. image:: /../../../_static/images/sync/SyncTopicsFromCluster.png

5. There is also an option to view all the topics and assign topics to a different team.
   Select ``Show All`` option, displays all the kafka topics (which are assigned and not assigned to any team.)

If a topic is deleted on cluster and exists in Klaw metadata, you may remove it from Klaw.
You can notice this at the end of the record.

This way Topics from a Kafka cluster can be synchronized with Klaw.