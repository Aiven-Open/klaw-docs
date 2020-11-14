On Docker
=========

Kafkawize can be run with Docker from version 4.4. You can download the docker images from https://hub.docker.com/u/kafkawize

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
           CUSTOM_DB_STORETYPE: cassandra
           CUSTOM_CASSANDRADB_URL: cassandra-1
           CUSTOM_CLUSTERAPI_URL: http://clusterapi-1:9343
         ports:
         -   "9097:9097"
         extra_hosts:
           - "moby:127.0.0.1"
     networks:
         kafka:


Step 3 (Docker-compose Cassandra)
---------------------------------
In this example I used Cassandra, but you can also connect it with any RDBMS

Create a cassandra_docker_compose.yml with the below content which contains docker image of Apache Cassandra

.. code-block:: yaml

    version: '2'
     services:
       cassandra-1:
         image: cassandra:latest
         ports:
         -   "9042:9042"
         networks:
           - kafka
         extra_hosts:
           - "moby:127.0.0.1"
     networks:
         kafka:

Step 4 (Start Cassandra)
------------------------

To run the docker compose file, run the below command where the above file is saved ::

    docker-compose -f .\cassandra_docker_compose.yml up

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

    uiuser1/user USER Team1
    uiuser2/user USER Team2
    uiuser3/user USER Team3
    uiuser4/user ADMIN Team1
    uiuser5/user ADMIN Team2
    uiuser6/user ADMIN Team3
    superuser/user SUPERUSER Team2


Docker shell
~~~~~~~~~~~~
You can login into the docker container shell with the below command::

    docker exec -ti <docker_container_id> /bin/bash
