Environments
============


In Klaw, Environments are comparable to application environments, which are wrappers over clusters.
Every environment is associated to a cluster. There can be 3 types of environments defined in Klaw.
- Kafka
- Schema Registry
- Kafka Connect

New Environment
---------------

This section provides information on adding a new environment.

* Any user with a permission ``ADD_EDIT_DELETE_ENVS`` can add a new cluster. By default, a users with SUPERADMIN role have the permission.


To add a new environment, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_ENVS`` permission.
2. Go to **Environments**, and click the **Add Environment** button.
4. Select an environment type, and provide the relevant details
5. Click **Save** to save your changes.

.. image:: /../../_static/images/environments/NewEnvironment.png

This creates a new environment.

Update Environment
------------------

This section provides information on modifying an existing environment.

* Any user with a permission ``ADD_EDIT_DELETE_ENVS`` can update a environment. By default, a users with SUPERADMIN role have the permission.

To update an existing environment, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_ENVS`` permission.
2. Go to **Environments**, and choose the team to update and click the **Modify Environment** button.
4. Update with relevant details
5. Click **Save** to save your changes.

.. image:: /../../_static/images/environments/UpdateEnvironment.png

This updates an existing environment.

Delete Environment
------------------

This section provides information on deleting an existing environment.

* Any user with a permission ``ADD_EDIT_DELETE_ENVS`` can update a environment. By default, a users with SUPERADMIN role have the permission.

To delete an existing environment, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_ENVS`` permission.
2. Go to **Environments**, and choose the environment to update and click the **Delete Environment** button.
3. An environment can only be deleted if there are no associated topics or acls or requests associated for the environment.

.. image:: /../../_static/images/environments/Environments.png

This deletes an existing environment.
