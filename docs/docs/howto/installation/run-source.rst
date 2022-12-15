Run Klaw from source
====================

Klaw is a Java project. Follow the below steps to run this project from the source.

1. Download the latest code from the `Klaw <https://github.com/aiven/klaw>`_ GitHub repository.

   .. tip:: You can also clone repository to use the "bleeding edge" version if you wish.

2. Experimental UI Configuration
   A redesigned user interface for Browse topics, providing a new look and feel for managing Kafka topics. It consists of changes to the layout, styling, and overall appearance of the interface, as well as improvements to make browsing and working topics easier, more efficient and accessible. This new look and feel is achieved by switching to React.

    - Configure the property ``klaw.coral.enabled`` in the ``application.properties`` file to `true` in the module: core.

3. Configure Cluster Api access
    - Configure the property ``klaw.clusterapi.access.base64.secret`` in the ``application.properties`` file with a base64 string in the module: core. 
    - Configure the property ``klaw.clusterapi.access.base64.secret`` in the ``application.properties`` file with the above base64 string in the module: cluster-api. 

4. Build the project by running ``./mvnw clean package`` for Linux(bash) or ``mvnw clean package`` for Windows, from the top level of the project directory. This will build JAR files in the ``target/`` directories of each modules: core and cluster-api.
    .. note:: node, npm and pnpm are also installed locally (required for React UI assets) through maven execution plugins.

5. Start the API component by running its JAR file::

        java -jar klaw-clusterapi-<version>.jar

   .. note:: To pass additional configuration, pass an additional parameter like ``--spring.config.location=classes/application.properties``

6. Start the web UI by running its JAR file::

        java -jar klaw-<version>.jar

7. Access the web interface using the URL: ``http://localhost:9097/``.

8. Log in as the admin user to get started.

   * **Username:** ``superadmin``
   * **Password:** ``kwsuperadmin123$$``

