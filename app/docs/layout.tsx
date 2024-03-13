import { markdoc } from "./getting-started/page.md";
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
  const toc = markdoc?.content ? collectHeadings(markdoc?.content.content) : [];

  return (
    <>
      <section className="gap-4 py-5 md:py-5">{children}</section>
      <TableOfContents toc={toc} />
    </>
  );
}
