On Docker/Azure Cloud
=====================

Kafkawize can be run with Docker from version 4.5.1 You can download the docker images from https://hub.docker.com/u/kafkawize

Step 1 (Docker installation)
----------------------------
Make sure docker is installed on your system.

Step 2 (Docker-compose Kafkawize - uiapi)
-----------------------------------------
Create a docker compose file(kafkawize_docker_compose_uiapi.yml) like below which contains images, properties of Kafkawize UserInterface Api applications.

For Azure, make sure images are correctly defined.

.. code-block:: yaml

    ---
    version: '2'
    services:
      uiapi:
        image: kafkawize/kw_uiapi:4.5.1
        hostname: localhost
        environment:
          KAFKAWIZE_DB_STORETYPE: rdbms
          # Authentication type. Possible values : db
          KAFKAWIZE_LOGIN_AUTHENTICATION_TYPE: db
          KAFKAWIZE_DBSCRIPTS_CREATE_TABLES: "true"
          KAFKAWIZE_DBSCRIPTS_INSERT_BASICDATA: "true"

          # License key settings
          KAFKAWIZE_LICENSE_KEY: <key-to-be-filled>
          KAFKAWIZE_ORG_NAME: MyOrganization
          KAFKAWIZE_VERSION: 4.5.1
          KAFKAWIZE_INVALIDKEY_MSG: Invalid License !! Please request from https://kafkawize.com for a license key.

          # Database settings
          SPRING_DATASOURCE_URL: jdbc:h2:file:./kafkawizedbos;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;DATABASE_TO_LOWER=TRUE;
          SPRING_DATASOURCE_USERNAME: kafkauser
          SPRING_DATASOURCE_PASSWORD: kafkauser123
          SPRING_DATASOURCE_DRIVER_CLASS: org.h2.Driver
          SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT: org.hibernate.dialect.H2Dialect
          SPRING_JPA_HIBERNATE_SHOW_SQL: "false"
          SPRING_JPA_HIBERNATE_GENERATE-DDL: "false"

          # Logging settings
          LOGGING_LEVEL_ORG_HIBERNATE_SQL: info
          LOGGING_LEVEL_ROOT: info
          LOGGING_FILE: kafkawize_uiapi.log
        ports:
          -   "9097:9097"
        extra_hosts:
          - "moby:127.0.0.1"
        network_mode: "host"


Step 3 (Docker-compose Kafkawize - clusterapi)
-----------------------------------------
Create a docker compose file(kafkawize_docker_compose_clusterapi.yml) like below which contains images, properties of Kafkawize ClusterApi Api applications.

.. code-block:: yaml


    ---
    version: '2'
    services:
      clusterapi:
        image: kafkawize/kw_clusterapi:4.5.1
        environment:
          LOGGING_FILE: kw_clusterapi.log
        ports:
          -   "9343:9343"
        extra_hosts:
          - "moby:127.0.0.1"
        network_mode: "host"


Step 4 (Start Kafkawize)
------------------------
::

    docker-compose -f .\kafkawize_docker_compose_uiapi.yml up
    docker-compose -f .\kafkawize_docker_compose_clusterapi.yml up

Step 5 (Verify processes)
-------------------------

Verify docker processes ::

    docker ps

Step 6 (Access Kafkawize)
-------------------------

Access Kafkawize from the below url::

    http://<dockerhost>:9097/kafkawize

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

