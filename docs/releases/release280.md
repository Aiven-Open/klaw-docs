---
sidebar_position: 99.88
---

# Release 2.8.0

Date: 8th of February, 2024

## Overview

Klaw version 2.8.0 is a minor release with several new features and
improvements. Key highlights of this release include notifications to
kafka clients on schema changes

## Download

### Binaries

[`klaw-2.8.0.jar` ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.8.0/klaw-2.8.0.jar)

[`cluster-api-2.8.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.8.0/cluster-api-2.8.0.jar)

### Sources

[`klaw-2.8.0.zip` ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.8.0.zip)

### Docker

- [Klaw Core](https://hub.docker.com/r/aivenoy/klaw-core)
- [Klaw Cluster API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.8.0

### Redesigned screens with React UI

In this release, we have redesigned the user interface using React to enhance the user experience and provide a more intuitive design.

Key updates in the new React UI include:

- Topic catalog - Filter by Topic type
  ![image](../../static/images/release280/Filter-by.png)
- Activity log
  ![image](../../static/images/release280/Activity-Log.png)
- Dashboard landing page
  ![image](../../static/images/release280/Dashboard.png)
- View clusters
  ![image](../../static/images/release280/view-clusters.png)
- View environments
  ![image](../../static/images/release280/view-envs.png)

To disable the preview for the new Klaw user interface, open the
`application.properties` file on the Klaw **core** module, and set the
value of the following property to `false` (Effective from version 2.4.0, it
is true by default):

```properties
    #Enable new Klaw user interface
klaw.coral.enabled=false
```

:::note
We are taking an incremental, feedback-driven approach in rolling out
the new Klaw interfaces. By providing the feature flag to preview the user
interfaces, we would like you to share your valuable
[feedback](https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md).
:::

### Feedback form to help gather community feedback for Klaw

Available in the angular view, a new feedback form is now available to have your thoughts and feedback better included in the planning and future trajectory of Klaw

### New Klaw documentation site structure implemented

The documentation website has an updated navigation to improve usability.

### Improvements

- A new optional permission to only allow certain users to create the initial topic
- Allow Deletion of a Superadmin User
- Redesigned Login, Forgot Password, and Sign Up Pages

### Bug fixes

- Fix analytics for the dashboard and added 30/60/90 day drop down in coral
- New User email only sent to the user directly now
- Version number for data migration is now stored internally instead of through the application.properties

### DB upgrade

In this release, there is a migration utility to add a new fine-grain permission.

:::note
For a complete list of improvements, changelog, and to download the
release, see [GitHub release tag v2.8.0](https://github.com/aiven/klaw/releases/tag/v2.8.0)
