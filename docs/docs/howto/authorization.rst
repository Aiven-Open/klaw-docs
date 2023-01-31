Authorization
=============

Klaw users have roles defined within klaw like 'USER' or 'SUPERADMIN' which come by default. When a new user is added, a role is assigned to the user.
Each role has a bunch of permissions associated to it.

- Roles in AD

For users defined in Azure Active directory/third party SSO provider, it is possible to retrieve the roles from the provider.

Relevant configuration::

    # Enable user Authorization/roles from AD/SSO, instead of database.
    # klaw.login.authentication.type should be set to ad for this value to be true
    # Role : If klaw.enable.authorization.ad is true, role will be picked up from authentication token/authorities ex : ROLE_USER.
    # and looks for matching role in Klaw. Make sure only one matching role exists. If nothing exists, user is denied login.
    klaw.enable.authorization.ad=true

After the above configuration is done, make sure your AD/SSO provider has configured roles like 'ROLE_USER' or 'APPROLE_USER' etc, where the actual role matches after the '_', with klaw roles.