Switch Teams
============

Klaw allows users to switch between teams.

- User profile always has a base team, and a list of teams which can be switched to.
- Switch teams list should always contain the base team
- User can switch teams with a drop down provided in the Klaw portal - header section.
- Switching to a different team, updates the base team of the profile.
- This provides users some flexibility to users when creating or approving requests by switching team
- Get a different Dashboard/Analytics/ActivityLog and more relevant views-
- Only a superadmin with 'ADD_EDIT_DELETE_USERS' permission can enable a user profile to switch teams

.. note::
   Any request raised cannot be approved by the same user in Klaw.

Enable Switch teams for a user
------------------------------

A user with 'ADD_EDIT_DELETE_USERS' permission can enable a user profile to switch teams.

- Login with credentials of a user with the above mentioned permission
- Go to Users -> Add/Modify user
- Select the checkbox 'Enable switching teams'
- Select 2 or more teams from 'Switch between Teams' drop down
- Save

.. image:: /../../../_static/images/teams/SwitchTeams.png

This enables the user to switch teams.

Switch Team
-----------

- Login with credentials of a user who has 'Enable switching teams' checked
- In the header section of Klaw portal, a drop down with a list of teams (switchable teams) is provided
- On selecting a different team from the drop down, updates the base team of the user profile.

.. note::
   With this change, the behaviour of requests remain the same, either for topics/acls/schemas/connectors. User cannot approve his own requests at any point of time.