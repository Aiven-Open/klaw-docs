Synchronize Acls from Cluster
=============================


If acls from a kafka cluster have to be synchronized with Klaw metadata, then follow the below procedure. This procedure involves retrieving the Acls (Producers & Consumers) from an existing kafka cluster, and assigning to a team in Klaw.


1. Make sure Environments and  ``klaw.tenant.config`` property is configured as described under :doc:`tenant-config`

2. Login as SUPERADMIN, or with role who has permission ``SYNC_SUBSCRIPTIONS``

3. Go to menu Synchronize -> Acls from Cluster

4. You may select one or more Acls, and select a team and save. The acls(s) then appear in the topic overview page, assigned to a team.

.. image:: /../../../_static/images/sync/SyncAclsFromCluster.png

5. There is also an option to view all the acls and assign those acls to a different team.
   Select ``Show All`` option, displays all the kafka acls (which are assigned and not assigned to any team.)

This way Acls from a Kafka cluster can be synchronized with Klaw.