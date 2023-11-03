# Metastore data

The Klaw metastore holds important audit and governance data related to the management and governance of your Apache Kafka ecosystem. This data includes Topic, Schema, ACL, and Connector requests and audit trails.

By default, Klaw will use
[H2](https://www.h2database.com/html/main.html) as the metastore; this
means that there are no additional dependencies to get started with the
project.

If you prefer to use another RDBMS, such as
[MySQL](https://www.mysql.com/), you can do this too. Check the
`config` documentation for information
about working with configuration files.

:::tip
Klaw will create the required tables during the application startup.
