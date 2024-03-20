import { nodes } from "@markdoc/markdoc";
import { Image } from "@nextui-org/image";

/**
 * Using the NextUI Image component to render basic markdown image nodes
 * For more customization of an Image, you can also use the custom {% image %}
 * markdoc tag
 * */
const image = {
  ...nodes.image,
  render: Image,
};

export default image;
