Promote A Topic
===============
Promotion is one of the core tenants of Klaw and allows better governance, administration and control of topics.
It ensures a topic can be created in the lowest environment and then promoted to higher environments as required.


Prerequisites
--------------
The Superadmin must ensure all prerequisites are met before this functionality is used see :doc:`promotion`


Promoting a topic
-----------------------------
Topic Promotion
Once a topic is created in the base environment it is then possible to promote this to the next environment.
This will create a promotion request that can be reviewed, approved, or declined by the requester's teammates. Each created environment can be seen in the same ``Topic Overview`` where the topic can be promoted.

How to Promote a Topic:

1. Select *Topics* on the navigation bar.
2. Select the specific Kafka Topic you wish to promote to the higher environment.
3. A button is available to promote the topic to the next environment where a higher environment has been configured. ``Promote to [Next Environment]``
4. Configure the number of Partitions and Replication Factor for the higher environment in the drop downs provided.
5. Confirm the promotion to the next environment by selecting ``Submit Promotion to [Next Environment]``
6. A Topic request is now created for team members to review and approve under Approvals.