export * from "./fence.markdoc";
export * from "./heading.markdoc";
export { document } from "./document.markdoc";
/**
 * we have a custom link node that allows more customization, but we also want to use
 * it for the default link node
 * */
export { default as link } from "../tags/link.markdoc";
