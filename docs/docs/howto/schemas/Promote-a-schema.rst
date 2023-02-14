Promote a Schema
================
Promotion is one of the core features of Klaw and allows better governance, administration, and control of schemas.
It ensures a schema can be created in the lowest environment and then promoted to higher environments as required.


Prerequisites
--------------
The Superadmin must ensure all prerequisites are met before this functionality is used see :doc:`Promotion <../../concepts/promotion>`


Schema Promotion
----------------

Once a schema is created in the base environment, it is possible to promote this to the next environment.
This will create a promotion request that the requester's teammates can review, approve, or decline. Each created schema environment can be seen in the same **Topic Overview** -> Schemas tab where the schema can be promoted.

To promote a schema, follow these steps:

1. Select *Topics* on the navigation bar.
2. Select the specific Kafka Topic you wish to promote a Schema to the higher environment.
3. Select the **Schema** tab under the main Topic section.
4. A button is available to promote a schema to a higher environment where a higher environment has been configured. **Promote to [Next Environment]**
5. Select the version of the Schema you wish to promote to the higher environment, this Schema will be available for the team to review when approving or declining the request.
6. Optionally, if the Schema you wish to promote is not compatible with the existing schemas on that topic, **Force Register Schema** can be used to register the Schema.
7. Confirm the promotion to the next environment by selecting **Submit Promotion to [Next Environment]**
8. A schema request is now created for team members to review and approve under Approvals.

How does Force Register work?

When promoting a schema to a higher environment, the **Force Register** Schema option allows registration even if it is not compatible with previous schemas.
If this option is selected, then Klaw will change the compatibility of the subject (topic) to **NONE**, register the new schema and then revert to the previous subject compatibility.
If the subject compatibility is not set, it will fall back to the global compatibility. However, Klaw will not change the global compatibility.

.. note::
   Any request raised cannot be approved by the same user, rather it has to be a different user from the same team.