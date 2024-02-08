# Email notifications

Email notifications can be sent to users when actions are performed in
Klaw that requires their attention.

Skip to see all notifications sent and to which users [Email Matrix](#email-matrix) below

## Configure email notifications

You can configure email notifications in the `application.properties`
file of Klaw Core. Refer to the documentation provided by your email
service provider for instructions on how to configure email
notifications. Additionally, make sure you have the `host`, `username`,
and `password` details as you will need to provide this information to
enable email notifications in Klaw.

```{.text caption="Klaw email properties"}
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
templates are prefixed with `klaw.mail` and are suffixed by the
`notificationtype` and `.content` These templates can be modified to suit
local languages, allowing for the rewording of emails and including any
additional information.

### Email matrix

| Notification Type          | Requestor | Approver | Requestor Team | Approver Team | All Approvals | Admin |
| -------------------------- | --------- | -------- | -------------- | ------------- | ------------- | ----- |
| User registration request  | cc        |          |                |               |               | to    |
| User registration approved | to        |          |                |               |               |       |
| New topic request          | cc        |          |                | to            | bcc           |       |
| New Topic approved         | to        | cc       |                | cc            |               |       |
| Promote topic request      | cc        |          |                | to            | bcc           |       |
| New ACL request            | cc        |          |                | to            | bcc           |       |
| New ACL approved           | to        | cc       |                | cc            |               |       |
| New schema request         | cc        |          |                | to            | bcc           |       |
| New schema approved        | to        | cc       |                | cc            |               |       |
| Promote schema request     | cc        |          |                | to            | bcc           |       |
| New Connector request      | cc        |          |                | to            | bcc           |       |
| New Connector approved     | to        | cc       |                | cc            |               |       |
| Promote Connector request  | cc        |          |                | to            | bcc           |       |
| New Claim request          | cc        |          |                | to            | bcc           |       |
| Password reset             | to        |          |                |               |               |       |
| Password changed           | to        |          |                |               |               |       |

:::tip
'All Approvals' are Users assigned the permission
APPROVE_ALL_REQUESTS_TEAMS. This permission allows users to approve any
Topic, schema, ACL, or Connector request from any team.
