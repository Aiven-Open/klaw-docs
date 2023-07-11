# Import Klaw data

Klaw administrators can import Klaw metadata into another brand new
instance (or existing) of Klaw.

## How this can be helpful ?

If you currently have a running instance of Klaw in AWS and are
considering migrating to Azure, the ability to export Klaw data becomes
highly advantageous. In such situations, you can export the Klaw data
from your AWS instance and import it into your Azure instance.

This process facilitates a smooth transition of your Klaw data from one
cloud platform to another, ensuring continuity of your operations and
minimizing any potential disruptions or data loss during the migration
process.

## What data can be exported ?

Klaw data is classified into the below 3 types.

-   

    Admin configuration comprises of the below entities

        -   Tenants
        -   Clusters
        -   Environments
        -   Roles
        -   Permissions
        -   Teams
        -   Users
        -   Properties

-   

    Core configuration comprises of the below

        -   Topics
        -   Subscriptions
        -   Schemas
        -   Connectors

-   

    Requests data comprises of the below

        -   Topic requests
        -   Subscription requests
        -   Schema requests
        -   Connector requests

## How data can be imported ?

To import data, follow these steps:

1.  In the core module of the application properties, enable data import
    by setting `klaw.import.enable` to true.
2.  Configure the specific import settings as shown below:

```{=html}
<!-- -->
```
    klaw.import.adminconfig.enable=false
    klaw.import.adminconfig.file.path=kwmetadata-admin_config-2023-....json
    klaw.import.kwdata.enable=false
    klaw.import.kwdata.file.path=kwmetadata-kwdata-2023-....json
    klaw.import.kwrequestsdata.enable=false
    klaw.import.kwrequestsdata.file.path=kwmetadata-kwrequests_data-2023-....json

3.  Make sure to disable this configuration for the next restart of the
    application.
4.  After updating the above settings, restart the application for the
    changes to take effect.

## What files are imported ?

The files that can be imported depend on the configuration settings
mentioned above. You have the flexibility to import either admin data,
core config data, requests data, or all of them based on the
configuration options chosen.
