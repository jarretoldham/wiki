import React from "react";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export type TableOfContentsItem = {
  level: number;
  title: string;
};

export function TableOfContents({ toc, className }: any) {
  const items = toc.filter(
    (item: any) => item.id && (item.level === 2 || item.level === 3),
  );

  if (items.length <= 1) {
    return null;
  }

  return (
    <div className={className}>
      <Divider orientation="vertical" className="h-100 mr-5" />
      <nav className="w-100 border-l-default-100">
        <ul className="flex-col list-none ml-0 fixed">
          {items.map((item: any) => {
            const href = `#${item.id}`;
            const active =
              typeof window !== "undefined" && window.location.hash === href;
            return (
              <li
                key={item.title}
                className={[
                  active ? "active" : undefined,
                  item.level === 3 ? "pl-5 text-base" : undefined,
                  item.level === 2 ? "mt-1" : "",
                  "font-light",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Link
                  href={href}
                  className="hover:border-b-1 border-foreground"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
