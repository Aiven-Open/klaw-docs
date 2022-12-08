Klaw Core Api connectivity with Cluster Api
===========================================

For Klaw to run successfully with all kafka cluster operations, we have to make sure both the apis of Klaw are running properly and connected.

1. Configure below secret with a base 64 encoded string on both the apis::

    klaw.clusterapi.access.base64.secret

    Example : ``dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==``

2. For Klaw to run on HTTPS, the below configuration is required on both the apis::

        server.ssl.key-store=client.keystore.p12
        server.ssl.trust-store=client.truststore.jks
        server.ssl.key-store-password=klaw1234
        server.ssl.key-password=klaw1234
        server.ssl.trust-store-password=klaw1234
        server.ssl.key-store-type=pkcs12

.. note::
    Please make sure the above configured certificates are signed by same CA or the public keys of both the stores are imported to trust stores mutually.

3. Verify the connectivity. In Klaw UI, go to Dashboard -> Settings and look for ``klaw.clusterapi.url``
   For HTTPS,  https://<host>:<port>
   For HTTP,  http://<host>:<port>

That should be it.