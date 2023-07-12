# Login with Third-party accounts

You have the option to configure any third-party login account to access
Klaw.

To enable third-party login accounts, you need to make the following
configurations in the `application.properties` file in the Klaw-core
module.

1. Make sure Klaw is running in a secure mode. You will find the following configuration:

   ```
   server.ssl.key-store.*
   ```

2. Configure the authentication type by setting the value to `ad` in the following property: :

    ```
    klaw.login.authentication.type=ad
    ```

3. Enable SSO by setting the value to [true] in the following property
    ```
   klaw.enable.sso=true
   ```

4. To enable third-party account-based authentication, find the registration of the third-party account like [github \`or\`twitter][ or any other and replace][registrationid]\` with the third-party account ID in the following properties. Additionally, provide the appropriate values for ClientId, Client secret, and Tenant Id
    
    ```
    # Uncomment the below OAuth2 configuration to enable Google based authentication
    #spring.security.oauth2.client.registration.registrationid.client-id=
    #spring.security.oauth2.client.registration.registrationid.client-secret=
    #spring.security.oauth2.client.registration.registrationid.redirect-uri=https://localhost:9097/login/oauth2/code/google
    #spring.security.oauth2.client.registration.registrationid.scope=profile, email
    #klaw.sso.server.loginurl.registrationid=/oauth2/authorization/registrationid
    ```

5. Configure an existing SUPERADMIN user from AD to approve new users in the following property for username: :

    ```
    klaw.superadmin.default.username=superadmin@company.com
    ```

6. To add the login button to the third party provider please update application.properties with the following three entries. A https link or local image location, this is optional but can help users identify the correct provider. where {provider} is your thirdparty vendor e.g. github or okta

    ```
    klaw.superadmin.default.username=superadmin@company.com
    ```

7.  If you have already signed up, you will be directed to the Klaw home
    page.

    ![image](../../../static/images/authentication/OAuthLogin.png)

    Enter the credentials for the third party account.

    >Login page for third party account is not fully updated.


8.  If this is your first time logging in, you will be presented with a
    signup form to fill in. On submission, a request will be created for
    the Klaw Administrator to approve or decline.

    ![image](../../../static/images/authentication/OAuthSignupForm.png)
