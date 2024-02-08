# Klaw settings

You can configure Klaw for various Klaw functionalities, such as Email
notification templates and roles, under **Dashboard -\> Settings**.

- **Email Notification templates**  
  Email notifications are sent out
  to users involved when a request is raised or approved/declined. You
  can configure multiple email addresses. The properties start with
  `klaw.mail.*`.

- **Roles when adding users**  
  When adding users manually from the
  users menu, only the USER role is available. However, you can edit
  this by updating the property `klaw.adduser.roles`.
- **Tenant Configuration**  
  A tenant is an isolated environment that
  has its own set of clusters, environments, users, teams, and topics.
  For more information, see [Tenant configuration](../setup-configuration/tenant-configuration.md). You can change the hierarchy of environments and a few other configurations by updating the property
  `klaw.tenant.config`.
- **Environment names**  
  When adding a new Environment, predefined
  names will be presented to you. If you can modify these names by
  updating the property `klaw.envs.standardnames`.
- **Reports location**  
  You can download reports for a team or tenant
  on the usage of Klaw. The default location is configured by updating
  the property `klaw.reports.location`.
- **Klaw portal Announcements**  
  During maintenance on Klaw or
  upgrades or downtimes, or when there is a need for announcements to
  be sent to Klaw users, you can inform them by broadcasting a
  message. This can be done by updating the property
  `klaw.broadcast.text`. If you leave it empty, broadcasting will
  stop.
- **Schemas Retrieval**  
  Every Apache Kafka® implementation may not have
  schema registries; hence, it may not be required to query a schema
  registry server when a request is made. You can enable this by
  updating the property `klaw.getschemas.enable`. By default, it is
  false.
- **Klaw Cluster API connectivity**  
  When installing Klaw, it is important
  to establish the connectivity between Klaw Core API and Klaw Cluster API. You
  can test this connectivity by updating the property
  `klaw.clusterapi.url`.
- **Stop Klaw Core API**  
  You can stop the Klaw Core API by clicking the Stop
  button. However, it will be your responsibility as an Administrator
  to start it again if required.
