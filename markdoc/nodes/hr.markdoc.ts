import { Divider } from "@nextui-org/divider";
import { nodes } from "@markdoc/markdoc";

const hr = {
  ...nodes.hr,
  render: Divider,
};

export default hr;
