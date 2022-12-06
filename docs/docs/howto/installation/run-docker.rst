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
    Please update the property ``KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET`` with new base64 encoded secret

2. Run docker compose

  ``docker-compose -f .\dockerpcompose.yml up``


3. Verify docker process

  ``docker ps``

4. Access the web interface using the following URL: 

  ``http://<dockerhost>:9097/``

5. Login with the following default credentials to access Klaw.
   .. note::  Recommend you to change the default credentials in your application.

* ``KLAW_SUPERADMIN_DEFAULT_USERNAME=superadmin``
* ``KLAW_SUPERADMIN_DEFAULT_PASSWORD=kwsuperadmin123$$``

  .. note::  We recommend you to change the default credentials in your application.