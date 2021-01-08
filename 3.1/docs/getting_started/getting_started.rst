Getting Started
===============

Demo 4.2 (Prev)
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
Download the latest version (4.5). https://kafkawize.com/download/

This bundle includes the libraries of kafkawizeuapi and kafkawizeclusterapi

2 Download Metastore
--------------------

If Rdbms is used as metastore, download

Mysql : https://dev.mysql.com/downloads/

Oracle : https://www.oracle.com/database/technologies/oracle-database-software-downloads.html

of file based/

Or any other Rdbms is ok.

3 License Key
-------------
You will receive it from Kafkawize.

4 KW Cluster Api Application
----------------------------------
This Api does the below

-   Receives and responds to calls from UI Api
-   Connects to Kafka Brokers with Kafka AdminClient Api
-   There is no connection to any metastore
-   Swagger enabled

The jar (kafkawizeclusterapi-4.5.jar) is available in the downloaded bundle.

5 Configure Kafkawize UI Api Application
----------------------------------------
This Api does the below

-   Users interact with interface with this Api
-   All the end points in this application either connect to Metastore or Cluster Api or both

Configure application properties:

    In application.properties

default port is 9097, if port has to be changed, else ::

    server.port:9097


Set metastore to rdbms (from step 4)::

    kafkawize.db.storetype=rdbms

-   Install and run Rdbms (like Mysql/Oracle) and create a db schema or database

other params::

    # default cluster to synchronize data
    kafkawize.syncdata.cluster=DEV

    # order of envs
    kafkawize.envs.order=DEV,TST,ACC,PRD
    kafkawize.request.topics.envs=DEV,TST,ACC,PRD

configure db properties like below::

    # Spring JPA properties
    spring.datasource.url=jdbc:mysql://localhost:3306/kafkametadb?autoReconnect=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
    spring.datasource.username=kafkauser
    spring.datasource.password=kafkauser123
    spring.datasource.driver.class=com.mysql.cj.jdbc.Driver
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

configure db properties for file based like below::

    # Spring JPA properties
    spring.datasource.url=jdbc:h2:file:C:/Software/KafkaWize/H2Filedb/kafkawizedbos;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;DATABASE_TO_LOWER=TRUE;
    spring.datasource.username=kafkauser
    spring.datasource.password=kafkauser123
    spring.datasource.driver.class=org.h2.Driver
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect


Configure Cluster Api
~~~~~~~~~~~~~~~~~~~~~
configure cluster api host and port details::

    kafkawize.clusterapi.url:http://localhost:9343

-   ignore user/pwd of cluster api properties


6 Metastore setup
-----------------

Metastore Rdbms
~~~~~~~~~~~~~~~

In application.properties configure custom.dbscripts.execution=auto or manual to get the required database scripts executed.

Configure custom.dbscripts.dropall_recreate=false or true to drop all the metadata scripts and recreate. This property is only valid if the above property is set to auto

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

The jar (kafkawize-4.5.jar) is available in the downloaded bundle.

7 Run KW and KWClusterApi
-------------------------

Run the script to start the application.

Windows : start-kafkawize.bat
Linux/Unix : start-kafkawize.sh

Or

Run::

 java -jar kafkawizeclusterapi-4.5.jar --spring.config.location=classpath:/application.properties


Run::

    java -jar kafkawize-4.5.jar --spring.config.location=classpath:/application.properties

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

    gary/user USER Octopus
    will/user USER Seahorses
    john/user USER Starfish
    cris/user ADMIN Octopus
    noah/user ADMIN Seahorses
    alex/user ADMIN Starfish
    superuser/user SUPERUSER Seahorses

