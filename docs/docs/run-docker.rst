Run Klaw using ``docker-compose``
=================================

Before you start, make sure you have `Docker Compose <https://docs.docker.com/compose/install/>`_ installed.

1. Klaw consists of two main components, the web UI and the backend API. First, we'll create a configuration file for the API component. In a file named ``klaw_docker_compose_api.yml``, add the following::

    ---
    version: '2'
    services:
      clusterapi:
        image: kafkawize/kw_clusterapi:latest
        environment:
          LOGGING_FILE: klaw_api.log
        ports:
          - "9343:9343"
        network_mode: "host"

2. The second component, the UI, also needs a docker compose file. Create ``klaw_docker_compose_ui.yml`` and add the following::

    ---
    version: '2'
    services:
      uiapi:
        image: kafkawize/kw_uiapi:latest
        hostname: localhost
        environment:
          KAFKAWIZE_DB_STORETYPE: rdbms
          # Authentication type. Possible values : db
          KAFKAWIZE_LOGIN_AUTHENTICATION_TYPE: db
          KAFKAWIZE_DBSCRIPTS_CREATE_TABLES: "true"
          KAFKAWIZE_DBSCRIPTS_INSERT_BASICDATA: "true"

          # Other settings
          KAFKAWIZE_ORG_NAME: MyOrganization
          KAFKAWIZE_VERSION: 5.0.3

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
          LOGGING_FILE: klaw_ui.log
        ports:
          - "9097:9097"
        network_mode: "host"


  Both files are templates to get you started; feel free to adjust to suit the needs of your application.

3. Start the services using the ``docker-compose`` command::

    docker-compose -f klaw_docker_compose_ui.yml up
    docker-compose -f klaw_docker_compose_api.yml up

  .. tip:: These are long-running services and they output log information. You may find it useful to run each one in its own window.

4. Navigate to the web interface http://localhost:9097/

5. Log in as the admin user to get started.

   * **username:** superadmin
   * **password:** kwsuperadmin123$$

Advanced usage
--------------

If you need to pass additional configuration and/or certificate files with the API component, use a direct ``docker`` command like the one below, rather than using ``docker-compose``::

    docker run --name kw --rm -v $(pwd)/application.properties:/srv/conf/app.properties -v $(pwd)/certs:/srv/certs -e LOGGING_FILE=kw_clusterapi.log -p 9343:9343 kafkawize/kw_clusterapi:latest --spring.config.location=/srv/conf/app.properties

