Run Klaw in Docker
==================

Klaw provides docker images using, which you can Klaw run in docker.

 * Core Api : https://hub.docker.com/r/aivenoy/klaw-core

 * Cluster Api : https://hub.docker.com/r/aivenoy/klaw-cluster-api

Follow the steps below to run Klaw in docker: 

1. Create docker compose file

For a quick start, below here is a sample docker compose file.

  ::

      version: '3'
      services:
        klaw-core:
          image: aivenoy/klaw-core:latest
          environment:
            KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
          ports:
          -   "9097:9097"
          networks:
            - klaw
          extra_hosts:
            - "moby:127.0.0.1"

        klaw-cluster-api:
          image: aivenoy/klaw-cluster-api:latest
          hostname: localhost
          networks:
            - klaw
          environment:
            KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
          ports:
          -   "9343:9343"
          extra_hosts:
            - "moby:127.0.0.1"
      networks:
          klaw:


To add a property, for example:

``klaw.login.authentication.type=db`` should be configured as ``KLAW_LOGIN_AUTHENTICATION_TYPE: db``

  .. note::  
    Please update the property ``KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET`` with a new base64 encoded secret

2. Run docker compose

  ``docker-compose -f .\dockerpcompose.yml up``


3. Verify docker process

  ``docker ps``

4. Access the web interface using the following URL: 

  ``http://<dockerhost>:9097/``

5. Login with the following default credentials to access Klaw.
   .. note::  We recommend you to change the default credentials in your application, before running it.

* ``KLAW_SUPERADMIN_DEFAULT_USERNAME=superadmin``
* ``KLAW_SUPERADMIN_DEFAULT_PASSWORD=kwsuperadmin123$$``

Klaw Docker Scripts
-------------------
Klaw does come with some docker scripts which can be downloaded with the source of the project from GitHub and comes complete with a README file to show how to build and deploy the latest bleeding edge version of Klaw.
Available here : https://github.com/aiven/klaw/tree/main/docker-scripts

Enabling HTTPS
--------------
A volume is created to store Klaw data this is where you can store your keystore and truststore for both enabling https but also for enabling secure connections between Klaw and Kafka.
The keystore and truststore should be copied to the klaw data volume so that it may be accessed at run time.

Where to find the Klaw docker volume
------------------------------------
Run the following command with your containerId to find the location of your mount.

``docker inspect -f '{{ .Mounts }}' containerid``

Linux
-----
linux volumes are normally in the same location.

``/var/lib/docker/volumes/docker-scripts_klaw_data/_data``
Windows
--------
Windows locations are also normally in the same location.

``\\wsl$\docker-desktop-data\data\docker\volumes\docker-scripts_klaw_data\_data``

How to configure the docker images
----------------------------------
Once the Keystores have been copied to the Klaw docker volume the keystore location is simply set to /klaw/client.keystore.p12 and /klaw/client.truststore.jks

This can be configured in two ways.

1. Configure the application.properties as normal and execute ```./klaw-docker.sh --all``` that will build and redeploy Klaw with the updated configuration settings
2. Configure the docker-compose-klaw.yaml environment variables to add to the environment settings and execute ```./klaw-docker.sh --deploy``` to redeploy the environmental changes and restart Klaw
 * Here is an example of updating the docker-compose-klaw.yaml
::

 environment:
      KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
      SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
      DEV1_KAFKASSL_KEYSTORE_LOCATION: "/klaw/client.keystore.p12"
      DEV1_KAFKASSL_KEYSTORE_PWD: "klaw1234"
      DEV1_KAFKASSL_KEY_PWD: "klaw1234"
      DEV1_KAFKASSL_KEYSTORE_TYPE: "pkcs12"
      DEV1_KAFKASSL_TRUSTSTORE_LOCATION: "/klaw/client.truststore.jks"
      DEV1_KAFKASSL_TRUSTSTORE_PWD: "klaw1234"
      DEV1_KAFKASSL_TRUSTSTORE_TYPE: "JKS"
      SERVER_SSL_KEYSTORE: "/klaw/client.keystore.p12"
      SERVER_SSL_TRUSTSTORE: "/klaw/client.truststore.jks"
      SERVER_SSL_KEYSTOREPASSWORD: "klaw1234"
      SERVER_SSL_KEYPASSWORD: "klaw1234"
      SERVER_SSL_TRUSTSTOREPASSWORD: "klaw1234"
      SERVER_SSL_KEYSTORETYPE: "pkcs12"

3. You can also externalize the application.properties to the volume and set the environment value in the docker-compose for it to use the local copy of application.properties.
 * Ensure that the klaw.version property is updated correctly on the version copied over to the volume as this is normally updated during the build to keep the api versions in line with the pom version.
      Also ensure that the application.properties is renamed to a unique properties file name so you don't accidentally copy over the Core properties with the cluster properties and vice versa.
::

 environment:
    KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
    SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
    SPRING_CONFIG_LOCATION: "/klaw/klaw-application.properties"


How to use an existing H2 Database
----------------------------------
If you already have a configured environment with users etc those can also be transferred over to the docker image by copying the klawprodb files into the docker volume.
It is recommended that any existing prodb files in the docker volume be backed up in case of any need to revert in the future.