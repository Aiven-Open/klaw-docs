# Advanced configuration

To configure the API component of Klaw, supply an
`application.properties` file when starting the service. We have
included some examples below to get you started.

## Configure logging for Klaw

You can change the logging level and log file location by adding or
editing the relevant lines in the `application.properties` file and
supplying this to the API component at run time:

```java
logging.level.root=info
logging.file.name=./../logs/klaw-api.log
```

:::note
You can pass any properties file, but it must use the `.properties` file extension and be in standard properties file
format.
:::

## Configure metastore properties

The `metastore` is a configurable database that holds Klaw's data. You can configure it by setting
the `spring.datasource.*` configuration values in your `application.properties` file.

## Connect to Apache Kafka® over SSL

Configuring Klaw with Apache Kafka and SSL requires you to set up certificates, key stores, and trust stores. As an
example, here's how to easily configure Klaw for use with an Aiven for Apache Kafka service,
first install the [Aiven client](https://github.com/aiven/aiven-client) CLI tool.

1.  Start or navigate to your Aiven for Apache Kafka service. If you're doing this for the first time, you can find more
    information [in the Aiven documentation](https://docs.aiven.io/docs/products/kafka/getting-started.html).

2.  Make a directory to store the certificates in, for example, `certs/`.

3.  The Aiven CLI gives us a helper command that will set up the configuration and certificates required to connect to
    Aiven for Apache Kafka from Klaw. Replace the `SERVICE_NAME` with your own,
    and if you wish to use a different user, change that too. It is strongly recommended to choose a better password
    than `trustme`:

    `avn service user-kafka-java-creds SERVICE_NAME -d ./certs --password trustme --username avnadmin`

    :::tip  
    Learn more about this command in
    the [Aiven CLI documentation](https://docs.aiven.io/docs/tools/cli/service/user.html#avn-service-user-kafka-java-creds).
    :::

4.  In the `certs` folder, open the `client.properties` file that the previous command created, and copy the SSL
    configuration lines.

5.  Paste the lines into the Klaw `application.properties` file, but please note that the following changes are needed:

    - Get the identification of cluster from user interface, in the
      clusters page, with the copy option.
    - Replace `ssl.*` with `dev1.kafkassl.*`. [dev1] is
      an example of the copied cluster identification from the above
      step.
    - For SSL authentication, also replace keys named `password`
      with `pwd`.

    There is an example below to illustrate the general shape of the
    configuration:

         dev1.kafkassl.protocol=TLS
         dev1.kafkassl.key.pwd=trustme
         dev1.kafkassl.keystore.location=/srv/certs/client.keystore.p12
         dev1.kafkassl.keystore.pwd=trustme
         dev1.kafkassl.keystore.type=PKCS12
         dev1.kafkassl.truststore.location=/srv/certs/client.truststore.jks
         dev1.kafkassl.truststore.pwd=trustme
         dev1.kafkassl.truststore.type=JKS

To add multiple SSL configurations, simply copy and paste the above lines by prefixing them with the required cluster
identification and relevant certificates.
