Authorization
=============

In Klaw, users are assigned default roles such as **USER** or **SUPERADMIN** when they are added to the system. Each role has specific permissions associated to it.

Retrive roles in AD
--------------------

For users defined in Azure Active Directory or third-party SSO providers, roles can be retrieved from the provider by setting the relevant configurations in the ``application.properties`` file.

Relevant configuration::

    # Enable user Authorization/roles from AD/SSO, instead of database.
    # klaw.login.authentication.type should be set to ad for this value to be true
    # Role : If klaw.enable.authorization.ad is true, role will be picked up from authentication token/authorities ex : ROLE_USER.
    # and looks for matching role in Klaw. Make sure only one matching role exists. If nothing exists, user is denied login.
    klaw.enable.authorization.ad=true

After the configuration is completed, ensure that the AD/SSO provider has set up roles such as **ROLE_USER** or **APPROLE_USER**, where the actual role is indicated after the "_". This should match the Klaw roles.