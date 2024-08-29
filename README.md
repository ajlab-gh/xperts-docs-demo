# Hands-On Lab Guide: GitHub Collaboration Trial

Welcome to the GitHub collaboration trial! This repository serves as a practice ground for learning how to collaborate effectively in GitHub by working with Markdown files.

## Objective

Your goal is to identify typos or errors in the generated HTML documentation served through a [Gist](https://ajlab-gh.github.io/xperts-docs-demo), then locate the corresponding Markdown file in the repository, make corrections, and see your updates reflected in the HTML.

## Getting Started

### 1. Clone the Repository

Before making any changes, you need to clone the repository to your local machine.

1. **Open a terminal** on your computer.
2. **Clone the repository** by running the following command:

   ```bash
   git clone https://github.com/ajlab-gh/xperts-docs-demo
   ```

3. **Navigate to the repository folder**:

   ```bash
   cd xperts-docs-demo
   ```

### 2. View the Documentation in the Gist

1. **Navigate to the Gist**:
   - [Link to the Gist](https://ajlab-gh.github.io/xperts-docs-demo)

2. **Identify a Typo or Error**:
   - Browse through the pages and sections in the gist.
   - Take note of any typos or errors you find and their locations.

![Typos and Typo Location](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/typo.png)

### 3. Locate the Corresponding Markdown File

1. **Navigate to the MkDocs Navigation File**:
   - Open `mkdocs.yml` in the repository to locate the `nav` section.
   - Match the page/section where you found the typo with the corresponding `.md` file listed under `nav`.
  
     ![Locating the file with Nav](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/nav.png)

2. **Open the Markdown File**:
   - Once you've identified the correct `.md` file, open it in your text editor.
     ![Open Relevant MD File](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/vscode_md_file.png)

### 4. Edit the Markdown File

1. **Make the Necessary Changes**:
   - Correct the typo or error in the `.md` file.

### 5. Commit, Pull, and Push Changes

After editing the file, you need to commit your changes, ensure your branch is up to date with any changes other contributors have made, and then push your changes to the remote repository.

1. **Add the changes** to the staging area:

   ```bash
   git add .
   ```

   - The `git add .` command stages all the changes you've made, preparing them for commit.

2. **Commit the changes** with a message:

   ```bash
   git commit -m "Fix typo in <filename>.md"
   ```

   - The `git commit` command saves your changes locally with a message explaining what was done.

3. **Pull the latest changes** from the remote repository to ensure your local repository is up to date:

   ```bash
   git pull origin main
   ```

   - The `git pull` command fetches and merges changes from the remote `main` branch into your local branch. This step ensures that any changes made by other contributors are incorporated into your local repository before pushing your own changes.

   - If there are any conflicts between your changes and those pulled from the remote repository, resolve them before proceeding.

4. **Push your changes** to the remote repository:

   ```bash
   git push origin main
   ```

   - The `git push` command uploads your local commits to the remote repository (in this case, the `main` branch).

### 6. Verify Your Changes in the Gist

1. **Wait for Automation to Complete:**
   - After pushing your changes, the automation process will compile and publish the updated HTML documentation. This may take a few minutes. To make the most of this time, consider batching multiple changes in a single commit rather than pushing each change individually.

2. **Navigate Back to the Gist**:
   - [Link to the Gist](https://ajlab-gh.github.io/xperts-docs-demo)

3. **Check the Page/Section**:
   - Verify that the changes you made in the `.md` file are now correctly reflected in the HTML documentation.
