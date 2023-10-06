---
sidebar_position: 99.93
---

# Release 2.4.0

Date: 15th of June, 2023

## Overview

Klaw version 2.4.0 is a minor release with several new features and
improvements. Key highlights of this release include ability to migrate
schemas from schema registry to Klaw, and vice versa.

## Download

### Binaries

[Klaw-2.4.0.jar ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.4.0/klaw-2.4.0.jar)

[cluster-api-2.4.0.jar ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.4.0/cluster-api-2.4.0.jar)

### Sources

[Klaw-2.4.0.zip ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.4.0.zip)

## What's new in Klaw 2.4.0

### Redesigned screens with React UI

In this release, we have redesigned some key user interfaces using React
to enhance user experience and provide a more intuitive design:

- **Browse Connectors**: With the redesigned user interface for
  Connectors, you can now explore and filter the available connectors
  with a more intuitive and user-friendly interface.
- **Enhanced React UI**: With the switch to React, this release
  features a redesign of the following user interfaces:
  - _Coral UI by default_: The new UI is now enabled by default,
    providing users an enhanced frontend experience. Users who can
    build React/npm-based assets will automatically see the new
    interface.
  - _Klaw theme_: A new Klaw Theme has been introduced, unifying the
    visual appearance of Coral with a consistent blue color scheme.
  - _SwitchTeams_: Easily switch between teams within the Coral
    interface, allowing smoother navigation and collaboration.
- **Schema Synchronization**: Introducing the Schema synchronization
  feature that allows for seamless synchronization of schemas.
  - _Cluster to Klaw schema synchronization_: With this feature, you
    can effortlessly synchronize all schemas from a schema registry
    cluster to Klaw, including their versions.
  - _Klaw to Cluster schema synchronization_: With this feature, you
    can synchronize schemas, along with their versions, from Klaw to
    a schema registry cluster.
- **Enhanced Kafka Connector management**
  - _Kafka connector status monitoring_: Gain visibility into the
    status of Kafka connectors and tasks, allowing you to track
    their progress and performance efficiently.
  - _Connector restart capability_: Introducing the ability to
    restart Kafka connectors and their associated tasks, enabling
    efficient management and troubleshooting.

To disable the preview for the new Klaw user interface, open the
`application.properties` file on the Klaw **core** module, and set the
value of the following property to `false` (Effective this version, it
is true by default):

    #Enable new Klaw user interface
    klaw.coral.enabled=false

:::note
We are taking an incremental, feedback-driven approach in rolling out
the new Klaw interfaces. By providing the feature flag to preview user
interfaces, we would like you to share your valuable
[feedback](https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md).
:::

### Password reset with token

This release introduces an email-based password reset feature, allowing
users to request a password reset via email. A password reset token is
sent to the user's registered email address upon request. The password
reset token has a default expiry period of ten minutes, ensuring
improved security and prompting users to update their passwords promptly.

### Enhanced email notifications

This release introduces significant improvements to the email
notifications functionality. Emails are now sent in accordance with the
defined email matrix, ensuring consistency. For more detailed
information, refer to the [Workflows](../../docs/Concepts/workflows.md#approval-process) documentation.

### Improved error responses to UI

This release focuses on enhancing the error-handling mechanism by
redesigning API calls to provide improved error responses to the
frontend.

:::note
For a complete list of improvements, changelog, and to download the
release, see <https://github.com/aiven/klaw/releases/tag/v2.4.0>
