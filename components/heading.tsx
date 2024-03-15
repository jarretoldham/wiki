"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function Heading({ id = "", level = 1, children, className }: any) {
  const path = usePathname();
  const isDocs = path?.startsWith("/docs");
  const Component: any = `h${level}`;

  const link = (
    <>
      <Component className={["heading", className].filter(Boolean).join(" ")}>
        <div
          id={id}
          className="hover:after:content-['#'] after:text-primary after:ml-1 after:opacity-50"
        >
          {children}
        </div>
      </Component>
    </>
  );

  return isDocs && level !== 1 ? <a href={`#${id}`}>{link}</a> : link;
}
