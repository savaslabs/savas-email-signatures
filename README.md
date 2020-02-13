# Savas Email Signature Generator

A small tool to allow Savasians to generate their own email signatures. This project uses [Gulp](https://gulpjs.com/) to compile [Pug](https://pugjs.org/), SASS, and javascript.

## Github Pages

This is hosted on Github pages and accessed at https://signature.savaslabs.com. Instructions for Savasians on how to use the tool are rendered on the page.

**IMPORTANT:** The image of Ava used in the email signatures is also hosted through this project. Taking this project offline will cause the image paths to break. Also, any changes to the image should be versioned instead of overwritten, and the old versions should remain live and accessible. Since it's hard to ensure everyone updates their signature to new versions, this will help anyone with an old version to not have a broken image.



## Local Development

### Dependencies
* Node & npm
* Gulp 4


### Installation

1. If you haven't already, [use nvm to install node and npm](https://www.codementor.io/mercurial/how-to-install-node-js-on-macos-sierra-mphz41ekk)
2. If you haven't already, globally install the gulp command line tools: `npm install --global gulp-cli`
3. Clone this repo
4. In the project folder, install the node package dependencies: `npm install`

### Making Changes
Gulp has been configured with a default Gulp task that can be run by typing `gulp` into the terminal. This will compile all assets from `/src` into `/docs`
