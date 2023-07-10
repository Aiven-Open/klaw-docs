# Promotion

Klaw allows users to control the creation of resources in their Kafka
environment through the concept of promotion.

-   This adds an extra layer of security, avoiding the risk of manually
    duplicating entries across environments.
-   The requests are properly reviewed and verified by another pair of
    eyes, maintaining sanity of the application.
-   Information is audited. Who is raising the request, when it has been
    created, and who approved and when. Helps in identifying problems
    during unexpected behaviour of system.
-   By maintaining a history of applied changes, easy track back on the
    evolution of a configuration.

The resource owners administer promotion of resources, and each team can
promote a topic, schema or connector from one environment to the next.

## Configure environment promotion

Server Configuration Found under **Dashboard -\> Settings**, the
Superadmin user has the ability to define the **Tenant Model**, which
configures which environments promote to the next environment in your
organization. Each resource Topic/Schema must already be created by the
superadmin under **Environments** before being added to the **Tenant
Model** or the server will reject the configuration. The below example
defines the Kafka Topic environments as 'Dev' & 'TST' and specifies
the order that will be enforced in the promotion of topics. Similarly,
the Schema Registry environments have all been defined and placed in
order. :: { \"tenantModel\": { \"tenantName\": \"default\",
\"baseSyncEnvironment\": \"DEV\", \"orderOfTopicPromotionEnvsList\":
\[\"DEV\", \"TST\"\], \"requestTopicsEnvironmentsList\": \[\"DEV\"\],
\"requestSchemaEnvironmentsList\" : \[ \"DEV_SCH\"\],
\"orderOfConnectorsPromotionEnvsList\" : \[\],
\"requestConnectorsEnvironmentsList\" : \[\] } }

::: note
::: title
Note
:::

In Klaw version 2.2.0, the `orderOfSchemaPromotionEnvsList` has been
replaced with an enhanced feature that allows users to associate a
schema registry with a Kafka environment in the Add/modify Schema
Environment pages. Thereby matching the order of promotion defined in
`orderOfTopicPromotionEnvsList`.
:::

## Topic promotion

Once a topic is created in the base environment it is then possible to
promote this to the next higher level environment. This will create a
promotion request that can be reviewed, approved, or declined by the
requester's teammates. **Topic Overview** view where the topic can be
promoted will show all of the environments the topic is now configured
on.

### Promote a topic

To promote a topic to a higher environment, follow these steps:

1.  Select **Topics** on the navigation bar.
2.  Select the specific Kafka Topic you wish to promote to the higher
    environment.
3.  A button is available to promote the topic to the next environment
    where a higher environment has been configured. **Promote to \[Next
    Environment\]**
4.  Configure the number of Partitions and Replication Factor for the
    higher environment in the drop downs provided.
5.  Confirm the promotion to the next environment by selecting **Submit
    Promotion to \[Next Environment\]**
6.  A Topic request is now created for team members to review and
    approve under Approvals.

## Schema promotion

Under the **Topic Overview**, the schema can be requested and viewed for
an individual topic. As of Release 2.0.0, the ability to promote
existing schemas to higher-level environments is also available. The
requester can select a particular version of the schema to promote from
the lower environment to the higher environment. The requester can
select a particular version of the schema to promote from the lower
environment to the higher environment.

### Promote a schema

To promote a schema to a higher environment, follow these steps:

1.  Select **Topics** on the navigation bar.
2.  Select the specific Kafka Topic you wish to promote a Schema to the
    higher environment.
3.  Select the **Schema** tab under the main Topic section.
4.  A button is available to promote a schema to a higher environment
    where a higher environment has been configured. **Promote to \[Next
    Environment\]**
5.  Select the version of the Schema you wish to promote to the higher
    environment, this Schema will be available for the team to review
    when approving or declining the request.
6.  Optionally, if the Schema you wish to promote is not compatible with
    the existing schemas on that topic, **Force Register Schema** can be
    used to register the Schema.
7.  Confirm the promotion to the next environment by selecting **Submit
    Promotion to \[Next Environment\]**
8.  A schema request is now created for team members to review and
    approve under Approvals.

### How does Force Register work

When promoting a schema to a higher environment in Klaw, you can use the
**Force Register Schema** option, which enables you to register a schema
that may not be compatible with previous schemas. By selecting this
option, then Klaw will change the compatibility of the subject (topic)
to **NONE**, register the new schema and then revert to the previous
subject compatibility. If the subject compatibility is not set, it will
fall back to the global compatibility. However, Klaw will not change the
global compatibility.

::: note
::: title
Note
:::

Any request raised cannot be approved by the same user, rather it has to
be a different user from the same team.
:::
