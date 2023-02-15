Connectors
==========

Kafka Connect is a tool for scalably and reliably streaming data between Apache Kafka and other systems.
For more info `Kafka Connect <https://kafka.apache.org/documentation/#connect>`_

.. toctree::
   :maxdepth: 3
   :hidden:


    Request a new Connector<topics/Request-a-new-connector>
    Approve a Connector<topics/Approve-a-connector>
    My Connector Requests<topics/My-connector-requests>

Connectors in Kafka
-------------------

It makes it simple to quickly define connectors that move large collections of data into and out of Kafka. Kafka Connect can ingest entire databases
or collect metrics from all your application servers into Kafka topics, making the data available for stream processing with low latency.


Kafka Connect management
------------------------

Kafka connect provides a REST Api for managing connectors. This REST API is available in both standalone and distributed mode.

Connectors management in Klaw
-----------------------------

Klaw uses the concept of a **Team** for Connector ownership and management. The team creates the request to create a connector in the development environment and has the ability to promote it to other environments, including production.
For any requests related to a connector, the team that owns the connector is responsible for making the final decision, such as approving or declining the request.
