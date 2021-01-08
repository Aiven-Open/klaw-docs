On Docker
=========

Kafkawize can be run with Docker from version 4.5. You can download the docker images from https://hub.docker.com/u/kafkawize

Step 1 (Docker installation)
----------------------------
Make sure docker is installed on your system.

Step 2 (Docker-compose Kafkawize)
---------------------------------
Create a docker compose file(kafkawize_docker_compose.yml) like below which contains images, properties of Kafkawize ClusterApi and Kafkawize UserInterface Api applications.

.. code-block:: yaml

    version: '2'
     services:
       clusterapi-1:
         image: kafkawize/kw_clusterapi:latest
         ports:
         -   "9343:9343"
         networks:
           - kafka
         extra_hosts:
           - "moby:127.0.0.1"
       uiapi-1:
         image: kafkawize/kw_uiapi:latest
         hostname: localhost
         networks:
           - kafka
         environment:
           KAFKAWIZE_DB_STORETYPE: rdbms
           KAFKAWIZE_LICENSE_KEY:
           KAFKAWIZE_ORG_NAME: MyOrganization
           KAFKAWIZE_VERSION: 4.5
           KAFKAWIZE_INVALIDKEY_MSG: Invalid License !! Please request from https://kafkawize.com for a license key.

           # Database settings My sql
           SPRING_DATASOURCE_URL: jdbc:mysql://localhost:3306/kafkametadbpro?autoReconnect=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC
           SPRING_DATASOURCE_USERNAME: kafkauser
           SPRING_DATASOURCE_PASSWORD: kafkauser123
           SPRING_DATASOURCE_DRIVER_CLASS: com.mysql.cj.jdbc.Driver
           SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT: org.hibernate.dialect.MySQLDialect
           SPRING_JPA_HIBERNATE_SHOW_SQL: "false"
           SPRING_JPA_HIBERNATE_GENERATE-DDL: "false"

           KAFKAWIZE_CLUSTERAPI_URL: http://clusterapi-1:9343
         ports:
         -   "9097:9097"
         extra_hosts:
           - "moby:127.0.0.1"
     networks:
         kafka:


Step 3 (Docker-compose Mysql)
---------------------------------
In this example I used Mysql, but you can also connect it with any RDBMS like postgres

Create a mysql_docker_compose.yml with the below content which contains docker image of Mysql

.. code-block:: yaml

    version: '2'
     services:
       mysql-1:
         image: mysql:latest
         ports:
         -   "9042:9042"
         networks:
           - kafka
         extra_hosts:
           - "moby:127.0.0.1"
     networks:
         kafka:

Step 4 (Start Mysql)
------------------------

To run the docker compose file, run the below command where the above file is saved ::

    docker-compose -f .\mysql_docker_compose.yml up

Step 5 (Start Kafkawize)
------------------------
::

    docker-compose -f .\kafkawize_docker_compose.yml up

Step 6 (Verify processes)
-------------------------

Verify docker processes ::

    docker ps

Step 7 (Access Kafkawize)
-------------------------

Access Kafkawize from the below url::

    http://localhost:9097/kafkawize

Credentials
~~~~~~~~~~~

Default Credentials available to access Kafkawize::

    gary/user USER Octopus
    will/user USER Seahorses
    john/user USER Starfish
    cris/user ADMIN Octopus
    noah/user ADMIN Seahorses
    alex/user ADMIN Starfish
    superuser/user SUPERUSER Seahorses


Docker shell
~~~~~~~~~~~~

You can login into the docker container shell with the below command::

    docker exec -ti <docker_container_id> /bin/bash

