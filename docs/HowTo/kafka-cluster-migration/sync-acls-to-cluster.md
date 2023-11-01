# Synchronize ACLs to cluster

To synchronize ACLs from Klaw to an Apache Kafka cluster, follow the
procedure below, which involves displaying the ACLs in Klaw and creating
them on the Apache Kafka cluster.

## Prerequisites

1. **Environment configuration**: Make sure the `klaw.tenant.config` property is correctly configured, as outlined in
   the [tenant configuration](tenant-config.md) guide.
2. **User permissions**: Log in with a user account with either `SUPERADMIN` or a user granted
   the `SYNC_BACK_SUBSCRIPTIONS` permission.

## Steps to synchronize ACLs

1. Navigate to the **Synchronize** menu and select **ACLs to Cluster**.
2. Select the source environment (Klaw metadata with topics) and target
   environment (Apache Kafka cluster where ACLs have to be created)

   ![image](../../../static/images/sync/SyncTopicsToCluster.png)

By following these steps, you can create ACLs on any Apache Kafka
cluster.
