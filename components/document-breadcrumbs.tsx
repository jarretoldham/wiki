"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

export default function DocumentBreadcrumbs() {
  const paths = usePathname();
  const pathNames = paths?.split("/").filter((path) => path.trim());

  if (pathNames.length == 1) return;

  return (
    <Breadcrumbs variant="light" underline="hover">
      {pathNames.map((path, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const displayName = path.replaceAll("-", " ");
        return (
          <BreadcrumbItem key={path} href={href} className="ml-0">
            {displayName}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
