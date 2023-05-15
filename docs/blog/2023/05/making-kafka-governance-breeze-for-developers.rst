
Making Kafka Governance a Breeze for Developers
===============================================

.. post:: May 15, 2023
   :tags: kafka,governance,topics,acls,klaw
   :category: kafka
   :author: Murali Basani

Background
----------

Kafka is widely adopted around the world due to its scalability and unique features that set it apart from traditional
messaging. Many organizations are now using Kafka as part of their technology stack.

.. code-block:: bash

    A common challenge that companies face is inability to govern the hundreds
    or even thousands of topics that are created and managing their access
    permissions.


This can be a difficult task, and companies often struggle to do it well.

Some important considerations when managing Kafka topics include:

- Who is allowed to produce and consume messages on a given topic and who owns it?
- How do you backup and restore Kafka's configuration in case of failure?
- Is security properly enforced through subscriptions and access controls?
- How to smoothly promote topics with tested configurations from lower environments to production?
- How to increase visibility and awareness of topics within the organization?


While a small number of topics may be manageable, as the use of Kafka grows along side additional applications and
teams, it becomes harder to manage effectively and efficiently. Along with additional considerations of isolating
sensitive topics that may contain GDPR, HIPPA or other sensitive data to only the applications that should have access
to them.

Typical Challenges
------------------

- Manual Activities
    One Topic creation, access and promotion to higher environment takes 10 Email communications
- Longer lead time
    E2E communication and execution of above 10 steps takes approximately 2.5 hrs excluding non-response time humans
- Security
    RBAC & Data security issues
- Lacking Audit
    There is no audit of requests
- Adhoc Governance
    No centralized governance setup possible as all actions are initiated through E-mails. Request approver list is maintained in excels / confluence.
- Release Management
    Release processes (Promote config from env to another) are manual which is error prone and can cause system outages.

.. image:: ../../../_static/images/blogimages/kafka-clusters.png
   :scale: 40%

Kafka failures
~~~~~~~~~~~~~~

Failures are sometimes un-avoidable. It can also happen for Kafka applications. There could be client level failures
where an event deserialization leads to consumer problems, and infrastructure issues leading to zookeeper/kafka
configuration loss. Let's focus on infra issues: Imagine there are a 1000 topics, and topics have configuration which is
stored in zookeeper. In terms of disaster recovery, what if a zookeeper is crashed, and unable to come back. How quickly
you are able to retrieve the information back and start up your server ? While there are ways to store information, it is
critical on how this information is stored and retrieved.

What would we need ?
~~~~~~~~~~~~~~~~~~~~

A governance platform to

- get an holistic view of all your topics, producers, consumers, schemas and connectors
- 4-eye principle based reviews/approvals to keep the config safe and consistent
- notify users about the changes on schemas, and other configurations
- keep a track of the performed actions from various users


Klaw
----
Klaw is a toolkit that addresses the critical questions faced by any Kafka developer. It provides solutions for
compliance and audit issues, data security and release management among others. Built from the ground up as an open
tool, Klaw gives back to the streaming community by enabling developers to take advantage of modern governance, control,
and security approaches.

Built from the ground up as an open tool, Klaw gives back to the streaming community by enabling developers to take
advantage of modern governance, control, and security standards when developing Kafka applications.

Features
~~~~~~~~

Klaw is based on 4 fundamental principles.

``Governance`` - ``Self-service`` - ``Security`` - ``Automation``

.. image:: ../../../_static/images/blogimages/klaw-features.png



- Reducing dependency on Infra team, and assigning responsibilities to developer teams, gives the power to learn to execute. Implicitly saves time, cost and effort. With full self service enabled, its a ZERO risk of manual errors, saving costs on time and effort.

- Enabling continuous integration with promotion of topics, schemas to higher environments

- Authenticating an user based on your organization's SSO/Active directory.

- Power packed security features supporting needs of different types of organizations.

Git
~~~

Project : https://github.com/aiven/klaw

Git issues : https://github.com/aiven/klaw/issues

Contribute : https://github.com/aiven/klaw/blob/main/CONTRIBUTING.md

Documentation : https://www.klaw-project.io/docs

Conclusion
----------

Every organization is coming up with their own ways to solve this problem of growing number of kafka topics, schemas
and issues in managing them. Few of them could be addressed by maintaining parts of the data in Excel, Confluence,
Gitops etc, but to make developer and admin lives easier, Klaw would be your one stop solution.

.. code-block:: bash

    It's free and opensource.
