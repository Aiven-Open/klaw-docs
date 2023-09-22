# Overview GitHub workflows

This document explains how and why we organize our workflows for a CI strategy using GitHub actions.

## Directories and file structure

Our directory structure is as follows:

- 📁 `/workflows` contains GitHub workflow files

## Pipeline

When a Pull Request is opened targeting `main`, the [`pull-request`](./workflows/pull-request.yaml) workflow is
triggered.
