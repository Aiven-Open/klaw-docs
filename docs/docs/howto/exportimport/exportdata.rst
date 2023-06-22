Export Klaw data
================

Klaw administrators can export the database configuration and data in three parts: admin data, requests data, and core data, providing administrators with additional backup and recovery options.

What data can be exported ?
---------------------------

Klaw data is classified into the below 3 types.

- Admin configuration comprises of the below entities
    - Tenants
    - Clusters
    - Environments
    - Roles
    - Permissions
    - Teams
    - Users
    - Properties

- Core configuration comprises of the below
    - Topics
    - Subscriptions
    - Schemas
    - Connectors

- Requests data comprises of the below
    - Topic requests
    - Subscription requests
    - Schema requests
    - Connector requests

How data can be exported ?
--------------------------

To export data, follow these steps:

1. In the core module of the application properties, enable the data export scheduler by setting ``klaw.export.scheduler.enable`` to true.
2. Specify the directory where the data files should be exported by setting ``klaw.export.file.path`` to the desired location.
3. Configure a pattern (cron expression) for the scheduler to run at a specific interval. For example, to run the scheduler at 12 am every day, use the expression '0 0 0 * * ?'.
4. Once you have updated the above settings, restart the application for the changes to take effect.

What files are exported ?
-------------------------

The exported files typically include the following examples in the configured export directory:

- kwmetadata-admin_config-2023-04-03-09-42-00501.json

- kwmetadata-kwdata-2023-04-03-09-42-00501.json

- kwmetadata-kwrequests_data-2023-04-03-09-42-00501.json

