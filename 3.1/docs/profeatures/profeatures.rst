PRO Features
============

The Professional version of Kafkawize is developed with several brilliant features. It is easy to request for a demo of
the Pro version from here: https://kafkawize.com/request-for-demo/

You can also reach us out at https://kafkawize.com/contact-us/

Pro version features in detail https://kafkawize.com/features


Promote Topics
--------------

If a topic exists in Dev environment, it can be requested for promotion to the next higher environment (TST). If topic exists in Dev and Tst environments,
promotion can be requested for Acceptance environment, with the same topic name. This way it restricts users to create topics in adhoc way
and at the same time maintains data integrity. This feature provides an easy way to request for topics in higher environments, keeping
partitions, replication factor parameters specific to those environments. This deletion request can be triggered only by Topic owner teams.
Please note, it follows the same request/approval process.

Delete Topics
-------------

When a topic is no more needed,it is best to get it deleted. So we save on the partitions loaded by the cluster. This feature makes sure
a topic can only be deleted when there are no subscriptions for the topic. Hence, no Producers and Consumers are affected by deleting.
This deletion request can be triggered only by Topic owner teams. Please note, it follows the same request/approval process.

Delete Acls
-----------

It is possible to delete particular Producer or Consumer subscriptions of a topic with this feature. This deletion request can be
triggered by that Acl owner teams. No other teams can request for other's acl deletion. So all the subscriptions are secure this way.


Ldap Authentication/Active Directory
------------------------------------

Users can be authenticated against Ldap/Active Directory while users login to Kafkawize.

If you do not want to create/use a different password for Kafkawize users, rather authenticate from an existing Ldap server of your
organization, it is easy to integrate now. Application properties have properties like baseDN, userDNPattern, passwordAttributes etc
to configure your Ldap server and connect.  The below property enables ldap authentication::

Cluster Connect Protocols
-------------------------

kafkawizeclusterapi can connect to Kafka cluster over the below protocols.

PLAINTEXT
~~~~~~~~~

Kafkawizeclusterapi connects can connect to Kafka clusters over PLAINTEXT protocol
When a cluster is being created in Kafkawize, this protocol can be selected.

SSL
~~~

Kafkawizeclusterapi connects can connect to Kafka clusters over SSL protocol
When a cluster is being created in Kafkawize, this protocol can be selected. Make sure SSL parameters are configured in application.properties
in Kafkawizeclusterapi.
SSL Parameters like keystore, truststore, passwords, etc.

SASL_PLAIN
~~~~~~~~~~

Kafkawizeclusterapi connects can connect to Kafka clusters over SASL_PlAIN protocol
When a cluster is being created in Kafkawize, this protocol can be selected. Make sure SSL parameters are configured in application.properties
in Kafkawizeclusterapi.

SASL stands for Simple Authentication and Security Layer. Kafka Jaas configuration has to be configured on the Kafka cluster
with username/passwords.
Kafkawizeclusterapi application.properties would be configured with SASL Jaas config too like below::

    org.apache.kafka.common.security.plain.PlainLoginModule required username='admin' password='admin-secret';


SASL_SSL
~~~~~~~~

Kafkawizeclusterapi connects can connect to Kafka clusters over SASL_SSL protocol
When a cluster is being created in Kafkawize, this protocol can be selected. Make sure SSL parameters are configured in application.properties
in Kafkawizeclusterapi.

SASL stands for Simple Authentication and Security Layer. Kafka Jaas configuration has to be configured on the Kafka cluster
with username/passwords.
Kafkawizeclusterapi application.properties would be configured with SASL Jaas config too like below

It is possible to configure PlainLoginModule or KerberosLoginModule::

    com.sun.security.auth.module.Krb5LoginModule required \
            useKeyTab=true \
            storeKey=true \
            keyTab="/etc/security/keytabs/kafka_client.keytab" \
            principal="kafkaclient1@EXAMPLE.COM";

SSL parameters should also be configured, when ssl encryption is enabled.

SASL mechanism can be PLAIN or GSSAPI(Kerberos)


Synchronize Metadata
--------------------

A situation where Kafka cluster already exists and would like to adapt Kafkawize in your organization, all the topics and acls need to have their teams/owners.

This feature is possible with Synchronization of Topics or Acls.

Topics
~~~~~~
After a environment is selected, topics are displayed, and a team can be assigned to it. And this action, team becomes the Owner team.

.. image:: _static/images/SynchronizeTopics.JPG
    :width: 500px
    :align: center

It is required to synchronize the topic team first with Base sync cluster first. Base sync cluster can be configured with property custom.syncdata.cluster in application properties.

Acls
~~~~
After a environment is selected, Producer and Consumer Acls are displayed, and a team can be assigned to it. After this action, team becomes the Owner of that subscription (producer or consumer).

.. image:: _static/images/SynchronizeAcls.JPG
    :width: 500px
    :align: center

Restore Config
--------------

Configuration of topics and acls from metastore can be restored back on any selected Kafka cluster.

Multi Tenancy
-------------

Each tenant can manage their topics with their own teams in isolation.
Every tenant can have their own set of Kafka environments, and users of one tenant cannot view/access topics, acls
or any from other tenants.
It provides an isolation avoiding any security breach.

Analytics
---------

Several charts are introduced to give an overview of Clusters and usages by teams.
Topics, Acls and Partitions per team
Topics, Acls and Partitions per environments
Activity log per team and per environments

Configurable Roles & Permissions
--------------------------------

Any new roles can be added and associate different kind of permissions
Permissions
A whole bunch of permissions can be assigned to roles from User interface, making it very flexible.
With immediate effect, users will be able to see the changes.
Ex: A permission to request topics, or approve or add users, environments, clusters etc.


User Registration
-----------------

New users can register from the home page, and request is forwarded to Super user. After the approval, user is added to the system.


Email Notifications
-------------------
For every request and approval, through out the Kafkawize application, emails are sent out to approvers, and after approvals,
notify the requesters. When a new user is added, or password changes, etc, notifications are enabled.


Support & Customization
-----------------------
Customers receive support from Kafkawize, and customization of UserInterface to certain extent.


White Labelling
---------------
Kafkawize can be well integrated into your organization applications, by our white labelling support, for example on logo, colors, etc.


Future Updates
--------------
Our customers receive free updates from Kafkawize.