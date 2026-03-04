# Sam Hume's Personal Portfolio

This repository houses the source code for [Sam Hume's portfolio](https://www.samhume-portfolio.space).

## Background

> Sam Hume is an independent artist and international art and design teacher based in Wellington, New Zealand. His work has been featured in a number of art shows, and can now be seen at [samhume-portfolio.space](https://www.samhume-portfolio.space).

This site is an excellent showcase of the intersection between **web-tech** and **art**, featuring grimy physical elements beamed into the digital world via photoscan. You will notice bespoke backgrounds, buttons, and even fonts fabricated from scratch in the real world. This process has been documented within the site itself under the **'misc works / portfolio'** section.

## Repository Configuration

- This site depends on [Lit](https://lit.dev/) for light-weight component support.
- Each time this repository is updated a GitHub action is triggered which regenerates any affected files.
- These files are served to [ben-g-man.github.io/sam-hume-portfolio](https://ben-g-man.github.io/sam-hume-portfolio) via GitHub pages.
- Finally, the domain [samhume-portfolio.space](https://www.samhume-portfolio.space) points to the content served via GitHub pages.
- Currently, regenerating the site takes ~30s.

## Local Build

This repository is configured to allow **hot-reloading**.

1) To host this site locally you must have [Node and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
2) From the site's root, run `npm install`
3) Once that has finished, run `npm run dev`
4) Navigate to [local port 5173](http://localhost:5173/)
