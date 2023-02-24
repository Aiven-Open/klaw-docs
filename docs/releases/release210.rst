Release 2.1.0
=============

Date: 3rd of March, 2023

Overview
--------

Klaw version 2.1.0 is a minor release with several new features and improvements. Key highlights of this release include redesigned approval and decline screens in the React UI, Confluent Cloud support, The ability to switch between teams, codebase optimizations, and additional enhancements.


What's new in Klaw 2.1.0
------------------------

Redesigned Request screens with React UI
`````````````````````````````````````````
With the switch to React, this release features a redesign of the following user interfaces:

- **Approve & Reject Topic Requests**:  Users can now approve or reject topic requests using the new UI.

- **Approve & Reject Subscription Requests** (Producer/Consumer): Users can now approve or reject ACL requests for both producers and consumers using the new UI.

- **Approve & Reject Schema Requests**: Users can now approve or reject schema requests using the new UI.

.. image:: /../../../_static/images/topic/ApprovalRequestTopic-react.png

To preview the new Klaw user user interface, open the ``application.properties`` file on the Klaw **core** module, and set the value of the following property to ``true``:
::
    # Enable new Klaw user interface
    klaw.coral.enabled=true

.. note::
    We are taking an incremental, feedback-driven approach in rolling out the new Klaw interfaces. By providing the feature flag to preview user interfaces, we would like you to share your valuable `feedback <https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md>`_.

Confluent Cloud Kafka
`````````````````````
Klaw now supports Confluent Cloud kafka Topics, Acls.
Apis implemented :
https://docs.confluent.io/cloud/current/api.html#tag/Topic-(v3)
https://docs.confluent.io/cloud/current/api.html#tag/ACL-(v3)

For more information, see `Confluent Cloud <https://www.klaw-project.io/docs/howto/clusterconnectivity/confluent-cloud-kafka-cluster-ssl-protocol>`_.

Switching Teams
```````````````
With this release, users now have the ability to be a member of multiple teams and switch between those teams without logging out and logging back in. Allowing a single user to have proper auditable capabilities while also working across multiple teams.

For more information, see `Switch Teams <https://www.klaw-project.io/docs/concepts/switch-teams>`_.


.. seealso:: For a complete list of improvements, changelog, and to download the release, see `<https://github.com/aiven/klaw/releases/tag/v2.1.0>`_
