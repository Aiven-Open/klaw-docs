# High Availability in Klaw

Ensuring high availability is crucial when deploying any application in
a production environment. High availability mode guarantees minimal or
no downtime and balanced processing of requests.

Klaw, a Java-based web application, can be deployed in high availability
mode. A key feature of Klaw is its ability to reset the cache in all
running instances whenever users or administrators request changes.

## Why is High Availability Important?

To minimize interruptions and downtime, it is crucial to prepare for
unforeseen events that can cause server failures. Emergencies can
potentially bring down even the most reliable software and systems.
Implementing highly available systems can reduce the impact of such
events, as these systems often can automatically recover from failures
in components or servers.

## High Availability Architecture

Ensuring systems can handle higher workloads and substantial traffic is
undeniably vital. However, it is equally important to identify potential
failure points and minimize downtime. A key component in achieving this
goal is a highly available load balancer, which plays a significant
role. It involves implementing a scalable infrastructure design that
adapts to increased traffic demands. This often involves employing a
software architecture that surpasses hardware limitations.

![image](../../static/images/HA_Klaw.png)

## How to configure and enable High Availability

In the Klaw core module, configure the below property, which is a
comma-separated list of Klaw instances.

    klaw.uiapi.servers=https://klawhost1:9097,https://klawhost2:9097

This configuration will make sure of any cache which has to be reset on
the instances.

Next Configure the secure communication between the multiple instances of Klaw.

    # This allows App2App communication in a HA setup
    # where multiple Klaw-core instances are deployed
    # Provide a base 64 encoded string. The same secret should be used in all Instances.
    # Update the below to your own unique secret!!!!!
    klaw.core.app2app.base64.secret=
    klaw.core.app2app.username=KlawApp2App

    # Enable High Availability for multi-instance Klaw-core deployment.
    # Set to true to enable/false to disable
    klaw.core.ha.enable=true
