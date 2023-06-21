Import Klaw data
================

Klaw now allows Administrators to import Klaw metadata into another brand new instance (or existing) of Klaw.

How this can be helpful ?
-------------------------

You already have a running instance of Klaw in AWS for example and thinking of migrating to Azure.
In these kind of situations, klaw data can be exported from AWS Klaw instance and import to Azure Klaw instance.

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

How data can be imported ?
--------------------------

Scheduler configuration : In core module, application properties,

- set ``klaw.import.enable`` to true
and configure the below
::
        klaw.import.adminconfig.enable=false
        klaw.import.adminconfig.file.path=kwmetadata-admin_config-2023-....json
        klaw.import.kwdata.enable=false
        klaw.import.kwdata.file.path=kwmetadata-kwdata-2023-....json
        klaw.import.kwrequestsdata.enable=false
        klaw.import.kwrequestsdata.file.path=kwmetadata-kwrequests_data-2023-....json


- Make sure this config is disabled for next restart

After updating the above, restart the application.

What files are imported ?
-------------------------

Based on the configuration above, either admin data, core config data, requests data or all can be imported. .


