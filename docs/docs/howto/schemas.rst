Schemas
=======

Events produced on to a kafka topic can adhere to a schema, so it is known to the producers/consumers what to expect from an event.
This structure of the data format is important to define. It could be a Json/Avro/Protobuf etc, and without them, it could disrupt the flows between producers and consumers.

.. toctree::
   :maxdepth: 3
   :hidden:


    Request a schema<schemas/Request-a-schema>
    Promote a schema<schemas/Promote-a-schema>
    Approve a schema<schemas/Approve-a-schema>
    My Schema Requests<schemas/My-schema-requests>

Schema management
-----------------

Aiven's Karapace and Confluent's Schema registry are two popular products where schemas can be managed outside a kafka cluster.
For more info : `Aiven Karapace <https://karapace.io>`_  `Confluent Schema registry <https://docs.confluent.io/platform/current/schema-registry/index.html>`_

Schema management in Klaw
-------------------------

- Klaw uses the concept of a **Team** for schema ownership and management. It's a topic owner team requests a schema on the topic.
- For any requests related to a schema, the team that owns the topic is responsible for making the final decision, such as approving or declining the request.
- Klaw enforces TopicNameStrategy strategy, and it uses the topic name to determine the subject to be used for schema lookups. This strategy enforces to follow only one schema per topic.
- Klaw supports Aiven's Karapace and Confluent Schema registry.