/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "index",
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started/features",
        "getting-started/quickstart",
        "getting-started/getstarted",
      ],
    },
    {
      type: "category",
      label: "Dashboard",
      items: ["dashboard/dashboard-view", "dashboard/analytics"],
    },
    {
      type: "category",
      label: "Setup and configuration",
      items: [
        {
          type: "category",
          label: "Klaw installation",
          link: {
            type: "doc",
            id: "setup-configuration/klaw-installation/index",
          },
          items: [
            "setup-configuration/klaw-installation/run-docker",
            "setup-configuration/klaw-installation/run-source",
            "setup-configuration/klaw-installation/configure-klaw-wizard",
            "setup-configuration/klaw-installation/deployklaw",
          ],
        },
        "setup-configuration/klaw-api-ssl-with-kafka",
        "setup-configuration/high-availability",
        "setup-configuration/settings",
        "setup-configuration/tenant-configuration",
      ],
    },
    {
      type: "category",
      label: "User and team management",
      items: [
        "user-team-management/users-roles-teams",
        "user-team-management/manage-users",
        "user-team-management/manage-roles-permissions",
        {
          type: "category",
          label: "Teams",
          items: [
            "user-team-management/teams/manage-teams",
            "user-team-management/teams/switch-teams",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Authentication and authorization",
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            "authentication-authorization/authentication/azure-ad",
            "authentication-authorization/authentication/google-account",
            "authentication-authorization/authentication/third-party-account",
            "authentication-authorization/authentication/userpwd-db",
            "authentication-authorization/authentication/windows-ad",
          ],
        },
        "authentication-authorization/authorization",
      ],
    },
    {
      type: "category",
      label: "Cluster management",
      items: [
        {
          type: "category",
          label: "Clusters and environments",
          link: {
            type: "doc",
            id: "cluster-management/clusters-environments/index",
          },
          items: [
            "cluster-management/clusters-environments/clusters",
            "cluster-management/clusters-environments/environments",
          ],
        },
        {
          type: "category",
          label: "Kafka cluster synchronization",
          link: {
            type: "doc",
            id: "cluster-management/kafka-cluster-sync/index",
          },
          items: [
            "cluster-management/kafka-cluster-sync/sync-acls-from-cluster",
            "cluster-management/kafka-cluster-sync/sync-acls-to-cluster",
            "cluster-management/kafka-cluster-sync/sync-connectors-from-cluster",
            "cluster-management/kafka-cluster-sync/sync-schemas-from-cluster",
            "cluster-management/kafka-cluster-sync/sync-schemas-to-cluster",
            "cluster-management/kafka-cluster-sync/sync-topics-from-cluster",
            "cluster-management/kafka-cluster-sync/sync-topics-to-cluster",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cluster connectivity setup",
      link: {
        type: "doc",
        id: "cluster-connectivity-setup/index",
      },
      items: [
        "cluster-connectivity-setup/klaw-db-connection",
        "cluster-connectivity-setup/klaw-core-with-clusterapi",
        "cluster-connectivity-setup/kafka-cluster-ssl-protocol",
        "cluster-connectivity-setup/kafka-cluster-sasl-protocol",
        "cluster-connectivity-setup/sr-cluster-ssl-protocol",
        "cluster-connectivity-setup/aiven-kafka-cluster-ssl-protocol",
        "cluster-connectivity-setup/aiven-kafka-cluster-sasl-protocol",
        "cluster-connectivity-setup/aiven-karapace-cluster-ssl-protocol",
        "cluster-connectivity-setup/aiven-kafka-connect-cluster-ssl-protocol",
        "cluster-connectivity-setup/confluent-cloud-kafka-cluster-ssl-protocol",
      ],
    },
    {
      type: "category",
      label: "Connector management",
      link: {
        type: "doc",
        id: "connector-management/index",
      },
      items: [
        "connector-management/request-connector",
        "connector-management/approve-connector",
        "connector-management/manage-connectors",
        "connector-management/my-connector-requests",
      ],
    },
    {
      type: "category",
      label: "Metadata management",
      items: [
        "metadata-management/metastore",
        {
          type: "category",
          label: "Metadata Import/Export",
          link: {
            type: "doc",
            id: "metadata-management/import-export/index",
          },
          items: [
            "metadata-management/import-export/importdata",
            "metadata-management/import-export/exportdata",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Klaw workflows",
      link: {
        type: "doc",
        id: "workflows/index",
      },
      items: [
        "workflows/promotion",
        {
          type: "category",
          label: "Manage schemas",
          link: {
            type: "doc",
            id: "workflows/schema/index",
          },
          items: [
            "workflows/schema/request-schema",
            "workflows/schema/promote-schema",
            "workflows/schema/manage-schema-requests",
            "workflows/schema/my-schema-requests",
          ],
        },
        {
          type: "category",
          label: "Manage subscriptions",
          link: {
            type: "doc",
            id: "workflows/subscription/index",
          },
          items: [
            "workflows/subscription/request-subscription",
            "workflows/subscription/delete-subscription",
            "workflows/subscription/manage-subscription-requests",
            "workflows/subscription/my-subscription-requests",
            "workflows/subscription/claim-subscription",
          ],
        },
        {
          type: "category",
          label: "Manage topics",
          link: {
            type: "doc",
            id: "workflows/topic/index",
          },
          items: [
            "workflows/topic/topic-overview",
            "workflows/topic/request-topic",
            "workflows/topic/claim-topic",
            "workflows/topic/edit-topic",
            "workflows/topic/promote-topic",
            "workflows/topic/delete-topic",
            "workflows/topic/manage-topic-requests",
            "workflows/topic/my-topic-requests",
            "workflows/topic/view-consumer-lag",
            "workflows/topic/view-topic-events",
            "workflows/topic/reset-consumer-offsets",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Notifications",
      items: [
        "notifications/email-notification",
        "notifications/slack-notification",
      ],
    },
    "faq",
  ],
  releases: [
    {
      type: "category",
      label: "All releases",
      link: { type: "generated-index", slug: "releases" },
      collapsed: false,
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "releases",
        },
      ],
    },
  ],
};

module.exports = sidebars;
