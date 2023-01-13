Azure AD
========

Users can login with their credentials configured in Azure Active directory. On the login screen user, is prompted with a login option for Azure AD.

After clicking on the login button, user is provided with an Azure pop up window with options to provide his/her credentials or select an Azure account.

* Configuration

1. Make sure Klaw is running in secure mode::

    server.ssl.key-store.*

2. Configure authentication type ::

    # Possible values "db" or "ad". If SSO config or Active directory is enabled below, this value should be "ad"
    klaw.login.authentication.type=ad

3. Enable SSO ::

    klaw.enable.sso=true

4. The below configuration in application.properties is required to enable Azure AD based authentication ::

    # Uncomment the below OAuth2 configuration to enable Azure AD based authentication
    #spring.security.oauth2.client.registration.azure.client-id=
    #spring.security.oauth2.client.registration.azure.client-secret=
    #spring.security.oauth2.client.registration.azure.redirect-uri=https://localhost:9097/login/oauth2/code/
    #spring.security.oauth2.client.registration.azure.provider=azure-active-directory
    #spring.security.oauth2.client.registration.azure.scope=openid, profile, email
    #spring.security.oauth2.client.provider.azure-active-directory.issuer-uri=https://login.microsoftonline.com/{tenantid}/v2.0

ClientId, Client secret, and Tenant Id can be retrieved from Azure portal and update the relevant redirect-uri.

5. Default Super Admin configuration to approve users

    # In case of AD or Azure AD, configure an existing SUPERADMIN user from AD in the below config for username. Ex : superadmin@domain.
    klaw.superadmin.default.username=superadmin@company.com


* Sign in

If the user is already signed up before, then user is directed to Klaw home page.

.. image:: /../../../_static/images/OAuthLogin.png

Provide your credentials :

.. image:: /../../../_static/images/AzureLogin.png

* Sign Up

For the first time login, user is presented with a signup form to fill in. On submission, a request is created for Klaw Administrator
to approve or decline.

.. image:: /../../../_static/images/OAuthSignupForm.png