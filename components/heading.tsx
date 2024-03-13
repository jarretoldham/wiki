"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function Heading({ id = "", level = 1, children, className }: any) {
  const path = usePathname();
  const isDocs = path?.startsWith("/docs");
  const Component: any = `h${level}`;

  const link = (
    <Component className={["heading", className].filter(Boolean).join(" ")}>
      <div id={id} />
      {children}
    </Component>
  );

  return isDocs && level !== 1 ? <a href={`#${id}`}>{link}</a> : link;
}
