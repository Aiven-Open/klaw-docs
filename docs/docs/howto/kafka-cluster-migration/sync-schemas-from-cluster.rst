Synchronize Schemas from cluster
================================

To synchronize schemas from a Schema Registry server to Klaw, follow the below procedure, which involves retrieving the topics and it's schema versions from an existing Schema registry cluster and saving to the topic.

As schemas are owned by Topic Owners, this functionality allows you to select topics with schemas and synchronize to klaw metadata.

.. note::  A Schema can have multiple versions. This process deletes any existing schema (all versions) in klaw for the selected topic, and updates with the schema (all versions) available in Schema Registry server.

1. Log in as a SUPERADMIN or user with the ``SYNC_SCHEMAS`` permission.

2. Navigate to the Synchronize menu and select **Schemas from cluster**.

3. Synchronize schemas with the following option:

    - `Individual Options`: Select one or more topics individually, choose a team, and save. The selected schemas will now appear in the **Schemas** tab in **TopicOverview** menu.

.. note::  Klaw caches all this schema information, and refreshes once in a day, or whenever there are schema changes.
            However when someone adds/deletes a schema manually, directly on the schema registry server, a manual cache reset can be done with the button provided in the page.


.. image:: /../../../_static/images/sync/SyncSchemasFromCluster.png

.. note::  **ShowAll** Option shows also the topics and associated schemas which are already in sync with the schema registry cluster. No action is required on these topics. These can be noticed with a green icon.

By following these steps, you can synchronize schemas from a Schema registry cluster to Klaw metadata.