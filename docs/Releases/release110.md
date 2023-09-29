---
sidebar_position: 99.99
---

# Release 1.1.0

Date: 4th Nov, 2022

## Overview

Klaw version 1.1.0 is a minor release with a couple of new features and
improvements.

## New features

- Authentication protocols: Klaw 1.1.0 includes the authentication
  protocols SCRAM-SHA-256 and SCRAM-SHA-512, which you can use to
  connect to Apache Kafka clusters.
- Enabled JWT-based authentication: Enabled JWT-based authentication
  to connect to Klaw Cluster API. You can configure
  klaw.clusterapi.access.base64.secret in both core and cluster-api
  modules to enable this authentication between APIs.
- Connect to multiple clusters using SSL: This release includes the
  functionality to configure Klaw to connect to multiple Apache Kafka
  clusters with different SSL certificates. In the
  application.properties file located in the src/main/resources
  folder, look for the line starting with SSL .\* and replace it with
  .kafkassl.\*. You can find the cluster-id from the user interface
  under the Clusters page.

:::note
Read more or Download the release
<https://github.com/aiven/klaw/releases/tag/v1.1.0>
