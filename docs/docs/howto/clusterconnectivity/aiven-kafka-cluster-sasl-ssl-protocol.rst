Apache Kafka Cluster with SASL_SSL Protocol
===========================================

1. Setup Klaw Core Api to Klaw Cluster Api connection.
   Configure ``klaw.clusterapi.url`` in Klaw UI, Dashboard -> Settings and test the connectivity

2. Create a kafka cluster in Klaw with SASL protocol.
   Please note, mechanism could be PLAIN/SCRAM/GSSAPI with or without SSL.

3. Copy the cluster id from Klaw clusters page with the available copy option.

4. Depending on the mechanism, copy one of the below properties and replace 'klawsasl' with the copied cluster id ::

    klawsasl.kafkasasl.jaasconfig.plain=org.apache.kafka.common.security.plain.PlainLoginModule required username='kwuser' password='kwuser-secret';
    klawsasl.kafkasasl.jaasconfig.scram=org.apache.kafka.common.security.scram.ScramLoginModule required username='kwuser' password='kwuser-secret';
    klawsasl.kafkasasl.jaasconfig.gssapi=com.sun.security.auth.module.Krb5LoginModule required useKeyTab=true storeKey=true keyTab="/location/kafka_client.keytab" principal="kafkaclient1@EXAMPLE.COM";


5. Update the properties with relevant values

6. Re-deploy Cluster Api with the updated configuration.

That should be it.