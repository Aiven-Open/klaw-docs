Features
========

Kafkawize is built with the key features as below:

+    4 eyed principle – Requesting and Approving topics/acls/schemas
+    Spring based security
+    Fully automated
+    Browse Topics, Acls, Schemas, Connectors,  Producers and Consumers
+    Synchronize Source of truth with Meta store, Restore config
+    Support for an Rdbms or file system as metastore


Security
--------

There are two main applications of Kafkawize. UiApi and ClusterApi. There is a security applied on Cluster Api. End points are exposed to anyone who can reach the host and has access., and swagger is enabled too. Users can directly post/get requests to this application.

On the UI Api, Spring security is enabled. As the application boots, it loads all the users from database into its memory and would be referred to it.

Security on the Kafka Broker is out of scope for Kafkawize., , however for Kafkawize to connect to Kafka broker, Acls/AdminClient properties need to be provided to avoid authorization issues.

Teams and Role Management
-------------------------

Kafkawize can be configured with any number of roles and permissions:

By default 'USER' roles can request and approve topic/acl/schema/connector requests.

Login
-----

Portal can be accessed only if the user logs in. New users are created by Super users.

After a user is logged in, a session is created for the user, and depending on the role , he/she is authorized to perform certain actions.

Default login url : http://localhost:9097/kafkawize

.. image:: _static/images/login.JPG
    :width: 500px
    :align: center

Dashboard
---------
After a user is logged in , he/she will be redirected to homepage.

.. image:: _static/images/Dashboard.JPG
    :width: 500px
    :align: center


Browse
------

All the logged in users with any roles can browse the below components.

Topics
~~~~~~
A user is allowed to a select an environment, and the topics are loaded. If you do not see the topics for some reason, check for any errors in Cluster Api application and UI Api application.

A filter option is also provided and users can search for specific topics.

.. image:: _static/images/BrowseTopics.JPG
    :width: 500px
    :align: center

Every topic has a topic overview page, which displays topic partitions, replication factor in all available environments.

Every topic has a topic overview page, which displays topic subscriptions in all available environments.

Note : Make sure kafkawize has access to read topics (Acl is required if acls are enabled on the cluster)

Acls
~~~~
Acl - Access Controls

From the Browse topics screen, user can select and clicking on a topic displays all the available subscriptions of that topic.

.. image:: _static/images/ViewAcls.JPG
    :width: 500px
    :align: center

Acls are either Producers or Consumers. Producers have write access on the topics and Consumers have read access on the topics.

Acls are either IP Address based or SSL based. If IP based, you should see the IP addresses of client who has access. If SSL based, the DN name should be seen.

Every Acl should be owned by a team. If no team is assigned to an Acl, it can be assigned by Synchronize Acl option, but by a Super user.

There can be multiple producers and multiple consumers for a topic owning by different teams.

Requests
--------

All the users can request for topics, acls or avro schemas in any environment.

Topic Requests can be approved by Admins or Super users from the same team.

Acl(Subscription) Requests can be approved by Admins or Super users who belong to Topic Owner's team.

Schema Requests can be approved by Admins or Super users from the same team.

- Notifications: After every request is raised, there is a notification (bell icon) at the top for the relevant user who can approve these requests.

Topics
~~~~~~
To request for a topic, all the mandatory parameters need to be provided.

.. image:: _static/images/RequestTopic.JPG
    :width: 500px
    :align: center

Topic name, partitions, owning team, application name, and if any remarks. On submission you can view your requests in Audit/My Requests., and it can be deleted if required.

Default partitions size, maximum partitions size and default replication factor can be configured per environment in Clusters page.

To request for a topic in higher environments, it is required for the topic to exist in Base Sync cluster (DEV). This can be configured with property custom.syncdata.cluster

Acls
~~~~
To request for a acl, all the mandatory parameters need to be provided.

.. image:: _static/images/RequestACL.JPG
    :width: 500px
    :align: center

After a user clicks on a topic, user can view all the subscriptions and a button to subscribe to the topic.

The below fields are required.

Acl type Producer or Consumer.

IP Addresses or SSL DN name, or username should be provided for authorizations.

Multiple IP addresses, or principles or usernames can be filled at once

On submission you can view your requests in Audit/My Requests., and it can be deleted if required.

Avro Schemas
~~~~~~~~~~~~

An Avro schema can also be requested for a particular subject (topic).

.. image:: _static/images/RequestSchema.JPG
    :width: 500px
    :align: center

Clusters
--------

All the clusters are of type 'kafka' or 'schemaregistry'.

.. image:: _static/images/Environments.JPG
    :width: 500px
    :align: center

New clusters can be added by Superusers only. There is a other parameters field added, into which default partitions, max partitions size and replication factor can be added.

.. image:: _static/images/AddCluster.JPG
    :width: 500px
    :align: center

A cluster can be deleted by any Admin user or super user.

Audit
-----

All the requests from users are audited and can be viewed.

My Topic Requests
~~~~~~~~~~~~~~~~~
Requests (Topics/Acls/Schemas/Connectors) from their own team can be viewed and deleted.

.. image:: _static/images/MyTopicRequests.JPG
    :width: 500px
    :align: center

My Acl Requests
~~~~~~~~~~~~~~~
Requests (Topics/Acls/Schemas) from their own team can be viewed and deleted.

.. image:: _static/images/MyAclRequests.JPG
    :width: 500px
    :align: center

Activity Log
~~~~~~~~~~~~

All the requests requested and approved can be viewed. Users login/logout are not part of this log yet.

.. image:: _static/images/ActivityLog.JPG
    :width: 500px
    :align: center

Approve Or Decline
------------------

Topic Requests can be approved or declined by users from the same team. After approval of a topic, it is created on the cluster, how ever no acls are assigned to it yet.

Acl Requests can be approved/declined by users who belong to Topic Owner's team. After approval, acls are created on the cluster.

Schema Requests can be approved by Admins or Super users from the same team.

Notifications are visible on the top right side of the portal.

Topics
~~~~~~
If a topic is requested by 'user1' from 'Team1', it can be approved/declined by 'user2' from 'Team1' only., provided 'user2' has same role.

.. image:: _static/images/ApproveTopics.JPG
    :width: 500px
    :align: center

Acls
~~~~
If a acl is requested by 'user1' on topic which is owned by 'Team2', it can be approved/declined by 'user2' from 'Team2' only., provided 'user2' has same role.

.. image:: _static/images/ApproveACL.JPG
    :width: 500px
    :align: center

Avro Schemas
~~~~~~~~~~~~

If a schema is requested by 'user1' from 'Team1', it can be approved by 'user2' from 'Team1' only., provided 'user2' has same role.

Users
-----

All the users are visible to any logged in user. A new user can be added/deleted by only Super users.

View Users
~~~~~~~~~~
From this page all the users can be seen and also be deleted.

.. image:: _static/images/ViewUsers.JPG
    :width: 500px
    :align: center

Add User
~~~~~~~~
With this form a new user can be added by a SuperUser.

.. image:: _static/images/AddUser.JPG
    :width: 500px
    :align: center

Teams
-----

All the teams are visible to any logged in user. A new team can be added, or a team can be deleted by only Super users.

View Teams
~~~~~~~~~~
From this page all the users can be seen.

.. image:: _static/images/ViewTeams.JPG
    :width: 500px
    :align: center

Add Team
~~~~~~~~
With this form a new team can be added by a SuperUser.

.. image:: _static/images/AddTeam.JPG
    :width: 500px
    :align: center



Admin
-----

Server Config
~~~~~~~~~~~~~

All the Server configuration including custom properties (application properties can be viewed)

Profile
-------

All Users can view their profile with the button available in the top right corner of the portal.

Change Password
~~~~~~~~~~~~~~~

All the logged in users can change the password, however it will be effective only after the UI Api Application is restarted. Enhancement will be provided on this soon.

Logout
------

Users can logout after clicking on the logout button on the top right corner. Session will be killed after this action.

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
to configure your Ldap server and connect.

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


Kafka connectors
----------------

Create and approve Kafka connectors
