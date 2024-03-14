import { Tag, nodes } from "@markdoc/markdoc";
import { Document } from "../../components/document";
import yaml from "js-yaml";

import type { Node, Config } from "@markdoc/markdoc";

function collectHeadings(nodes: any[], sections: any[] = []) {
  for (var i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node && node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }
  }
  return sections;
}

export const document = {
  ...nodes.document,
  render: Document,
  transform(node: Node, config: Config) {
    /**
     * this takes the passed in document node and transforms it into a renderable
     * renderable tree based on the markdoc configuration as definted in next.config
     */
    const children = node.transformChildren(config);
    // pase the headings from the renderable tree
    const headings = collectHeadings(children);
    return new Tag(
      "Document",
      {
        frontmatter: yaml.load(node.attributes.frontmatter),
        headings: headings,
      },
      children,
    );
  },
};
