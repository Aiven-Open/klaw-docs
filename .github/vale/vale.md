# How we use Vale

## About Vale

> "[Vale](https://vale.sh/) is an open-source, command-line tool that brings your editorial style guide to life."

Vale provides us with spell checking. Additionally, we use it to enforce a custom a style guide.

It runs on Mac, Linux and Windows. You can find instructions to download and install it at
their [Installation guide](https://vale.sh/docs/vale-cli/installation/).

## How to use Vale

- install Vale
- run `vale sync` on root level

Our Vale setup is a work in progress, we will extent it over time and establish a more strict style guide. Right now, we
use it for a basic spell checking.

We use Vale in two ways:

- it runs in a GitHub action for every PR targeting `main`
- we provide scripts you can run at root level for local spell checking. You need to install Vale to use this scripts.

### Local scripts

When you have Vale installed, you can run this scripts on root level:

- `pnpm spell:error` to show only errors (same as in CI)
- `pnpm spell:warn` to show errors as well as warnings
- `pnpm spell:all` to show errors, warnings and suggestions

## Our Vale setup

[`.vale.ini`](../../.vale.ini) defines:

- Where to find Vale style files (`.github/vale/styles`).
- What files to check (`.md` and `.mdx` files).
- What styles to use ([Google package](https://vale.sh/hub/google/) as well as custom Klaw styles).

The GitHub workflow is defined in [`.github/workflows/vale.yaml`](../workflows/vale.yaml)

### Spell checking

Vale ships with an [American dictionary](https://github.com/errata-ai/en_US-web) by default. We define extra vocabulary
with `styles/Klaw/spelling.yml`. This refers to a file `spelling-klaw-vocabulary.txt`.In this file, we add words that are common in Klaw but are marked as error from the default dictionary.

The words in our custom spelling are **case sensitive**!

#### Adding word to custom dictionary

If the word is correctly written, you can add extend our vocabulary. Add the word you
need in the file `spelling-klaw-vocabulary.txt`. After you added your word, sort the lines alphabetically (except the first one). Make sure you add the correct capitalization, as the words are case-sensitive.

##### When not to add a word

There are cases where a word should not go into the vocabulary, but should not be marked as error. For example, we
use <!-- vale off --> "testtopic" <!-- vale on --> as an example name in the documentation. We don't want that to show
up as an error where it is used, but we
also don't want to add it in the vocabulary, since it's not a correct word.

In this case, you can turn vale of for this word, by doing: `<!-- vale off --> "testtopic" <!-- vale on -->`
