import { Tag, nodes } from "@markdoc/markdoc";
import { Document } from "../../components/document";
import yaml from "js-yaml";

import type { Node, Config } from "@markdoc/markdoc";

function generateID(children: any, attributes: any) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child: any) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function collectHeadings(docNode: Node, sections: any[] = []) {
  if (docNode) {
    for (const node of docNode.children) {
      if (node.type === "heading") {
        //yikes - idk why I have to traverse into this so much
        const titleNode = node.children[0].children[0];
        const title = titleNode.attributes.content;
        if (typeof title === "string") {
          sections.push({
            ...node.attributes,
            title,
            //TODO: figure out how to get the heading ID from the custom attribute
            id: "test",
          });
        }
      }

      if (node.children) {
        collectHeadings(node, sections);
      }
    }

    return sections;
  }
}

export const document = {
  ...nodes.document,
  render: Document,
  transform(node: Node, config: Config) {
    // console.log(node);
    return new Tag(
      "Document",
      {
        frontmatter: yaml.load(node.attributes.frontmatter),
        headings: collectHeadings(node),
      },
      node.transformChildren(config),
    );
  },
};
