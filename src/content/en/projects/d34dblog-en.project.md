---
created-on: 2025-07-29T22:37
modified-on: 2025-07-29T22:55
tags:
  - Article
  - Website/Project
title: D34dBlog
description: Personal website and blog.
permalink: /{{lang}}/projects/d34dblog/
repository: https://github.com/BoiteuxL/d34dblog
language: en
---

# {{title}}
{{description}} [Github]({{repository}})

---

## Summary
D34dBlog is the website you are currently visiting. It is my personal site, a record of my presence on the Internet.

## Features and Content
### Articles
On this site, you will find various articles and links. I do this to document my experience in the field of software development and to share my opinions on different topics. The articles are divided into two categories: **Project** et **Blog**.
#### Projects
My public projects are documented and available on this site. For each project, I'll include:

- **Git Repository:** The source code will be available and open-source.

- **Brief Summary:** A summary of the project.

- **Features/Content:** What the project is for and what it can do.

- **Technologies Used:** The programming languages, frameworks, libraries, etc.

- **Additional Notes:** Any other details that don't fit into the other categories.

#### Blog
The blog is where I post articles about what currently interests me. On the day I publish this article, there is nothing on the blog yet, but who knows what the future holds...

### Links
I also keep some links to my professional profiles, such as [LinkedIn](https://www.linkedin.com/in/boiteuxl/) or [Github](https://github.com/BoiteuxL). I will add more links in a future article.
## Technologies
The site is built with the static site generator [11ty](https://www.11ty.dev/). 11ty uses Nunjucks templates and Markdown/HTML content pages to assemble a static HTML website. This can then be deployed and hosted to be accessible on the Internet. In my case, I used [Netlify](https://www.netlify.com/) because it integrates easily with Github.

~~I use [TailwindCSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/) for styling, as well as a bit of Javascript for various details (light/dark theme, etc).~~

I've recently updated my site to avoid using external libraries. The site is now styled with SCSS, which is transpiled into pure, minified CSS.