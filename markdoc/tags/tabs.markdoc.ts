import { Tag } from "@markdoc/markdoc";
import { AppTabs } from "@/components/app-tabs";
import type { Node, Config } from "@markdoc/markdoc";

const tabs = {
  render: AppTabs,
  attributes: {
    variant: {
      description: "The tabs appearance style.",
      type: String,
      errorLevel: "critical",
      default: "underlined",
      matches: ["solid", "bordered", "light", "underlined"],
    },
    size: {
      description: "The tabs size",
      type: String,
      errorLevel: "critical",
      default: "md",
      matches: ["sm", "md", "lg"],
    },
    color: {
      description: "The tabs color theme",
      type: String,
      errorLevel: "critical",
      default: "default",
      matches: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    fullWidth: {
      description: "whether the tabs should take the full width of it's parent",
      type: Boolean,
      default: false,
    },
  },
  transform(node: Node, config: Config) {
    const labels = node
      .transformChildren(config)
      .filter((child: any) => child && child.name === "Tab")
      .map((tab: any) => {
        if (typeof tab !== "object") {
          return null;
        }
        return {
          label: tab.attributes.label,
          children: tab.children,
        };
      });

    return new Tag(
      "Tabs",
      { labels, ...node.attributes },
      node.transformChildren(config),
    );
  },
};

const tab = {
  render: "Tab",
  attributes: {
    label: {
      type: String,
    },
  },
};

export { tabs, tab };
