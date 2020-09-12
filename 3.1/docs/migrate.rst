Migration Kafkawize from 4.2 to 4.3
===================================

There are few major changes in 4.3 which you need to look at.

1. application.properties includes couple of new parameters.

# default cluster to synchronize data
custom.syncdata.cluster=DEV

# order of envs
custom.envs.order=DEV,TST,ACC,PRD
custom.request.topics.envs=DEV,TST,ACC,PRD


2.insertdata.sql is updated.

partition parameter value changed from default.paritions to default.partitions.

3. superuser cannot submit new topic requests and acl/subscription requests.