Getting Started
===============

Lets start with setting up Kafkawize on your Windows/Linux/Unix systems.

Prerequisites
-------------
-   Any IDE like IntelliJ/Netbeans or Eclipse to build the applications.
-   Java installed machines to run the applications
-   Rdbms (like Oracle/MySQL..) or Apache Cassandra

1 Download Kafkawize
--------------------
Download the latest version (3.4) or clone from the git repo. https://github.com/muralibasani/kafkawize

Download the latest version (3.3) or clone from the git repo. https://github.com/muralibasani/kafkawizeclusterapi

OR

Download Kafkawize 3.4 bundle here :download:`Kafkawize_3.4 <_static/files/kafkawize-bundle-3.4.rar>`

2 Download Metastore
--------------------

If Cassandra is used as metastore, you can download from http://cassandra.apache.org/download/

If Rdbms is used as metastore, download

Mysql : https://dev.mysql.com/downloads/

Oracle : https://www.oracle.com/database/technologies/oracle-database-software-downloads.html

Or any other Rdbms is ok.

3 Build KW Cluster Api Application
----------------------------------
This Api does the below

-   Receives and responds to calls from UI Api
-   Connects to Kafka Brokers with Kafka AdminClient Api
-   There is no connection to any metastore
-   Swagger enabled

Unzip kafkawizeclusterapi.zip and open in any IDE

Configure the application properties (src/main/resources) if port has to be changed, else default port is 9343

 and run maven command to create a runnable jar::

    mvn clean package

This should create a jar (kafkawizeclusterapi-3.3.jar) in target dir.

Kafka connectivity between ClusterApi application and Kafka cluster, if SSL connection needs to be configured,
configure "environment".connect_with_ssl_kafkacluster in application properties to true and configure the other keystore properties even.

Run::

 java -jar kafkawizeclusterapi-3.3.jar

4 Metastore setup
-----------------

Metastore Cassandra
~~~~~~~~~~~~~~~~~~~
-   Install and run Cassandra and create a keyspace 'kafkamanagementapi'
-   Create tables and run insert scripts in Cassandra

    /kafkawize/kafkawize-web/src/main/resources/scripts/base/cassandra/createcassandra.sql

    If you are migrating from previous version, execute /kafkawize/kafkawize-web/src/main/resources/scripts/base/cassandra/3.4_updates/alter.sql

    /kafkawize/kafkawize-web/src/main/resources/scripts/base/cassandra/insertdata.sql

    (Scripts available in kafkawize-3.4.zip)

-   Above scripts will create tables and insert initial set of Environments, Teams and Users which you can delete anytime from UI.

Metastore Rdbms
~~~~~~~~~~~~~~~
-   Install and run Mysql/Oracle and create a db schema or database
-   Create tables and run insert scripts in Database

    /kafkawize/kafkawize-web/src/main/resources/scripts/base/rdbms/ddl-jdbc.sql

    If you are migrating from previous version, execute /kafkawize/kafkawize-web/src/main/resources/scripts/base/rdbms/3.4_updates/alter.sql

    /kafkawize/kafkawize-web/src/main/resources/scripts/base/rdbms/insertdata.sql

    (Scripts available in kafkawize-3.4.zip)

-   Above scripts will create tables and insert initial set of Environments, Teams and Users which you can delete anytime from UI.

5 Build KW UI Api Application
-----------------------------
This Api does the below

-   Users interact with interface with this Api
-   All the end points in this application either connect to Metastore or Cluster Api or both

Unzip kafkawize-(version).zip and open in any IDE

Configure application properties:

    In  kafkawize/src/main/resources/application.properties

default port is 9097, if port has to be changed, else ::

    server.port:9097

If metastore is cassandra (from step 4)

setstore type as cassandra::

    custom.db.storetype=cassandra

configure cassandra host, port and keyspace::

    custom.cassandradb.keyspace:kafkamanagementapi
    custom.cassandradb.url:localhost
    custom.cassandradb.port:9042

If metastore is rdbms (from step 4)

setstore type as rdbms::

    custom.db.storetype=rdbms

-   Install and run Rdbms (like Mysql/Oracle) and create a db schema or database

configure db properties like below::

    # Spring JPA properties
    spring.datasource.url=jdbc:mysql://localhost:3306/kafkametadb?autoReconnect=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
    spring.datasource.username=kafkauser
    spring.datasource.password=kafkauser123
    spring.datasource.driver.class=com.mysql.cj.jdbc.Driver


Configure Cluster Api
~~~~~~~~~~~~~~~~~~~~~
configure cluster api host and port details::

    custom.clusterapi.url:http://localhost:9343

-   ignore user/pwd of cluster api properties

Build
~~~~~
Run maven command to create a runnable jar::

    mvn clean package

This should create a jar in target dir (/kafkawize/target/kafkawize-3.4.jar).

Run::

    java -jar spring.config.location=classpath:/application.properties kafkawize-3.4.jar

If application is running, you can access UI from http://[host]:[port]/kafkawize

6 Kafka Connectivity
--------------------
Cluster Api Application connects to Kafka brokers with Kafka AdminClient Api., and needs Describe access on all topics through the cluster.
Hence the below wildcard acl has to be executed.

-   If Acls are enabled on Kafka brokers, make sure "Cluster Api" application host is authorized to read topics (A read Acl is enough on the topic)

    Examples SSL Based Acl::

    bin/kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:"CN=MO,OU=MO,O=WA,L=WA,ST=WA,C=HO" --operation All --topic "*" --cluster

    Examples IP Based Acl::

    bin/kafka-acls --authorizer-properties zookeeper.connect=localhost:2181 --add --allow-principal User:"*" --allow-host 127.0.0.1 --operation All --topic "*" --cluster


-   If SASL/SSL is configured, make sure they right properties are configured in AdminClient properties in Cluster Api application.

7 Final Check
-------------
-   Cluster Api is running
-   Metastore is running and has tables and data
-   UI Api is running
-   Cluster Api is authorized to read topics information
-   Access UI from http://[host]:[port]/kafkawize where host and port are UI Api application
    Example : http://localhost:9097/kafkawize
