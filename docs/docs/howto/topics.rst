Topic
======

Topics are a fundamental part of Kafka eco system and the management of topics are one of the core and richest features available in Klaw.

.. toctree::
   :maxdepth: 3
   :hidden:
    Request a new topic<topics/Request-a-new-topic>
    Approve a topic<topics/Approve-a-topic>
    Promote a topic<topics/Promote-a-topic>
    Claim a topic<topics/Clain-a-topic>
    Edit a Topic<topics/Edit-a-topic>
    Delete a topic<topics/Delete-a-topic>
    My Topic Requests<topics/my-topic-requests>

What is a topic?
--------------

A topic is a core concept of Kafka and works as a grouping mechanism for messages or events to order and store those messages.
For a deeper understanding of what a topic is we recommend reading `Kafka Main Concepts and Terminology <https://kafka.apache.org/intro#intro_concepts_and_terms>`_


Why should we manage topics?
----------------------------

Topics allow the producers to create events which can be then read by consumers. Using Kafka this is done in an incredibly fast, secure and durable way.
Due to the nature of Kafka it also means that if a producer or a consumer is unable to operate for a period of time (maintenance,faults or other unexpected reasons) it is decoupled from the wider environment and does not impact the entire system.
A consumer can still consume messages if there is a backlog of events to be processed or a producer can still create events if a consumer is not currently operating and that consumer can pick up from the last message it successfully processed.

This is an incredibly powerful capability, however there needs to be structure to the messages and the producer should be able to ensure the producers have the right to process messages for PII or other sensitive reasons.
As such Access Control Lists and Schema Registries are tools that have been created to ensure that the Kafka environment can be used securely and with proper governance to ensure data privacy and data fidelity.
At the core of all this functionality is the 'Topic' and assigning proper ownership of the topic is crucial to ensuring it is used correctly.


How does Klaw manage topics?
-----------------------------

Klaw uses the concept of a 'team' in the ownership structure. This team creates the request to create the topic in the development environment and has the ability to promote that topic through each of the various environments up to and including production.
Any requests against this topic are then made to the team, for example another team may want to consume events from the topic and a request is made and must be approved or declined by the team that owns the topic.
Similarly if the team wants to enforce a schema on this topic it must be requested and reviewed by another team member and approved or declined by the team member.