Workflows
=========


Klaw has defined workflows for applying configurations to Kafka clusters. Instead of directly creating configurations on the cluster, Klaw follows the `Four Eyes Principle` concept. This approach entails raising a request and obtaining approval before implementing any changes.


Benefits of Workflows:

- It provides an additional layer of security by mitigating risks associated with manual entries.
- Ensures a thorough review and verification of requests by another person, ensuring the sanity of the application.
- Comprehensive information auditing, including request origin, creation time, approval details, and timestamps, enables problem identification during unexpected system behavior.
- Easy tracking of configuration changes history, allowing for a quick overview of configuration evolution.

Workflows in Klaw are managed by defining ownerships, roles, permissions, and authorizations. In the following section, you will find an overview of the key concepts related to ownership in Klaw.

.. glossary::

    Request and approval
      One of the primary advantages of using Klaw is the governance it adds to the growing Apache Kafka® landscape. Developers can **request** new topics, schemas, ACLs, or connectors themselves. The request is then reviewed and **approved** by another member of the same team. 

        .. note::
            This is the default configuration. The default configuration permits only users with the  ``USER`` role to make requests. Users with the ``SUPERADMIN`` role cannot request but can manage users and teams.

.. note::
   A user who raises a request cannot approve it. Instead, a different user must approve.

Approvals
---------

In Klaw, the approval process plays an essential role in managing workflows. This process entails verifying and accepting proposed changes, making it a crucial step toward enhancing the security and governance of the system.

Different Roles
````````````````

Within this approval process, different roles come into play, each with its unique responsibilities and permissions. These roles include:

#. **Resource Owners Team** : When transferring ownership between teams, the current resource owner provides the necessary approval.
#. **Requestors Team** : Usually, a fellow team member reviews and either approves or declines a request.
#. **All Approvers** : Users assigned the ``APPROVE_ALL_REQUESTS_TEAMS`` permission can approve any request from any team.
#. **Admin** : Admin users manage Klaw, primarily reviewing and approving user requests unless they also assinged the ``APPROVE_ALL_REQUESTS_TEAMS`` permission.

User Requests
#############

The matrix below provides an understanding of the roles that approve a user registration request.

.. list-table:: New User Approver matrix
   :header-rows: 1
   :class: no-scroll

   * - Operation Type
     - Resource Owners Team
     - Requestors Team
     - All Approvers
     - Admin
   * - User Registration Request
     -
     -
     -
     - ✅

Topic Requests
##############

Topic Owner
  In Klaw, each Kafka topic is owned by a team, and all team members are considered owners. Any requests to modify the topic's configuration, whether direct or indirect, are sent to the team for approval. The team has the authority to approve or deny these requests. The team can consist of producers, consumers, or both or have no specific roles assigned.

  
  .. note:: 
      The team remains the owner of the topic across all environments. Only this team has the right to delete the topic.


.. list-table:: Topic Approver matrix
   :header-rows: 1
   :class: no-scroll

   * - Operation Type
     - Resource Owners Team
     - Requestors Team
     - All Approvers
     - Admin
   * - New Topic Request
     -
     - ✅
     - ✅
     -
   * - Update Topic Request
     -
     - ✅
     - ✅
     -
   * - Delete Topic Request
     -
     - ✅
     - ✅
     -
   * - Claim Topic Request
     - ✅
     -
     - ✅
     -
   * - Promote Topic Request
     -
     - ✅
     - ✅
     -

Connector Requests
##################

Connectors Owner
  Klaw can integrate with Kafka Connect and define various types of connectors. Any team can request a specific connector, and they will become the owners of that connector.

.. list-table:: Connector Approver matrix
   :header-rows: 1
   :class: no-scroll

   * - Operation Type
     - Resource Owners Team
     - Requestors Team
     - All Approvers
     - Admin
   * - New Connector Request
     -
     - ✅
     - ✅
     -
   * - Update Connector Request
     -
     - ✅
     - ✅
     -
   * - Delete Connector Request
     -
     - ✅
     - ✅
     -
   * - Claim Connector Request
     - ✅
     -
     - ✅
     -
   * - Promote Connector Request
     -
     - ✅
     - ✅
     -

Schema Requests
###############

Schema Owner
  Klaw can integrate with Karapace or Schema registry and define schemas on a topic. Currently, the topic owner team can raise a schema request, and they become the owners of the schema and its evolution.

.. list-table:: Schema Approver matrix
   :header-rows: 1
   :class: no-scroll

   * - Operation Type
     - Resource Owners Team
     - Requestors Team
     - All Approvers
     - Admin
   * - New Schema Request
     -
     - ✅
     - ✅
     -
   * - Delete Schema Request
     -
     - ✅
     - ✅
     -
   * - Promote Schema Request
     -
     - ✅
     - ✅
     -


.. note::
   With Schemas there is no `Claim Schema` as it is assigned to a topic and so the Topic owner owns the Schema. Likewise there is no `Update Schema` as existing Schemas are kept and a new Schema with an incremented version is added instead.

Subscription Requests
#####################

Subscription Owner
  In Klaw, subscriptions (ACLs) are defined to secure Kafka topics. Each team that wants to produce or consume from a topic becomes the subscription owner. Teams can submit subscription requests for a specific topic (either as a producer or consumer), which are then reviewed by the Topic Owner team for approval. The Topic Owner team alone can delete subscriptions, access consumer offsets, view topic contents, and manage any relevant subscription credentials, if applicable.


.. list-table:: Subscription Approver matrix
   :header-rows: 1
   :class: no-scroll

   * - Operation Type
     - Resource Owners Team
     - Requestors Team
     - All Approvers
     - Admin
   * - New Subscription Request
     -
     - ✅
     - ✅
     -
   * - Delete Subscription Request
     -
     - ✅
     - ✅
     -
   * - Claim Subscription Request
     - ✅
     -
     - ✅
     -


.. note::
   When claiming a Subscription, if the Subscription is owned by a team that does not own the corresponding topic, then two approvals are required: 
    - Approval by the team that owns the Subscription.
    - Approval by the team that owns the topic.