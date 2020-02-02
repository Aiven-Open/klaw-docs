Introduction
============

What is Kafkawize?
------------------
A Self service Apache Kafka Topic Management tool/portal. A Web application which automates the process of creating and browsing Kafka topics, acls, schemas by introducing roles/authorizations to users of various teams of an organization.


..  youtube:: KOjdpRtRhEY
    :width: 640
    :height: 480


Background
----------
Let me give some background. Apache Kafka is widely being adapted in organizations irrespective of the scale. It’s unique features like scalability, retention and reliability unlike the traditional messaging platforms, makes it stand out.

While adapting Kafka, you would notice there are few manual activities like creating topics, acls, updating configuration etc.
There have been few topic management tools in the market which provide automation to certain extent, however its not complete. Assume there is a team requesting for a kafka topic with in an organization. They would either request for it through email with a template or any user interface. The actual kafka team in the organization executes the commands to create topics. With Development, Test, Acceptance and Production environments, managing these configurations, by the Kafka team and handling all the requests from various teams would become a hassle as you see the growth of teams using Kafka. It is just not manual activity, but Audit, time and effort, the team has to put in.

Apart from that, this meta data (Kafka topics, acls) which is stored in ZK could be easily stored in a good readable format and can be used as source of truth.

Hence I saw the need of Kafkawize – a self service topic management tool., to keep ZERO interaction by other Teams with Kafka team for topics, acls or schemas creation by introducing roles and authorizations to users of teams. It is developed with a simple front end, and backend with Spring boot. It saves time and effort, governs information, avoids risk in kafka config loss, avoids manual activities and mistakes, maintains up to date SOT (source of truth). Current User Interface is not so great but it serves the purpose for now. It would be updated with Angular 7 material design soon.

How is it developed
-------------------
Simple technologies have been used to develop Kafkawize. Front end is developed with HTML, CSS, Octopus bootstrap theme and Javascript.
Backend with Java, Kafka Admin client libraries and Spring frameworks.
First version of Kafkawize has been released in Sep 2018 with basic features., and gradually enhanced it.

Architecture
------------

.. image:: _static/images/arch.png
    :width: 500px
    :align: center

Kafkawize contains two main Apis (User Interface API and Cluster management API) and a Front end.

User Interface Api directly communicates between Frontend UI and Cluster API.

Front end is built with AngularJs, HTML, and Java script.

Cluster API acts as middle layer between Kafka brokers and UserInterface API.

Cluster API creates Kafka Admin Client and executes the requests for Topic, Acls or Schema registry. Kafka Admin client libraries are used to create the client.

Apache Cassandra Or RDBMS(MySql for ex) datastore stores all the meta information like users, teams, topicRequests, request and execution data from all the users., and to maintain source of truth.

Requests from users are directed to cluster api., and also data is stored metastore.

On the backend side, Spring Security, Spring Boot frameworks, Hibernate are used to develop this application.

Git Repositories
----------------

UI Api      :   https://github.com/muralibasani/kafkawize

Cluster Api :   https://github.com/muralibasani/kafkawizeclusterapi

Developer
---------

Muralidhar Basani

LinkedIn    :   https://www.linkedin.com/in/muralibasani/

Web         :   https://kafkawize.com
