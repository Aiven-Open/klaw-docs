---
sidebar_position: 99.92
---

# Release 2.5.1

Date: 24th of August, 2023

## Overview

Klaw version 2.5.1 is a patch release primarily aimed at enhancing MySQL support through a specific bug fix.

## Download

### Binaries

- [Klaw-2.5.1.jar ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.5.1/klaw-2.5.1.jar)

- [`cluster-api-2.5.1.jar` ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.5.1/cluster-api-2.5.1.jar)

### Sources

- [Klaw-2.5.1.zip ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.5.1.zip)

### Docker

- [Klaw-core](https://hub.docker.com/r/aivenoy/klaw-core)
- [Klaw-cluster-API](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.5.1

### Bug Fixes

- [#1769](https://github.com/Aiven-Open/klaw/pull/1769): MySQL support has been re-enabled by removing custom EXISTS
  queries. Instead, JPQL is now used, allowing Spring to manage query details based on specific drivers.

:::note
For a complete list of improvements, changelog, and to download the release,
see <https://github.com/aiven/klaw/releases/tag/v2.5.1>
