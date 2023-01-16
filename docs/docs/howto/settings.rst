Settings
========

Klaw Settings for various Klaw functionalities like Email notification templates, roles, etc can be configured under Dashboard -> Settings

- Email Notification templates : Email notifications are sent out to people involved when a request is raised or approved/declined.
  There are several emails which can be configured. The properties start with ``klaw.mail.*``


- Roles when adding users : When a new user is being added manually from Users menu, only USER role is available.
  This can be edited by updating the property ``klaw.adduser.roles``


- Tenant Configuration : This is described in detail at :doc:`tenant-config`
  Hierarchy of environments, and few other are configured by updating the property ``klaw.tenant.config``


- Environment names : When adding a new Environment, predefined names are presented to the user.
  These names can be modified by updating the property ``klaw.envs.standardnames``


- Reports location : Reports can be downloaded for a team, tenant on the usage of Klaw.
  The default location is configured by updating the property ``klaw.reports.location``


- Klaw portal Announcements : During maintenance on Klaw or upgrades or downtimes or when there is a need for announcements to be sent to Klaw users, they can be informed by broadcasting a message.
  This can be done by updating the property ``klaw.broadcast.text`` Leaving it empty will stop broadcasting.


- Schemas Retrieval : Every Kafka implementation may not have Schema Registries, and hence it is not required to query a schema registry server when a request is made in that case.
  This can be enabled by updating the property ``klaw.getschemas.enable`` By default it is false.


- Cluster Api connectivity : When Klaw is installed, it is important to establish the connectivity between Core Api and Cluster Api.
  This connectivity can be tested by updating the property ``klaw.clusterapi.url``


- Stop Core api : It is possible to stop the Core Api by clicking the Stop button. It would be the Administrator's responsibility to start it again if required.

