Tenant Configuration
====================

A Tenant in klaw terminology is an isolated klaw environment which has its own set of clusters, environments, users,
teams, topics etc.

Every installation of klaw comes with a single (default) tenant.

The following can be configured in a tenant.

- Base sync environment
    This is the base kafka environment in a hierarchy of environments. Make sure this environment already exists under
    Environments (kafka).

    Field : baseSyncEnvironment

- Order of Kafka Topics promotion environments
    Define a set of environments in order for promotion of a kafka topic. Ex : ["DEV", "TST"]. Make sure this
    environment already exists under Environments (kafka)

    Field : orderOfTopicPromotionEnvsList

- Request Topics Environments List
    Define a set of environments on which kafka topics can be requested for directly. Other environments cannot be
    requested directly, and topics can only be promoted to them.

    Field : requestTopicsEnvironmentsList

- Base sync environment Kafka Connector
    This is the base kafka connect environment in a hierarchy of environments. Make sure this environment already exists under
    Environments (kafka connect).

    Field : baseSyncKafkaConnectCluster

- Order of Kafka Connect promotion environments
    Define a set of environments in order for promotion of a kafka connector. Ex : ["DEV", "TST"]. Make sure this
    environment already exists under Environments (kafka connect)

    Field : orderOfConnectorsPromotionEnvsList

- Request Connectors Environments List
    Define a set of environments on which kafka connectors can be requested for directly. Other environments cannot be
    requested directly, and connectors can only be promoted to them.

    Field : requestConnectorsEnvironmentsList

Sample Tenant configuration for Property : ``klaw.tenant.config``::


    {
      "tenantModel":
        {
          "tenantName": "default",
          "baseSyncEnvironment": "DEV",
          "orderOfTopicPromotionEnvsList": ["DEV", "TST"],
          "requestTopicsEnvironmentsList": ["DEV", "TST"]
        }
    }

The above configuration can be configured under Dashboard -> Settings with a SUPERADMIN role or permission ``UPDATE_SERVERCONFIG``
