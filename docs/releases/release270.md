---
sidebar_position: 99.89
---

# Release 2.7.0

Date: 13th of December, 2023

## Overview

Klaw version 2.7.0 is a minor release with several new features and
improvements. Key highlights of this release include notifications to
kafka clients on schema changes

## Download

### Binaries

[`klaw-2.7.0.jar` ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.7.0/klaw-2.7.0.jar)

[`cluster-api-2.7.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.7.0/cluster-api-2.7.0.jar)

### Sources

[`klaw-2.7.0.zip` ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.7.0.zip)

### Docker

[Klaw Core](https://hub.docker.com/r/aivenoy/klaw-core)
[Klaw Cluster API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.7.0

### Redesigned screens with React UI

In this release, we have redesigned the user interface using React to enhance the user experience and provide a more intuitive design.

Key updates in the new React UI include:

- Show pending requests
- User information
- Tenant information
- View users
- View teams

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

### Editable schema requests

You can now edit schema requests in this release. This feature allows for corrections without the need to delete and
create a new request.

### Windows build capability

Usage of maven plugins to clean and copy the files correctly.

### Differences between Klaw and Kafka® clusters

Scheduler to detect topic changes between Kafka® cluster & Klaw and notify admins

:::note
For a complete list of improvements, changelog, and to download the
release, see [GitHub release tag v2.7.0](https://github.com/aiven/klaw/releases/tag/v2.7.0)
