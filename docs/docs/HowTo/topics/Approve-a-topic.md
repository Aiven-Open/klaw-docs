# Approve Topic

When a topic request is made, a team member other than the request
creator can review and approve or decline the request.

## Approve a request

1.  Upon login to Klaw, a pop-up will notify you of **Pending
    Requests**. To view them, select **Yes, show me!** or navigate to
    **Approve** and select **Topic Requests** to view the pending
    requests.
2.  Review all information related to the request and approve it by
    clicking the tick button while viewing the pending topic requests.
3.  The topic will immediately attempt to be provisioned upon approval.

>In the event of any issue in the topic creation, the request will remain
in the approvals view for re-approval once the issue is resolved.


## Declining a request

1.  Upon login to Klaw, a pop-up will notify you of **Pending
    Requests**. To view them, select **Yes, show me!** or navigate to
    **Approve** and select **Topic Requests** to view the pending
    requests.
2.  Review the information associated with the topic request and decline
    it by clicking the **X** button.
3.  Provide a reason for declining the request.
4.  The request will be declined, and the creator will receive an email
    with your reason for declining the request.

## Reviewing a request

The request contains various fields to help the approver make an
informed decision and keep an audit record of the request and the topic
details within Klaw.

-   

    Cluster

    :   Establishes the cluster environment for which the request is
        being made.

-   

    Partitions

    :   The number of Partitions this topic has in this environment.

-   

    Replication Factor

    :   The replication factor set for this topic in this environment.

-   

    Requestor

    :   The person who has raised this request. In most cases, this will
        be a fellow team member, but in the case of a *claim topic*
        request, it would be a person from another team.

-   

    Team

    :   The team who has raised this request. In most cases will be your
        team, but in the case of a *claim topic* request, it would be
        another team.

-   

    Request Type

    :   The type of request being requested, these can take the form of
        an action.

-   

    Create

    :   Create a new topic Request is in this category.

-   

    Delete

    :   Delete a topic request is in this category.

-   

    Update

    :   Claim a topic and edit a topic are both in this category.

-   

    Date Requested

    :   This is a timestamp of when the request was created.

-   

    Other Topic Configs

    :   The advanced configuration will appear in this space, such as
        those described in [Apaches
        documentation](https://kafka.apache.org/documentation/#topicconfigs)

-   

    Description

    :   This will include details provided by the topic creator.

-   

    Remarks

    :   This is any remarks on the request by the request creator.

-   

    Status

    :   

        The Status will show the current state of the request

            -   created
            -   approved
            -   declined
            -   deleted

-   

    Approving Info

    :   This lists the team and the team members who can approve the
        request.

:::note
The request creator cannot approve their own request and will not be
listed as an approver.

