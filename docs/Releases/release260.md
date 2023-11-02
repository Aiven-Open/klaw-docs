---
sidebar_position: 99.90
---

# Release 2.6.0

Date: 23rd of October, 2023

## Overview

Klaw version 2.6.0 is a minor release with several new features and
improvements. Key highlights of this release include the ability to migrate
schemas from schema registry to Klaw, and vice versa.

## Download

### Binaries

[`klaw-2.6.0.jar` ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v.2.6.0/klaw-2.6.0.jar)

[`cluster-api-2.6.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v.2.6.0/cluster-api-2.6.0.jar)

### Sources

[`klaw-2.6.0.zip` ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v.2.6.0.zip)

### Docker

[Klaw Core](https://hub.docker.com/r/aivenoy/klaw-core)
[Klaw Cluster API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.6.0

### Redesigned screens with React UI

In this release, we have redesigned the user interface using React to enhance the user experience and provide a more intuitive design.

Key updates in the new React UI include:

- View Environments
- Promote a connector
- Claim connector
- Log out user

To disable the preview for the new Klaw user interface, open the
`application.properties` file on the Klaw **core** module, and set the
value of the following property to `false` (Effective from version 2.4.0, it
is true by default):

    #Enable new Klaw user interface
    klaw.coral.enabled=false

:::note
We are taking an incremental, feedback-driven approach in rolling out
the new Klaw interfaces. By providing the feature flag to preview the user
interfaces, we would like you to share your valuable
[feedback](https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md).
:::

### New React landing page

Logging into Klaw will now redirect you to the new React Topic catalog page, allowing you to perform all tasks without needing the older UI.

### Last status of environment

When an environment is configured, the timestamp of when it was last connected is now displayed on the page.

### Editable subscription requests

You can now edit ACL requests in this release. This feature allows for corrections without the need to delete and create a new request.

### Configurable logo in email notifications

You can now configure the `klaw.notification.header.logo` property in the `application.properties` to include your own logo in notification emails.

:::note
For a complete list of improvements, changelog, and to download the
release, see <https://github.com/aiven/klaw/releases/tag/v.2.6.0>
