// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy('src/images');

  let favicons = [
    'src/favicon/android-chrome-192x192.png',
    'src/favicon/android-chrome-512x512.png',
    'src/favicon/apple-touch-icon.png',
    'src/favicon/browserconfig.xml',
    'src/favicon/favicon-16x16.png',
    'src/favicon/favicon-32x32.png',
    'src/favicon/favicon.ico',
    'src/favicon/html_code.html',
    'src/favicon/mstile-70x70.png',
    'src/favicon/mstile-144x144.png',
    'src/favicon/mstile-150x150.png',
    'src/favicon/mstile-310x150.png',
    'src/favicon/mstile-310x310.png',
    'src/favicon/safari-pinned-tab.svg',
    'src/favicon/site.webmanifest'
  ];

  favicons.forEach(favicon => {
    eleventyConfig.addPassthroughCopy({favicon: '/'});
  })

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "local",
    }).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob(["./src/posts/*.md"]);
  })

  eleventyConfig.addCollection("latest", function(collectionApi) {
    return collectionApi.getFilteredByGlob(["./src/posts/*.md", "./src/projects/**/*.md"]);
  })

  eleventyConfig.addCollection("featuredProjects", function(collectionApi) {
    let projects = collectionApi.getFilteredByTags("project", "featured");
    let pens = collectionApi.getFilteredByTags("pen", "featured");
    let collection = projects.concat(pens);
    return collection;
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
