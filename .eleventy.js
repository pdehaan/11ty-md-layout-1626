const markdownIt = require( "markdown-it" );

const mdLib = markdownIt( {
  typographer: true,
  quotes: '“”‘’',
  html: true,
} );

module.exports = eleventyConfig => {
  // eleventyConfig.setLibrary( "md", mdLib);

  eleventyConfig.addPairedShortcode("typographer", (content) => mdLib.renderInline(content));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
