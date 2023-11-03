# Deploy Klaw

## Klaw releases

Currently Klaw contributors intend to release Klaw once in every 1.5 months. Most of the times, it would be a minor
release. All the releases are available [here](../category/Releases).
For example : 2.4.0, 2.5.0 and so on.

## Deployment

On every release, it is recommended to deploy Klaw to a staging server and run few sanity tests.

![Screenshot: Staging](../../static/images/deployklaw/staging.png)

After successful tests, it is recommended to deploy Klaw to your next higher environments.

### Scenario 1

Klaw provides a feature to promote Kafka topics, schemas and connectors from lower to higher kafka environments.
If this is required, deploy Klaw and connect multiple kafka environments to Klaw like below.

![Screenshot: Staging](../../static/images/deployklaw/dtap.png)

### Scenario 2

If promotion of entities has to be limited to a particular set of environments, and production kafka has to be managed
independently by another klaw instance, below are recommended.

Connect a Klaw environment to Dev, Tst, Acc environments for example like below

![Screenshot: Staging](../../static/images/deployklaw/dta.png)

and connect a dedicated Klaw environment to Prod like below.

![Screenshot: Staging](../../static/images/deployklaw/prd.png)
