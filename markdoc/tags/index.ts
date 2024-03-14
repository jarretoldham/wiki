/* use this file to export your custom markdoc tags */
export * from "./callout.markdoc";

export { default as link } from "./link.markdoc";
//https://markdoc.dev/docs/nextjs#built-in-next.js-tags
export { comment, head, script } from "@markdoc/next.js/tags";
