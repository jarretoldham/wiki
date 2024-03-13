import React from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export type TableOfContentsItem = {
  level: number;
  title: string;
};

export function TableOfContents({ toc }: any) {
  const items = toc.filter(
    (item: any) => item.id && (item.level === 2 || item.level === 3),
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <>
      <Divider orientation="vertical" className="h-100" />
      <nav className="w-100 border-l-default-100">
        <h6>Contents</h6>
        <Divider className="w-full" />
        <ul className="flex-col">
          {items.map((item: any) => {
            const href = `#${item.id}`;
            const active =
              typeof window !== "undefined" && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={[
                  active ? "active" : undefined,
                  item.level === 3 ? "pl-5" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Link href={href}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
