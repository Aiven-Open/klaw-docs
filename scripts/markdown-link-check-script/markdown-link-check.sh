#!/bin/bash

FILES_TO_CHECK=""
QUIET_MODE=""
OFFLINE_MODE=false
BROKEN_LINK=false
EXIT_CODES=()

# Parse command-line options
while getopts "f:qo" opt; do
  case $opt in
    f)
      FILES_TO_CHECK="$OPTARG"
      ;;
    q)
      QUIET_MODE="-q"
      ;;
    o)
      OFFLINE_MODE=true
      ;;
    \?)
      echo "Usage: $0 [-f file] [-q]"
      exit 1
      ;;
  esac
done


if [ -n "$FILES_TO_CHECK" ]; then
  # Check the specified file
  echo "🔍 Checking links in $FILES_TO_CHECK."
  # shellcheck disable=SC2046

  markdown-link-check \
    "$FILES_TO_CHECK" \
    $QUIET_MODE \
    $OFFLINE_MODE

  EXIT_CODES+=("$?")
else
  # @TODO without offline mode, this returns an exist code 1
  # even though there is no error. I've not found out why,
  # needs further investigation.

  ########### CHECK LINKS IN /DOCS
  echo "🔍 Checking links in all markdown files in /docs"

  DOCS_IGNORE_PATTERN=""
  if [ $OFFLINE_MODE == true ]; then
    DOCS_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-offline-config.json"
  fi

  # Use "find" to locate all Markdown files in /docs, excluding the category
  # docs/release and the file docs/index.md as Docusaurus does resolve those links differently
  # shellcheck disable=SC2046
  markdown-link-check \
  $(find "docs" -type f -name '*.md' ! -path 'docs/releases/*' ! -path 'docs/index.md' -print) \
  $QUIET_MODE  \
  $DOCS_IGNORE_PATTERN

  EXIT_CODES+=("$?")


  ########### CHECK LINKS IN /DOCS/RELEASE
  echo "🔍 Checking links in all markdown files in /releases"

  RELEASE_IGNORE_PATTERN=""
  if [ $OFFLINE_MODE == true ]; then
    RELEASE_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-releases-config-offline.json"
  else
    RELEASE_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-releases-config.json"
  fi

  # Use "find" to locate all Markdown files in /docs/releases/
  # shellcheck disable=SC2046
  markdown-link-check \
    $(find "docs/releases" -type f -name '*.md' -print) \
    $QUIET_MODE \
    $RELEASE_IGNORE_PATTERN

  EXIT_CODES+=("$?")


  ########### CHECK LINKS IN /BLOG
  echo "🔍 Checking links in all markdown files in /blog"

  BLOG_IGNORE_PATTERN=""
  if [ $OFFLINE_MODE == true ]; then
    BLOG_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-blog-config-offline.json"
  else
    BLOG_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-blog-config.json"
  fi

  # Use "find" to locate all Markdown files in /blogs
  # shellcheck disable=SC2046
  markdown-link-check \
    $(find "blog" -type f -name '*.md' -print) \
    $QUIET_MODE \
    $BLOG_IGNORE_PATTERN

  EXIT_CODES+=("$?")


  ########### CHECK LINKS IN OTHER DIRECTORIES
  echo "🔍 Checking links in other markdown files"

  OTHER_IGNORE_PATTERN=""
  if [ $OFFLINE_MODE == true ]; then
    OTHER_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-blog-config-offline.json"
  else
    OTHER_IGNORE_PATTERN="--config=./scripts/markdown-link-check-script/markdown-link-check-blog-config.json"
  fi

  # Use "find" to locate all Markdown files in /docs/releases/
  # shellcheck disable=SC2046
  markdown-link-check \
  $(find . -type f -name '*.md' ! -path './docs/*' ! -path './blog/*' ! -path '*/node_modules/*' ! -path '*/.github/vale/styles/*' -print) \
    $QUIET_MODE \
    $OTHER_IGNORE_PATTERN

  EXIT_CODES+=("$?")
fi



# Check if an error occurred for link checking
for code in "${EXIT_CODES[@]}"; do
  if [ -n "$code" ] && [ "$code" -ne 0 ]; then
    echo "Error in link checking (exit code $code)"
    BROKEN_LINK=true
  fi
done




if [ -n "$OFFLINE_MODE" ]; then
  if [ $BROKEN_LINK == true ]; then
      echo -e "\n\n🙋 Markdown link check failed"
      echo -e "1. A file name contains spaces (My file.md). Use a '-' instead of spaces."
      echo -e "2. A file was moved and this broke existing links to that file. Check the log-output! You can search for 'dead links found!' to find the failures."
      echo -e "3. A target in a link was not found. Make sure that relative paths start from the location of your file."
      # This does NOT return an exist code 1 as "🔍 Checking links in all markdown files in /docs"
      # always returns exit code 1, so for the github workflow it should not break the pipeline
  fi
else
  echo -e "\n\n🙋🙋  Markdown link check finished, please check logs for results!"
  echo -e "There is a known error when running checking links not in offline mode."
  echo -e "You will see: 'Error in link checking (exit code 1)' even if there are no errors."
  echo -e "So check for 'dead links found!' in the logs to see if there are errors."
fi

