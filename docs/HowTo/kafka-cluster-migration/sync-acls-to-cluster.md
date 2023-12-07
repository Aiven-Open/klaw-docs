# Synchronize ACLs to cluster

To synchronize ACLs from Klaw to an Apache Kafka® cluster, follow the
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

   ![Screenshot Klaw's Synchronize ACLs to Cluster page. It shows a list of ACLs that can be chosen by checking a checkbox to be synchronized to a specific Kafka cluster. The list is organized into columns that display the topic name, the environment and the team. Below the table is a form to create topics on target environment where user can chose between to synchronise only the selected or all topics. The user can configure from which Klaw environment to which Cluster environment the data is synced.](../../../static/images/sync/SyncTopicsToCluster.png)

By following these steps, you can create ACLs on any Apache Kafka
cluster.
