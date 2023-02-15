Request a new Connector
=======================

The process of requesting a new Connector to be created in Kafka is simple and speedy.

The team that requests a connector will automatically become the connector owner and can approve or deny any Kafka Connector.

Prerequisites
-------------
- The Superadmin must configure the environment within Klaw,  see :doc:`Environments <../../concepts/clusters-environments>` for the steps to configure the environments.


Make a request
--------------

1. In Klaw, select **Requests** on the navigation bar, and then select **Request Connector** in the drop-down.
2. Select the environment. This is the Kafka connect environment in which the Connector will be created.

.. note::
   In most cases, you must start with the lowest environment and use the promotion feature for higher environments.

3. Enter the name of your Connector based on your organization's naming conventions, or Klaw will enforce a minimum 5-character name.
4. Add connector configuration (valid json) in the configuration field.
7. Add a connector description. This information will stay with the connector for the duration of its lifecycle.
8. Add any remarks, this will inform the reviewer whether they should approve or decline the request.
9. Submit the request and a team member will be able to review and approve or decline the request based on the request made.