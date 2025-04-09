# Clusters and Environments

In Klaw, the concept of a **cluster** corresponds directly to Apache
Kafka® clusters. When you come across a cluster in Klaw, it refers to an
Apache Kafka server or cluster. As a user, you can easily add the
clusters you want Klaw to work with.

## Associate clusters with environments

You can associate clusters with environments like DEV, TST, or PRD to
represent your development, testing, and production platforms in Klaw.
This helps you better organize and manage your Apache Kafka topics and data.

## Supported protocols

Klaw supports the following protocols:

- SSL
- SASL PLAIN
- SASL SSL
- SASL SSL (GSSAPI/Kerberos)
- SASL_SSL (SCRAM SHA 256/512)
- PLAINTEXT – Supported by Klaw, but not recommended for use outside of a proof of concept due to security concerns, as it transmits data unencrypted.

:::warning
For production use, it's strongly advised to choose a secure protocol like SSL or SASL.
:::

See also: [Cluster connectivity setup](../../cluster-connectivity-setup/index.md)

## Order and promote environments

Since every setup differs, Klaw allows you to organize your environments
in a specific order. This ensures you can create topics for the
**lowest** environment and then **promote** them to the next level
through a request/review cycle when needed. This functionality enables
the efficient and seamless promotion of Apache Kafka topics across different
environments.

## Associating schema environments

As of release 2.2.0, it is now possible to associate a schema registry
environment to a Apache Kafka Environment meaning that you no longer need to
duplicate the promotion ordering for both topics and for schema
registries.

:::info
A schema registry can only be associated with one Apache Kafka environment at a time.
