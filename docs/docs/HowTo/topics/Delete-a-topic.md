# Delete a Topic

To delete a topic in Klaw, you need to create a delete topic request.

## Create a Delete Topic request

Once a topic is created in the base environment, it is possible to
delete the topic from the highest environment down to the lowest
environment.

1.  In Klaw, select **Topics** on the navigation bar.
2.  Select the specific Kafka Topic you wish to delete.
3.  Select the red **X** on the right-hand side of the topic by the environment table at the top of the page.

    :::note  
    Klaw enforces the deletion of the environments from highest to lowest, so the highest level environment only will be available for deletion.
    :::

4.  Confirm that you are sure you wish to delete the topic from the
    environment.
5.  A delete topic request will be generated and an approver from your
    team can approve or decline it in the **Approvers** view.
