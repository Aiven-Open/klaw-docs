# Promote a Schema

Schema promotion is a key feature of Klaw that improves governance,
administration, and control of schemas. With schema promotion, a schema
can be initially created in the lowest environment and then promoted to
higher environments as needed.

## Prerequisites

Before using this functionality, the Superadmin must ensure that all
prerequisites are met. For more information, see
[Promotion](../../Concepts/promotion).

## Schema promotion

After creating a schema in the base environment, you can promote it to
the next environment for better governance, administration, and control.
This involves submitting a promotion request that your teammates can
review and either approve or decline.

You can see all created schema environments in the same **Topic Overview
-\> Schemas** tab where you can initiate schema promotion.

To promote a schema to a higher environment, follow these steps:

1. Select _Topics_ on the navigation bar.
2. Select the specific Kafka Topic you wish to promote a Schema to the
   higher environment.
3. Select the **Schema** tab under the main Topic section.
4. Select the **Promote to \[Next Environment\]** button to promote the
   schema to a higher environment, provided the higher environment has
   been configured.
5. Choose the version of the schema that you want to promote to the
   higher environment. This schema will be available for your team
   members to review when they approve or decline the request.
6. Optionally, if the Schema you wish to promote is not compatible with
   the existing schemas on that topic, you can use the **Force Register
   Schema** option to register the schema.
7. Confirm the promotion to the next environment by selecting **Submit
   Promotion to \[Next Environment\]**
8. A schema request is now created for team members to review and
   approve under the _Approvals_ section.

### How does Force Register work

When promoting a schema to a higher environment in Klaw, you can use the
**Force Register Schema** option, which enables you to register a schema
that may not be compatible with previous schemas. By selecting this
option, Klaw changes the compatibility of the subject (topic) to
**NONE**, registers the new schema, and then reverts to the previous
subject compatibility. If the subject compatibility is not set, it falls
back to the global compatibility. Klaw will not change the global
compatibility.

:::note
The user who raised a request cannot approve it. Instead, a different user from the same team must approve the request.
:::

## Schema validation

When you submit a Schema Request, the Schema will be checked for
validation against the Schema Registry.

In case of errors, Klaw provides the following failure messages:

- **Schema is not compatible**: This message indicates that the submitted
  Schema fails to comply with the Schema Compatibility set on the schema
  registry. To fix this issue, review the Schema to see what is causing
  the compatibility problem.

- **Unable to validate Schema Compatibility**: It indicates that the submitted Schema may be invalid
  or missing the required Schema definition fields. It could also occur if
  there is a problem with communication to the Schema Registry, such as if
  it is not reachable. To fix this issue, review your Schema to ensure it
  is correctly defined. If it is, contact your administrator to resolve
  the issue with communication to the Schema Registry.

:::note
Using forceRegister will bypass the Schema Validation as you will be
overriding the compatibility on provisioning.
