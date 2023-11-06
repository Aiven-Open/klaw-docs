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

## More information on promotion topics and schemas

- How to promote a topic
- How to promote a schema
