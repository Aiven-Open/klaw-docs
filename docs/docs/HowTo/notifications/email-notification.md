# Email Notifications

Email notifications can be sent to users when actions are performed in
Klaw that require their attention.

Skip to see all notifications sent and to which users [Email Matrix](#email-matrix) below

## Configure email notifications

You can configure email notifications in the `application.properties`
file of Klaw-core. Refer to the documentation provided by your email
service provider for instructions on how to configure email
notifications. Additionally, make sure you have the `host`, `username`,
and `password` details as you will need to provide this information to
enable email notifications in Klaw.

``` {.text caption="Klaw email properties"}
klaw.admin.mailid=
klaw.mail.notifications.enable=true
spring.mail.properties.mail.transport.protocol=smtp
spring.mail.host=
spring.mail.port=587
spring.mail.username=
spring.mail.password=
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
spring.mail.properties.mail.debug=false
spring.mail.noreplymailid=noreplyid
spring.mail.frommailid=fromailid
```

## Customize email templates

The Superadmin can access all the email templates through the navigation
bar by going to Dashboard -\> Settings. Within settings all email
templates are prefixed with `klaw.mail` and is suffixed by the
notificationtype and `.content` These templates can be modified to suit
local languages, allowing for the rewording of emails and including any
additional information.

  ### Email matrix

  Notification Type           | Requestor  | Approver | Requestor Team | Approver Team | All Approvals   | Admin
  ----------------------------|------------|----------|----------------|---------------|-----------------|-------
  User Registration Request   | cc         |          |                |               |                 |   to
  User Registration Approved  | to         |          |                |               |                 |     
  New Topic Request           | cc         |          |                | to            | bcc             |   
  New Topic Approved          | to         | cc       |                | cc            |                 |   
  Promote Topic Request       | cc         |          |                | to            | bcc             |  
  New ACL Request             | cc         |          |                | to            | bcc             |  
  New ACL Approved            | to         | cc       |                | cc            |                 |   
  New Schema Request          |cc          |          |                | to            | bcc             |  
  New Schema Approved         | to         | cc       |                | cc            |                 |   
  Promote Schema Request      | cc         |          |                | to            | bcc             |  
  New Connector Request       | cc         |          |                | to            | bcc             |  
  New Connector Approved      | to         | cc       |                | cc            |                 |   
  Promote Connector Request   | cc         |          |                | to            | bcc             |  
  New Claim Request           | cc         |          |                | to            | bcc             |  
  Password Reset              | to         |          |                |               |                 |     
  Password Changed            | to         |          |                |               |                 |     
  

:::tip
'All Approvals' are Users assigned the permission
APPROVE_ALL_REQUESTS_TEAMS, this permission allows users to approve any
Topic, Schema, ACL or Connector request from any team.
