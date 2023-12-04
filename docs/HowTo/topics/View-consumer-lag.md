# View Consumer Lag

Consumer lag indicates the lag between Kafka producers and Consumers. If the rate of producing events on to the topic
exceeds than consuming, then there would be a lag.
Kafka provides a cli kafka-consumer-groups to view the lag per topic partitions.

## How to view the consumer lag in Klaw

1. Select the topic on which you want to view the lag
2. In the topic overview, select the right environment
3. Look for the consumer acl record which your team owns
4. Click on the button `Click to view offset info`
5. This would display the consumer lag per partition for the selected topic

   ![image](../../../static/images/topic/consumer-lag.png)
