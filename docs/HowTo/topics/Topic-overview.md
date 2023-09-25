# Topic Overview

Topic overview provides different views of topic. 

## Overview

In this tab, the below are displayed

- topic configuration like partitions, replication factor and if any advanced configuration
- cluster details like bootstrap url
- count of producer and consumer subscriptions and schemas


## Subscriptions

In this tab, all producer and consumer acls are displayed, including prefixed and transactional.


## Messages

Plain events can be viewed if they exist on the topic. Note that a consumer group has to be configured in cluster api, 
to view events.

    klaw.topiccontents.consumergroup.id


## Schemas

Avro schemas and all available versions of the subject (topic) can be viewed in Schemas tab. It is also possible to 
request for a new schema and promote the schema.


## Readme

Any information about the topic, can be documented here, and will be searchable.


## History

Every topic request, its promotion request, config update request and acl request made on the topic are audited and will
be visible in the history tab.

## Settings

This tab is visible in new React user interface only where a user can request for topic deletion. In the Angular menu, 
it's available in the main Overview tab.

Here is an overview of a topic 

![image](../../../static/images/topic/TopicOverview.png)