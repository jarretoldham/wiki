/* use this file to export your custom markdoc tags */
//https://markdoc.dev/docs/nextjs#built-in-next.js-tags
import callout from "./callout.markdoc";
import link from "./link.markdoc";
import appImage from "./image.markdoc";
import SideBySide from "./side-by-side.markdoc"; 
import {tabs, tab} from "./tabs.markdoc";

const tags = {
  callout,
  link,
  appImage,
  SideBySide,
  tabs,
  tab,
};

export default tags;
