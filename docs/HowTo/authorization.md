# Authorization

In Klaw, users are assigned default roles such as **USER** or
**SUPERADMIN** when they are added to the system. Each role has specific
permissions associated with it.

## Retrieve roles from AD

For users defined in Azure Active Directory or third-party SSO
providers, roles can be retrieved from the provider by setting the
relevant configurations in the `application.properties` file.

Relevant configuration:

```java
# Enable user Authorization/roles from AD/SSO, instead of database.
# klaw.login.authentication.type should be set to ad for this value to be true
# Role : If klaw.enable.authorization.ad is true, role will be picked up from authentication token/authorities ex : ROLE_USER.
# and looks for matching role in Klaw. Make sure only one matching role exists. If nothing exists, user is denied login.
```

After completing the configuration, make sure that your AD/SSO provider has roles defined, such as **ROLE_USER** or **APPROLE_USER**. The actual role is identified post the underscore (\_). These roles should be consistent with the ones available in Klaw.
