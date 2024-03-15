import fence from "./fence.markdoc";
import heading from "./heading.markdoc";
import document from "./document.markdoc";
/**
 * we have a custom link node that allows more customization, but we also want to use
 * it for the default link node
 * */
import link from "../tags/link.markdoc";
import image from "../tags/image.markdoc";

const nodes = {
  fence,
  heading,
  document,
  link,
  image,
};

export default nodes;
