# Claim a subscription

To claim an existing subscription in Klaw from another team.

:::note
This feature is in beta as of Klaw release 2.9.0, with improvements planned for upcoming releases. Currently, it is available only through the older Angular user interface.
:::

## About claim subscription

Subscription claims can currently only be initiated through the Angular (old) UI. However, transfer approval is possible through any user interface (old and new).

Klaw has introduced a new workflow requiring approval from multiple parties:

1. **Topic owner approval (data owner)**: The topic (data) owner, as the data owner, must approve the request first.
2. **Existing owner approval (subscription transfer)**: The current subscription owner must approve the transfer to the new team.

The **Service User** associated with the subscription won't be transferred until **all** subscriptions owned by the original team for that user are transferred to the new team.

:::note
While the UI might not explicitly state it, the topic owner's approval is always required first. We're actively working on improving the UI clarity in future updates.
:::

## Create a claim subscription request

Once a subscription is created in an environment, another team can claim the subscription associated with a topic.

1. In Klaw, click **Topics** on the navigation bar.
2. Select the Apache Kafka® topic that has the subscription you want to claim.
3. Click **Claim** from the subscriptions table on the topic overview.

   :::note
   Any team other than the current subscription owner can initiate this claim. The process requires two approvals: one from the topic owner for allowing another team access to their data and another from the current subscription holder.
   :::

4. Confirm that you want to claim the subscription.
5. This action creates a subscription claim request.

## Limitations

The current implementation of the subscription claim process has the following limitations:

- **Service user selection visibility**: The interface does not provide immediate confirmation of the selected service user when claiming a subscription. The selection details and the approval workflow become visible after submitting the claim and are available on the **My Teams Requests** page, indicating the necessary approvals.
- **IP-based subscription support**:Claims for IP-based subscriptions are not yet supported. It is advisable to avoid using this feature for IP-based subscriptions until Klaw version 2.10.0 provides the necessary support.
