# How we use Vale

## About Vale

> "[Vale](https://vale.sh/) is an open-source, command-line tool that brings your editorial style guide to life."

Vale provides us with spell checking. Additionally, we use it to enforce a custom a style guide.

It runs on Mac, Linux and Windows. You can find instructions to download and install it at
their [Installation guide](https://vale.sh/docs/vale-cli/installation/).

## How to use Vale

Our Vale setup is a work in progress, we will extent it over time and establish a more strict style guide. Right now, we
use it for a basic spell checking.

We use Vale in two ways:

- it runs in a GitHub action for every PR targeting `main`
- we provide scripts you can run at root level for local spell checking. You need to install Vale to use this scripts.

### Local scripts

When you have Vale installed, you can run this scripts on root level:

- `npm run spell:error` to show only errors (same as in CI)
- `npm run spell:warn` to show errors as well as warnings
- `npm run spell:suggestion` to show errors, warnings and suggestions

## Our Vale setup

[`.vale.ini`](../../.vale.ini) defines:

- where to find Vale style files (`.github/vale/styles`)
- what files to check (`.md` and `.mdx` files)
- what styles to use ([Google package](https://vale.sh/hub/google/) as well as custom Klaw styles)

The GitHub workflow is defined in [`.github/workflows/vale.yaml`](/.github/workflows/vale.yaml)

### Spell checking

Vale ships with an [American dictionary](https://github.com/errata-ai/en_US-web) by default. We define extra vocabulary
with `styles/Klaw/spelling.yml`. This dictionary is specified in the file `dicts/klaw.dic`. Vale will look in the
default dictionary first, and then in the Klaw dictionary.

#### Adding word to custom dictionary

If the word is correctly written, you can add it to our custom dictionary. To extend the vocabulary, add the word you
need in the file `dicts/klaw.dic`. The first line of `dicts/klaw.dic` is a count of the number of entries. Please keep
it up-to-date. After you added your word, sort the lines alphabetically (except the first one).

##### When not to add a word

There are cases where a word should not go into the vocabulary, but should not be marked as error. For example, we
use <!-- vale off --> "testtopic" <!-- vale on --> as an example name in the documentation. We don't want that to show
up as an error where it is used, but we
also don't want to add it in the vocabulary, since it's not a correct word.

In this case, you can turn vale of for this word, by doing: `<!-- vale off --> "testtopic" <!-- vale on -->`
