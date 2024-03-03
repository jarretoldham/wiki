const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ schemaPath: "./markdoc", mode: "static" })({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});
