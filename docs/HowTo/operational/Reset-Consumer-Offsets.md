# Reset Consumer group offsets

In certain situations like errors or failures or deserialization issues, a Kafka® consumer might want to read/process the
messages again. Kafka® provides a cli kafka-consumer-groups for the same.

Klaw provides the same functionality to reset offsets of a consumer group.

## Make a reset consumer group offsets request

1. Select the topic on which the request has to be submitted

2. Go to Topic overview page and select the right environment

3. On the Subscriptions tab, choose the right consumer ACL and consumer group record

4. If you are the owner of this consumer ACL, you would see a `Reset Consumer Offsets` button

   ![image](../../../static/images/operational/reset-offsets1.png)

5. A new form is provided to the user and there are 3 options provided to reset the offsets

   - LATEST
   - EARLIEST
   - TO_DATE_TIME

   ![image](../../../static/images/operational/reset-offsets2.png)

6. On submission, a request is created which has to be approved by the consumer ACL Owner team. On Approval, offsets are
   reset and users are notified
