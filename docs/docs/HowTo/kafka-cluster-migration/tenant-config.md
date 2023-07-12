# Tenant configuration

A Tenant, in Klaw terminology, is an isolated Klaw environment with its
own clusters, environments, users, teams, topics, etc. Users of one
tenant are isolated from other tenants. They cannot view topics or any
information of other tenants, even though they share the same Klaw
instance.

Every installation of Klaw comes with a single (default) tenant.

You can configure the following in a tenant:

-   

    Base sync environment

    This is the base Apache Kafka environment in a hierarchy of
        environments. Make sure this environment already exists under
        Environments (Kafka).

        Field: baseSyncEnvironment

-   

    Order of Kafka Topics promotion environments

    Define a set of environments in order for the promotion of a
        Kafka topic. Ex : \[\"DEV\", \"TST\"\]. Make sure this
        environment already exists under Environments (Kafka)

        Field: orderOfTopicPromotionEnvsList

-   

    Request Topics Environments List

    Define a set of environments for which kafka topics can be
        requested directly. Other environments cannot be requested
        directly, and topics can only be promoted to them.

        Field: requestTopicsEnvironmentsList

-   

    Base sync environment Kafka Connector

    This is the base Kafka connect environment in a hierarchy of
        environments. Make sure this environment already exists under
        Environments (Kafka connect).

        Field: baseSyncKafkaConnectCluster

-   

    Order of Kafka Connect promotion environments

    Define a set of environments in order for the promotion of a
        Kafka connector. Ex : \[\"DEV\", \"TST\"\]. Make sure this
        environment already exists under Environments (Kafka connect)

        Field: orderOfConnectorsPromotionEnvsList

-   

    Request Connectors Environments List

    Define a set of environments for which Kafka connectors can be
        requested directly. Other environments cannot be requested
        directly, and connectors can only be promoted to them.

        Field: requestConnectorsEnvironmentsList

    Sample Tenant configuration for Property : `klaw.tenant.config`:
    
    ```
    {
      "tenantModel":
        {
          "tenantName": "default",
          "baseSyncEnvironment": "DEV",
          "orderOfTopicPromotionEnvsList": ["DEV", "TST"],
          "requestTopicsEnvironmentsList": ["DEV", "TST"]
        }
    }
    ```

You can configure the above configurations under **Dashboard** -\>
**Settings** with a SUPERADMIN role or a user with the
`UPDATE_SERVERCONFIG` permission.
