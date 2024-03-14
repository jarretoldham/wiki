import React from "react";
import { Divider } from "@nextui-org/divider";
import { TableOfContents } from "@/components/table-of-contents";

export function Document({ headings, children }: any) {
  const toc = headings ?? [];

  /**
   * Typically you would just render children here, but we are adding
   * this extra branch to render a table of contents, because the markdoc object
   * isn't available in the app router
   * https://github.com/markdoc/next.js/pull/30#issuecomment-1650148171
   *
   * the headings are parsed out using the markdoc renderable tree in
   * @markdoc/document.markdoc.ts
   */
  return (
    <section className="w-full flex flex-row space-x-5">
      <article className="w-full md:w-9/12">{children}</article>
      <div className="hidden md:flex ml-5 w-3/12">
        <Divider orientation="vertical" className="h-100 mr-5" />
        <TableOfContents toc={toc} />
      </div>
    </section>
  );
}
