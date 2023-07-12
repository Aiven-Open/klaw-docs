# Connect Klaw Core and Klaw Cluster APIs

For Klaw to run successfully and perform all the necessary operations on
a Kafka cluster, both the Klaw APIs (Core API and Cluster API) must be
running and connected. This involves configuring the secret key, SSL
protocols in the respective `application.properties` files and verifying
the connectivity between the Klaw APIs, as explained below. You can find
the application.properties file located in the following paths:

-   Core: [klaw/core/src/main/resources]
-   Cluster-api: [klaw/cluter-api/src/main/resources]

## Configure Klaw application.properties file

1.  Configure the secret key

    The secret key is a base64-encoded string configured in the
    `application.properties` files for Klaw's `core` and `cluster-api`
    modules. An example secret key is as follows:

    ```
    klaw.clusterapi.access.base64.secret

    Example: ``dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==``
    ```

2.  Configure the SSL protocols

    You need to configure the following SSL settings for Klaw to run on
    HTTPS. These settings must be configured in the
    `application.properties` files for Klaw's `core` and `cluster-api`
    modules to communicate securely over HTTPS:

    ```
    server.ssl.key-store=client.keystore.p12
    server.ssl.trust-store=client.truststore.jks
    server.ssl.key-store-password=klaw1234
    server.ssl.key-password=klaw1234
    server.ssl.trust-store-password=klaw1234
    server.ssl.key-store-type=pkcs12
    ```

    The `key-store` and `trust-store` settings specify the location of
    the keystore and truststore files, respectively, while the
    `key-store-password`, `key-password`, and `trust-store-password`
    settings specify the passwords for accessing these files. The
    `key-store-type` setting specifies the type of keystore that is
    being used, which in this case is `pkcs12`.

>    Make sure that the certificates used in the keystore and truststore
     are signed by the same CA, or the public keys of both stores must be
     imported into each other's trust stores.
    

3.  Verify the successful connection

    In the Klaw user interface, go to the **Dashboard -\> Settings**
    page, and look for the `klaw.clusterapi.url` configuration. To use a
    secure connection, update the URL to HTTPS, for example:

        https://localhost:9343

    Save the change and click **Test connection**.

If everything is configured correctly, you should be able to perform all the necessary operations with Klaw. If you encounter any issues, you should check the logs or troubleshoot the configuration to ensure everything is set up correctly.
