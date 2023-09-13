# Workflows in Klaw

Klaw has defined workflows for applying configurations to Kafka
clusters. Instead of directly creating configurations on the cluster,
Klaw follows the [Four Eyes Principle] concept. This
approach entails raising a request and obtaining approval before
implementing any changes.

Benefits of workflows:

-   It provides an additional layer of security by mitigating risks
    associated with manual entries.
-   Ensures a thorough review and verification of requests by another
    person, ensuring the sanity of the application.
-   Comprehensive information auditing, including request origin,
    creation time, approval details, and timestamps, enables problem
    identification during unexpected system behavior.
-   Easy tracking of configuration changes history, allowing for a quick
    overview of configuration evolution.

Workflows in Klaw are managed by defining ownerships, roles,
permissions, and authorizations. In the following section, you will find
an overview of the key concepts related to ownership in Klaw.

Request and approval

  One of the primary advantages of using Klaw is the governance it adds to the growing Apache Kafka® landscape. Developers can **request** new topics, schemas, ACLs, or connectors themselves. The request is then reviewed and **approved** by another member of the same team.

:::note
This is the default configuration. The default configuration permits
only users with the `USER` role to make requests. Users with the
`SUPERADMIN` role cannot request but can manage users and teams.
:::

:::note
A user who raises a request cannot approve it. Instead, a different user
must approve.
:::

## Approval process

In Klaw, the approval process plays an essential role in managing
workflows. This process entails verifying and accepting proposed
changes, making it a crucial step toward enhancing the security and
governance of the system.

### Roles in approval process

Within this approval process, different roles come into play, each with
its unique responsibilities and permissions. These roles include:

1.  **Resource Owners Team**: When transferring ownership between
    teams, the current resource owner provides the necessary approval.
2.  **Requestors Team**: Usually, a fellow team member reviews and
    either approves or declines a request.
3.  **All Approvers**: Users assigned the `APPROVE_ALL_REQUESTS_TEAMS`
    permission can approve any request from any team.
4.  **Admin**: Admin users manage Klaw, primarily reviewing and
    approving user requests unless they are also assigned the
    `APPROVE_ALL_REQUESTS_TEAMS` permission.

## User Requests

The table below outlines the roles responsible for approving user
registration requests:

**New user approver matrix**

| Operation Type            | Resource Owners Team | Requestors Team | All Approvers | Admin |
|---------------------------|----------------------|-----------------|---------------|-------|
| User Registration Request |                      |                 |               | ✅    |

## Topic owner

In Klaw, each Kafka topic is owned by a team, and all team members are
considered owners. Any requests to modify the topic's configuration,
whether direct or indirect, are sent to the team for approval. The team
has the authority to approve or deny these requests. The team can
consist of producers, consumers, or both or have no specific roles
assigned.

:::note
The team remains the owner of the topic across all environments. Only
this team has the right to delete the topic.
:::

### Topic request approvals

The table below outlines the roles responsible for approving various
topic-related requests:

**Topic approver matrix**

| Operation Type        | Resource Owners Team | Requestors Team | All Approvers | Admin |
|-----------------------|----------------------|-----------------|---------------|-------|
| New Topic Request     |                      | ✅               | ✅             |       |
| Update Topic Request  |                      | ✅               | ✅             |       |
| Delete Topic Request  |                      | ✅               | ✅             |       |
| Claim Topic Request   | ✅                    |                 | ✅             |       |
| Promote Topic Request |                      | ✅               | ✅             |       |

## Connector owner

Klaw can integrate with *Kafka Connect* and define various types of
connectors. Any team can request a specific connector, and they will
become the owners of that connector.

### Connector request approvals

The table below outlines the roles responsible for approving various
connector-related requests:

**Connector approver matrix**

| Operation Type            | Resource Owners Team | Requestors Team | All Approvers | Admin |
|---------------------------|----------------------|-----------------|---------------|-------|
| New Connector Request     |                      | ✅               | ✅             |       |
| Update Connector Request  |                      | ✅               | ✅             |       |
| Delete Connector Request  |                      | ✅               | ✅             |       |
| Claim Connector Request   | ✅                    |                 | ✅             |       |
| Promote Connector Request |                      | ✅               | ✅             |       |

## Schema owner

Klaw can integrate with *Karapace* or *Schema registry* and define
    schemas on a topic. Currently, the topic owner team can raise a
    schema request, and they become the owners of the schema and its
    evolution.

### Schema request approvals

The table below outlines the roles responsible for approving various
schema-related requests:

**Schema approver matrix**

| Operation Type         | Resource Owners Team | Requestors Team | All Approvers | Admin |
|------------------------|----------------------|-----------------|---------------|-------|
| New Schema Request     |                      | ✅               | ✅           |       |
| Delete Schema Request  |                      | ✅               | ✅           |       |
| Promote Schema Request |                      | ✅               | ✅           |       |

:::note
With Schemas, there is no specific Claim Schema as it is assigned to a Topic. The owner of the Topic also owns the Schema. Additionally, there is no Update Schema since existing Schemas are maintained, and a new Schema with an incremented version number is added instead.
:::

## Subscription owner

In Klaw, subscriptions (ACLs) are defined to secure Kafka topics.
    Each team that wants to produce or consume from a topic becomes the
    subscription owner. Teams can submit subscription requests for a
    specific topic (either as a producer or consumer), which are then
    reviewed by the Topic Owner team for approval. The Topic Owner team
    alone can access consumer offsets, view topic contents, and manage
    any relevant subscription credentials, if applicable. The
    Subscription owner alone has the ability to delete their
    subscription.

### Subscription request approvals

The table below outlines the roles responsible for approving various
subscription-related requests:

**Subscription approver matrix**

| Operation Type              | Resource Owners Team | Requestors Team | All Approvers | Admin |
|-----------------------------|----------------------|-----------------|---------------|-------|
| New Subscription Request    |                      | ✅               | ✅             |       |
| Delete Subscription Request | ✅                    |                 | ✅             |       |
| Claim Subscription Request  | ✅                    |                 | ✅             |       |

:::tip
When claiming a Subscription, if the Subscription is owned by a team
that does not own the corresponding topic, then two approvals are
required: 
- Approval by the team that owns the Subscription. 
- Approval by the team that owns the topic.
:::
