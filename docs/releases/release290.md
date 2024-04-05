---
sidebar_position: 99.86
---

# Release 2.9.0

Date: 8th of April, 2024

## Overview

Klaw version 2.9.0 is a patch release that fixes an issue introduced in 2.8.0 and includes minor bug fixes and improvements.

## Download

### Binaries

[`klaw-2.9.0.jar` ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.9.0/klaw-2.9.0.jar)

[`cluster-api-2.9.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.9.0/cluster-api-2.9.0.jar)

### Sources

[`klaw-2.9.0.zip` ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.9.0.zip)

### Docker

- [Klaw Core](https://hub.docker.com/r/aivenoy/klaw-core)
- [Klaw Cluster API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.9.0

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

To turn off the preview for the new Klaw user interface, open the
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

### JSON schema support in Coral and Angular

Klaw now supports provisioning JSON schemas through both the Angular and React UI. Previously, only Schemes of type Avro were supported.

### Beta release of ACL claim feature

We are excited to announce that the beta version of Claim ACL/Subscription feature has been released. However, some limitations will be addressed in the upcoming releases. For more information about these limitations, see ACL Claim.

### Improvements

- Admin guards on all APIs for roles for enhanced security and enhanced user feedback
- Delete service users when ACLs are deleted
- Declined user requests can be reused

### Bug fixes

- Allowed creating new users with an email address as a username
- Fixed the default schema version on promote to be an informational message in angular UI
- Fixed unused scripts and unsafe links
- Fixed `target=blank` vulnerability

### Database upgrade

This release adds a new primary key to the `kwregisterusers` table, allowing previously denied usernames to be reused in future requests.

:::note

For a complete list of improvements, changelog, and download the
release, see [GitHub release tag v2.9.0](https://github.com/aiven/klaw/releases/tag/v2.9.0)

:::
