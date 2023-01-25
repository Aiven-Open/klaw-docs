Promotion
=========


Klaw allows users to control the creation of resources in their Kafka environment through the concept of promotion.

- This adds an extra layer of security avoiding risk of manually duplicating entries across environments.
- The requests are properly reviewed and verified by another pair of eyes, maintaining sanity of the application.
- Information is audited. Who is raising the request, when it has been created, and who approved and when. Helps in identifying problems during unexpected behaviour of system.
- By maintaining a history of applied changes, easy track back on the evolution of a configuration.


Promotion of resources are administered by the resource owners, each team has the ability to promote a topic, schema or connector from one environment to the next.

Configure environment promotion
-------------------------------
    Server Configuration
      Found under **Dashboard -> Settings** the Superadmin user has the ability to define the ``Tenant Model`` which configures which environments promote to the next environment in your organisation.
      Each resource Topic/Schema must already be created by the superadmin under ``Environments`` before being added to the ``Tenant Model`` or the server will reject the configuration.
      Below in the example we can see that the Kafka Topic environments have been defined as 'Dev' & 'TST' the order is also specified which is the order that will be enforced in the promotion of topics.
      Similarily the Schema Registry environments have all been defined and placed in order.
```
{
  "tenantModel":
    {
      "tenantName": "default",
      "baseSyncEnvironment": "DEV",
      "orderOfTopicPromotionEnvsList": ["DEV", "TST"],
      "requestTopicsEnvironmentsList": ["DEV", "TST"],
      "orderOfSchemaPromotionEnvsList" : [ "DEV_SCH", "TST_SCH" ],
      "requestSchemaEnvironmentsList" : [ "DEV_SCH", "TST_SCH" ]
    }
}

```



    Topic Promotion
      Once a topic is created in the base environment it is then possible to promote this to the next environment.
      This will create a promotion request that can be reviewed and approved or declined by the requesters team mates. Each created environment is able to be seen in the same ``Topic Overview`` where the topic can be promoted.

        How to Promote a Topic
        1. Select *Topics* on the navigation bar.
        2. Select the specific Kafka Topic you wish to promote to the higher environment.
        3. A button is available to promote the topic to the next environment where a higher environment has been configured. ``Promote to [Next Environment]``
        4. Configure the number of Partitions and Replication Factor for the higher environment in the drop downs provided.
        5. Confirm the promotion to the next environment by selecting ``Submit Promotion to [Next Environment]``
        6. A Topic request is now created for team members to review and approve under Approvals.

    Schema Promotion
      Under the ``Topic Overview`` the schema can be requested and viewed for an individual topic and as of Release 2.0.0 the ability to promote existing schemas to higher level environments is also available.
      The requester can select a particular version of the schema to promote from the lower environment to the higher environment.


        How to Promote a Schema
        1. Select *Topics* on the navigation bar.
        2. Select the specific Kafka Topic you wish to promote a Schema to the higher environment.
        3. Select the **Schema** tab under the main Topic section.
        4. A button is available to promote a schema to a higher environment where a higher environment has been configured. ``Promote to [Next Environment]``
        5. Select the version of the Schema you wish to promote to the higher environment, this Schema will be available for the team to review when approving or declining the request.
        6. Optionally if the Schema you wish to promote is not compatible with the existing schemas on that topic ``Force Register Schema`` can be used to register the Schema.
        7. Confirm the promotion to the next environment by selecting ``Submit Promotion to [Next Environment]``
        8. A schema request is now created for team members to review and approve under Approvals.

    How does Force Register work?
        The ``Force Register Schema`` option, for use when a schema needs to be promoted to the higher environment but which does not meet the compatibility of the previous schemas.
        If this option is selected, then klaw will change the compatibility of the topic to ``NONE``, register the new schema and then revert to the previous topic compatibility.
        If the topic compatibility is not set it will fall back to the global compatibility however Klaw will not change the global compatibility.


Note that any request raised cannot be approved by the same user, rather it has to be a different user from the same team.