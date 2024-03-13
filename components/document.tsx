import React from "react";

import { TableOfContents } from "@/components/table-of-contents";
import { Divider } from "@nextui-org/divider";

export function Document({ headings, children }: any) {
  //   console.log(children);
  // console.log(markdoc);
  const toc = headings ?? [];

  // console.log(headings);
  /**
   * Typically you would just render children here, but we are adding
   * this extra branch in order to pop up the editor that reveals
   * the source content for each document
   */
  return (
    <section className="w-90 flex flex-row justify-center space-x-5">
      <article className="w-9/12">{children}</article>
      <TableOfContents toc={toc} className="w-3/12" />
    </section>
  );
}
