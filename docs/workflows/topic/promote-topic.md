# Promote a topic

Promotion is a key feature of Klaw that improves governance,
administration, and control of topics. With topic promotion, a topic
can be initially created in the lowest environment and then promoted to
higher environments as needed.

Learn more: [Concepts—Promotion](../../workflows/promotion.md)

## Prerequisites

The Superadmin must ensure all prerequisites are met before this
functionality is used see
[Concepts—Promotion](../../workflows/promotion.md)

## Topic promotion

Once a topic is created in the base environment, you can promote it to the next higher-level environment. This will
create a promotion request that your teammates can review, approve, or decline. The **Topic overview** view will show
all the environments the topic is configured on, including the environment to which you can promote the topic.

## Topic promotion step by step

To promote a topic to a higher environment, follow these steps:

1. Select **Topics** on the navigation bar.
2. Select the specific Apache Kafka® topic you want to promote to the higher environment.
3. Select the **Promote to \[Next Environment\]** button to promote the topic to the next environment (higher
   environment) that has been configured.
4. Configure the number of **Partitions** and **Replication factor** for the higher environment in the dropdowns
   provided.
5. Confirm the promotion to the next environment by selecting **Submit Promotion to \[Next Environment\]**
6. A topic request is now created for team members to review and approve under **Approvals**.
