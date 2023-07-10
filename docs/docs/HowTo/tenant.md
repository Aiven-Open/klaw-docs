# Tenant

In Klaw, a tenant is an isolated Klaw environment with its own clusters,
environments, users, teams, and topics. Users within one tenant are
entirely separate from other tenants and cannot view topics or
information from other tenants, even if they share the same Klaw
instance.

Each Klaw installation comes with a single default tenant.

![image](../../static/images/Tenants.png)

## Add new tenant

To add a new tenant, a superadmin or user with the `ADD_TENANT`
permission can do so under the **Environments -\> Tenants** menu.

::: note
::: title
Note
:::

If the application should be limited to only one tenant, you can
configure it with thee below property in `application.properties` file.
:

    #maximum tenants can be created

klaw.max.tenants=200
:::
