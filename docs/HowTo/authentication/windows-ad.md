# Login with Windows active directory

You can log in to Klaw using the Windows credentials configured in the Windows active directory.

Before you can proceed with using your Windows Active directory credentials, you need to make the following
configurations in the `application.properties` file in the Klaw Core module.

1. Configure the authentication type by setting the value to `ad` in the following property:

   `klaw.login.authentication.type=ad`

2. To enable active directory-based authentication, uncomment the following properties and provide the appropriate
   values for your Active Directory configuration:

   ```java
   # Uncomment the below ActiveDirectory properties for Users to login with their active directory credentials.
   #spring.ad.domain=
   #spring.ad.url=
   #spring.ad.rootDn=
   #spring.ad.filter=
   ```

3. Configure an existing SUPERADMIN user from AD (which already exists) to approve new users
   in the following property for username:

   `klaw.superadmin.default.username=superadmin@company.com`

4. If you have already signed up, you will be directed to the Klaw home
   page.

   ![Screenshot Login page. It shows a sign in form that includes fields for username and password. It shows a checkbox "Remember me". There is a button to submit the form. Below that is a link "Forgot password" and "Sign up"](../../../static/images/authentication/login.png)

5. If this is your first time logging in, you will be presented with a
   signup form to fill in. On submission, a request will be created for
   the Klaw Administrator to approve or decline.

   ![Screenshot Sign up page. It shows a form that includes fields for username, name, email address, and a checkbox to agree to the terms of service. There is a button to submit the form and another button to sign in if the user already has an account.](../../../static/images/authentication/OAuthSignupForm.png)
