const markdownIt = require("markdown-it");

const mdLib = markdownIt({
  typographer: true,
  quotes: "“”‘’",
  html: true,
});

module.exports = (eleventyConfig) => {
  // eleventyConfig.setLibrary( "md", mdLib);

  eleventyConfig.addLayoutAlias("default", "layouts/base.liquid");
  eleventyConfig.addLayoutAlias("fancy", "layouts/typographer.liquid");

  eleventyConfig.addPairedShortcode("typographer", (content) =>
    mdLib.renderInline(content)
  );

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
