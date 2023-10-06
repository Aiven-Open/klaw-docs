<p align = "center">
<a href = "https://www.klaw-project.io/"><img src="https://www.klaw-project.io/images/logo-dark.png" alt="Logo"></a>
<h1 align="center">Welcome👋 🎉</h1>
</p>

Klaw is designed to streamline your Apache Kafka® ecosystem. With key features like comprehensive data governance, fine-grained security, and intuitive user management, Klaw empowers users to make informed decisions, ensure regulatory compliance, and facilitate developer self-service. Secure your data and simplify Kafka governance with Klaw.

You can find source code and all content for our ([klaw-project.io](https://www.klaw-project.io/) site here.

We're using [Docusaurus](https://docusaurus.io/docs) to build our documentation, an optimized site generator in React.

## Installation and usage

### Requirements

- [node](https://nodejs.org/en/) needs to be installed.
  -> please check [nvmrc](.nvmrc) or the `engines` definition in [package.json](package.json) for version.

This is the setup you need every time. You can find the different ways how to run the local development process below.

Optionally, we use [Vale](.github/vale/README.md) for spell checking. The spell check will run in the GitHub pipeline.
If you want to use Vale locally, too, please make sure you install it:

- It runs on Mac, Linux and Windows. You can find instructions to download and install it at
  their [Installation guide](https://vale.sh/docs/vale-cli/installation/).
- after installation, run `vale sync` on root level

### Local development

First, make sure you hare the required technology set up:

- node (see above)
- optional: Vale (see above)

The, install all needed dependencies and setup the needed githooks:

```shell
npm install
```

To start local the local development server, run:

```shell
npm start
```

## Scripts used and their actions

ℹ️ You can see all our scripts in the [`package.json`](package.json).
You can also run `npm run` in your console to get a list of all available scripts.

Please note that you have to set up your [local development](#installation-and-usage) in order to use the scripts.

Here are the important ones you're likely to use:

- `npm start`: starts the app for development
- `npm run build`: will build the documentation site and generate all static files in "build". After `build` you can
  run `npm run serve` to test your build locally
- `npm run lint`: runs a format check and if no error is found, lints code and markdown files in the project.
  - the linting script does not mutate your code. See [Linting and code formatting](#linting-and-code-formatting) for
    more info.
- `npm run reformat`: runs the code formatter (Prettier) as well as the markdown linter in fix mode. This will mutate
  your code.
- `npm run markdown-link-check`: checks if there are any broken links. Note: This requires internet connection, as it
  does check external links, too!
  - Run `npm run markdown-link-check -- -o` to only check for internal links (offline mode).
  - Run `npm run markdown-link-check -- -q` to only log errors.
  - Run `npm run markdown-link-check -- -f /path/your-file.md` to run checks for only one file.

For these scripts, you need to have Vale installed (see [Requirements](#requirements)):

- `npm run spell:error` to show only errors (same as in CI)
- `npm run spell:warn` to show errors as well as warnings
- `npm run spell:all` to show errors, warnings and suggestions

ℹ️ We are using a custom hook path for enabling pre-commit hooks. This path is set in the local git configuration when
running `npm install`.

## Linting and code formatting

How we keep our app's codebase looking consistent and nice 💅🏼

- [Prettier](https://prettier.io/) for code formatting
- [ESlint](https://eslint.org/) and various plugins for linting
- [markdownlint](https://github.com/DavidAnson/markdownlint) in combination
  with [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) to check and format markdown files
  specially.

### Fine-grained scripts for linting and formatting

We provide `npm run lint` as well as `npm run reformat` to check or mutate your changes. We also offer more specific
scripts you can use:

Scripts with `lint` do not mutate your code in any way:

- `npm run lint:code` - runs a Prettier and ESlint check. This includes basic checks for markdown, but not
  in depth.
- `npm run lint:markdown` - runs markdown-lint with more detailed check on markdown files.

To apply findings from `lint` and mutate your files:

- `npm run reformat:code` - runs Prettier and ESlint in fix mode.
- `npm run reformat:markdown` - runs markdownlint in fix mode.

ℹ️ It's convenient to let Prettier and ESlint automatically format your code "on save" by your IDE or editor. For
markdownlint
you can find [plugins for some IDE/editors](https://github.com/DavidAnson/markdownlint#related), too.

## Code of Conduct
- Please be aware of our [Code of Conduct](CODE_OF_CONDUCT.md) Happy hacking ❤️
