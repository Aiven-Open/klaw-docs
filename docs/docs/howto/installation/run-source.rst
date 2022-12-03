Run Klaw from source
====================

Klaw is a Java project, you will need `Maven <https://maven.apache.org/>`_ installed to run this project from source.

1. Download the latest code from the below repository:

   * https://github.com/aiven/klaw

   .. tip:: You can also clone repository to use the "bleeding edge" version if you wish.

2. Configure Cluster Api access
    - Configure the property ``klaw.clusterapi.access.base64.secret`` with a base64 string in module 'core' (application.properties)
    - Configure the property ``klaw.clusterapi.access.base64.secret`` with the above base64 string in cluster-api (application.properties) module as well.

2. Build the project by running ``./mvnw clean package`` for Linux(bash) or ``mvnw clean package`` for Windows, from the top level of the project directory. This will build JAR files in the ``target/`` directories of each modules 'core' and 'cluster-api'.

3. Start the API component by running its JAR file::

        java -jar klaw-clusterapi-<version>.jar

   .. note:: to pass additional configuration, pass an additional parameter like ``--spring.config.location=classes/application.properties``

4. Start the web UI by running its JAR file::

        java -jar klaw-<version>.jar

5. Navigate to the web interface ``http://localhost:9097/``

6. Log in as the admin user to get started.

   * **username:** ``superadmin``
   * **password:** ``kwsuperadmin123$$``

