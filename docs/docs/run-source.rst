Run Klaw from source
====================

Klaw is a Java project, you will need `Maven <https://maven.apache.org/>`_ installed to run this project from source.

1. Download the latest releases from both repositories:

   * https://github.com/aiven/klaw
   * https://github.com/aiven/klaw-cluster-api

  .. tip:: You can also clone both repositories to use the "bleeding edge" version if you wish.

2. Build both projects by running ``mvn clean package`` from the top level of each project directory. This will build a JAR file in the ``target/`` directory of each project.

3. Start the API component by running its JAR file::

        java -jar klawclusterapi-1.0.0.jar

   .. note:: to pass additional configuration, pass an additional parameter like ``--spring.config.location=classes/application.properties``

4. Start the web UI by running its JAR file::

        java -jar klaw-1.0.0.jar

5. Navigate to the web interface http://localhost:9097/

6. Log in as the admin user to get started.

   * **username:** superadmin
   * **password:** kwsuperadmin123$$

