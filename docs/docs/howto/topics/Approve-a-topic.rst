Approve A Topic
===============
Once a topic request has been made a team member, not the creator of the request can view and approve or decline the request.



Approve the request
--------------------

1. On login a pop up will appear to let you know their are 'Pending Requests' you can view them directly from selecting 'Yes, show me!' or select the 'Approve' navigation item and select topic requests.
2. Once you are viewing the topic requests that are pending approval, the approver can view all of the information associated with the topic and select the tick button to approve a request.
3. If you approve the request it will immediately attempt to provision the topic.

.. note::
In the event of any issue in the creation of the topic, the request will stay in the approvals view so that it may be re-approved and provisioned when the issue is resolved.

Declining a Request
-------------------

1. On login a pop up will appear to let you know their are 'Pending Requests' you can view them directly from selecting 'Yes, show me!' or select the 'Approve' navigation item and select topic requests.
2. Once you are viewing the topic requests that are pending approval, the approver can view all of the information associated with the topic and select the X button to decline a request.
3. If you decline the request it will ask for you to provide a reason for declining.
4. Once a reason is specified the request can be declined. The creator of the request will receive an email detailing your reason for declining the request.


Reviewing the Request
---------------------

The request contains a number of fields to help the approver make an informed decision and also keeping an audit record of the request and the topic details within Klaw.

- Cluster
Establishes the cluster environment for which the request is being made.
- Partitions
The number of Partitions this topic has in this environment.
- Replication Factor
The replication factor set for this topic in this environment.
- Requestor
The person who has raised this request, in most cases this will be a fellow team member but in the case of a 'claim topic' request it would be a person from another team.
- Team
The team who has raised this request, in most cases this will be a your team but in the case of a 'claim topic' request it would be another team.
- Request Type
The type of request being requested these take the form of an action.
- Create
Create a new topic Request is in this category.
- Delete
Delete a topic request is in this category.
- Update
Claim a topic and edit a topic are both in this category.
- Date Requested
This is a timestamp of when the request was created
-  Other Topic Configs
Advanced configuration will appear in this space such as those described here in `Apaches documentation <https://kafka.apache.org/documentation/#topicconfigs>`_
-  Description
This will include details provided by the topic creator.
-  Remmarks
This is any remarks on the request by the request creator.
- Status
The Status will show the current state of the request
 - created
 - approved
 - declined
 - deleted
- Approving Info
 This lists the team and the team members who can approve the request. 
.. note::
   Note that if you create a request you can never approve your own request and so you will not be listed as an approvier.