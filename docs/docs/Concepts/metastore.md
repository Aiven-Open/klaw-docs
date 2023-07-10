# Metastore holds additional data

Klaw holds additional data about your Apache Kafka® installation, such
as the topics requested, and information about the configuration of the
environments. This is held in the **metastore** - a database of
additional information.

By default, Klaw will use
[H2](https://www.h2database.com/html/main.html) as the metastore; this
means that there are no additional dependencies to get started with the
project.

If you would prefer to use another RDBMS, such as
[MySQL](https://www.mysql.com/), you can do this too. Check the
`config` documentation for information
about working with configuration files.

:::tip
Klaw will create the required tables during the application startup.
