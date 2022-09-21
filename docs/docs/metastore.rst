Metastore holds additional data
===============================

Klaw holds additional data about your Kafka installation, such as the topics
requested, and information about the configuration of the environments. This
is held in the **metastore** - a database of additional information.

By default, Klaw will use `H2 <https://www.h2database.com/html/main.html>`_ as
the metastore; this means that there are no additional dependencies to get
started with the project.

If you would prefer to use another RDBMS, such as `MySQL
<https://www.mysql.com/>`_, you can do this too.  Check the :doc:`config`
documentation for information about working with configuration files.

Scripts are included in the source code repository to create the database structure and insert some starter data. You will find these in the `scripts/base/rdbms/` directory.
