#!/bin/bash


FILES_TO_CHECK=""
QUIET_MODE=""
OFFLINE_MODE=""
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
      OFFLINE_MODE="--config=./scripts/markdown-link-check-offline-config.json"
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

  markdown-link-check $(find "docs" -type f -name '*.md' ! -path '*/node_modules/*' -print) \
    $QUIET_MODE \
    $OFFLINE_MODE

  EXIT_CODES+=("$?")
else



  # @TODO this returns an exist code 1 even though
  # there is no error. Needs to be checked and fixed
  # before we can add this to pipeline
  # Check all Markdown files
  echo "🔍 Checking links in all markdown files in /docs"
  # Use "find" to locate all Markdown files in docs, excluding those in node_modules
  # shellcheck disable=SC2046
  markdown-link-check $(find "docs" -type f -name '*.md' ! -path '*/node_modules/*' -print) \
    $QUIET_MODE \
    $OFFLINE_MODE

  EXIT_CODES+=("$?")

  echo "🔍 Checking links in all markdown files in /blog"
  # Use "find" to locate all Markdown files in blog, excluding those in node_modules
  # Apply ignore pattern to not check links that are not starting with http/https AND
  # are not located in "blog"
  IGNORE_PATTERN_BLOG="--config=./scripts/markdown-link-check-blog-config.json"
  # shellcheck disable=SC2046
  markdown-link-check $(find "blog" -type f -name '*.md' ! -path '*/node_modules/*' -print) \
    $QUIET_MODE \
    $OFFLINE_MODE \
    $IGNORE_PATTERN_BLOG

  EXIT_CODES+=("$?")


  echo "🔍 Checking links in other markdown files"
  # Use "find" to locate all Markdown files excluding those in node_modules, docs or blog
  # shellcheck disable=SC2046
  markdown-link-check \
  $(find . -type f -name '*.md' ! -path './docs/*' ! -path './blog/*' ! -path '*/node_modules/*' -print) \
    $QUIET_MODE \
    $OFFLINE_MODE

  EXIT_CODES+=("$?")

  for code in "${EXIT_CODES[@]}"; do
    echo "code $code"
  done
fi


# Check if an error occurred for link checking
for code in "${EXIT_CODES[@]}"; do
  if [ -n "$code" ] && [ "$code" -ne 0 ]; then
    echo "Error in link checking (exit code $code)"
    BROKEN_LINK=true
  fi
done




# Show custom error for broken links
if [ $BROKEN_LINK == true ]; then
    echo -e "\n\n🙋 Markdown link check failed"
    echo -e "   This can have multiple reasons:\n"
    echo -e "1. A file name contains spaces (My file.md). Use a '-' instead of spaces."
    echo -e "2. A file was moved and this broke existing links to that file. Check the log-output! You can search for 'dead links found!' to find the failures."
    echo -e "3. A target in a link was not found. Make sure that relative paths start from the location of your file."
    # This does NOT return an exist code 1 as "🔍 Checking links in all markdown files in /docs"
    # always returns exit code 1, so for the github workflow it should not break the pipeline
fi

