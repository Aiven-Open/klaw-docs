Email Notifications
===================

Email notifications can be sent to users when actions are performed in Klaw that require their attention.

Skip to see all notifications sent and to which users: :ref:`Email matrix`

Configure email notifications
-----------------------------
Email can be configured in the Klaw-core's appplication.properties, follow your email providers documentation to configure email notifications.
The ``host``, ``username`` and ``password`` will be required to send emails from Klaw.

..  code-block:: text
    :caption: Klaw email properties

    klaw.admin.mailid=
    klaw.mail.notifications.enable=true
    spring.mail.properties.mail.transport.protocol=smtp
    spring.mail.host=
    spring.mail.port=587
    spring.mail.username=
    spring.mail.password=
    spring.mail.properties.mail.smtp.auth=true
    spring.mail.properties.mail.smtp.starttls.enable=true
    spring.mail.properties.mail.debug=false
    spring.mail.noreplymailid=noreplyid
    spring.mail.frommailid=fromailid

Customize email templates
-------------------------
The Superadmin can access all the email templates using the navigation bar to go to Dashboard -> Settings.
Within settings all email templates are prefixed with ``klaw.mail`` and is suffixed by the notifactiontype and ``.content``
This can be edited to local languages to reword emails and add additional information.

.. _Email matrix:


.. list-table:: Email notification matrix
   :widths: 50 50 50 50 50 50 50
   :header-rows: 1
   :class: no-scroll

   * - Notification Type
     - Requestor
     - Approver
     - Requestor Team
     - Approver Team
     - APPROVE_ALL_REQUESTS_TEAMS
     - Administrator
   * - User Registration Request
     - cc
     -
     -
     -
     -
     - to
   * - User Registration Approved
     - to
     -
     -
     -
     -
     -
   * - New Topic Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New Topic Approved
     - to
     - cc
     -
     - cc
     -
     -
   * - Promote Topic Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New ACL Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New ACL Approved
     - to
     - cc
     -
     - cc
     -
     -
   * - New Schema Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New Schema Approved
     - to
     - cc
     -
     - cc
     -
     -
   * - Promote Schema Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New Connector Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New Connector Approved
     - to
     - cc
     -
     - cc
     -
     -
   * - Promote Connector Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - New Claim Request
     - cc
     -
     -
     - to
     - bcc
     -
   * - Password Reset
     - to
     -
     -
     -
     -
     -
   * - Password Changed
     - to
     -
     -
     -
     -
     -