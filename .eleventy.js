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
  eleventyConfig.addPassthroughCopy('src/images')

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "local",
    }).toLocaleString(DateTime.DATE_MED);
  });

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
