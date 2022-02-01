Getting Started
===============

Demo 5.0.0 (Prev)
--------------

.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/6p1cFTqxfGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Lets start with setting up Kafkawize on your Windows/Linux/Unix systems.

Prerequisites
-------------
-   Any IDE like IntelliJ/Netbeans or Eclipse to build the applications.
-   Java installed machines to run the applications
-   Rdbms (like Oracle/MySQL..) or File based

1 Download Kafkawize
--------------------
Download the latest version (5.0.0) from github

https://github.com/muralibasani/kafkawize

https://github.com/muralibasani/kafkawizeclusterapi

This bundle includes the libraries of kafkawizeuapi and kafkawizeclusterapi

2 Download Metastore
--------------------

If Rdbms is used as metastore, download

Mysql : https://dev.mysql.com/downloads/

Oracle : https://www.oracle.com/database/technologies/oracle-database-software-downloads.html

of file based/

Or any other Rdbms is ok.

3 KW Cluster Api Application
----------------------------------
This Api does the below

-   Receives and responds to calls from UI Api
-   Connects to Kafka Brokers with Kafka AdminClient Api
-   There is no connection to any metastore
-   Swagger enabled

run
mvn clean install
generates the jar (kafkawizeclusterapi-5.0.0.jar)

5 Configure Kafkawize UI Api Application
----------------------------------------
This Api does the below

-   Users interact with UI interface with this Api
-   All the end points in this application either connect to Metastore or Cluster Api or both

Build
mvn clean install

Configure application properties:

    In application.properties

default port is 9097, if port has to be changed, else ::

    server.port:9097


Set metastore to rdbms (from step 4)::

    kafkawize.db.storetype=rdbms

-   Install and run Rdbms (like Mysql/Oracle) and create a db schema or database

Configure Cluster Api
~~~~~~~~~~~~~~~~~~~~~
configure cluster api host and port details::

    kafkawize.clusterapi.url:http://localhost:9343

6 Metastore setup
-----------------

Metastore Rdbms
~~~~~~~~~~~~~~~

Configure in application properties::
# Database settings
# To create all the required tables of Kafkawize. Need grants to create and alter. Values true/false::

    kafkawize.dbscripts.create.tables=false

# db scripts execution 'auto' or 'manual'. If set to manual, user has to execute the scripts from resources dir manually::

    kafkawize.dbscripts.insert.basicdata=false

# Location of db scripts for insert or create::

    kafkawize.dbscripts.location=./scripts/base/rdbms/

-   Install and run Mysql/Oracle and create a db schema or database
-   Create tables and run insert scripts in Database

    /scripts/base/rdbms/ddl-jdbc.sql

    /scripts/base/rdbms/insertdata.sql

-   Above scripts will create tables and insert initial set of Environments, Teams and Users which you can delete anytime from UI.

The jar (kafkawize-5.0.0.jar) is available in the downloaded bundle.

7 Run KW and KWClusterApi
-------------------------

Run::

 java -jar kafkawizeclusterapi-5.0.0.jar --spring.config.location=classpath:/application.properties


Run::

    java -jar kafkawize-5.0.0.jar --spring.config.location=classpath:/application.properties

If application is running, you can access UI from http://[host]:[port]/kafkawize

8 Kafka Connectivity
--------------------
Cluster Api Application connects to Kafka brokers with Kafka AdminClient Api., and needs Describe access on all topics through the cluster.
Hence the below wildcard acl has to be executed.

-   If Acls are enabled on Kafka brokers, make sure "Cluster Api" application host is authorized to read topics (A read Acl is enough on the topic)

    Examples SSL Based Acl (Note of double quotes in the below command if copied properly)::

    bin/kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:CN=MO,OU=MO,O=WA,L=WA,ST=WA,C=HO" --operation All --topic "*" --cluster  Cluster:kafka-cluster

    Examples IP Based Acl::

    bin/kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:"*" --allow-host 127.0.0.1 --operation All --topic "*" --cluster  Cluster:kafka-cluster


9 Final Check
-------------
-   Cluster Api is running
-   Metastore (Rdbms or file system) is running and has tables and data
-   UI Api is running
-   Cluster Api is authorized to read topics and acls on topics information(Acls should be configured)
-   Access UI from http://[host]:[port]/kafkawize where host and port are UI Api application
    Example : http://localhost:9097/kafkawize

    Default users, passwords and roles::

    superadmin/kwsuperadmin123$$    (also configured in application.properties)

