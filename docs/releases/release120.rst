Release 1.2.0
=============

Date: 15th Dec, 2022

Overview
--------

Klaw version 1.2.0 is a minor release with a few features and improvements.

New features
------------

- Introducing React UI:
    React is a popular open-source JavaScript library that simplifies the development of front-end applications and provides a great alternative to large, complex front-end frameworks like AngularJS. Klaw's current interface, which is built with AngularJS, does not leverage any modern layouts or components and has several limitations in terms of implementations and reusable components.
    React allows for greater flexibility and modularity, making it easier to create reusable components and scale an application. Additionally, with React, it's easier to create consistent and cohesive user experiences.
    Moving to React for Klaw's UI provides numerous benefits in terms of performance, scalability, and ease of development. We've tested React with our current interface, and it looks amazing - we're excited to start this new journey.

- New look and feel for Browse topics:
    This release introduces the redesigned user interface for Browse topics, providing a new look and feel for managing Kafka topics. It consists of changes to the layout, styling, and overall appearance of the interface, as well as improvements to make browsing and working topics easier, more efficient and accessible. This new look and feel is achieved by switching to React.

- Klaw now supports Azure AD Authentication:
    Azure Active Directory (Azure AD) is an identity and access management service provided by Microsoft. It allows organizations to manage user access to applications and resources securely. By using Azure AD authentication, organizations can leverage their existing Azure AD infrastructure to manage access to Klaw.

- Advanced configurations for topics:
    The "Request new topic" function in Klaw now includes an advanced topic configuration section, where you can configure all the supported topic-level configurations available in Kafka.
    From the advanced topic configuration section, you can specify additional configuration options for Kafka topics, such as the cleanup policy, retention period, flush interval, and more.


.. seealso::  Read more or Download the release `<https://github.com/aiven/klaw/releases/tag/v1.2.0>`_