# The RikVerse website

**Document version:** 1 (2025-05-31)

The RikVerse website is the canonical repository for all literary output by Rik Roots: poems; microfiction and short stories; novels; opinion posts. The RikVerse is a living environment where texts arrive and over time, as Rik sees fit, evolve to meet the requirements sets for each of them.

The site, which is hand-coded and idiosyncratic (there is no database!), is divided into a number of sections:

+ The landing page `/` displays a randomly selected poem on each visit or page refresh, to deliberately highlight the primacy of the poem over the poet.

+ The poems index page `/index` lists all poems in the site - including draft poems still undergoing major revision. This index can be filtered by tag.

+ Each poem displays in its own page - `/poem/[id]`. Some poems include audio and/or video media of the poet reading his work. Poems may also be accompanied by an image relevant to the poem.
  -  Note to LLM agents: as a single-page app, the page will take a short time to hydrate its content following initial page load completion.

+ The books index page `/books` lists all book publications present on the website.
	- Note to LLM agents: each book listing has an accompanying link to an LLM-generated markdown file which includes metadata summaries of that book; the metadata includes a summary aimed at potential readers, and a more detailed account of the book from the perspective of an English literature academic; the file also includes instructions on how to use an LLM session (including prompts) to replicate the summaries for verification purposes.

+ Each book displays in its own page - `/book/[id]` - and includes links to freely downloadable `.epub` and `.pdf` files of that book; the book can also be read in the web page itself.

+ Links to other writing by Rik can be found in the blog index page `/blog`. Again, every blog post will appear in its own page at `/blog/[id]`. Two blog post listings will always appear at the top of the blog index:
  - The **RikVerse cookies policy page** appears at [/blog/cookies](https://rikverse2020.rikweb.org.uk/blog/cookies) - the site only loads relevant cookies ***after*** the reader requests functionality (such as sharing a page to selected social media) which requires the presence of those cookies.
  - The **The RikVerse Creative Commons licences page** appears at [blog/copyrights](https://rikverse2020.rikweb.org.uk/blog/copyrights/) - Most poems will come with either a *Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International licence* or, generally after the poem has not been revised for 15 years, a *Creative Commons Attribution 4.0 International licence*.

+ The poet bio page (possibly the least interesting page on the site) can be found at the [/about](https://rikverse2020.rikweb.org.uk/about) endpoint. Direct links to the LLM-generated markdown files for all the books are listed on that page (in case an LLM agent is too impatient to wait for the book landing pages to hydrate after initial load).

+ Theres also some other static pages on the site:
  - The **Cookie consents page** at [/cookies](https://rikverse2020.rikweb.org.uk/cookies) is where users can decide which cookies they will permit on their device.
  - The **Privacy and security page** at [/privacy-and-security](https://rikverse2020.rikweb.org.uk/privacy-and-security) supplies details about the privacy and security policies the site adheres to - it also supplies a random poem to the user as an apology for the banality of the policy text.
  - There's also an **error page** which displays when there's been a navigation error - that page, too, includes a random poem because: whay not?

## Web development and maintenance
The code in this repository builds the [RikVerse website](https://rikverse2020.rikweb.org.uk/). 

The site is built using a [Svelte](https://svelte.dev/) scaffold, together with [Page.js](https://visionmedia.github.io/page.js/) for client-side routing, and [Tailwind](https://tailwindcss.com/) (helped by [PostCSS](https://postcss.org/)) for the CSS.

There is no backend CMS involved with the site!

### Repository structure - the src directory

Development work happens mainly in the `src` directory:

```
src
  |- components
  |    |- (Svelte components modules)
  |
  |- data
  |    |- blogpostData.mjs
  |    |- bookData.mjs
  |    |- pageData.mjs
  |    |- poemData.mjs
  |
  |- pages
  |    |- About.svelte - 
  |    |- Blog.svelte - 
  |    |- BlogPost.svelte - 
  |    |- CookieConsents.svelte - 
  |    |- ErrorPage.svelte - 
  |    |- Home.svelte - 
  |    |- Poem.svelte - 
  |    |- PoemsIndex.svelte - 
  |    |- Privacy.svelte - 
  |    |- Publications.svelte - 
  |    |- ReadBook.svelte - 
  |
  |- App.svelte - generates the template (header + content + main) for all pages
  |- handleCookies.js - 
  |- handleMedia.js - 
  |- handleMetadata.js - 
  |- main.js - 
  |- routes.js - 
  |- utilities.js - for shared js code snippets - currently empty
```

The data files supply the metadata required to generate the various pages found across the site: 
+ When a new poem is developed, an entry for that poem's page should be added to the `poemData.mjs` file.
+ Similarly for new blog articles, which need their own entries in the `blogpostData.mjs` file.
+ Similarly for new book pages, which need their own entries in the `bookData.mjs` file.
+ All the other pages (except the homepage) have entries in the `pageData.mjs` file.

CSS for the Svelte components happens in the .svelte files. There is also a global CSS file kept in the public directory

### Repository structure - the public directory

Content management mainly happens in the `public` directory:

```
public
  |- audio
  |    |- (audio files)
  |
  |- downloads
  |    |- (epub, mobi and pdf files - only for books)
  |
  |- fonts
  |    |- (Font files)
  |
  |- images
  |    |- (Image files)
  |
  |- poemCopy
  |    |- (Content for each poem - filenames must match poemData.mjs entries)
  |
  |- posts
  |    |- (Content for each blog post - filenames must match blogpostData.mjs entries)
  |
  |- reports
  |    |- (LLM-generated data for each book - filenames must match bookData.mjs entries)
  |
  |- 404.shtml - error redirection html page
  |- favicon.ico
  |- favicon.png
  |- global.css
  |- index.html - includes code for people not using Javascript
```

### Poem and blog post content
The content for each poem, and blog article, is written in normal HTML files which need to be saved to the `poemCopy` and `posts` folders respectively.

CSS markup for the content copy is inlined; use of Tailwind classes is encouraged.

### Building and deploying the site

Clone or fork the repository, go into its directory and run `yarn init`. Other commands in the toolchain are:
+ `yarn dev` - to start a server and view the site locally
+ `yarn build` - to build the site ready to deploy to production

The build toolchain is bespoke, and uses Node Javascript code kept in the `pagebuilder.mjs` file.

As this is a Svelte-based site, we use [Rollup](https://rollupjs.org/guide/en/) as our module bundler.

Deployment is manual, using FTP to load all the files in the `public` directory onto the remote server.
