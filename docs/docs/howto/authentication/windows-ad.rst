Login with username password
============================

Users can login with their windows credentials configured in Windows Active directory.

* Configuration in application.properties

1. Configure authentication type ::

    klaw.login.authentication.type=ad

2. The below configuration in application.properties is required to enable Active Directory based authentication ::

    # Uncomment the below ActiveDirectory properties for Users to login with their active directory credentials.
    #spring.ad.domain=
    #spring.ad.url=
    #spring.ad.rootDn=
    #spring.ad.filter=


* Sign in

If the user is already signed up before, then user is directed to Klaw home page.

.. image:: /../../../_static/images/authentication/login.png

* Sign Up

For the first time login, user is presented with a signup form to fill in. On submission, a request is created for Klaw Administrator
to approve or decline.

.. image:: /../../../_static/images/authentication/OAuthSignupForm.png
