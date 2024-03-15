import fence from "./fence.markdoc";
import heading from "./heading.markdoc";
import document from "./document.markdoc";
import image from "./image.markdoc";
import hr from "./hr.markdoc"

/**
 * we have a custom link node that allows more customization, but we also want to use
 * it for the default link node
 * */
import link from "../tags/link.markdoc";

const nodes = {
  fence,
  heading,
  document,
  link,
  image,
  hr
};

export default nodes;
