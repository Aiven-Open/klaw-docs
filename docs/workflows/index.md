# Workflows in Klaw

Klaw has defined workflows for applying configurations to Apache Kafka®
clusters. Instead of directly creating configurations on the cluster,
Klaw follows the [Four Eyes Principle] concept. This
approach entails raising a request and obtaining approval before
implementing any changes.

Benefits of workflows:

- It provides an additional layer of security by mitigating risks
  associated with manual entries.
- Ensures a thorough review and verification of requests by another
  person, ensuring the sanity of the application.
- Comprehensive information auditing, including request origin,
  creation time, approval details, and timestamps, enables problem
  identification during unexpected system behavior.
- Easy tracking of configuration changes history, allowing for a quick
  overview of configuration evolution.

Workflows in Klaw are managed by defining ownerships, roles,
permissions, and authorizations. In the following section, you will find
an overview of the key concepts related to ownership in Klaw.

Request and approval

One of the primary advantages of using Klaw is the governance it adds to the growing Apache Kafka landscape. Developers
can **request** new topics, schemas, ACLs, or connectors themselves. The request is then reviewed and **approved** by
another member of the same team.

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

1. **Resource Owners Team**: When transferring ownership between
   teams, the current resource owner provides the necessary approval.
2. **Requestors Team**: Usually, a fellow team member reviews and
   either approves or declines a request.
3. **All Approvers**: Users assigned the `APPROVE_ALL_REQUESTS_TEAMS`
   permission can approve any request from any team.
4. **Admin**: Admin users manage Klaw, primarily reviewing and
   approving user requests unless they are also assigned the
   `APPROVE_ALL_REQUESTS_TEAMS` permission.

## User requests

The table below outlines the roles responsible for approving user
registration requests:

### New user approver matrix

| Operation type            | Resource owners team | Requestors team | All Approvers | Admin |
| ------------------------- | -------------------- | --------------- | ------------- | ----- |
| User registration request |                      |                 |               | ✅    |

## Topic owner

In Klaw, each Apache Kafka topic is owned by a team, and all team members are
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

#### Topic approver matrix

| Operation Type        | Resource owners team | Requestors team | All Approvers | Admin |
| --------------------- | -------------------- | --------------- | ------------- | ----- |
| New topic request     |                      | ✅              | ✅            |       |
| Update topic request  |                      | ✅              | ✅            |       |
| Delete topic request  |                      | ✅              | ✅            |       |
| Claim topic request   | ✅                   |                 | ✅            |       |
| Promote topic request |                      | ✅              | ✅            |       |

## Connector owner

Klaw can integrate with _Apache Kafka Connect_ and define various types of
connectors. Any team can request a specific connector, and they will
become the owners of that connector.

### Connector request approvals

The table below outlines the roles responsible for approving various
connector-related requests:

#### Connector approver matrix

| Operation Type            | Edit topic | Requestors team | All Approvers | Admin |
| ------------------------- | ---------- | --------------- | ------------- | ----- |
| New connector request     |            | ✅              | ✅            |       |
| Update connector request  |            | ✅              | ✅            |       |
| Delete connector request  |            | ✅              | ✅            |       |
| Claim connector request   | ✅         |                 | ✅            |       |
| Promote connector request |            | ✅              | ✅            |       |

## Schema owner

Klaw can integrate with _Karapace_ or _schema registry_ and define
schemas on a topic. Currently, the topic owner team can raise a
schema request, and they become the owners of the schema and its
evolution.

### Schema request approvals

The table below outlines the roles responsible for approving various
schema-related requests:

#### Schema approver matrix

| Operation Type         | Edit topic | Requestors team | All Approvers | Admin |
| ---------------------- | ---------- | --------------- | ------------- | ----- |
| New schema request     |            | ✅              | ✅            |       |
| Delete schema request  |            | ✅              | ✅            |       |
| Promote schema request |            | ✅              | ✅            |       |

:::note
With schemas, there is no specific "Claim schema" as it is assigned to a topic. The owner of the topic also owns the
schema. Additionally, there is no Update schema since existing schemas are maintained, and a new schema with an
incremented version number is added instead.
:::

## Subscription owner

In Klaw, subscriptions (ACLs) are defined to secure Apache Kafka topics.
Each team that wants to produce or consume from a topic becomes the
subscription owner. Teams can submit subscription requests for a
specific topic (either as a producer or consumer), which are then
reviewed by the topic owner team for approval. The topic owner team
alone can access consumer offsets, view topic contents, and manage
any relevant subscription credentials, if applicable. The
subscription owner alone has the ability to delete their
subscription.

### Subscription request approvals

The table below outlines the roles responsible for approving various
subscription-related requests:

#### Subscription approver matrix

| Operation Type              | Edit topic | Requestors team | All Approvers | Admin |
| --------------------------- | ---------- | --------------- | ------------- | ----- |
| New subscription request    |            | ✅              | ✅            |       |
| Delete subscription request | ✅         |                 | ✅            |       |
| Claim subscription request  | ✅         |                 | ✅            |       |

:::tip
When claiming a subscription, if the subscription is owned by a team
that does not own the corresponding topic, then two approvals are
required:

- Approval by the team that owns the subscription.
- Approval by the team that owns the topic.

:::
