# Contributing Guidelines

🎉 First off: Thank you for your interest in contributing to our project! 🥳 We appreciate you!

Whether you're reporting a bug, suggesting a correction, or adding documentation, we greatly value feedback and contributions from our community. The GitHub Open Source guides offer excellent resources on [how to contribute to open source](https://opensource.guide/how-to-contribute/).

Before submitting any issues or pull requests, please read through this document. It ensures that all parties have the necessary information to address your bug report or contribution.

## Content

- [❤️ Code of Conduct](#-code-of-conduct)
- [Before you start](#before-you-start)
- [Style guide](#style-guide)
  - [Helpful tools](#helpful-tools)
- [Opening an issue](#opening-an-issue)
- [How to work on an issue](#how-to-work-on-an-issue)
- [How to make a pull request](#how-to-make-a-pull-request)
  - [Developer Certificate of Origin](#developer-certificate-of-origin)
    - [How to sign off commits](#how-to-sign-off-commits)
    - [How to fix not signed off commits after the fact](#how-to-fix-not-signed-off-commits-after-the-fact)
  - [✅ When is your pull request ready to be merged?](#-when-is-your-pull-request-ready-to-be-merged)
    - [1. Every PR has to be releasable](#1-every-pr-has-to-be-releasable)
    - [2. A clear goal with a small scope](#2-a-clear-goal-with-a-small-scope)
    - [3. Add meaningful information](#3-add-meaningful-information)
    - [4. Keep a clear git history in mind](#4-keep-a-clear-git-history-in-mind)
- [Review process and merging a pull request](#review-process-and-merging-a-pull-request)
  - [Squash and merge](#squash-and-merge)
  - [✍️ Writing a great commit message](#-writing-a-great-commit-message)
    - [1. Add a short description as the first line](#1-add-a-short-description-as-the-first-line)
    - [2. Use the "imperative mood" in the first line](#2-use-the-imperative-mood-in-the-first-line)
    - [3. Separate your description with a new line from the body](#3-separate-your-description-with-a-new-line-from-the-body)
    - [4. Use an optional body to explain why not how](#4-use-an-optional-body-to-explain-why-not-how)
    - [5. Wrap your body at 72 characters](#5-wrap-your-body-at-72-characters)

## ❤️ Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Before contributing, please take the time to read our Code of Conduct. We expect everyone to uphold this code. Report any unacceptable behavior to us.

For more information, see [Code of Conduct FAQ](https://www.contributor-covenant.org/faq/).

## Before you start

Our Klaw documentation aims to support and enable users to understand what Klaw does, how it could solve their problems, and how to achieve this as quickly and smoothly as possible. We support that by providing accurate, concise, and well-structured information.

## Style guide

You can find all information in our [style guide](styleguide.md) document.

### Helpful tools

Until we established more rules and tooling for our writing, we can recommend these tools:

- [AlexJS](https://alexjs.com/#content) catch and remove condescending, inconsiderate or insensitive language
- [Hemingway Editor](https://hemingwayapp.com/) - to identify errors that affect the readability of your text

## Opening an issue

Consider opening an issue if you:

- Have checked that there is no issue open already related to your topic
- Want to report an error that you can't resolve by yourself
- Want to discuss an idea to improve a higher-level topic, for example about community, documentation

**What information does an issue need?**
The more information an issue includes, the better! For example:

- For bugs, provide a comprehensive description of how to reproduce them. Consider adding screenshots or screen recordings for visual issues.

## How to work on an issue

- Comment on the issue to indicate your intention to work on it.
- If you have the necessary permissions, assign yourself and add the **in progress** label.
- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the Klaw repository.
- In your fork, [create a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch) named after the issue you're addressing.
- 🧑‍💻 Implement your changes. For guidance on setting up a local development environment, refer to our [README](README.md#installation-and-usage).
- Aim for small, focused commits. This facilitates the review process.

- If you have the rights: set yourself as an assignee and add the **in progress** label.
- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the Klaw repository.
- On your
  fork, [create a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch)
  named after the issue you're working on.
- 🧑‍💻 Make your changes. You can find documentation about how to set up a local development environment in
  our [README](README.md#installation-and-usage):
- Prefer making small and self-contained commits. It helps us to do reviews.

Once you've made all your changes and pushed them to GitHub, you're ready to submit a pull request 🎉.

## How to make a pull request

For a detailed guide on creating a PR, refer to GitHub's documentation on [how to create a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork). If you're not sure what to do, please feel free to reach out!

Be conscious of the scope of one PR. Only add changes to your PR related and contributing to the issue you're solving.

### Developer Certificate of Origin

We require contributors to adhere to the [Developer Certificate of Origin](https://developercertificate.org/). This means you must sign off on your commits. We automatically verify that all commit messages contain the `Signed-off-by:` line with your name and email.

#### How to sign off commits

To sign off on commits, use the `-s` (or `--signoff`) flag with your commit command. For example:

`git commit -s -m "Update documentation for schema registry."`

#### How to fix not signed off commits after the fact

If you've submitted a pull request with unsigned commits, you can still correct this. For a single commit, use:

`git commit --amend --signoff`

In case of having multiple commits, you can rebase and sign off, the following command with sign off the last 3 commits:

`git rebase --signoff HEAD~3`

Once you are done, you need to force push your changes. We recommend using `--force-with-lease` when force pushing:

`git push --force-with-lease origin/your-branch-name`

### ✅ When is your pull request ready to be merged?

Before merging any pull request, it must be reviewed by at least one maintainer. This process is in place to ensure the high quality of our documentation. Also, it serves as a valuable opportunity for community members to give and receive feedback and learn from one another. Ensure that your pipeline is in the green before requesting a review.

Your pull request should meet the following criteria to be ready for review:

#### 1. Every PR has to be releasable

Every PR that is merged on `main` will trigger a new deployment of our documentation, so we have to make sure everything
works.

- Check your changes manually.
- All GitHub actions checks must be green.

#### 2. A clear goal with a small scope

- Make small and incremental PRs.
- The code changes relate to one specific topic.
- Every PR should have one specific goal (and if you add that goal in your description - all the better).
- Rather than submitting one large PR, it's better to break it into smaller ones. This makes reviewing and providing constructive feedback easier.

#### 3. Add meaningful information

- A descriptive title and detailed description of your changes help the reviewer gain context.
- Include links to relevant issues.
- If you follow an article's recommended approach, for example, link it in the PR.
- If you have questions, don't hesitate to add them!

#### 4. Keep a clear git history in mind

- If you do multiple commits, try to make every commit cover the scope of your changes.
- If you add changes after a review, don't force push in your existing PR, but add new commits. That way, reviewers can
  pick up the review again.

## Review process and merging a pull request

A pull request author should not merge their own pull request. Instead, pull requests are reviewed and merged by one or more maintainers.

The review process goes as follows:

- One or more maintainers will carefully read the description and the code of the pull request
- Comments may be left on specific parts of the change, or on the pull request as a whole. We strive to always be
  empathetic and helpful in our reviews.
- In some cases, comments may prevent the approval of a pull request. It's important to address these comments before the request can be approved. "Addressing" a comment could involve explaining your approach, getting approval from the reviewer, implementing the suggested change, and making a subsequent commit. To help streamline the process, please include a link to the commit in your response to the comment.
- Once all comments have been addressed and resolved, one or more maintainers will approve the pull request.
- The pull request will then be merged into the `main` branch by a maintainer, usually one of the reviewers.

In summary, the checklist for a pull request to be merged is as follow:

- Reviewed and approved by one or more maintainers
- GitHub actions all green
- Pull request branch up to date with `main` branch

### Squash and merge

When making changes, it's best to create small, specific commits. This creates a clear history of the building process and helps reviewers do their job effectively. However, it's important to keep in mind that too many commits can clutter the Git history on the main branch.

To address this issue, we implement the "squash and merge" method when merging. This technique combines the small commits into one, resulting in a more streamlined merge history. Additionally, if a need arises to revert any changes, this approach simplifies the process.

The pull request's commit message can be modified upon merging. It's advised to update the auto-generated message to make it more meaningful as a squash commit message.

### ✍️ Writing a great commit message

A "great" commit message provides clarity and context, bridging the code and its purpose. While the `diff` highlights the **what** has changed, the commit message explains the **why** behind those changes.

For more information, read this article: [How to Write a Git Commit Message](https://cbea.ms/git-commit/). We used it as
a base for our rules.

#### 1. Add a short description as the first line

The first line (`<description>`) should briefly describe your change. Limit it to preferably 50 characters. It should never be longer than 72 characters.

⛔ **️Don't**

`Add CONTRIBUTING.md with first information about Code Of Conduct and a guideline for commit messages that includes our first rules and pattern we want to establish`

✅ **️Do**

`Add the first iteration for contribution guide`

#### 2. Use the "imperative mood" in the first line

"Imperative mood" means forming sentences as commands. Imagine your commit message as: "If applied, this commit will... 'do your change'".

⛔ **️Don't**
`fix: Removed the newline that caused a linting error`
-> _"If applied, this commit will_ removed the newline that caused a linting error"

✅ **️Do**
`fix: Remove the newline that caused a linting error`
-> _"If applied, this commit will_ remove the newline that caused a linting error"

#### 3. Separate your description with a new line from the body

If you add a body to your message, make sure to add an empty line to separate it from the description. This will improve readability and make `git log --oneline` or `git shortlog` more usable.

#### 4. Use an optional body to explain why, not how

The code speaks for itself, so there's no need to reiterate the "how" in your commit message. Instead, use the body to clarify the reason (why) behind the change. It's not mandatory to include a body in every commit. Sometimes, the code change itself is sufficient explanation.

⛔ **️Don't**

```git
fix: Fix typo

Change "optoinal" "to optional"
```

✅ **️Do**

```git
fix: Remove word

It is advisable to exclude the word "just" from the description as it can cause people to feel less capable.
```

#### 5. Wrap your body at 72 characters

When writing in Git, it is important to adjust margins manually since text does not wrap. However, editors, and IDEs can assist with this.
