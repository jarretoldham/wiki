const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ schemaPath: "./markdoc" })({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});
