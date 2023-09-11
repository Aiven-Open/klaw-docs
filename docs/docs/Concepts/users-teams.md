# Users, roles and teams

Klaw has three core concepts to manage access and authorization: users,
roles, and teams.


## User

A user is an individual with a login account in Klaw. Each user can
    belong to one or more teams and can be assigned specific roles with
    corresponding permissions. A user with `ADD_EDIT_DELETE_USERS`
    permission or SUPERADMIN role can create a new user account in Klaw.

## Team

A team is a group of users responsible for managing specific Kafka
    topics. Teams take **ownership** of topics, and when a team member
    makes a request related to a topic, another member of the same team
    is required to approve the request. A user with
    `ADD_EDIT_DELETE_TEAMS` permission or SUPERADMIN role can create a
    new user account in Klaw.

## Role

A role defines a set of permissions and access levels for a user.
    While the default roles available are **USER** and **SUPERADMIN**,
    users with the `ADD_EDIT_DELETE_ROLES` permission or SUPERADMIN role
    can create additional roles as per their requirements from the
    **Roles - Permissions** tab.

## Superadmin

A user with the SUPERADMIN role in Klaw has complete control over
    the entire Klaw platform. This role enables users to manage
    clusters, environments, users, and teams.


Users can request to create or promote topics, schemas, and connectors
for their team. Other users in the same team can check and approve the
requests.

## Available role permissions

When creating and configuring roles, these are the available
permissions:

-   `REQUEST_CREATE_TOPICS`
-   `REQUEST_DELETE_TOPICS`
-   `REQUEST_CREATE_SUBSCRIPTIONS`
-   `REQUEST_DELETE_SUBSCRIPTIONS`
-   `REQUEST_CREATE_SCHEMAS`
-   `REQUEST_DELETE_SCHEMAS`
-   `APPROVE_TOPICS`
-   `APPROVE_SUBSCRIPTIONS`
-   `APPROVE_SCHEMAS`
-   `APPROVE_ALL_REQUESTS_TEAMS`
-   `SYNC_TOPICS`
-   `SYNC_SUBSCRIPTIONS`
-   `SYNC_BACK_TOPICS`
-   `SYNC_BACK_SUBSCRIPTIONS`
-   `ADD_EDIT_DELETE_TEAMS`
-   `ADD_EDIT_DELETE_USERS`
-   `ADD_EDIT_DELETE_CLUSTERS`
-   `ADD_EDIT_DELETE_ENVS`
-   `ADD_EDIT_DELETE_TENANTS`
-   `ADD_EDIT_DELETE_ROLES`
-   `UPDATE_PERMISSIONS`
-   `UPDATE_SERVERCONFIG`
-   `VIEW_EDIT_ALL_ENVS_CLUSTERS_TENANTS`
-   `FULL_ACCESS_USERS_TEAMS_ROLES`
-   `SHUTDOWN_KLAW`
-   `ALL_TEAMS_REPORTS`
