import { nodes } from "@markdoc/markdoc";
import { AppImage } from "@/components/app-image";

const image = {
  ...nodes.image,
  render: AppImage,
};

export default image;
