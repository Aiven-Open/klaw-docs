# Login with Klaw database account

You can log in to Klaw using your username and password, which are
securely stored in the database (encrypted).

Configurations for the database login, including authentication type,
encryption key, and password decryption code, can be found in the
[application.properties]{.title-ref} file.

Follow these to enable authentication with Klaw database:

1\. Enable Authentication with the Database: In the
`application.properties`file, find the following property and set it
`db` to enable user authentication with the database. :

    klaw.login.authentication.type=db

2\. Password Encryption: In the application.properties file, find the
following encryption key property. Use the encryption key to encrypt
your password before it is stored in the database. The encryption key is
used to secure and protect your password. :

    klaw.jasypt.encryptor.secretkey=kw2021secretkey

3\. Decrypt password: Password stored in the database can be decrypted
with the following java code. :

    org.jasypt.util.text.BasicTextEncryptor textEncryptor = new org.jasypt.util.text.BasicTextEncryptor();
    textEncryptor.setPasswordCharArray(encryptorSecretKey.toCharArray());
    textEncryptor.decrypt(pwd);
