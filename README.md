# Documentation

Here is all the information you need to set up and work with this
documentation repository.

## Get set up

### Virtualenv (Optional)

Before installing packages, it is recommended to create a virtualenv.
The command below uses
[virtualenv](https://pypi.org/project/virtualenv/) and the
currently-installed version of Python 3:

    virtualenv --python=$(which python3) v

Once the virtualenv is created, activate it each time you come to work
on the project:

    . v/bin/activate

### Install dependencies

To build and develop custom styles with TailwindCSS (mostly for the
landing page), you will also need Node.js and npm. Install the packages
needed with `npm`:

    npm install

## Work with docs

### Build

    npm run build

### Access docs

    npm start
