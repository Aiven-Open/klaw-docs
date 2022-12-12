Run Klaw from source
====================

Klaw is a Java project. Follow the below steps to run this project from the source.

1. Download the latest code from the `Klaw <https://github.com/aiven/klaw>`_ GitHub repository.

   .. tip:: You can also clone repository to use the "bleeding edge" version if you wish.

2. Configure Cluster Api access
    - Configure the property ``klaw.clusterapi.access.base64.secret`` in the ``application.properties`` file with a base64 string in the module: core. 
    - Configure the property ``klaw.clusterapi.access.base64.secret`` in the ``application.properties`` file with the above base64 string in the module: cluster-api. 

2. Build the project by running ``./mvnw clean package`` for Linux(bash) or ``mvnw clean package`` for Windows, from the top level of the project directory. This will build JAR files in the ``target/`` directories of each modules: core and cluster-api.

3. Start the API component by running its JAR file::

        java -jar klaw-clusterapi-<version>.jar

   .. note:: To pass additional configuration, pass an additional parameter like ``--spring.config.location=classes/application.properties``

4. Start the web UI by running its JAR file::

        java -jar klaw-<version>.jar

5. Access the web interface using the URL: ``http://localhost:9097/``.

6. Log in as the admin user to get started.

   * **Username:** ``superadmin``
   * **Password:** ``kwsuperadmin123$$``

