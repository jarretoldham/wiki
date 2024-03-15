/* use this file to export your custom markdoc tags */
//https://markdoc.dev/docs/nextjs#built-in-next.js-tags
import callout from "./callout.markdoc";
import link from "./link.markdoc";
import appImage from "./image.markdoc";

const tags = {
  callout,
  link,
  appImage,
};

export default tags;
