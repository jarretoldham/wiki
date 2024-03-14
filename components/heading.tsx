"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Divider } from "@nextui-org/divider";

export function Heading({ id = "", level = 1, children, className }: any) {
  const path = usePathname();
  const isDocs = path?.startsWith("/docs");
  const Component: any = `h${level}`;

  const border = level == 1 && <Divider className="my-2" />;

  const link = (
    <>
      <Component className={["heading", className].filter(Boolean).join(" ")}>
        <div id={id} />
        {children}
      </Component>
      {border}
    </>
  );

  return isDocs && level !== 1 ? <a href={`#${id}`}>{link}</a> : link;
}
