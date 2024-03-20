const withMarkdoc = require("@markdoc/next.js");

module.exports = withMarkdoc({ schemaPath: "./markdoc", mode: "static" })({
  pageExtensions: ["markdoc", "md", "mdoc", "js", "jsx", "ts", "tsx"],
});
