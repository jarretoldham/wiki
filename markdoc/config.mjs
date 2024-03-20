/**
 * Config for VS Code markdoc language server
 * https://markdoc.dev/docs/nextjs#advanced
 */

import tags from "./tags/index";
import nodes from "./nodes/index";
import variables from "./variables"; 
import functions from "./functions"; 

const config = {
  tags,
  nodes,
  variables, 
  functions,
};

export default config;
