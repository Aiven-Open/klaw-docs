Migration Kafkawize from 3.5 to 4.0
===================================

1   Follow the instructions in getting started page and download both Kw and KwClusterApi
2   From the getting started page, request for license key and update::

    custom.license.key=
    custom.org.name=

3   Set the below properties::

    custom.dbscripts.execution = manual
    custom.dbscripts.dropall_recreate = false
4   Make sure to update the other required config for application properties::

    custom.kafkawize.version=<4.0> copy from the new downloaded zip
    custom.invalidkey.msg=<..> copy from the new downloaded zip
