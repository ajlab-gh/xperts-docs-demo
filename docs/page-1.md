# Getting Started

Follow these steps to quickly set up and start working on this project:

1. **Fork the Repository**:
   - Begin by [forking this repository](https://github.com/AJLab-GH/docs-templates/fork) to your GitHub account.

2. **Clone the Repository**:
   - Clone your forked repository to your local machine:

     ```
     git clone https://github.com/YOUR_USERNAME/docs-templates.git
     cd docs-templates
     ```

3. **Configure GitHub Pages**:
   - In your `docs-templates` repository settings, go to **Actions -> Pages**.
   - Set the **Build and Deployment** source to `Deploy from a branch`.
   - Choose the `gh-pages` branch and set the folder to **/(root)**.
   - **Save** your changes.

     ![GitHub Actions Page Permissions](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/page-permissions.PNG)

4. **Configure Gist**:
   - In the repository's **About** section, click the **Settings** gear icon.

     ![About Section Settings](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/about-setting1.png)

   - Enable the `Use your GitHub Pages Website` option and **Save** the changes.

     ![About Section Gist](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/about-setting2.png)

5. **Customize Markdown Files**:
   - The `actions` and `pages` in this template are set up to build your gist based on the structure defined in `mkdocs.yml` under the `nav` section.

     ```
     nav:
       - Home:
           - page-0.md
       - Section 1:
           - page-1.md
       - Section 2:
           - page-2.md
     ```

   - The `nav` section is where you define the structure of your documentation site. You can create nested pages to organize your content into sections and subsections, providing a clear hierarchy for users to navigate. For example, to add nested subsections within a section, your `nav` might look like this:

     ```
     nav:
       - Home: index.md
       - Section 1: page-1.md
       - Section 2: page-2.md
       - Section 3:
           - Overview: section-3/overview.md
           - Details:
               - Subsection 1: section-3/details/subsection-1.md
               - Subsection 2: section-3/details/subsection-2.md
     ```

   - In this example:
     - `Section 3` contains an `Overview` page and a `Details` section with two subsections.
     - Each entry under `nav` corresponds to a markdown file that you have created in the `docs/` directory.
     - You can rename sections, subsections, and pages as needed to match your documentation structure.

   - Rename sections and corresponding markdown files as needed. Ensure the `nav` entries in `mkdocs.yml` match your markdown file names.

   - After editing or adding markdown files, commit and push your changes:

     ```
     git add .
     git commit -m "<describe your changes>"
     git push origin main
     ```

   - Rename sections and corresponding markdown files as needed. Ensure the `nav` entries in `mkdocs.yml` match your markdown file names.

   - Navigate to your Gist and see your finished product!

     ![gist](https://raw.githubusercontent.com/ajlab-gh/docs-template/main/images/gist-page.PNG)
