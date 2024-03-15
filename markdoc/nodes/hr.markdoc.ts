import { Divider } from "@nextui-org/divider";
import { nodes } from "@markdoc/markdoc";

const hr = {
  ...nodes.hr,
  render: Divider,
  attributes: {
    className: {
      type: String,
      default: "my-4",
    },
  },
};

export default hr;
