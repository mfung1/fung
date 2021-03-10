
![The website logo, 'Fung' with text underneath which says 'A website built using Eleventy'](/docs/cover.png)
# Fung

My personal site, built using Eleventy, SCSS and hosting on Netlify. The purpose of the site is to showcase my work, blog posts I've written and about me as a developer.

This build is forked from [Deventy](https://github.com/ianrose/deventy) by Ian Rose as it had everything that I needed, already configured.

Features:
- [11ty](https://www.11ty.io/)
- [Sass/SCSS](https://github.com/sass/node-sass)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [light-server](https://github.com/txchen/light-server)
- [PostCSS](https://postcss.org/)
- [CSSnano](https://cssnano.co/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)

## Design
The design for this site has been created in Figma, and can be seen here:
[Figma Design](https://www.figma.com/file/ta2lqg6ok8aQk4DxogNcul/fung)

All components have been designed in following Brad Frost's Atomic Design principles, and is set out using components and styles.

## Get Started

Install all dependencies using npm:

```
$ nvm use
$ npm install
```

### Start local server

```
$ npm run dev
```
 And in debug mode:
 
```
$ npm run dev:debug
```

You can view the website at the given access URL:
```
$ light-server is listening at http://localhost:4000
```

The local url is configured in `.lightserverrc`

### To Build

```
npm run build
```
