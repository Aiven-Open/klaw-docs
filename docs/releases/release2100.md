---
sidebar_position: 99.85
---

# Release 2.10.0

Date: 15 of April, 2025

## Overview

Klaw version 2.10.0 is a minor release with security updates and several improvement.
With v2.10.0, users with the role `SUPERADMIN` will have access to the new React UI for certain screens.

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

### 🛡️ Security updates

- Default superadmin password removed from application configuration, it is required now to be configured on startup.
- Discourage and warn users from usage of PLAINTEXT as protocol (UI change).
- Update rules for passwords.
- Delete unused, old dependency (owl carousal-js)
- Add API permission check on `testClusterApiConnection` as this should be elevated for administrators only.
- Remove deprecated and unused parameters from API calls.
- Change permission to add/update super admin users (only super admin can do so).
- Upgrade encryption to BCrypt for password storage, also no longer sends plain text passwords to users on initial creation.
- Change emails for new user registration so that they do not get sent a plaintext password in their email.
- Re-enable and correctly configured CSRF protection in both backend and frontend (Angular as well as React).

### ⚠️ Rollback notes

This release updates password hashing to use BCrypt for improved security. If you rollback to Klaw 2.9.0 or earlier, users may not be able to log in with passwords created or changed in 2.10.0.

- Older versions do not support BCrypt, so BCrypt-hashed passwords will fail validation.
- In such cases, affected users may need to reset their passwords manually.

**Recommendation**: Avoid rolling back unless absolutely necessary. If you must, ensure you have a process in place to assist users with password resets.

### Redesigned screens with React UI

In this release, we have redesigned the user interface using React to enhance the user experience and provide a more intuitive design.

Key updates in the new React UI include:

- With this release, superadmin user will have access to the new UI, including form to add a new cluster.

### Improvements

- Improves cross DB compatibility by using `jpq`
- Improved Claim experience
- Enable viewing Topic events based on offset range and partition

### Bug fixes

- Prevent orphan ACL without service user being created
- Fix validation to parse partitions as `ints` first
- Avoid NullPointerException when trying to login with Keycloak SSO
- Avoid possible NullPointerException when trying to login with Google SSO
- Fix NullPointerException when trying to read topic events from coral UI

[//]: # "@TODO links"

:::note

For a complete list of improvements, changelog, and download the
release, see [GitHub release tag v2.10.0](https://github.com/aiven/klaw/releases/tag/v2.10.0)

:::
