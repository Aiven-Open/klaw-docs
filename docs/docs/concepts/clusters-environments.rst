Clusters and environments
=========================

The Klaw concept of cluster maps neatly to your Apache Kafka® clusters; a "cluster" in Klaw is an Apache Kafka server or cluster. Add the clusters you want Klaw to work with.

.. tip:: More detailed information about connecting over SSL is in the :doc:`config` section.

Clusters can be associated with environments, such as ``DEV``, ``TST`` or ``PRD`` to represent your development, testing and production platforms.

Supported protocols include PLAINTEXT, SSL, SASL PLAIN, SASL SSL, SASL SSL (GSSAPI / Kerberos), SASL_SSL (SCRAM SHA 256/512)

Ordering environments
---------------------

Since every setup is different, it is necessary to configure the order of your environments. This allows topics to be created for the "lowest" environment, and then "promoted" with a request/review cycle to the next one "up" when required.

Associating Schema Environments
-------------------------------
As of release 2.2.0 it is now possible to associate a Schema Registry environment to a Kafka Environment meaning that you no longer need to duplicate the promotion ordering for both Topics and for Schema Registries.
.. note::
   A Schema Registry can only be associated with one Kafka Environment at a time.