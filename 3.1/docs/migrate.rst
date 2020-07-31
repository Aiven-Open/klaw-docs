Migration Kafkawize from 4.1 to 4.2
===================================

There are few major changes in 4.2 which requires database table changes and hence

1   Set the below properties::

    custom.dbscripts.dropall_recreate = true

this will drop all the tables and data and recreate them.
