# Promotion

Klaw allows users to control the creation of resources in their Apache Kafka
environment through the concept of promotion.

- This adds an extra layer of security, avoiding the risk of manually duplicating entries across environments.
- The requests are correctly reviewed and verified by another pair of eyes, maintaining the sanity of the application.
- Information is audited. It is helpful to know who raised and approved the request and when it was created. This
  information can aid in identifying issues that arise during unexpected system behavior.
- By maintaining a history of applied changes, it is easy to track back the evolution of a configuration.
- Preloading requests with the advanced configuration of the lower environment to help ensure developers don't miss any
  important configuration.

The resource owners administer the promotion of resources, and each team can
promote a topic, schema, or connector from one environment to the next.

## Configure environment promotion

Server Configuration Found under **Dashboard -\> Settings**, the
Superadmin user has the ability to define the **Tenant Model**, which
configures which environments promote to the next environment in your
organization. Each resource Topic/Schema must already be created by the
superadmin under **Environments** before being added to the **Tenant
Model** or the server will reject the configuration. The below example
defines the Apache Kafka topic environments as "DEV" & "TST" and specifies
the order that will be enforced in the promotion of topics. Similarly,
the Schema Registry environments have all been defined and placed in
order.

```json
{
  "tenantModel": {
    "tenantName": "default",
    "baseSyncEnvironment": "DEV",
    "orderOfTopicPromotionEnvsList": ["DEV", "TST"],
    "requestTopicsEnvironmentsList": ["DEV"],
    "requestSchemaEnvironmentsList": ["DEV_SCH"],
    "orderOfConnectorsPromotionEnvsList": [],
    "requestConnectorsEnvironmentsList": []
  }
}
```

:::note
In Klaw version 2.2.0, the `orderOfSchemaPromotionEnvsList` has been replaced with an enhanced feature that allows users
to associate a schema registry with a Apache Kafka environment in the Add/Modify Schema Environment pages—matching the order of
promotion defined in `orderOfTopicPromotionEnvsList`.
:::

## Topic promotion

Once a topic is created in the base environment, you can promote it to the next higher-level environment. This will
create a promotion request that your teammates can review, approve, or decline. The **Topic overview** view will show
all the environments the topic is configured on, including the environment to which you can promote the topic.

### Promote a topic

To promote a topic to a higher environment, follow these steps:

1. Select **Topics** on the navigation bar.
2. Select the specific Apache Kafka topic you want to promote to the higher environment.
3. Select the **Promote to \[Next Environment\]** button to promote the topic to the next environment (higher
   environment) that has been configured.
4. Configure the number of **Partitions** and **Replication factor** for the higher environment in the dropdowns
   provided.
5. Confirm the promotion to the next environment by selecting **Submit Promotion to \[Next Environment\]**
6. A topic request is now created for team members to review and approve under **Approvals**.

## Schema promotion

In the **Topic overview**, you can request and view the schema for an individual topic. Release 2.0.0 allows you to
promote existing schemas to higher-level environments. To do this, select the specific schema version you want to
promote from the lower environment to the higher environment.

### Promote a schema

To promote a schema to a higher environment, follow these steps:

1. Select **Topics** on the navigation bar.
2. Select the Apache Kafka topic for which you want to promote the schema to a higher environment.
3. Select the **Schema** tab under the main topic section.
4. Select the **Promote to \[Next Environment\]** button to promote a schema to the next environment (higher
   environment) that has been configured.
5. To promote a schema to a higher environment, select the specific version of the schema that you want to promote. This
   schema will be available for your team to review when approving or declining the request.
6. Optionally, you can use the **Force Register Schema** option to register a schema that is not compatible with the
   existing schemas on that topic.
7. Confirm the promotion to the next environment by selecting **Submit Promotion to \[Next Environment\]**.
8. A schema request is now created for team members to review and approve under **Approvals**.

### How does Force Register work

When promoting a schema to a higher environment in Klaw, you can use the **Force Register Schema** option, which enables
you to register a schema that may not be compatible with previous schemas. By selecting this option, Klaw will change
the compatibility of the subject (topic) to **NONE**, register the new schema, and revert to the previous subject
compatibility. If the subject compatibility is not set, it will fall back to global compatibility. However, Klaw will
not change the global compatibility.

:::note
Requests cannot be approved by the user who raised it. It must be approved by a different user from the same team.
