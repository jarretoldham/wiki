import React from "react";

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
    <section className="w-90 flex flex-row justify-center space-x-5">
      <article className="w-9/12">{children}</article>
      <TableOfContents toc={toc} className="w-3/12" />
    </section>
  );
}
