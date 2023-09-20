# Request a new Subscription

The process for requesting a new subscription to be created in Kafka is
straightforward and efficient. The team that owns the relevant topic is
responsible for approving or declining subscription requests.

## Prerequisites

- The Superadmin must configure the environment within Klaw. See
  [Environments](../../Concepts/clusters-environments) for the steps to configure the environments.

## Make a subscription request

1.  In Klaw, navigate to the **Topics** menu, and select the topic you
    want to request a subscription.

2.  Select the subscribe button available in the bottom right corner.

3.  Select the environment where the Kafka topic is located and available for subscription creation.

    - Based on Kafka flavor of the environment, the fields
      displayed will vary.
    - For Aiven for Apache Kafka environment, there are no
      consumer groups but a Service account has to be specified.

4.  Select the ACL type: Producer (write access on the topic) or
    Consumer (read access on the topic).

5.  For the ACL type: Producer

    - Select Pattern type LITERAL (on one topic) or PREFIXED (on
      all topics with the same prefix).
    - Provide a transaction ID(optional). This is required for
      exactly-once semantics.

6.  For the ACL type: Consumer

    - A consumer group is mandatory.

7.  Select ACL IP (host based) or Principal based

    - IP: add one or more IP addresses (IPv4 / IPv6).
    - Principal: add one or more Principals (SSL DN strings or
      usernames).

8.  Add any remarks that will help the reviewer make an informed
    decision on whether to approve or decline the request.

9.  Submit the request, and a member of the topic owner team will review
    it and either approve or decline it based on the request.
