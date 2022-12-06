Configure Klaw with Wizard
==========================

When Klaw is installed for the first time, it prompts the Administrators with a Wizard to configure and make it available for the users.

.. note::  Wizard is accessible at : `https://<host>:<port>/helpwizard`

.. image:: /../../../_static/images/KlawWizard.png

1. Configure Kafka clusters and update Klaw Cluster Api properties with relevant config

You can add any number of clusters. Only users with SUPERADMIN roles(or check allowed permission) can add.

After adding the cluster, if you have selected SSL or any other protocol, make sure Cluster Api properties are configured.

Example ::

    dev1.kafkassl.protocol=TLS
    dev1.kafkassl.key.pwd=trustme
    dev1.kafkassl.keystore.location=/srv/certs/client.keystore.p12
    dev1.kafkassl.keystore.pwd=trustme
    dev1.kafkassl.keystore.type=PKCS12
    dev1.kafkassl.truststore.location=/srv/certs/client.truststore.jks
    dev1.kafkassl.truststore.pwd=trustme
    dev1.kafkassl.truststore.type=JKS

2. Configure Environments

Environments are wrappers over your kafka clusters. You can have multiple environments connected to one Kafka cluster with different settings

You can add any number of environments. Only users with SUPERADMIN roles (or check allowed permission) can add by default.

You can configure min max partitions, replication factors, prefix or suffix for topic names.

3. Test Kafka connectivity

After configuring environments, you may test the connectivity by clicking the validate button.


.. image:: /../../../_static/images/EnvStatus.png

3. Configure Tenant and Environment hierarchy

Under Settings, configure property `klaw.tenant.config`

Example ::

    {
      "tenantModel" : {
        "tenantName" : "default",
        "baseSyncEnvironment" : "DEV",
        "orderOfTopicPromotionEnvsList" : [ "DEV" ],
        "requestTopicsEnvironmentsList" : [ "DEV" ],
        "baseSyncKafkaConnectCluster" : null,
        "orderOfConnectorsPromotionEnvsList" : null,
        "requestConnectorsEnvironmentsList" : null
      }
    }



5. For existing Kafka clusters, migrate Topics and Acls to Klaw.

If there is an existing Kafka cluster, where topics and subscriptions have to be migrated to Klaw, follow these steps.

As a SUPERADMIN, by default there are permissions to synchronize. Select an environment, and assign teams to topics or Acls.

Either you can select individually or with bulk option, assign all at a time to one team.

.. image:: /../../../_static/images/SyncTopicsFromCluster.png

Required permission to Synchronize topics from cluster to Klaw ``SYNC_TOPICS``

6. Create Teams

After adding clusters and environments, Teams can be created. Required permission to add teams : ``ADD_EDIT_DELETE_TEAMS``

7. Create Users

Users can be created and assign to the newly created teams. Required permission to add users : ``ADD_EDIT_DELETE_USERS``

8. Create any other Roles and Permissions (Optional)

If your organization needs more roles and permissions, start with adding a role. Required permission to add roles : ``ADD_EDIT_DELETE_ROLES``


You can now share Klaw with your teams.