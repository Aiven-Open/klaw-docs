Release 2.4.0
=============

Date: 15th of June, 2023

Overview
--------

Klaw version 2.4.0 is a minor release with several new features and improvements. Key highlights of this release include ability to migrate schemas from schema registry to Klaw, and vice versa.

What's new in Klaw 2.4.0
------------------------

Redesigned screens with React UI
````````````````````````````````
In this release, we have redesigned some key user interfaces using React to enhance user experience and provide a more intuitive design:

- **Browse Connectors**: With the redesigned user interface for Connectors, you can now explore and filter the available connectors with a more intuitive and user-friendly interface.

- **React UI**: With the switch to React, this release features a redesign of the following user interfaces:
    - Coral UI by default: New UI is enabled by default. If users can build react/npm based assets, users can view the new frontend.
    - Klaw Theme: New a specific Klaw Theme has been introduced to use the same blue colour scheme across Coral.
    - SwitchTeams: SwitchTeams from within Coral

- **Synchronise Schema from Cluster to Klaw**: Feature to migrate all schemas(with versions) from schema registry cluster to Klaw

- **Synchronise Schemas from Klaw to Cluster**: Feature to migrate all schemas (with versions) from Klaw to a schema registry cluster

- **Manage Kafka Connectors**: View kafka connectors and tasks status and ability to restart them


To preview the new Klaw user interface, open the ``application.properties`` file on the Klaw **core** module, and set the value of the following property to ``true`` (Effective this version, it is true by default):
::
    # Enable new Klaw user interface
    klaw.coral.enabled=true

.. note::
    We are taking an incremental, feedback-driven approach in rolling out the new Klaw interfaces. By providing the feature flag to preview user interfaces, we would like you to share your valuable `feedback <https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md>`_.

Password Reset With Token
`````````````````````````
This change now sends an email with a password reset token that can then be used to update your password. The token has by default a ten minute expiry.

Well designed email notifications
`````````````````````````````````
Ensure all emails are sent correctly in the email matrix.

Better error responses to UI
````````````````````````````
Api calls have been redesigned to send better error responses to Frontend.

.. seealso:: For a complete list of improvements, changelog, and to download the release, see `<https://github.com/aiven/klaw/releases/tag/v2.4.0>`_