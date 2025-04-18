# Login with Klaw database account

You can log in to Klaw using your username and password, which are securely stored in the database (encrypted).

The configuration for the database login, including the authentication type, encryption key, and password decryption
code, can be found in the `application.properties` file.

To enable authentication with the Klaw database, follow these steps:

1.  **Enable authentication with the database:** In the `application.properties` file, find the following property and
    set it
    `db` to enable user authentication with the database.

        klaw.login.authentication.type=db

2.  **Password encryption:** In the `application.properties` file, find the following encryption key property. Use the
    encryption key to encrypt your password before it is stored in the database. The encryption key is used to secure and
    protect your password.

    `klaw.jasypt.encryptor.secretkey=kw2021secretkey`

    Additionally, BCrypt encryption is supported for enhanced security starting with Klaw 2.10.0.

3.  **Decrypt password:** The password stored in the database can be decrypted with the following java code.

    ```java
    org.jasypt.util.text.BasicTextEncryptor textEncryptor = new org.jasypt.util.text.BasicTextEncryptor();
    textEncryptor.setPasswordCharArray(encryptorSecretKey.toCharArray());
    textEncryptor.decrypt(pwd);
    ```
