Third party Login
=================

Users can login with any other third party account.

After clicking on the login button, user is provided with an third party account pop up window with options to provide his/her credentials or select a relevant account.

* Configuration in application.properties

1. Make sure Klaw is running in secure mode::

    server.ssl.key-store.*

2. Configure authentication type ::

    # Possible values "db" or "ad". If SSO config or Active directory is enabled below, this value should be "ad"
    klaw.login.authentication.type=ad

3. Enable SSO ::

    klaw.enable.sso=true

4. The below configuration is required to enable Azure AD based authentication

    Find the registration of the third party account like 'github' or 'twitter' or any other and replace registrationid with that id below. ::

    # Uncomment the below OAuth2 configuration to enable Google based authentication
    #spring.security.oauth2.client.registration.registrationid.client-id=
    #spring.security.oauth2.client.registration.registrationid.client-secret=
    #spring.security.oauth2.client.registration.registrationid.redirect-uri=https://localhost:9097/login/oauth2/code/google
    #spring.security.oauth2.client.registration.registrationid.scope=profile, email
    #klaw.sso.server.loginurl.registrationid=/oauth2/authorization/registrationid

ClientId, Client secret, and Tenant Id can be retrieved from the third party account portal, and update the relevant redirect-uri.

5. Default Super Admin configuration to approve users

    # In case of AD or Azure AD or SSO, configure an existing SUPERADMIN user from AD in the below config for username. Ex : superadmin@domain.
    klaw.superadmin.default.username=superadmin@company.com


* Sign in

If the user is already signed up before, then user is directed to Klaw home page.

.. image:: /../../../_static/images/authentication/OAuthLogin.png

Provide your credentials of the third party account.

.. note:: Login page for third party account is not fully updated.

* Sign Up

For the first time login, user is presented with a signup form to fill in. On submission, a request is created for Klaw Administrator
to approve or decline.

.. image:: /../../../_static/images/authentication/OAuthSignupForm.png