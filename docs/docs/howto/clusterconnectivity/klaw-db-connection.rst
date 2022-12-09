Configure database connection for Klaw
======================================

Klaw uses a database to store all the meta information like users, teams, owners etc. With default installation, there is a file based database configured like below ::

    # Spring JPA properties filedb
    spring.datasource.url=jdbc:h2:file:./klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;
    spring.datasource.driver.class=org.h2.Driver
    spring.datasource.username=kafkauser
    spring.datasource.password=klaw
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect
    spring.h2.console.enabled=true


For large implementations, this file based db does not scale well and for various other reasons.

RDBMS Configuration
-------------------

Configure the below to connect to any rdbms like Postgres, Oracle, Mysql etc.

Below sample config for Mysql ::

    # Spring JPA properties mysql
    #spring.datasource.url=jdbc:mysql://localhost:3306/kafkametadbpro?autoReconnect=true&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&cachePrepStmts=true&useServerPrepStmts=true&rewriteBatchedStatements=true&verifyServerCertificate=false&useSSL=false&requireSSL=false&allowPublicKeyRetrieval=true
    #spring.datasource.username=kafkauser
    #spring.datasource.password=kafkauser123
    #spring.datasource.driver.class=com.mysql.cj.jdbc.Driver
    #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    #spring.datasource.platform=mysql

Below sample config for Postgres ::

    # Spring JPA properties postgresql
    #spring.datasource.url=jdbc:postgresql://localhost:5432/klaw?cachePrepStmts=true&useServerPrepStmts=true&rewriteBatchedStatements=true
    #spring.datasource.username=kafkauser
    #spring.datasource.password=klaw
    #spring.datasource.driver.class=org.postgresql.Driver
    #spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQL92Dialect
    #spring.datasource.platform=postgres

