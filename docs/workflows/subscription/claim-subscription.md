# Claim a subscription

To claim an existing subscription in Klaw, from another team.
:::note
This functionality is in Beta as of Klaw release 2.9.0 and we are working to improve it in upcoming releases.
At the moment this functionality is only available through the older angular user interface.
:::

## Create a claim subscription request

Once a subscription is created in an environment, it is possible to
claim the subscription from the topic if you are another team.

1. In Klaw, select **Topics** on the navigation bar.
2. Choose the specific Apache Kafka® topic where the subscription you wish to
   claim is located.
3. Select the blue **Claim** on the right-hand side of the subscriptions table at the bottom of the topic overview.

   :::note
   This request can be raised by any team that does not currently own the subscription.
   On Approval it requires two approvals, one from the topic owner who needs to approve a team accessing their data
   and secondly by the current subscription owner.
   :::

4. Confirm that you are sure you wish to claim the subscription.
5. A claim subscription request is created.

## Notes on Claim Subscription

Claim functionality is currently only available to be initiated through the Angular(old) UI. Although approvals can be made through either UI.

This is the first time Klaw has introduced the need for more than one approver for a request.
The Topic owner needs to approve the request as the data owner, and the existing owner needs to approve the transfer of the subscription to the new team.

The Service User will not transfer over to the new team until all subscriptions owned by the original team for that service user are transferred to the new team.

The topic owner must be the first approval, this is not reflected well in the UI and this user experience is planned to be improved as we move forward.

## Limitations to the current implementation

Currently when looking at the subscription table if a team has multiple service users for a topic it will not be possible to see if you have correctly selected the desired service account until after the claim request is created.
Once created you can see this information on the "My Teams Requests" page along with the two teams who are required to approve the claim.

We do not currently recommend using this functionality with IP based subscriptions support for these will be part of Klaw 2.10.0
