---
sidebar_position: 99.86
---

# Release 2.10.0

Date: X of September, 2024

## Overview

Klaw version 2.10.0 is a minor release with several improvements. With v2.10.0, users with the role `SUPERADMIN` will have access to the new React UI for certain screens.

## Download

### Binaries

[//]: # "@TODO links"

[`klaw-2.10.0.jar` ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.9.0/klaw-2.9.0.jar)

[//]: # "@TODO links"

[`cluster-api-2.10.0.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.9.0/cluster-api-2.9.0.jar)

### Sources

[`klaw-2.10.0.zip` ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.9.0.zip)

### Docker

[//]: # "@TODO links"

- [Klaw Core](https://hub.docker.com/r/aivenoy/klaw-core)
- [Klaw Cluster API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.10.0

### Redesigned screens with React UI

In this release, we have redesigned the user interface using React to enhance the user experience and provide a more intuitive design.

Key updates in the new React UI include:

- With this release, superadmin user will have access to the new UI.

### Improvements

- Improves cross DB compatibility by using jpq
- Improve Claim experience

### Bug fixes

- Prevent orphan ACl without service user being created
- Fix validation to parse partitions as ints first
- Avoid NullPointerException when trying to login with Keycloak SSO
- Avoid possible NullPointerException when trying to login with Google SSO

[//]: # "@TODO links"

:::note

For a complete list of improvements, changelog, and download the
release, see [GitHub release tag v2.10.0](https://github.com/aiven/klaw/releases/tag/v2.10.0)

:::
