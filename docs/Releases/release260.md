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

[klaw-2.6.0.jar ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.6.0/klaw-2.6.0.jar)

[`cluster-api-2.6.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.6.0/cluster-api-2.6.0.jar)

### Sources

[klaw-2.6.0.zip ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.6.0.zip)

### Docker

[Klaw-core](https://hub.docker.com/r/aivenoy/klaw-core)
[Klaw-cluster-API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.6.0

### Redesigned screens with React UI

In this release, we have redesigned some key user interfaces using React
to enhance user experience and provide a more intuitive design:

- Features

- New React UI: 
  - View Environments
  - Promote a connector
  - Claim connector

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

### Last status of environment

When an environment is configured, the timestamp of when it was last connected is now displayed in the page.

### Editable Subscription Requests

This release adds the ability to edit your ACL requests to fix mistakes instead of deleting and recreating a whole new request.

:::note
For a complete list of improvements, changelog, and to download the
release, see <https://github.com/aiven/klaw/releases/tag/v2.6.0>
