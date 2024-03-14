import { TableOfContents } from "@/components/table-of-contents";

function collectHeadings(node: any, sections: any = []) {
  if (node) {
    if (node.name === "Heading") {
      const title = node.children[0];

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="gap-4 py-2 md:py-5">{children}</section>;
}
