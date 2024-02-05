# Klaw documentation

- Please be aware of our [Code of Conduct](CODE_OF_CONDUCT.md) ❤️

## About

This is the Klaw documentation repository. Welcome 👋 🎉
You can find source code and all content for our ([Klaw documentation](https://www.klaw-project.io/) site here.

We're using [Docusaurus](https://docusaurus.io/docs) to build our documentation, an optimized site generator in React.

## Installation and usage

### Requirements

- [node](https://nodejs.org/en/) needs to be installed.
  -> please check [nvmrc](.nvmrc) or the `engines` definition in [package.json](package.json) for version.
- We use [pnpm](https://pnpm.io/) (version 8) as a package manager. Read their official documentation [how to
  install](https://pnpm.io/installation) pnpm.

This is the setup you need every time. You can find the different ways how to run the local development process below.

#### Optional

- We use [Vale](.github/vale/vale.md) spell checking. The spell check will run in the GitHub pipeline.

To use Vale locally, please make sure you install it:

- It runs on Mac, Linux and Windows. You can find instructions to download and install it at
  their [Installation guide](https://vale.sh/docs/vale-cli/installation/).
- after installation, run `vale sync` on root level

While we check for errors in the pipeline, we also have "warning" and "suggestion" level rules. We recommend [running those](#scripts-used-and-their-actions) checks locally, too.

### Local development

First, make sure you hare the required technology set up:

- node (see above)
- pnpm (see above)
- optional: Vale (see above)

The, install all needed dependencies and setup the needed githooks:

```shell
pnpm install
```

To start the local development server, run:

```shell
pnpm start
```

🦖 the website will now run on `http://localhost:3000/`

## Scripts used and their actions

ℹ️ You can see all our scripts in the [`package.json`](package.json).
You can also run `pnpm run` in your console to get a list of all available scripts.

Please note that you have to set up your [local development](#installation-and-usage) in order to use the scripts.

Here are the important ones you're likely to use:

- `pnpm start`: starts the app for development
- `pnpm build`: will build the documentation site and generate all static files in "build". After `build` you can
  run `pnpm serve` to test your build locally
- `pnpm lint`: runs a format check and if no error is found, lints code and markdown files in the project.
  - the linting script does not mutate your code. See [Linting and code formatting](#linting-and-code-formatting) for
    more info.
- `pnpm reformat`: runs the code formatter (Prettier) as well as the markdown linter in fix mode. This will mutate
  your code.
- `pnpm markdown-link-check`: checks if there are any broken links. Note: This requires internet connection, as it
  does check external links, too!
  - Run `pnpm markdown-link-check -- -o` to only check for internal links (offline mode).
  - Run `pnpm markdown-link-check -- -q` to only log errors.
  - Run `pnpm markdown-link-check -- -q /path/your-file.md` to run checks for only one file.
- `pnpm check-sidbar`: checks that the file linked in sidebar do exist and that all markdown files in `docs` are listed in sidebar.js. It does not warn for files that start with the prefix `DRAFT_`.

For these scripts, you need to have Vale installed (see [Requirements](#requirements)):

- `pnpm spell:error` to show only errors (same as in CI)
- `pnpm spell:warn` to show errors as well as warnings
- `pnpm spell:warn` to show errors, warnings and suggestions

ℹ️ We are using a custom hook path for enabling pre-commit hooks. This path is set in the local git configuration when
running `pnpm install`.

## Linting and code formatting

How we keep our app's codebase looking consistent and nice 💅🏼

- [Prettier](https://prettier.io/) for code formatting
- [ESlint](https://eslint.org/) and various plugins for linting
- [markdownlint](https://github.com/DavidAnson/markdownlint) in combination
  with [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) to check and format markdown files
  specially.

### Fine-grained scripts for linting and formatting

We provide `pnpm lint` as well as `pnpm reformat` to check or mutate your changes. We also offer more specific
scripts you can use:

Scripts with `lint` do not mutate your code in any way:

- `pnpm lint:code` - runs a Prettier and ESlint check. This includes basic checks for markdown, but not
  in depth.
- `pnpm lint:markdown` - runs markdown-lint with more detailed check on markdown files.

To apply findings from `lint` and mutate your files:

- `pnpm reformat:code` - runs Prettier and ESlint in fix mode.
- `pnpm reformat:markdown` - runs markdownlint in fix mode.

ℹ️ It's convenient to let Prettier and ESlint automatically format your code "on save" by your IDE or editor. For
markdownlint
you can find [plugins for some IDE/editors](https://github.com/DavidAnson/markdownlint#related), too.
