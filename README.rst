Documentation
#############

Here is all the information you need to set up and work with this documentation repository.

Get set up
==========

Virtualenv
----------

Before installing packages, it is recommended to create a virtualenv. The command below uses `virtualenv <https://pypi.org/project/virtualenv/>`_ and the currently-installed version of Python 3::

    virtualenv --python=$(which python3) v

Once the virtualenv is created, activate it each time you come to work on the project::

    . v/bin/activate

Install dependencies
--------------------

The project setup and dependencies are described in ``pyproject.toml``. Install the packages needed with ``pip``::

    pip install .


Work with docs
==============

Generate HTML
-------------

To generate HTML, run ``make html`` from the ``docs/`` directory. The output will be in ``_build/``.
