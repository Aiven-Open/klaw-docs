Simple Db Login
===============

Users can login with username and password which are stored in the database (encrypted).

* Configuration
The following property enables users authentication with database ::

    klaw.login.authentication.type=db

* Password Encryption

With an encryption key, password is encrypted and stored in database. Below here is the property defined in application.properties by default ::

    klaw.jasypt.encryptor.secretkey=kw2021secretkey


* Decrypt password

Password stored in the database can be decrypted with the following java code ::

    org.jasypt.util.text.BasicTextEncryptor textEncryptor = new org.jasypt.util.text.BasicTextEncryptor();
    textEncryptor.setPasswordCharArray(encryptorSecretKey.toCharArray());
    textEncryptor.decrypt(pwd);

