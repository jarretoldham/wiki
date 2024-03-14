import React from "react";
import { Link } from "@nextui-org/link";

type AppLinkProps = {
  href: string;
  children: string;
  target?: string;
  size?: "sm" | "md" | "lg";
};

export function AppLink(props: AppLinkProps) {
  const size = props.size ?? "md";
  const targetBlank = props.target == "_blank" || props.href.startsWith("http");

  return (
    <Link
      href={props.href}
      underline="hover"
      target={props.target}
      isExternal={targetBlank}
      size={size}
      showAnchorIcon={targetBlank}
    >
      {props.children}
    </Link>
  );
}
