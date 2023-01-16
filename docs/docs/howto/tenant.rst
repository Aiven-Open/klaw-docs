Tenant
======

A Tenant in klaw terminology is an isolated klaw environment which has its own set of clusters, environments, users, teams, topics etc.
Users of one tenants are totally isolated from other tenants. They cannot view topics or any information of other tenants, even thought they share the same klaw instance.

Every installation of klaw comes with a single (default) tenant.

.. image:: /../../_static/images/Tenants.png

New tenant
----------

A new tenant can be added by a superadmin or with role which has permission ``ADD_TENANT`` under menu Environments -> Tenants

.. note:: If the application should be limited to only one tenant, it can be configured with the below property in application.properties.

::

    #maximum tenants can be created
    klaw.max.tenants=200


