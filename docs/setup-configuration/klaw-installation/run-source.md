# Run Klaw from source

Klaw is a Java project. Follow the below steps to run this project from
the source.

1. Download the latest code from the [Klaw](https://github.com/aiven/klaw) GitHub repository.

   :::tip
   You can also clone the repository to use the "bleeding edge" version
   if you wish.
   :::

2. Experimental UI Configuration

   A redesigned user interface for Browse topics, providing a new look and feel for managing Apache Kafka® topics. It consists
   of changes to the layout, styling, and overall appearance of the interface, as well as improvements to make browsing
   and working topics easier, more efficient, and more accessible. This new look and feel is achieved by switching to
   React.

   The redesigned UI is enabled by default since Release 2.4.0. If you
   want to use Klaw without the preview, for now, you can disable it:

   - Configure the property `klaw.coral.enabled` in the
     `application.properties` file to `false` in the module: core.

3. Configure Klaw Cluster API access

   - Configure the property `klaw.clusterapi.access.base64.secret` in the `application.properties` file with a base64
     string in the module: `core`.
   - Configure the property `klaw.clusterapi.access.base64.secret` in the `application.properties` file with the above
     base64 string in the module: `cluster-api`.

   ```{.bash caption="Bash Generation Example"}
   echo "ThisIsExactlyA32CharStringSecret" | base64
   VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQK
   ```

   ```{.bash caption="Powershell Generation Example"}
   [convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("ThisIsExactlyA32CharStringSecret"))
   VGhpc0lzRXhhY3RseUEzMkNoYXJTdHJpbmdTZWNyZXQ=
   ```

4. Build the project by running `./mvnw clean package` for Linux(bash) or `mvnw clean package` for Windows, from the top
   level of the project directory. This will build JAR files in the `target/` directories of each module: `core` and
   `cluster-api`.

   node, npm, and pnpm are also installed locally (required for React UI assets) through maven execution plugins.

   If the build runs into an error while installing node/npm/pnpm, you can

   - Disable the execution plugins (for node/npm/pnpm) in module `core/pom.xml`
   - Manually install node/npm/pnpm and copy assets by following the procedure
     here. [Manual installation of React](https://github.com/aiven/klaw/blob/main/coral/README.md)

5. Start the API components by running its JAR files:

   - Run with script

     In the bin directory of the repository, run the script `run-klaw.sh` for Mac or Linux, which starts both Klaw Core and
     Klaw Cluster API applications.

   Alternatively

   - Run with commands

     `java -jar klaw-clusterapi-<version>.jar`

     To pass additional configuration, pass an additional parameter like

     `--spring.config.location=target/classes/application.properties`

     Start the web UI by running its JAR file:

     `java -jar klaw-<version>.jar`

     To pass additional configurations, include them as follows:

     `--spring.config.location=target/classes/application.properties`

6. Access the web interface using the URL:

   ```copy-button
   http://localhost:9097/
   ```

7. Log in as the admin user to get started.

   - **Username:** `superadmin`
   - **Password:** `kwsuperadmin123$$` (for Klaw releases 2.5.0 and older)
   - **Password:** `welcometoklaw` (starting from the Klaw 2.6.0 release)

## Next steps

Once you have finished verifying your installation, we recommend you follow the documentation
in [Configure Klaw with Wizard](configure-klaw-wizard.md).
