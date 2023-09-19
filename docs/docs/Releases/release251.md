---
sidebar_position: 99.92
---

# Release 2.5.1

Date: 24th of August, 2023

## Overview

Klaw version 2.5.1 is a patch release with one bug fix for MySQL support

## Download

### Binaries

[klaw-2.5.1.jar ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.5.1/klaw-2.5.1.jar)

[cluster-api-2.5.1.jar ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.5.1/cluster-api-2.5.1.jar)

### Sources

[klaw-2.5.1.zip ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.5.1.zip)

### Docker
[Klaw-core](https://hub.docker.com/r/aivenoy/klaw-core)
[Klaw-cluster-api](https://hub.docker.com/r/aivenoy/klaw-cluster-api)

## What's new in Klaw 2.5.1

### Bug Fixes
- [#1769](https://github.com/Aiven-Open/klaw/pull/1769) MySql support re-enabled by removing custom exists queries and use jpql to have spring do queries based on the drivers which handle all details


:::note
For a complete list of improvements, changelog, and to download the
release, see <https://github.com/aiven/klaw/releases/tag/v2.5.1>