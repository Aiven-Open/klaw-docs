Export Klaw data
================


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

- Requests data comprises of the below
    - Topic requests
    - Subscription requests
    - Schema requests
    - Connector requests
    - Activity log

- Core configuration comprises of the below
    - Topics
    - Subscriptions
    - Schemas
    - Connectors

How data can be exported ?
--------------------------

Scheduler configuration : In core module, application properties,

- set ``klaw.export.scheduler.enable`` to true
- mention a directory to where the data files to be exported here ``klaw.export.file.path``
- Add a pattern (cron expression) for scheduler to run at a particular interval. Ex : '0 0 0 * * ?' runs at 12 am everyday

After updating the above, restart the application.

What files are exported ?
-------------------------

Example files in the configured export directory:

- kwmetadata-admin_config-2023-04-03-09-42-00501.json

- kwmetadata-kwdata-2023-04-03-09-42-00501.json

- kwmetadata-kwrequests_data-2023-04-03-09-42-00501.json

