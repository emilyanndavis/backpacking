<!--
Backpacking, a Degree Progress Tracker
Copyright (C) 2026 Emily Davis

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
-->

# Backpacking, a Degree Progress Tracker

## About
Backpacking is a degree progress tracker built with HTML, CSS, [Charts.css](https://chartscss.org/), and [mustache.js](https://github.com/janl/mustache.js). For more on _why_ Backpacking exists, see [MOTIVATION](./MOTIVATION.md).

## Making Backpacking Your Own
Want to use Backpacking to track your own progress toward your degree? Read on!

### Prerequisites
1. You do not need any prior knowledge of HTML, CSS, or JavaScript, _unless_ you intend to make substantial changes to Backpacking's core structure or logic. Specifically: Backpacking is designed to track degree progress in terms of _course completion_ only. If you want to track additional degree requirements (such as a comprehensive exam, thesis, or co-op/internship), you may need to extend the data, logic, template, and/or styling, in which case, some experience with HTML, CSS, and JavaScript is recommended.
2. You will need to have [git](https://git-scm.com/) installed. Familiarity with common git actions, whether via command-line or GUI, is recommended. You will also need a GitHub account.
3. You will need to use a command-line tool to generate a Backpacking page that reflects your degree progress. You should be comfortable running commands from the command line (either in an IDE, or in a standalone app such as Terminal, Git Bash, etc.). You will also need Node.js and npm, which you can install by following the instructions on the [Node.js download page](https://nodejs.org/en/download).

### How-To Guide
1. Fork and clone this repository. (If you've never done this before, or if it's been a while, check out the GitHub guides: [Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) and [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)).

2. Open the project in any text editor.

3. In your text editor, navigate to the `data` directory. You will see several `.js` files. You will **not** need to update `data.js`, `lastUpdated.js`, or `status.js`. You **may** need to update `term.js` (if your school has terms other than Fall, Spring, and Summer). You will **almost certainly** want to update the following:

    1. `student.js`: Fill in your name, degree level, degree name (major), and school name.
    2. `schools.js`: Update this to reflect your school (or schools, if you're a transfer student). In most cases, the value (the text in quotes) should be the same as the key (the text before the colon). It might seem redundant, but this will help you avoid typos when filling in your course details, allowing you to type `Schools.CSU` (for example), benefitting from your editor's tab-completion, instead of carefully typing `'CSU'` dozens of times.
    3. `departments.js`: Update this to reflect the departments you're taking courses in. These should be the same as the department abbreviations used in course numbers, e.g., the `ENGL` in `ENGL 101`. Follow the same pattern here as in `schools.js`.
    4. `courses.js`: Using the default data as an example, fill in your course details. Make sure each course has the following: school, department, number, name, credits, status, term, and year. Note that Backpacking does _not_ sort the course list. If you want your courses to appear in a certain order (such as chronological), you will need to put them in that order in the `courses.js` file.
    5. `colors.js`: The default colors are official [Colorado State University colors](https://brand.colostate.edu/color/) (current as of January 2026). To find your school colors, try searching your school's website for "branding" or "design guidelines".
    6. `coAuthor.js`: The page footer includes some information about the original creator of Backpacking and the resources she used to build it. If you want to add your own name to the footer, fill in the quotes next to `coAuthorName`. If you want your name to link to your personal website or some other presence on the web (such as your GitHub profile), fill in the quotes next to `coAuthorURL`. Make sure the URL is  complete, including the leading `https://`. If you don't want to include your name or website in the footer, leave these items blank.

4. Make sure you have Node.js and npm installed. If you don't, see [Prerequisite #3](#prerequisites).

5. Install the mustache.js command-line tool from npm: `npm install -g mustache`.

6. From the `backpacking` directory, run the following command:
    ```
    mustache data/data.js template.html > index.html
    ```
    This will combine your data with the mustache template and generate a new HTML file.

7. Open `index.html` in any web browser to check out the results!

8. Need to make any changes? Whether you want to update a course's completion status, fix a typo in a course name, or experiment with different color combinations, the process is the same:

    1. Update any `.js` files you need to update.
    2. Re-run `mustache data/data.js template.html > index.html`.
    3. Refresh (or re-open) the page in your web browser.

9. Ready to publish your page on the web?

    1. First, follow the GitHub guide, [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch), to tell your fork of Backpacking to publish to GitHub Pages whenever changes are pushed to a specific branch. (You only need to do this once.)
    2. Next, commit and push your changes to your GitHub fork.
    3. Follow the instructions in the GitHub guide, [Viewing your published site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#viewing-your-published-site), to see your page live!
    4. Make sure everything looks the way you expect it to. If you need to make any changes, repeat steps 8 and 9 as needed.

10. Next time you complete a course, return to your course list and update that course's status. Repeat steps 8 and 9 to refresh your Backpacking page and show off your progress to the world!
