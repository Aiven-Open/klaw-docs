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

To build and develop custom styles with TailwindCSS (mostly for the landing page), you will also need Node.js and npm. Install the packages needed with ``npm``::

    npm install

Work with docs
==============

Generate HTML
-------------

To generate HTML, run ``make html`` from the ``docs/`` directory. The output will be in ``_build/``.
To automatically build and live reload changes, run ``make livehtml`` from the ``docs/`` directory.
Both of the previous commands will generate the required TailwindCSS output. When developing the CSS styles,
you can automatically re-generate the CSS changes with ``make tailwind-watch`` from the ``docs/`` directory,
but unfortunately there's no way to make hot-reloading work with those changes as of yet.
