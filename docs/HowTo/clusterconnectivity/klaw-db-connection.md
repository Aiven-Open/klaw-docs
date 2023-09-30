# Configure database connection for Klaw

Klaw uses a database to store metadata, such as information about users,
teams, and owners. This allows the system to track and manage access to
resources within an organization/team. By default, Klaw uses a
file-based database. However, you can also configure Klaw to use various
RDBMS, such as MySQL, Oracle, or PostgreSQL®.

The configuration for the default file-based database in Klaw is
specified in the `application.properties` file in the core
(klaw/core/src/main/resources) module. For example, your configuration
might look something similar to this:

```java
# Spring JPA properties filedb
spring.datasource.url=jdbc:h2:file:./klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;
spring.datasource.driver.class=org.h2.Driver
spring.datasource.username=kafkauser
spring.datasource.password=klaw
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect
spring.h2.console.enabled=true
```

For large implementations of Klaw, a file-based database may not be suitable due to scalability constraints and other
limitations. In these cases, we recommend configuring Klaw to use a different database management system (DBMS), such as
MySQL, Oracle, or PostgreSQL.

## RDBMS Configuration

To configure a connection to a relational database management system
(RDBMS) such as Postgres, Oracle, or MySQL, you need to edit the
`application.properties` file location in the
core(klaw/core/src/main/resources) module, with the connection details
for your database.

Below is a sample configuration for MySQL:

    # Spring JPA properties mysql
    #spring.datasource.url=jdbc:mysql://localhost:3306/kafkametadbpro?autoReconnect=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&cachePrepStmts=true&useServerPrepStmts=true&rewriteBatchedStatements=true&verifyServerCertificate=false&useSSL=false&requireSSL=false&allowPublicKeyRetrieval=true
    #spring.datasource.username=kafkauser
    #spring.datasource.password=kafkauser123
    #spring.datasource.driver.class=com.mysql.cj.jdbc.Driver
    #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    #spring.datasource.platform=mysql

Below is a sample configuration for Postgres :

    # Spring JPA properties postgresql
    #spring.datasource.url=jdbc:postgresql://localhost:5432/klaw?cachePrepStmts=true&useServerPrepStmts=true&rewriteBatchedStatements=true
    #spring.datasource.username=kafkauser
    #spring.datasource.password=klaw
    #spring.datasource.driver.class=org.postgresql.Driver
    #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL92Dialect
    #spring.datasource.platform=postgres
