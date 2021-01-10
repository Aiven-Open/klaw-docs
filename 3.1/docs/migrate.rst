Migration Kafkawize from 4.4 to 4.5
===================================

There are database changes to migrate from 4.4 to 4.5.

1. All the tablenames are prefixed with "kw", and _ (underscores) are removed from table names. Make sure tables are renamed.

RENAME TABLE old_table TO new_table;

2. In table 'kwactivitylog', column 'user' has been renamed to 'userid'

ALTER TABLE kwactivitylog RENAME COLUMN user TO userid;

3. In table 'kwenv' , column 'port' is not used anymore. Drop the column.

ALTER TABLE kwenv DROP IF EXISTS port;