import { Callout } from "@/components/callout";

const callout = {
  render: Callout,
  children: ["paragraph", "tag", "list"],
  attributes: {
    type: {
      type: String,
      default: "note",
      matches: ["caution", "check", "note", "warning"],
      errorLevel: "critical",
    },
    title: {
      type: String,
    },
  },
};

export default callout;
