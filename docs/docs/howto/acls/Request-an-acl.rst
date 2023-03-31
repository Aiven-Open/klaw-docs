Request a new Acl
====================

You can request a new acl to be created in Kafka quickly and easily using Klaw. As the topic owner, you have the ability to create, approve, or decline any Acl request created by any team.

Prerequisites
-------------
- The Superadmin must configure the environment within Klaw. See :doc:`Environments <../../concepts/clusters-environments>` for the steps to configure the environments.
- If connecting to an Aiven Kafka they will also have to configure the access token correctly. See :doc:`Cluster Connectivity <../../howto/clusterconnectivity/aiven-kafka-cluster-ssl-protocol>` for the steps to configure the environments.

Make an acl request For Aiven Kafka
---------------------

1. Navigate to the **Topics** menu in Klaw and select the topic for which you want to request a acl.
2. Select the **Subscriptions** tab, and **Subscribe** button in the top right corner of the list of acls.
3. Select the acl environment in which you want the acl to be created.
4. Select the ACL Type (Producer or Consumer)
5. Select the Topic if it has not already been selected
6. If using a Service Account a list used by your team will be viewable under the Service Account text box. If you add a new unique Service and it will be created with the acl.
.. note::
   You cannot use a Service Account that is in use by another team.
7. Add any remarks to inform the approvers decision.



Make a consumer acl request for Kafka
---------------------

1. Navigate to the **Topics** menu in Klaw and select the topic for which you want to request a acl.
2. Select the **Subscriptions** tab, and **Subscribe** button in the top right corner of the list of acls.
3. Select the acl environment in which you want the acl to be created.
4. Select the ACL Type (Consumer)
5. Set the consumer group the acl will use.
6. Select the Topic if it has not already been selected
7. Select whether you would like to identify the consumer by it's IP Address's or by it's username
.. note::
   If identifying by IP Address's you can add multiple by pressing the 'Plus' icon for each additional Ip Address
8. Add any remarks to inform the approvers decision.



Make a producer acl request for Kafka
---------------------

1. Navigate to the **Topics** menu in Klaw and select the topic for which you want to request a acl.
2. Select the **Subscriptions** tab, and **Subscribe** button in the top right corner of the list of acls.
3. Select the acl environment in which you want the acl to be created.
4. Select the ACL Type (Producer)
5. Select whether you would like to identify the target Topic using the Literal method where you select a topic from the dropdown. An optional transaction ID can be added if you chose the Literal method. Or if you would like to use a topic prefix to gain rights to produce to any topic with that prefix e.g. "retail-"
6. If using a Service Account a list used by your team will be viewable under the Service Account text box. If you add a new unique Service and it will be created with the acl.
7. Select whether you would like to identify the consumer by it's IP Address's or by it's username
.. note::
   You cannot use a Service Account that is in use by another team.
8. Add any remarks to inform the approvers decision.