Advanced configuration
======================

To configure the API component of Klaw, supply an ``application.properties`` file when starting the service. We have included some examples below to get you started.

Configure logging for Klaw
--------------------------

You can change the logging level and log file location by adding or editing the relevant lines in the ``application.properties`` file and supplying this to the API component at run time::

    logging.level.root=info
    logging.file.name=./../logs/klaw-api.log

.. note:: You can pass any properties file, but it must use the ``.properties`` file extension and be in standard properties file format.

Configure metastore properties
------------------------------

The :doc:`metastore` is a configurable database that holds Klaw's data. You can configure it by setting the ``spring.datasource.*`` config values in your ``application.properties`` file.

Connect to Apache Kafka over SSL
--------------------------------

Configuring Klaw with Apache Kafka and SSL requires you to set up certificates, key stores and trust stores. As an example, here's how to easily configure Klaw for use with an Aiven for Apache Kafka service, first install the `Aiven client <https://github.com/aiven/aiven-client>`_ CLI tool.

1. Start or navigate to your Aiven for Apache Kafka service. If you're doing this for the first time, you can find more information `in the Aiven documentation <https://docs.aiven.io/docs/products/kafka/getting-started.html>`_.

2. Make a directory to store the certificates in, for example ``certs/``.

3. The Aiven CLI gives us a helper command that will set up the configuration and certificates required to connect to Aiven for Apache Kafka from Klaw. Replace the ``SERVICE_NAME`` with your own, and if you wish to use a different user, change that too. It is strongly recommended to choose a better password than ``trustme``::

        avn service user-kafka-java-creds SERVICE_NAME -d ./certs --password trustme --username avnadmin

   .. tip:: Learn more about this command in the `Aiven CLI documentation <https://docs.aiven.io/docs/tools/cli/service/user.html#avn-service-user-kafka-java-creds>`_.

4.  In the ``certs`` folder, open the ``client.properties`` file that the previous command created, and copy the SSL configuration lines.

5. Paste the lines into the Klaw ``application.properties`` file, but please note that the following changes are needed:

       - Replace ``ssl.*`` with ``klaw.kafkassl.*``.
       - For SSL authentication, also replace keys named ``password`` with ``pwd``.
         
   There is an example below to illustrate the general shape of the configuration::

        klawssl.kafkassl.protocol=TLS
        klawssl.kafkassl.key.pwd=trustme
        klawssl.kafkassl.keystore.location=/srv/certs/client.keystore.p12
        klawssl.kafkassl.keystore.pwd=trustme
        klawssl.kafkassl.keystore.type=PKCS12
        klawssl.kafkassl.truststore.location=/srv/certs/client.truststore.jks
        klawssl.kafkassl.truststore.pwd=trustme
        klawssl.kafkassl.truststore.type=JKS


