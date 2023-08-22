# Release 2.5.0

Date: 23rd of August, 2023

## Overview

Klaw version 2.5.0 is a minor release with several new features and
improvements. Key highlights of this release include ability to migrate
schemas from schema registry to Klaw, and vice versa.

## Download

### Binaries

[klaw-2.5.0.jar ⬇︎](https://github.com/Aiven-Open/klaw/releases/download/v2.5.0/klaw-2.5.0.jar)

[cluster-api-2.5.0.jar ⬇](https://github.com/Aiven-Open/klaw/releases/download/v2.5.0/cluster-api-2.5.0.jar)

### Sources

[klaw-2.5.0.zip ⬇](https://github.com/Aiven-Open/klaw/archive/refs/tags/v2.5.0.zip)

## What's new in Klaw 2.5.0

### Redesigned screens with React UI

In this release, we have redesigned some key user interfaces using React
to enhance user experience and provide a more intuitive design:

-   Features
* New React UI Topic Overview including capabilities to
    * Review Topic details
    * Support creation and promotion of new Schemas
    * Add and review Subscriptions (ACL) for creation and retrieval of passwords
    * see History to provide an audit trail of the topic
    * Messages to view Kafka events on the topic 
    * Updated markdown support for Documentation
    * Ability to Claim topics

![image](../../static/images/klaw-topic-overview-250.png) 

* Import previously exported Data back into Klaw
* Support for High Availability Caching

To disable the preview for the new Klaw user interface, open the
`application.properties` file on the Klaw **core** module, and set the
value of the following property to `false` (Effective from version 2.4.0, it
is true by default): 

    #Enable new Klaw user interface
    klaw.coral.enabled=false

:::note
We are taking an incremental, feedback-driven approach in rolling out
the new Klaw interfaces. By providing the feature flag to preview user
interfaces, we would like you to share your valuable
[feedback](https://github.com/aiven/klaw/issues/new?assignees=&labels=&template=03_feature.md).
:::

### Connector configuration encryption
This release introduces password encryption for fields in connector configuration.
The fields that are encrypted can be configured in the application.properties file.

### Editable Topic Requests
This release adds the ability to edit your topic requests to fix mistakes instead of deleting and recreating a whole new request.

### Key dependency updates
Kafka client upgrade to 3.5.1
Spring upgrade to 3.1.2

### Identify Schemas deleted from Schema Registry
The superadmin can now use the "Schemas From Cluster" functionality to identify Schemas that have been deleted from the Schema Registry.



### Bug Fixes

* Topics are now added to the cache when synced through "Synch from Cluster"
* Postgres deployments now supports count queries for Approval tabs in React UI
* Promote OperationType now used for Schema promotion (previously create)
  Enhancements
* Improved email copy on new Installations
* Edit Topic can now also alter the Advanced Configuration
* Toast Notifications in React UI added to inform user of actions
* Many small database performance enhancements


:::note
For a complete list of improvements, changelog, and to download the
release, see <https://github.com/aiven/klaw/releases/tag/v2.5.0>

