# Workflow Overview

The workflow includes the following stages:

1. **Checkout Repository**: Retrieves the latest version of the repository using the `actions/checkout` action.
2. **Configure GitHub Pages**: Sets up GitHub Pages to deploy the documentation.
3. **Install Python and MkDocs**: Installs Python 3.x and required MkDocs plugins.
4. **Build Docs**: Runs `mkdocs gh-deploy` to build and deploy the documentation to GitHub Pages.
5. **Triggering the Workflow**: Automatically triggers when changes are pushed to the `main` branch or when a pull request is created, ensuring the documentation is always current.

## Concurrent Builds

GitHub Actions' concurrency feature is used to ensure only one build runs at a time. If multiple pushes occur, subsequent builds will wait until the previous one finishes.

## Permissions

The workflow has write permissions for `contents`, `pages`, and `id-token`, allowing it to create and update files as needed.

Using GitHub Actions to automate the documentation process ensures it is always up-to-date, reliable, and easily accessible.
