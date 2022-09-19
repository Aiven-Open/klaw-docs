Users, Roles and Teams
======================


Klaw has concepts of users, roles and teams.

.. glossary::

    User
      An individual with a login. Each user can belong to one team and hold one role. Users can be added by a user with ``ADD_EDIT_DELETE_USERS`` permission or the ``SUPERADMIN`` role.

    Team
      A collection of users. Teams also "own" topics and when one user in a team makes a request, a peer from the same team is expected to approve. Teams can be managed by a user with ``ADD_EDIT_DELETE_TEAMS`` permission.

    Role
      The type of user, can be ``USER`` or ``SUPERADMIN``. Further roles can be added and configured in the **Roles - Permissions** section by users with ``ADD_EDIT_DELETE_ROLES`` permission.

    Superadmin
      With this role, the user can manage the clusters and environments in the Klaw installation. They can also manage users and teams.


Users can request to create or promote topics, schemas and connectors for their team. Other users in the same team can check and approve the requests.

Available role permissions
--------------------------

When creating and configuring roles, these are the available permissions:

``REQUEST_CREATE_TOPICS``
``REQUEST_DELETE_TOPICS``
``REQUEST_CREATE_SUBSCRIPTIONS``
``REQUEST_DELETE_SUBSCRIPTIONS``
``REQUEST_CREATE_SCHEMAS``
``REQUEST_DELETE_SCHEMAS``
``APPROVE_TOPICS``
``APPROVE_SUBSCRIPTIONS``
``APPROVE_SCHEMAS``
``APPROVE_ALL_REQUESTS_TEAMS``
``SYNC_TOPICS``
``SYNC_SUBSCRIPTIONS``
``SYNC_BACK_TOPICS``
``SYNC_BACK_SUBSCRIPTIONS``
``ADD_EDIT_DELETE_TEAMS``
``ADD_EDIT_DELETE_USERS``
``ADD_EDIT_DELETE_CLUSTERS``
``ADD_EDIT_DELETE_ENVS``
``ADD_EDIT_DELETE_TENANTS``
``ADD_EDIT_DELETE_ROLES``
``UPDATE_PERMISSIONS``
``UPDATE_SERVERCONFIG``
``VIEW_EDIT_ALL_ENVS_CLUSTERS_TENANTS``
``FULL_ACCESS_USERS_TEAMS_ROLES``
``SHUTDOWN_KAFKAWIZE``
``ALL_TEAMS_REPORTS``
