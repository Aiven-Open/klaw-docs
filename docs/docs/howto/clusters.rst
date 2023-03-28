Clusters
========


Clusters hold the connectivity information of servers. There can be 3 types of clusters defined in Klaw.
- Kafka
- Schema Registry
- Kafka Connect

  Configurations like protocol, bootstrap servers, rest api urls, kafka flavors can be provided.

New Cluster
-----------

This section provides information on adding a new cluster.

* Any user with a permission ``ADD_EDIT_DELETE_CLUSTERS`` can add a new cluster. By default, a users with SUPERADMIN role have the permission.


To add a new cluster, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_CLUSTERS`` permission.
2. Go to **Clusters**, and click the **Add Cluster** button.
4. Select a cluster type, and provide the relevant details
5. Click **Save** to save your changes.

.. image:: /../../_static/images/clusters/NewCluster.png

This creates a new cluster.

Update Cluster
--------------

This section provides information on modifying an existing cluster.

* Any user with a permission ``ADD_EDIT_DELETE_CLUSTERS`` can update a cluster. By default, a users with SUPERADMIN role have the permission.

To update an existing cluster, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_CLUSTERS`` permission.
2. Go to **Clusters**, and choose the team to update and click the **Modify Cluster** button.
4. Update with relevant details
5. Click **Save** to save your changes.

.. image:: /../../_static/images/clusters/UpdateCluster.png

This updates an existing cluster.

Delete Cluster
--------------

This section provides information on deleting an existing cluster.

* Any user with a permission ``ADD_EDIT_DELETE_CLUSTERS`` can update a cluster. By default, a users with SUPERADMIN role have the permission.

To delete an existing cluster, follow these steps:

1. Log in to Klaw as a superadmin or a user with the ``ADD_EDIT_DELETE_CLUSTERS`` permission.
2. Go to **Clusters**, and choose the cluster to update and click the **Delete Cluster** button.
3. A cluster can only be deleted if there are no associated environments for the cluster.

.. image:: /../../_static/images/clusters/Clusters.png

This deletes an existing cluster.
