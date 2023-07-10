# Promote a Topic

Promotion is one of the core features of Klaw and allows better
governance, administration, and control of topics. It ensures a topic
can be created in the lowest environment and then promoted to higher
environments as required.

## Prerequisites

The Superadmin must ensure all prerequisites are met before this
functionality is used see
`Promotion <../../concepts/promotion>`{.interpreted-text role="doc"}

## Topic Promotion

Once a topic is created in the base environment, it is possible to
promote this to the next environment. This will create a promotion
request that the requester\'s teammates can review, approve, or decline.
Each created environment can be seen in the same **Topic Overview**
where the topic can be promoted.

To promote a topic, follow these steps:

1.  In Klaw, select **Topics** on the navigation bar.
2.  Select the specific Kafka Topic you wish to promote to the higher
    environment.
3.  Click the **Promote to \[Next Environment\]** button to promote the
    topic to the next environment.
4.  Configure the number of Partitions and Replication Factor for the
    higher environment in the drop-downs provided.
5.  Click **Submit Promotion to \[Next Environment\]** to confirm the
    promotion to the next environment.
6.  A topic request is now created for team members to review and
    approve under **Approvals** view.
