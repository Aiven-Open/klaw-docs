# Synchronize ACLs from cluster

To synchronize ACLs from an Apache Kafka cluster with Klaw metadata, use
this procedure, which entails retrieving the ACLS (Producers &
Consumers) from an existing Kafka cluster and assigning them to a team
in Klaw.

## Prerequisites

1. **Environment configuration**: Make sure that the `klaw.tenant.config` property is set up as described in the [tenant configuration](tenant-config) documentation.
2. **User permissions**: Log in with a user account with either `SUPERADMIN` or `SYNC_SUBSCRIPTIONS` permissions.

## Steps to syncrhronize ACLs

1. Navigate to the **Synchronize** menu and select **ACLs from Cluster**.
2. Choose one or more ACLs from the list, assign them to a team, and select **Save**. The selected ACLs
   will now appear on the topic overview page, assigned to the chosen team.

   ![image](../../../static/images/sync/SyncAclsFromCluster.png)

3. To view all existing ACLs, whether assigned to teams or not, select the **Show all** option. This will display all Kafka ACLs, both assigned and unassigned to any teams.

Following the above steps, you can synchronize ACLs from an Apache Kafka cluster with Klaw metadata.
