# Run Klaw in Docker

Klaw provides Docker images that allow you to run Klaw inside Docker
containers. There are two Docker images available:

- Klaw Core API: `https://hub.docker.com/r/aivenoy/klaw-core`
- Klaw Cluster API: `https://hub.docker.com/r/aivenoy/klaw-cluster-api`

## Prerequisites

Before running Klaw in Docker, ensure that you have the following
prerequisites:

- Docker installed

- Docker Compose installed

- Generate a minimum 32 character
  `KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET`

  ```{.bash caption="Bash Generation Example"}
  echo "ThisIsExactlyA32CharStringSecret" | base64
  VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
  ```

  ```{.bash caption="Powershell Generation Example"}
  [convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("ThisIsExactlyA32CharStringSecret"))
  VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQ=
  ```

## Klaw Docker quickstart

Running Klaw in Docker is a simple and efficient way to deploy and manage Klaw instances. Follow the steps below to get
Klaw up and running in Docker quickly.

### 1. Create a Docker Compose file

To begin, create a Docker Compose file called `docker-compose.yml` that
defines the configuration for running Klaw. For a quickstart, you can
use the following sample Docker Compose file. This configuration deploys
the latest release of Klaw, and uses localhost networking for easy
communication between containers, and sets up a local h2 database for
quick setup.

Replace the `KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET` value with your own
generated value in Docker Compose below:

#### Linux Docker Compose

```{.yaml caption="Deploy latest Klaw release with docker compose on Linux"}
---
version: '3'
services:
  klaw-core:
    image: aivenoy/klaw-core:latest
    container_name: klaw-core
    environment:
      KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
      SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
      KLAW_UIAPI_SERVERS: "http://localhost:9097"
    network_mode: "host"
    volumes:
      - "klaw_data:/klaw"
    extra_hosts:
      - "moby:127.0.0.1"
  klaw-cluster-api:
    image: aivenoy/klaw-cluster-api:latest
    container_name: klaw-cluster-api
    network_mode: "host"
    environment:
      KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
    volumes:
      - "klaw_data:/klaw"
    extra_hosts:
      - "moby:127.0.0.1"
volumes:
  klaw_data:
    driver: local
```

#### Windows & Mac Docker Compose

```{.yaml caption="Deploy latest Klaw release with docker compose on Windows or Mac"}
---
version: '3'
services:
  klaw-core:
    image: aivenoy/klaw-core:latest
    container_name: klaw-core
    environment:
      KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
      SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
      KLAW_UIAPI_SERVERS: "http://localhost:9097"
    volumes:
      - "klaw_data:/klaw"
    extra_hosts:
      - "moby:127.0.0.1"
    ports:
     - 9097:9097
  klaw-cluster-api:
    image: aivenoy/klaw-cluster-api:latest
    container_name: klaw-cluster-api
    environment:
      KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
    volumes:
      - "klaw_data:/klaw"
    extra_hosts:
      - "moby:127.0.0.1"
    ports:
     - 9343:9343
volumes:
  klaw_data:
    driver: local
```

To configure a property, for example,
`klaw.login.authentication.type=db`, set it up as
`KLAW_LOGIN_AUTHENTICATION_TYPE: db`.

    It is important to update the `KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET`
    property with a new base64-encoded secret.

### 2. Run Docker Compose

In the same directory that you created the
`docker-compose.yaml` file, run the following command to
start the containers defined in the Docker Compose file:

    docker-compose up -d

### 3. Verify Docker process

To ensure that the containers are running successfully, use the
following command to check their status:

```{.bash caption="Verify docker is running"}
#See if both klaw-core and klaw-cluster-api are running
docker ps
```

### 4. Access the web interface

Access the Klaw web interface using this URL:

```copy-button
 http://localhost:9097/
```

### 5. Verify the installation

To verify the installation and access Klaw, follow the steps below:

1. Access Klaw using the below default credentials for the superadmin
   account:

   - **Username:** `superadmin`
   - **Password:** `kwsuperadmin123$$` (for Klaw releases 2.5.0 and older)
   - **Password:** `welcometoklaw` (starting from the Klaw 2.6.0 release)

   Recommend you change the default credentials before running Klaw in your application.

2. In the Klaw user interface, go to the **Dashboard -\> Settings**
   page, and look for the `klaw.clusterapi.url` configuration. To use a
   secure connection, update the URL to HTTPS, for example: `http://localhost:9343`

3. Or if using a Windows or Linux machine, ensure you update the URL to
   use the container name, for example: `http://klaw-cluster-api:9343`

4. Click **Test connection**.

### 5. Next steps

After successfully verifying your installation,
follow the documentation in [Configure Klaw with wizard](configure-klaw-wizard.md).

## Klaw Docker Scripts

Klaw also provides Docker scripts you can download from the
project's GitHub repository. These scripts include a README file that
explains how to build and deploy the latest version of Klaw. You can
find these scripts at in [`docker-scripts`](https://github.com/aiven/klaw/tree/main/docker-scripts).

## Enabling HTTPS

A Docker volume is created to store Klaw data to enable HTTPS and secure
connections between Klaw and Apache Kafka®. You can save your keystore and truststore in this volume. Make sure to copy the
keystore and truststore to the Klaw data volume so that they can be accessed at runtime.

## Find Klaw Docker volume location

To find the location of the Klaw Docker volume, run the following
command with your container ID:

`docker inspect -f '{{ .Mounts }}' containerid`

### Linux

On Linux, Docker volumes are typically located in the following
directory:

`/var/lib/docker/volumes/docker-scripts_klaw_data/_data`

### Windows

On Windows, Docker volumes are typically located in the following
directory:

`\\wsl$\docker-desktop-data\data\docker\volumes\docker-scripts_klaw_data\_data`

## Configure Docker images

After copying the Keystores to the Klaw Docker volume, you can set the
keystore location by simply specifying `/klaw/client.keystore.p12` and
`/klaw/client.truststore.jks`.

There are two ways to configure this:

1. Configure the `application.properties` file as usual and run
   `./klaw-docker.sh --all` to build and redeploy Klaw with the updated
   configuration settings.
2. Add environment variables to the `docker-compose-klaw.yaml` file and
   execute `./klaw-docker.sh --deploy` to redeploy environmental
   changes and restart Klaw.

   Here is an example of how to update the `docker-compose-klaw.yaml` file:

   ```{.yaml caption="Override default docker configuration"}
   environment:
       KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
       SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;    CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
       DEV1_KAFKASSL_KEYSTORE_LOCATION: "/klaw/client.keystore.p12"
       DEV1_KAFKASSL_KEYSTORE_PWD: "klaw1234"
       DEV1_KAFKASSL_KEY_PWD: "klaw1234"
       DEV1_KAFKASSL_KEYSTORE_TYPE: "pkcs12"
       DEV1_KAFKASSL_TRUSTSTORE_LOCATION: "/klaw/client.truststore.jks"
       DEV1_KAFKASSL_TRUSTSTORE_PWD: "klaw1234"
       DEV1_KAFKASSL_TRUSTSTORE_TYPE: "JKS"
       SERVER_SSL_KEYSTORE: "/klaw/client.keystore.p12"
       SERVER_SSL_TRUSTSTORE: "/klaw/client.truststore.jks"
       SERVER_SSL_KEYSTOREPASSWORD: "klaw1234"
       SERVER_SSL_KEYPASSWORD: "klaw1234"
       SERVER_SSL_TRUSTSTOREPASSWORD: "klaw1234"
       SERVER_SSL_KEYSTORETYPE: "pkcs12"
   ```

3. Another option is to externalize the `application.properties` file
   to the volume, and then set the environment value in the
   `docker-compose` file so that it uses the local copy of the
   `application.properties` file.

- Ensure that the `klaw.version` property is updated correctly on the
  version copied over to the volume as this is usually updated during the
  build to keep the API versions in line with the pom version. \* Also,
  ensure that the `application.properties` is renamed to a unique
  properties filename, so you don't accidentally copy over the Klaw Core
  properties with the cluster properties and vice versa.

      environment:
        KLAW_CLUSTERAPI_ACCESS_BASE64_SECRET: dGhpcyBpcyBhIHNlY3JldCB0byBhY2Nlc3MgY2x1c3RlcmFwaQ==
        SPRING_DATASOURCE_URL: "jdbc:h2:file:/klaw/klawprodb;DB_CLOSE_ON_EXIT=FALSE;DB_CLOSE_DELAY=-1;MODE=MySQL;CASE_INSENSITIVE_IDENTIFIERS=TRUE;"
        SPRING_CONFIG_LOCATION: "/klaw/klaw-application.properties"

## How to use an existing H2 Database

If you already have a configured environment with users, etc., you can
transfer them to the Docker image by copying the `klawprodb` files into
the Docker volume. It is recommended that you back up any existing
`prodb` files in the Docker volume in case you need to revert to them in
the future.
