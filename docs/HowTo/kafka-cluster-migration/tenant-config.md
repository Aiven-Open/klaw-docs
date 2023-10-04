# Tenant configuration

A Tenant, in Klaw terminology, is an isolated Klaw environment with its
own clusters, environments, users, teams, topics, etc. Users of one
tenant are isolated from other tenants. They cannot view topics or any
information of other tenants, even though they share the same Klaw
instance.

Every installation of Klaw comes with a single (default) tenant.

You can configure the following in a tenant:

- Base sync environment

  This is the base Apache Kafka environment in a hierarchy of
  environments. Make sure this environment already exists under
  Environments (Apache Kafka).

      Field: baseSyncEnvironment

- Order of Apache Kafka Topics promotion environments

  Define a set of environments in order to promote a
  Apache Kafka topic. Ex: \[\"DEV\", \"TST\"\]. Make sure this
  environment already exists under Environments (Apache Kafka)

      Field: orderOfTopicPromotionEnvsList

- Request Topics Environments List

  Define a set of environments for which Apache Kafka topics can be
  requested directly. Other environments cannot be requested
  directly, and topics can only be promoted to them.

      Field: requestTopicsEnvironmentsList

- Base sync environment Apache Kafka Connector

  This is the base Apache Kafka connect environment in a hierarchy of
  environments. Make sure this environment already exists under
  Environments (Apache Kafka connect).

      Field: baseSyncKafkaConnectCluster

- Order of Apache Kafka Connect promotion environments

  Define a set of environments in order to promote a
  Apache Kafka connector. Ex: \[\"DEV\", \"TST\"\]. Make sure this
  environment already exists under Environments (Apache Kafka connect)

      Field: orderOfConnectorsPromotionEnvsList

- Request Connectors Environments List

  Define a set of environments for which Apache Kafka connectors can be
  requested directly. Other environments cannot be requested
  directly, and connectors can only be promoted to them.

      Field: requestConnectorsEnvironmentsList

  Sample Tenant configuration for Property: `klaw.tenant.config`:

  ```json
  {
    "tenantModel": {
      "tenantName": "default",
      "baseSyncEnvironment": "DEV",
      "orderOfTopicPromotionEnvsList": ["DEV", "TST"],
      "requestTopicsEnvironmentsList": ["DEV", "TST"],
      "baseSyncKafkaConnectCluster": null,
      "orderOfConnectorsPromotionEnvsList": [],
      "requestSchemaEnvironmentsList": [],
      "requestConnectorsEnvironmentsList": []
    }
  }
  ```

You can configure the above configurations under **Dashboard** -\>
**Settings** with a SUPERADMIN role or a user with the
`UPDATE_SERVERCONFIG` permission.
