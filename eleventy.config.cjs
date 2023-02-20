const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "docs/components/**/*.webc",
	});

  return {
    dir: {
      input: "docs",
      layouts: "layouts",
    },
  };
};
