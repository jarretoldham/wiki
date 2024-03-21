const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ schemaPath: "./markdoc", mode: "static" })({
  pageExtensions: ["markdoc", "md", "mdoc", "js", "jsx", "ts", "tsx"],
  output: 'export', 
  /** 
   * prevents issue with static exporting where urls wouldn't resolve on refresh. 
   * easier than setting up an nginx proxy for now
   * https://nextjs.org/docs/app/building-your-application/deploying/static-exports#deploying
   * https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash
   */
  trailingSlash: true,
});
