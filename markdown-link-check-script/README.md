# What markdown-link-check does

Uses [markdown-link-check](https://github.com/tcort/markdown-link-check) to check links in `.md` files.

## Scripts you can use

Note: All scripts need to be rune from root.

### ➡️ `npm run markdown-link-check`

Will run the check for all Markdown files. It checks internal as well as external links (so it needs internet
connection) and assets. Please be aware that you need to [check your results](#-limitation)

### ➡️ `npm run markdown-link-check -f "path/to/file.md`

Will run the check for a specific Markdown files. It checks internal as well as external links (so it needs internet
connection) and assets.

### Flags to use

- `npm run markdown-link-check -- -q` will run in quite mode and not log the files checked, but log the different
  processes and a end result. If there is an error, the error will be logged.

- `npm run markdown-link-check -- -o` will run in offline mode and not check for links starting with http/https.

The flags can be used with all files as well as only one. They can also be used together.

## ⚠️ Limitation

When running the link-check for all files without the offline mode flag, the first command ("Checking links in all
markdown files in /docs") will always return an exist code `1`. We've investigated that for quite some time, but not
found out what the issue is. Since we're only using offline mode in CI, we decided that we can live with that for now,
as we still can run the checks and get all result.
