Migration Kafkawize from 4.4 to 4.5
===================================

There are database changes to migrate from 4.4 to 4.5.

1. In table 'activitylog', column 'user' has been renamed to 'userid'
ALTER TABLE activitylog RENAME COLUMN user TO userid;

2. In table 'env' , column 'port' is not used anymore. But Column is not deleted. This is just fyi.